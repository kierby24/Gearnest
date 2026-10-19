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

$email = trim($data["email"] ?? "");
$password = $data["password"] ?? "";


/* =========================
   CHECK EMPTY
========================= */

if ($email === "" || $password === "") {

    echo json_encode([
        "success" => false,
        "message" => "Please enter your email and password."
    ]);

    exit;
}


/* =========================
   CHECK EMAIL FORMAT
========================= */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}


/* =========================
   FIND ACCOUNT
========================= */

$stmt = $pdo->prepare(
    "SELECT id, name, email, password
     FROM users
     WHERE email = ?
     LIMIT 1"
);

$stmt->execute([$email]);

$user = $stmt->fetch(PDO::FETCH_ASSOC);


/* =========================
   ACCOUNT DOES NOT EXIST
========================= */

if (!$user) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Account not found. Please create a GEARNEST account first."
    ]);

    exit;
}


/* =========================
   CHECK PASSWORD
========================= */

if (!password_verify(
    $password,
    $user["password"]
)) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Incorrect password. Please try again."
    ]);

    exit;
}


/* =========================
   REMOVE PASSWORD
========================= */

unset($user["password"]);


/* =========================
   LOGIN SUCCESS
========================= */

echo json_encode([
    "success" => true,
    "message" =>
        "Login successful. Welcome back to GEARNEST!",
    "user" => $user
]);

exit;

?>