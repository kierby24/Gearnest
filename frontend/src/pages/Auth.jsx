import { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  X,
  ShoppingBag,
  Heart,
  ShieldCheck,
} from "lucide-react";

function Auth({
  mode = "login",
  onClose,
  onSuccess,
}) {
  const [authMode, setAuthMode] = useState(mode);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  /* =========================
     INPUT CHANGE
  ========================= */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setMessage("");
  };

  /* =========================
     SWITCH LOGIN / REGISTER
  ========================= */

  const switchMode = (newMode) => {
    setAuthMode(newMode);

    setMessage("");
    setMessageType("");
    setShowPassword(false);

    setFormData({
      name: "",
      email: formData.email,
      password: "",
    });
  };

  /* =========================
     SUBMIT
  ========================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    const endpoint =
      authMode === "login"
        ? "login.php"
        : "register.php";

    try {
      const response = await fetch(
        `http://localhost/gearnest/backend/api/${endpoint}`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Server returned ${response.status}`
        );
      }

      const result = await response.json();

      console.log(
        "SERVER RESPONSE:",
        result
      );

      /* =========================
         FAILED
      ========================= */

      if (!result.success) {
        setMessage(
          result.message ||
            "Something went wrong."
        );

        setMessageType("error");
        setLoading(false);

        return;
      }

      /* =========================
         REGISTER SUCCESS
      ========================= */

      if (authMode === "register") {
        setMessage(
          "Account created successfully. Please log in."
        );

        setMessageType("success");

        setAuthMode("login");

        setFormData({
          name: "",
          email: formData.email,
          password: "",
        });

        setShowPassword(false);
        setLoading(false);

        return;
      }

      /* =========================
         LOGIN SUCCESS
      ========================= */

      if (authMode === "login") {
        if (!result.user) {
          setMessage(
            "Login failed. No valid account was returned."
          );

          setMessageType("error");
          setLoading(false);

          return;
        }

        setMessage(
          "Login successful. Welcome back to GEARNEST!"
        );

        setMessageType("success");

        if (onSuccess) {
          onSuccess(result.user);
        }

        setLoading(false);
      }

    } catch (error) {
      console.error(
        "AUTH ERROR:",
        error
      );

      setMessage(
        "Unable to connect to the server. Please make sure Apache and MySQL are running in XAMPP."
      );

      setMessageType("error");

      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay">

      <div className="auth-page">

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="auth-visual">

          {/* PHOTO */}

          <div className="auth-photo"></div>

          {/* DARK / PURPLE OVERLAY */}

          <div className="auth-photo-overlay"></div>


          {/* BRAND */}

          <div className="auth-brand">

            <div className="auth-logo">
              G
            </div>

            <div>
              <h1>
                GEARNEST
              </h1>

              <span>
                MOBILE ACCESSORIES
              </span>
            </div>

          </div>


          {/* PHOTO CONTENT */}

          <div className="auth-visual-content">

            <div className="auth-small-label">
              YOUR TRUSTED NEST
            </div>

            <h2>
              Gear Up
              <br />

              <span>
                Your Everyday.
              </span>
            </h2>

            <p>
              Discover quality mobile accessories
              designed for your everyday needs.
            </p>


            {/* MINI FEATURES */}

            <div className="auth-mini-features">

              <div>
                <ShoppingBag size={16} />

                <span>
                  Quality Gear
                </span>
              </div>

              <div>
                <Heart size={16} />

                <span>
                  Save Favorites
                </span>
              </div>

              <div>
                <ShieldCheck size={16} />

                <span>
                  Secure Shopping
                </span>
              </div>

            </div>

          </div>


          {/* PHOTO CREDIT */}

          <div className="auth-photo-label">
            FIND YOUR PERFECT GEAR
          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="auth-form-container">

          {/* CLOSE */}

          {onClose && (
            <button
              className="auth-close"
              type="button"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={19} />
            </button>
          )}


          {/* HEADER */}

          <div className="auth-header">

            <div className="auth-mobile-logo">
              G
            </div>

            <p>
              Welcome to
            </p>

            <h1>
              GEARNEST
            </h1>

            <span>
              {authMode === "login"
                ? "Log in to continue shopping."
                : "Create your GEARNEST account."}
            </span>

          </div>


          {/* =================================================
              TABS
          ================================================= */}

          <div className="auth-switch-tabs">

            <button
              type="button"
              className={
                authMode === "login"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                switchMode("login")
              }
            >
              Login
            </button>

            <button
              type="button"
              className={
                authMode === "register"
                  ? "selected"
                  : ""
              }
              onClick={() =>
                switchMode("register")
              }
            >
              Create Account
            </button>

          </div>


          {/* =================================================
              MESSAGE
          ================================================= */}

          {message && (
            <div
              className={`auth-message ${
                messageType === "success"
                  ? "success"
                  : "error"
              }`}
            >
              {message}
            </div>
          )}


          {/* =================================================
              FORM
          ================================================= */}

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            {authMode === "register" && (
              <div className="auth-input-group">

                <label>
                  Full Name
                </label>

                <div className="auth-input-wrapper">

                  <User size={17} />

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>
            )}


            {/* EMAIL */}

            <div className="auth-input-group">

              <label>
                Email Address
              </label>

              <div className="auth-input-wrapper">

                <Mail size={17} />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="auth-input-group">

              <label>
                Password
              </label>

              <div className="auth-input-wrapper">

                <Lock size={17} />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>

              </div>

            </div>


            {/* FORGOT PASSWORD */}

            {authMode === "login" && (
              <button
                type="button"
                className="forgot-password"
              >
                Forgot Password?
              </button>
            )}


            {/* SUBMIT */}

            <button
              type="submit"
              className="auth-login-button"
              disabled={loading}
            >

              <span>
                {loading
                  ? "Please wait..."
                  : authMode === "login"
                    ? "Log In"
                    : "Create Account"}
              </span>

              {!loading && (
                <ArrowRight size={17} />
              )}

            </button>


            {/* BOTTOM */}

            <p className="auth-bottom">

              {authMode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() =>
                  switchMode(
                    authMode === "login"
                      ? "register"
                      : "login"
                  )
                }
              >
                {authMode === "login"
                  ? " Create account"
                  : " Log in"}
              </button>

            </p>

          </form>


          {/* BOTTOM BRAND */}

          <div className="auth-form-footer">

            <span>
              GEARNEST
            </span>

            <small>
              Your trusted nest for essential
              mobile accessories.
            </small>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Auth;