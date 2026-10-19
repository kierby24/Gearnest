import {
  Home,
  ClipboardList,
  MessageCircle,
  ShoppingCart,
  Heart,
  User
} from "lucide-react";

function Sidebar({
  onCartClick,
  cartCount,
  activePage,
  onHomeClick,
  onPageChange,
  onLoginClick,
  onCreateAccountClick,
  isLoggedIn,
  user
}) {

  return (

    <aside className="sidebar">

      {/* =========================
          BRAND
      ========================= */}

      <div className="brand">

        <div className="brand-logo">
          G
        </div>

        <h1>
          GEARNEST
        </h1>

        <p>
          Your trusted nest for essential
          mobile accessories all in one place.
        </p>

      </div>


      {/* =========================
          ACCOUNT SHORTCUTS
      ========================= */}

      {!isLoggedIn && (
        <div className="sidebar-account">

          <button
            className="create-account"
            onClick={onCreateAccountClick}
          >
            Create Account
          </button>

          <button
            className="login-button"
            onClick={onLoginClick}
          >
            Login
          </button>

        </div>
      )}


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="sidebar-navigation">

        {/* HOME */}
        <button
          className={`nav-item ${
            activePage === "home" ? "active" : ""
          }`}
          onClick={onHomeClick}
        >
          <span className="nav-icon">
            <Home size={19} strokeWidth={2} />
          </span>

          <span>
            Home
          </span>
        </button>


        {/* MESSAGES */}
        <button
          className={`nav-item ${
            activePage === "messages" ? "active" : ""
          }`}
          onClick={() =>
            onPageChange("messages")
          }
        >
          <span className="nav-icon">
            <MessageCircle size={19} strokeWidth={2} />
          </span>

          <span>
            Messages
          </span>
        </button>


        {/* CART */}
        <button
          className={`nav-item ${
            activePage === "cart" ? "active" : ""
          }`}
          onClick={onCartClick}
        >
          <span className="nav-icon">
            <ShoppingCart size={19} strokeWidth={2} />
          </span>

          <span>
            Cart
          </span>

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}

        </button>


        {/* WISHLIST */}
        <button
          className={`nav-item ${
            activePage === "wishlist" ? "active" : ""
          }`}
          onClick={() =>
            onPageChange("wishlist")
          }
        >
          <span className="nav-icon">
            <Heart size={19} strokeWidth={2} />
          </span>

          <span>
            Wishlist
          </span>

        </button>


        {/* PROFILE */}
        <button
          className={`nav-item ${
            activePage === "profile" ? "active" : ""
          }`}
          onClick={() =>
            onPageChange("profile")
          }
        >
          <span className="nav-icon">
            <User size={19} strokeWidth={2} />
          </span>

          <span>
            Profile
          </span>

        </button>

      </nav>


      {/* =========================
          FOOTER
      ========================= */}

      <div className="sidebar-footer">

        <p>
          GEARNEST
        </p>

        <span>
          Mobile Accessories
        </span>

      </div>

    </aside>

  );
}

export default Sidebar;