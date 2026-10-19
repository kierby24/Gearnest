import Sidebar from "../components/Sidebar";


function MainLayout({
  children,
  activePage,
  onHomeClick,
  onCartClick,
  onPageChange,
  cartCount,

  // AUTH
  isLoggedIn,
  user,
  onLoginClick,
  onCreateAccountClick,
}) {

  return (

    <div className="app-container">


      {/* =========================
          SIDEBAR
      ========================== */}

      <Sidebar
        activePage={activePage}
        onHomeClick={onHomeClick}
        onCartClick={onCartClick}
        onPageChange={onPageChange}
        cartCount={cartCount}

        // AUTH
        isLoggedIn={isLoggedIn}
        user={user}
        onLoginClick={onLoginClick}
        onCreateAccountClick={
          onCreateAccountClick
        }
      />


      {/* =========================
          MAIN PAGE
      ========================== */}

      <main className="main-content">

        {children}

      </main>


      {/* =========================
          RIGHT PANEL
      ========================== */}

      <aside className="right-panel">

        <div className="user-card">

          <div className="user-avatar">
            {user?.name
              ? user.name
                  .charAt(0)
                  .toUpperCase()
              : "U"}
          </div>


          <div className="user-information">

            <p>
              Welcome back,
            </p>

            <h3>
              {user?.name || "Guest User"}
            </h3>

            <span>
              {user?.email || "Please log in"}
            </span>

          </div>

        </div>


        <div className="orders-card">

          <div className="orders-title">

            <h3>
              Your Orders
            </h3>

            <button>
              View All
            </button>

          </div>


          <div className="order-status">

            <div className="status-icon">
              01
            </div>

            <div>

              <strong>
                Processing
              </strong>

              <p>
                Your order is being prepared
              </p>

            </div>

          </div>


          <div className="order-status">

            <div className="status-icon">
              02
            </div>

            <div>

              <strong>
                Shipping
              </strong>

              <p>
                Your order is on the way
              </p>

            </div>

          </div>


          <div className="order-status">

            <div className="status-icon">
              03
            </div>

            <div>

              <strong>
                Delivered
              </strong>

              <p>
                Your order has arrived
              </p>

            </div>

          </div>

        </div>


        <div className="special-offer">

          <div className="offer-content">

            <span>
              SPECIAL OFFER
            </span>

            <h2>
              Up to
              <strong> 20% OFF</strong>
            </h2>

            <p>
              Selected mobile accessories
            </p>

            <button>
              Shop Now
            </button>

          </div>


          <div className="offer-image">
            🎧
          </div>

        </div>


        <div className="quick-links">

          <h3>
            Quick Access
          </h3>


          <button
            onClick={() =>
              onPageChange("wishlist")
            }
          >
            ♡ Wishlist
          </button>


          <button
            onClick={onCartClick}
          >
            🛒 Shopping Cart
          </button>


          <button
            onClick={() =>
              onPageChange("messages")
            }
          >
            💬 Messages
          </button>

        </div>

      </aside>


      {/* =========================
          MOBILE NAV
      ========================== */}

      <nav className="mobile-bottom-nav">

        <button
          className={
            activePage === "home"
              ? "mobile-nav-active"
              : ""
          }
          onClick={onHomeClick}
        >
          ⌂
        </button>


        <button
          className={
            activePage === "products"
              ? "mobile-nav-active"
              : ""
          }
          onClick={() =>
            onPageChange("products")
          }
        >
          ▣
        </button>


        <button
          className={
            activePage === "cart"
              ? "mobile-nav-active"
              : ""
          }
          onClick={onCartClick}
        >
          🛒
        </button>


        <button
          className={
            activePage === "wishlist"
              ? "mobile-nav-active"
              : ""
          }
          onClick={() =>
            onPageChange("wishlist")
          }
        >
          ♡
        </button>


        <button
          className={
            activePage === "profile"
              ? "mobile-nav-active"
              : ""
          }
          onClick={() =>
            onPageChange("profile")
          }
        >
          ●
        </button>

      </nav>

    </div>

  );
}


export default MainLayout;