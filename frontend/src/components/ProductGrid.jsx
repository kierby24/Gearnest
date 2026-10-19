import ProductCard from "./ProductCard";

const products = [
  // =========================================
  // EARBUDS
  // =========================================
  {
    id: 1,
    name: "Trigger (Pro) Bluetooth Earbuds",
    price: 1199,
    rating: 4.8,
    sold: "100.2K",
    badge: "NEW",
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 2,
    name: "Premium Wireless Earbuds",
    price: 1499,
    rating: 4.9,
    sold: "65.2K",
    badge: "NEW",
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 3,
    name: "AirBeat Pro TWS Earbuds",
    price: 999,
    rating: 4.7,
    sold: "54.3K",
    badge: "HOT",
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 4,
    name: "MiniPods Wireless Earbuds",
    price: 699,
    rating: 4.6,
    sold: "42.8K",
    badge: "SALE",
    category: "Earbuds",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80",
  },

  // =========================================
  // HEADPHONES
  // =========================================
  {
    id: 5,
    name: "JBL Bluetooth Original Headset",
    price: 749,
    rating: 4.8,
    sold: "100.2K",
    badge: "NEW",
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 6,
    name: "Wireless Bluetooth Headset",
    price: 899,
    rating: 4.7,
    sold: "85.4K",
    badge: "HOT",
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    name: "Studio Pro Wireless Headphones",
    price: 1799,
    rating: 4.9,
    sold: "38.7K",
    badge: "NEW",
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 8,
    name: "Noise Canceling Headphones",
    price: 2299,
    rating: 4.8,
    sold: "31.5K",
    badge: "HOT",
    category: "Headphones",
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
  },

  // =========================================
  // CHARGERS
  // =========================================
  {
    id: 9,
    name: "Fast Charge USB-C Adapter",
    price: 499,
    rating: 4.8,
    sold: "72.4K",
    badge: "NEW",
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 10,
    name: "20W Fast Wall Charger",
    price: 599,
    rating: 4.7,
    sold: "61.3K",
    badge: "SALE",
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 11,
    name: "65W GaN Fast Charger",
    price: 1299,
    rating: 4.9,
    sold: "27.8K",
    badge: "HOT",
    category: "Chargers",
    image:
      "https://images.unsplash.com/photo-1609592424908-4c8e8c2e0f8c?auto=format&fit=crop&w=600&q=80",
  },

  // =========================================
  // CABLES
  // =========================================
  {
    id: 12,
    name: "Fast Charging Cable",
    price: 299,
    rating: 4.8,
    sold: "120K",
    badge: "SALE",
    category: "Cables",
    image:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 13,
    name: "Premium Braided USB-C Cable",
    price: 399,
    rating: 4.8,
    sold: "88.2K",
    badge: "NEW",
    category: "Cables",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 14,
    name: "Lightning Fast Charge Cable",
    price: 349,
    rating: 4.7,
    sold: "76.5K",
    badge: "HOT",
    category: "Cables",
    image:
      "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=600&q=80",
  },

  // =========================================
  // POWER BANKS
  // =========================================
  {
    id: 15,
    name: "Portable Power Bank",
    price: 899,
    rating: 4.7,
    sold: "45.8K",
    badge: "NEW",
    category: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1609592424908-4c8e8c2e0f8c?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 16,
    name: "Ultra Slim 10000mAh Power Bank",
    price: 1099,
    rating: 4.8,
    sold: "39.2K",
    badge: "HOT",
    category: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1609592424908-4c8e8c2e0f8c?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 17,
    name: "20000mAh Fast Power Bank",
    price: 1499,
    rating: 4.9,
    sold: "24.6K",
    badge: "NEW",
    category: "Power Banks",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80",
  },

  // =========================================
  // PHONE ACCESSORIES
  // =========================================
  {
    id: 18,
    name: "MagSafe Phone Holder",
    price: 599,
    rating: 4.7,
    sold: "33.1K",
    badge: "NEW",
    category: "Phone Accessories",
    image:
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 19,
    name: "Universal Phone Stand",
    price: 399,
    rating: 4.6,
    sold: "29.8K",
    badge: "SALE",
    category: "Phone Accessories",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 20,
    name: "Premium Phone Case",
    price: 499,
    rating: 4.8,
    sold: "52.4K",
    badge: "HOT",
    category: "Phone Accessories",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=600&q=80",
  },
];

/* =========================================================
   PRODUCT GRID
========================================================= */

function ProductGrid({
  cartItems,
  setCartItems,
  isLoggedIn,
  onRequireAuth,
  wishlistItems,
  onWishlistToggle,
  onAddToCart,
  onProductClick,
  selectedCategory = "All",
}) {

  /* =======================================================
     FILTER PRODUCTS
  ======================================================= */

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  /* =======================================================
     EMPTY CATEGORY
  ======================================================= */

  if (filteredProducts.length === 0) {
    return (
      <div className="empty-category">

        <div className="empty-category-icon">
          🛍️
        </div>

        <h3>
          No products found
        </h3>

        <p>
          There are currently no products
          in this category.
        </p>

      </div>
    );
  }

  /* =======================================================
     PRODUCT GRID
  ======================================================= */

  return (
    <div className="product-grid">

      {filteredProducts.map((product) => (

        <ProductCard
          key={product.id}

          product={product}

          cartItems={cartItems}

          setCartItems={setCartItems}

          isLoggedIn={isLoggedIn}

          onRequireAuth={onRequireAuth}

          isWishlisted={
            wishlistItems?.some(
              (item) =>
                item.id === product.id
            ) || false
          }

          onWishlistToggle={
            onWishlistToggle
          }

          onAddToCart={
            onAddToCart
          }

          onProductClick={
            onProductClick
          }
        />

      ))}

    </div>
  );
}

export default ProductGrid;