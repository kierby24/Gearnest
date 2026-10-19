import { useState } from "react";

function AuthModal({ onClose, onLogin }) {

  const [mode, setMode] = useState("login");

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    if (mode === "login") {

      if (
        !formData.email ||
        !formData.password
      ) {

        alert("Please enter your email and password.");

        return;
      }

      /*
        TEMPORARY LOGIN

        PHP/database will be connected later.
      */

      onLogin({
        name: "User Name",
        email: formData.email,
      });

    } else {

      if (
        !formData.name ||
        !formData.email ||
        !formData.password
      ) {

        alert("Please complete all fields.");

        return;
      }

      /*
        TEMPORARY ACCOUNT CREATION

        PHP/database will be connected later.
      */

      onLogin({
        name: formData.name,
        email: formData.email,
      });

    }

  };


  return (

    <div
      className="auth-overlay"
      onClick={onClose}
    >

      <div
        className="auth-modal"
        onClick={(e) =>
          e.stopPropagation()
        }
      >


        {/* CLOSE */}

        <button
          className="auth-close"
          onClick={onClose}
        >
          ×
        </button>


        {/* IMAGE */}

        <div className="auth-image">

          <div className="auth-product">
            🎧
          </div>

        </div>


        {/* CONTENT */}

        <div className="auth-content">

          <p className="auth-welcome">
            Welcome to
          </p>

          <h1>
            GEARNEST
          </h1>

          <p className="auth-description">
            Sign in to continue shopping
            and enjoy your GearNest experience.
          </p>


          {/* TABS */}

          <div className="auth-tabs">

            <button
              className={
                mode === "login"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() =>
                setMode("login")
              }
            >
              Login
            </button>


            <button
              className={
                mode === "register"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() =>
                setMode("register")
              }
            >
              Create Account
            </button>

          </div>


          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >


            {/* NAME */}

            {mode === "register" && (

              <div className="auth-field">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />

              </div>

            )}


            {/* EMAIL */}

            <div className="auth-field">

              <label>
                Email / Username
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />

            </div>


            {/* PASSWORD */}

            <div className="auth-field">

              <label>
                Password
              </label>

              <div className="password-wrapper">

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
                  {showPassword
                    ? "◉"
                    : "◌"}
                </button>

              </div>

            </div>


            {/* FORGOT PASSWORD */}

            {mode === "login" && (

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
              className="auth-submit"
            >
              {mode === "login"
                ? "Log In"
                : "Create Account"}
            </button>


            {/* DIVIDER */}

            <div className="auth-divider">

              <span></span>

              <p>
                or continue with
              </p>

              <span></span>

            </div>


            {/* SOCIAL */}

            <div className="social-login">

              <button
                type="button"
                className="social-button"
              >
                🌐 Google
              </button>

              <button
                type="button"
                className="social-button"
              >
                f Facebook
              </button>

            </div>


            {/* SWITCH */}

            <p className="auth-switch">

              {mode === "login"
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                type="button"
                onClick={() =>
                  setMode(
                    mode === "login"
                      ? "register"
                      : "login"
                  )
                }
              >
                {mode === "login"
                  ? "Create account"
                  : "Log in"}
              </button>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AuthModal;