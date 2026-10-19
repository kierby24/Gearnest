import { useState } from "react";

import {
  Search,
  ShoppingBag,
  Heart,
  MessageCircle,
  Package,
  Headphones,
  BatteryCharging,
  Cable,
  Smartphone,
  Zap,
} from "lucide-react";

import ProductGrid from "../components/ProductGrid";
import ProductDetails from "./ProductDetails";

function Home({
  cartItems,
  setCartItems,
  onCartClick,
  isLoggedIn,
  onRequireAuth,
  wishlistItems,
  onWishlistToggle,
  onAddToCart,
  onProductClick,
  onBuyNow,
}) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  /* =========================
     PRODUCT CLICK
  ========================= */

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  /* =========================
     BACK TO HOME
  ========================= */

  const handleBack = () => {
    setSelectedProduct(null);
  };

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = (product, quantity) => {
    if (!isLoggedIn) {
      onRequireAuth();
      return;
    }

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity,
        },
      ];
    });

    setSelectedProduct(null);

    onCartClick();
  };

  /* =========================
     QUICK ACCESS
  ========================= */

  const handleWishlistClick = () => {
    if (!isLoggedIn) {
      onRequireAuth();
      return;
    }

    // Wishlist is handled by the sidebar/page navigation.
    // If you already have wishlist navigation there,
    // this keeps the Home button safe.
  };

  const handleMessagesClick = () => {
    if (!isLoggedIn) {
      onRequireAuth();
      return;
    }
  };

  /* =========================
     PRODUCT DETAILS
  ========================= */

  if (selectedProduct) {
    const isWishlisted =
      wishlistItems?.some(
        (item) => item.id === selectedProduct.id
      ) || false;

    return (
      <ProductDetails
        product={selectedProduct}
        onBack={handleBack}
        onAddToCart={onAddToCart}
        isWishlisted={isWishlisted}
        onWishlistToggle={onWishlistToggle}
        onBuyNow={onBuyNow}
      />
    );
  }

  /* =========================
     CATEGORIES
  ========================= */

  const categories = [
    {
      name: "All",
      icon: <Package size={16} />,
    },
    {
      name: "Earbuds",
      icon: <Headphones size={16} />,
    },
    {
      name: "Headphones",
      icon: <Headphones size={16} />,
    },
    {
      name: "Chargers",
      icon: <Zap size={16} />,
    },
    {
      name: "Cables",
      icon: <Cable size={16} />,
    },
    {
      name: "Power Banks",
      icon: <BatteryCharging size={16} />,
    },
    {
      name: "Phone Accessories",
      icon: <Smartphone size={16} />,
    },
  ];

  /* =========================
     HOME PAGE
  ========================= */

  return (
    <div className="shop-home">

      {/* =========================
          WELCOME HEADER
      ========================= */}

      <div className="shop-home-header">

        <div>
          <p className="shop-home-label">
            GEARNEST STORE
          </p>

          <h1>
            {isLoggedIn
              ? "Welcome back!"
              : "Discover your next gear"}
          </h1>

          <p>
            Quality mobile accessories for
            your everyday needs.
          </p>
        </div>

        {/* HEADER QUICK ACTIONS */}

        <div className="shop-home-actions">

          <button
            className="shop-action-card"
            onClick={onCartClick}
          >
            <ShoppingBag size={18} />

            <span>Cart</span>

            <strong>
              {cartItems?.length || 0}
            </strong>
          </button>

          <button
            className="shop-action-card"
            onClick={handleWishlistClick}
          >
            <Heart size={18} />

            <span>Wishlist</span>

            <strong>
              {wishlistItems?.length || 0}
            </strong>
          </button>

        </div>
      </div>

      {/* =========================
          SEARCH
      ========================= */}

      <div className="shop-search">

        <Search size={19} />

        <input
          type="text"
          placeholder="Search mobile accessories..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
        />

      </div>

      {/* =========================
          QUICK ACCESS
      ========================= */}

      <section className="shop-quick-section">

        <div className="shop-section-heading">

          <div>
            <h2>Quick Access</h2>

            <p>
              Manage your shopping experience
            </p>
          </div>

        </div>

        <div className="shop-quick-grid">

          <button
            className="shop-quick-card"
            onClick={onCartClick}
          >
            <div className="shop-quick-icon">
              <ShoppingBag size={20} />
            </div>

            <div>
              <h3>Your Cart</h3>

              <p>
                {cartItems?.length || 0} item
                {cartItems?.length !== 1
                  ? "s"
                  : ""}{" "}
                ready
              </p>
            </div>
          </button>

          <button
            className="shop-quick-card"
            onClick={handleWishlistClick}
          >
            <div className="shop-quick-icon">
              <Heart size={20} />
            </div>

            <div>
              <h3>Wishlist</h3>

              <p>
                {wishlistItems?.length || 0} saved
                product
                {wishlistItems?.length !== 1
                  ? "s"
                  : ""}
              </p>
            </div>
          </button>

          <button
            className="shop-quick-card"
            onClick={handleMessagesClick}
          >
            <div className="shop-quick-icon">
              <MessageCircle size={20} />
            </div>

            <div>
              <h3>Messages</h3>

              <p>
                Chat with GEARNEST
              </p>
            </div>
          </button>

        </div>
      </section>

      {/* =========================
          CATEGORY SECTION
      ========================= */}

      <section className="shop-category-section">

        <div className="shop-section-heading">

          <div>
            <h2>Shop by Category</h2>

            <p>
              Find the right accessories for you
            </p>
          </div>

        </div>

        <div className="shop-category-list">

          {categories.map((category) => (
            <button
              key={category.name}
              className={`shop-category-button ${
                selectedCategory === category.name
                  ? "active"
                  : ""
              }`}
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

      {/* =========================
          PRODUCTS
      ========================= */}

      <section className="shop-products-section">

        <div className="shop-products-header">

          <div>
            <h2>
              {selectedCategory === "All"
                ? "Featured Products"
                : selectedCategory}
            </h2>

            <span>
              Explore our popular accessories
            </span>
          </div>

          <span>
            {selectedCategory === "All"
              ? "All products"
              : `Showing ${selectedCategory}`}
          </span>

        </div>

        <ProductGrid
          cartItems={cartItems}
          setCartItems={setCartItems}
          isLoggedIn={isLoggedIn}
          onRequireAuth={onRequireAuth}
          wishlistItems={wishlistItems}
          onWishlistToggle={onWishlistToggle}
          onProductClick={handleProductClick}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
        />

      </section>

      {/* =========================
          SHOPPING BENEFITS
      ========================= */}

      <section className="shop-benefits">

        <div className="shop-benefit">

          <Zap size={20} />

          <h3>
            Quality Accessories
          </h3>

          <p>
            Carefully selected mobile accessories
            for your everyday setup.
          </p>

        </div>

        <div className="shop-benefit">

          <ShoppingBag size={20} />

          <h3>
            Easy Shopping
          </h3>

          <p>
            Browse products, add them to your
            cart, and place your order with ease.
          </p>

        </div>

        <div className="shop-benefit">

          <Heart size={20} />

          <h3>
            Save Your Favorites
          </h3>

          <p>
            Keep your favorite accessories in
            your wishlist for later.
          </p>

        </div>

      </section>

    </div>
  );
}

export default Home;