import {
    ArrowRight,
    ShoppingBag,
    ShieldCheck,
    Truck,
    Heart,
  } from "lucide-react";
  
  function Landing({ onGetStarted }) {
    const handleGetStarted = () => {
      onGetStarted();
    };
  
    return (
      <div className="landing-page">
  
        {/* =========================
            BACKGROUND DECORATION
        ========================= */}
  
        <div className="landing-glow landing-glow-one"></div>
        <div className="landing-glow landing-glow-two"></div>
  
        {/* =========================
            NAVBAR
        ========================= */}
  
        <header className="landing-navbar">
  
          <div className="landing-brand">
  
            <div className="landing-logo">
              G
            </div>
  
            <div>
              <h2>GEARNEST</h2>
  
              <span>
                MOBILE ACCESSORIES
              </span>
            </div>
  
          </div>
  
          <button
            className="landing-login-button"
            onClick={handleGetStarted}
          >
            Explore Shop
          </button>
  
        </header>
  
        {/* =========================
            HERO
        ========================= */}
  
        <main className="landing-hero">
  
          <div className="landing-content">
  
            <p className="landing-label">
              YOUR TRUSTED ACCESSORY NEST
            </p>
  
            <h1>
              Find Your
              <br />
              <span>Perfect Gear</span>
            </h1>
  
            <p className="landing-description">
              Discover quality mobile accessories
              designed for your everyday needs.
              Explore our collection and find the
              right gear for your devices.
            </p>
  
            {/* =========================
                BUTTONS
            ========================= */}
  
            <div className="landing-actions">
  
              <button
                className="landing-primary-button"
                onClick={handleGetStarted}
              >
                Get Started
  
                <ArrowRight size={19} />
              </button>
  
              <button
                className="landing-secondary-button"
                onClick={handleGetStarted}
              >
                <ShoppingBag size={19} />
  
                Shop Now
              </button>
  
            </div>
  
            {/* =========================
                TRUST TEXT
            ========================= */}
  
            <p className="landing-note">
              Explore our collection • Add to cart •
              Build your perfect setup
            </p>
  
          </div>
  
          {/* =========================
              RIGHT VISUAL
          ========================= */}
  
          <div className="landing-visual">
  
            <div className="landing-circle"></div>
  
            <div className="landing-card landing-card-main">
  
              <div className="landing-card-icon">
                <ShoppingBag size={34} />
              </div>
  
              <h3>
                Everything You Need
              </h3>
  
              <p>
                Mobile accessories for
                everyday life.
              </p>
  
            </div>
  
            <div className="landing-floating-card landing-floating-one">
  
              <ShieldCheck size={22} />
  
              <div>
                <strong>
                  Quality
                </strong>
  
                <span>
                  Reliable products
                </span>
              </div>
  
            </div>
  
            <div className="landing-floating-card landing-floating-two">
  
              <Truck size={22} />
  
              <div>
                <strong>
                  Easy Shopping
                </strong>
  
                <span>
                  Simple & convenient
                </span>
              </div>
  
            </div>
  
            <div className="landing-floating-card landing-floating-three">
  
              <Heart size={21} />
  
              <div>
                <strong>
                  Wishlist
                </strong>
  
                <span>
                  Save your favorites
                </span>
              </div>
  
            </div>
  
          </div>
  
        </main>
  
        {/* =========================
            FEATURES
        ========================= */}
  
        <section className="landing-features">
  
          <div className="landing-feature">
  
            <div className="landing-feature-icon">
              <ShoppingBag size={21} />
            </div>
  
            <div>
              <h3>
                Explore Products
              </h3>
  
              <p>
                Browse mobile accessories
                made for your everyday needs.
              </p>
            </div>
  
          </div>
  
          <div className="landing-feature">
  
            <div className="landing-feature-icon">
              <Heart size={21} />
            </div>
  
            <div>
              <h3>
                Save Favorites
              </h3>
  
              <p>
                Keep products you love
                in your personal wishlist.
              </p>
            </div>
  
          </div>
  
          <div className="landing-feature">
  
            <div className="landing-feature-icon">
              <ShieldCheck size={21} />
            </div>
  
            <div>
              <h3>
                Simple & Secure
              </h3>
  
              <p>
                Enjoy a clean and convenient
                shopping experience.
              </p>
            </div>
  
          </div>
  
        </section>
  
        {/* =========================
            FOOTER
        ========================= */}
  
        <footer className="landing-footer">
  
          <div>
            <strong>
              GEARNEST
            </strong>
  
            <span>
              Your trusted nest for essential
              mobile accessories all in one place.
            </span>
          </div>
  
          <p>
            © 2026 GEARNEST. All rights reserved.
          </p>
  
        </footer>
  
      </div>
    );
  }
  
  export default Landing;