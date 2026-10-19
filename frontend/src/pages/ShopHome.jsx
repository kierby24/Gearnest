import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Package,
  ArrowRight,
  Zap,
  Headphones,
  BatteryCharging,
  Cable,
  Smartphone,
} from "lucide-react";

import ProductGrid from "../components/ProductGrid";

function ShopHome({
  user,
  cartItems,
  wishlistItems,
  onProductClick,
  onAddToCart,
  onWishlistToggle,
  onCartClick,
  onPageChange,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const userName =
    user?.name ||
    user?.full_name ||
    user?.username ||
    "Shopper";

  const categories = [
    {
      name: "All",
      icon: <ShoppingBag size={18} />,
    },
    {
      name: "Earbuds",
      icon: <Headphones size={18} />,
    },
    {
      name: "Headphones",
      icon: <Headphones size={18} />,
    },
    {
      name: "Chargers",
      icon: <BatteryCharging size={18} />,
    },
    {
      name: "Cables",
      icon: <Cable size={18} />,
    },
    {
      name: "Power Banks",
      icon: <BatteryCharging size={18} />,
    },
    {
      name: "Phone Accessories",
      icon: <Smartphone size={18} />,
    },
  ];

  const cartCount = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems?.length || 0;

  return (
    <div className="shop-home">

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="shop-home-header">

        <div>
          <p className="shop-home-label">
            GEARNEST SHOP
          </p>

          <h1>
            Welcome back,{" "}
            <span>{userName}</span> 👋
          </h1>

          <p className="shop-home-description">
            Everything you need for your mobile lifestyle,
            all in one place.
          </p>
        </div>

        <div className="shop-home-actions">

          <button
            className="shop-action-card"
            onClick={() => onPageChange("wishlist")}
          >
            <Heart size={20} />

            <div>
              <strong>{wishlistCount}</strong>
              <span>Wishlist</span>
            </div>
          </button>

          <button
            className="shop-action-card"
            onClick={onCartClick}
          >
            <ShoppingBag size={20} />

            <div>
              <strong>{cartCount}</strong>
              <span>Cart</span>
            </div>
          </button>

        </div>

      </div>


      {/* =====================================================
          SEARCH
      ===================================================== */}

      <div className="shop-search">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search for products, accessories..."
        />

        <button>
          Search
        </button>

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="shop-hero">

        <div className="shop-hero-content">

          <div className="shop-hero-badge">
            <Zap size={15} />
            MEMBER SHOPPING
          </div>

          <h2>
            Gear Up Your
            <br />
            <span>Everyday.</span>
          </h2>

          <p>
            Discover reliable mobile accessories
            made for your everyday needs.
          </p>

          <button
            className="shop-hero-button"
            onClick={() => {
              document
                .getElementById("shop-products")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Start Shopping
            <ArrowRight size={18} />
          </button>

        </div>

        <div className="shop-hero-decoration">

          <div className="hero-circle hero-circle-one"></div>

          <div className="hero-circle hero-circle-two"></div>

          <div className="hero-floating-card">
            <ShoppingBag size={28} />

            <div>
              <strong>GEARNEST</strong>
              <span>Essential Gear</span>
            </div>
          </div>

        </div>

      </section>


      {/* =====================================================
          QUICK ACCESS
      ===================================================== */}

      <section className="shop-quick-section">

        <div className="shop-section-heading">

          <div>
            <p className="shop-section-label">
              QUICK ACCESS
            </p>

            <h2>
              Your Shopping
              <span> Shortcuts</span>
            </h2>
          </div>

        </div>


        <div className="shop-quick-grid">

          <button
            className="shop-quick-card"
            onClick={() => onPageChange("wishlist")}
          >

            <div className="shop-quick-icon">
              <Heart size={22} />
            </div>

            <div>
              <strong>
                My Wishlist
              </strong>

              <span>
                {wishlistCount} saved items
              </span>
            </div>

            <ArrowRight size={18} />

          </button>


          <button
            className="shop-quick-card"
            onClick={onCartClick}
          >

            <div className="shop-quick-icon">
              <ShoppingBag size={22} />
            </div>

            <div>
              <strong>
                Shopping Cart
              </strong>

              <span>
                {cartCount} items
              </span>
            </div>

            <ArrowRight size={18} />

          </button>


          <button
            className="shop-quick-card"
            onClick={() => onPageChange("messages")}
          >

            <div className="shop-quick-icon">
              <Package size={22} />
            </div>

            <div>
              <strong>
                Need Help?
              </strong>

              <span>
                Contact GEARNEST support
              </span>
            </div>

            <ArrowRight size={18} />

          </button>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="shop-category-section">

        <div className="shop-section-heading">

          <div>

            <p className="shop-section-label">
              EXPLORE
            </p>

            <h2>
              Shop by
              <span> Category</span>
            </h2>

          </div>

        </div>


        <div className="shop-category-list">

          {categories.map((category) => (

            <button
              key={category.name}
              className={
                selectedCategory === category.name
                  ? "shop-category-button active"
                  : "shop-category-button"
              }
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >

              {category.icon}

              <span>
                {category.name}
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

      <section
        id="shop-products"
        className="shop-products-section"
      >

        <div className="shop-section-heading">

          <div>

            <p className="shop-section-label">
              FOR YOU
            </p>

            <h2>
              Recommended
              <span> Products</span>
            </h2>

            <p>
              Explore accessories selected for
              your everyday mobile needs.
            </p>

          </div>

          <button
            className="shop-view-all"
            onClick={() => {
              setSelectedCategory("All");

              document
                .getElementById("shop-products")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View All
            <ArrowRight size={17} />
          </button>

        </div>


        <ProductGrid
          cartItems={cartItems}
          isLoggedIn={true}
          wishlistItems={wishlistItems}
          onWishlistToggle={onWishlistToggle}
          onProductClick={onProductClick}
          selectedCategory={selectedCategory}
        />

      </section>


      {/* =====================================================
          SHOPPING BENEFITS
      ===================================================== */}

      <section className="shop-benefits">

        <div className="shop-benefit">

          <div className="shop-benefit-icon">
            <ShoppingBag size={21} />
          </div>

          <div>
            <strong>
              Easy Shopping
            </strong>

            <span>
              Find your essential gear quickly.
            </span>
          </div>

        </div>


        <div className="shop-benefit">

          <div className="shop-benefit-icon">
            <Heart size={21} />
          </div>

          <div>
            <strong>
              Save Favorites
            </strong>

            <span>
              Keep products you love in your wishlist.
            </span>
          </div>

        </div>


        <div className="shop-benefit">

          <div className="shop-benefit-icon">
            <Package size={21} />
          </div>

          <div>
            <strong>
              Simple Ordering
            </strong>

            <span>
              Buy your products with ease.
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default ShopHome;