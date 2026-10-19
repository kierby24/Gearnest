<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

require_once "../config/database.php";

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$password = $data["password"] ?? "";


/* =========================
   CHECK EMPTY
========================= */

if (
    $name === "" ||
    $email === "" ||
    $password === ""
) {

    echo json_encode([
        "success" => false,
        "message" => "Please complete all fields."
    ]);

    exit;
}


/* =========================
   CHECK EMAIL
========================= */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Please enter a valid email address."
    ]);

    exit;
}


/* =========================
   CHECK PASSWORD
========================= */

if (strlen($password) < 6) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Password must contain at least 6 characters."
    ]);

    exit;
}


/* =========================
   CHECK EXISTING ACCOUNT
========================= */

$stmt = $pdo->prepare(
    "SELECT id
     FROM users
     WHERE email = ?
     LIMIT 1"
);

$stmt->execute([$email]);

if ($stmt->fetch()) {

    echo json_encode([
        "success" => false,
        "message" =>
            "An account with this email already exists. Please log in instead."
    ]);

    exit;
}


/* =========================
   HASH PASSWORD
========================= */

$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);


/* =========================
   CREATE ACCOUNT
========================= */

$stmt = $pdo->prepare(
    "INSERT INTO users
        (name, email, password)
     VALUES
        (?, ?, ?)"
);

$stmt->execute([
    $name,
    $email,
    $hashedPassword
]);


/* =========================
   SUCCESS
========================= */

echo json_encode([
    "success" => true,
    "message" =>
        "Your GEARNEST account has been created successfully."
]);

exit;

?>