import { useState } from "react";
import "./App.css";

import MainLayout from "./layout/MainLayout";

import Landing from "./pages/Landing";
import ShopHome from "./pages/ShopHome";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";
import Messages from "./pages/Message";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import OrderDetails from "./pages/OrderDetails";

function App() {


  /* =========================
     MAIN PAGE
  ========================= */

  const [showLanding, setShowLanding] = useState(true);

  const [activePage, setActivePage] = useState("home");

  /* =========================
     CART
  ========================= */

  const [cartItems, setCartItems] = useState([]);

  /* =========================
     WISHLIST
  ========================= */

  const [wishlistItems, setWishlistItems] = useState([]);

  /* =========================
     LOGIN
  ========================= */

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showAuth, setShowAuth] = useState(false);

  const [user, setUser] = useState(null);

  /* =========================
     PRODUCT DETAILS
  ========================= */

  const [selectedProduct, setSelectedProduct] = useState(null);

  /* =========================
     BUY NOW
  ========================= */

  const [buyNowProduct, setBuyNowProduct] = useState(null);

  const [buyNowQuantity, setBuyNowQuantity] = useState(1);

  /* =========================
     CART COUNT
  ========================= */

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  /* =====================================================
     ADD TO CART
  ===================================================== */

  const handleAddToCart = (product, quantity = 1) => {
    if (!isLoggedIn) {
      setShowAuth(true);
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
          quantity: quantity,
        },
      ];
    });
  };

  /* =====================================================
     WISHLIST
  ===================================================== */

  const handleWishlistToggle = (product) => {
    if (!isLoggedIn) {
      setShowAuth(true);
      return;
    }

    setWishlistItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentItems, product];
    });
  };

  /* =====================================================
     REMOVE FROM WISHLIST
  ===================================================== */

  const handleRemoveFromWishlist = (productId) => {
    setWishlistItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  /* =====================================================
     LOGIN SUCCESS
  ===================================================== */

  const handleLoginSuccess = (userData) => {
    console.log("LOGIN SUCCESS:", userData);
  
    setUser(userData);
    setIsLoggedIn(true);
    setShowAuth(false);
  
    if (buyNowProduct) {
      setActivePage("orderDetails");
    } else {
      setActivePage("shopHome");
    }
  };

  /* =====================================================
     REQUIRE AUTH
  ===================================================== */

  const handleRequireAuth = () => {
    setShowAuth(true);
  };

  /* =====================================================
     HOME
  ===================================================== */

  const handleEnterShop = () => {
    setShowLanding(false);
    setActivePage("home");
  };

  const handleHomeClick = () => {
    setActivePage("home");
  };

  /* =====================================================
     CART
  ===================================================== */

  const handleCartClick = () => {
    setActivePage("cart");
  };

  /* =====================================================
     PAGE CHANGE
  ===================================================== */

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  /* =====================================================
     PRODUCT CLICK
  ===================================================== */

  const handleProductClick = (product) => {
    console.log("PRODUCT SELECTED:", product);

    setSelectedProduct(product);

    setActivePage("products");
  };

  /* =====================================================
     BUY NOW
  ===================================================== */

  const handleBuyNow = (product, quantity = 1) => {
    console.log("================================");
    console.log("BUY NOW CLICKED");
    console.log("Product:", product);
    console.log("Quantity:", quantity);
    console.log("Logged in:", isLoggedIn);
    console.log("================================");

    /*
      SAVE THE PRODUCT FIRST.

      This is important because if the user is
      logged out, we still need to remember what
      product they wanted to buy after login.
    */

    setBuyNowProduct(product);

    setBuyNowQuantity(quantity);

    /*
      USER IS NOT LOGGED IN
    */

    if (!isLoggedIn) {
      console.log(
        "User is logged out → opening login form"
      );

      setShowAuth(true);

      return;
    }

    /*
      USER IS LOGGED IN
      → GO DIRECTLY TO ORDER DETAILS
    */

    console.log(
      "User is logged in → opening Order Details"
    );

    setActivePage("orderDetails");
  };

  /* =====================================================
     REMOVE CART ITEM
  ===================================================== */

  const handleRemove = (productId) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  /* =====================================================
     UPDATE CART QUANTITY
  ===================================================== */

  const handleUpdateQuantity = (
    productId,
    newQuantity
  ) => {
    if (newQuantity <= 0) {
      handleRemove(productId);
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  /* =====================================================
     PLACE ORDER
  ===================================================== */

  const handlePlaceOrder = (orderData) => {
    console.log("================================");
    console.log("ORDER PLACED");
    console.log(orderData);
    console.log("================================");

    alert(
      "Order placed successfully!\n\nThank you for shopping with GEARNEST."
    );

    setBuyNowProduct(null);

    setBuyNowQuantity(1);

    setActivePage("home");
  };

  /* =====================================================
     PAGE CONTENT
  ===================================================== */

  let pageContent;

  switch (activePage) {

    case "shopHome":
    pageContent = (
      <ShopHome
        user={user}
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle}
        onCartClick={handleCartClick}
        onPageChange={handlePageChange}
      />
    );
    break;

    /* =========================
       CART
    ========================= */

    case "cart":
      pageContent = (
        <Cart
          cartItems={cartItems}
          onBack={handleHomeClick}
          onRemove={handleRemove}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={() =>
            alert(
              "Checkout feature will be connected next."
            )
          }
        />
      );

      break;

    /* =========================
       PRODUCT DETAILS
    ========================= */

    case "products":
      pageContent = (
        <Products
          product={selectedProduct}

          cartItems={cartItems}

          setCartItems={setCartItems}

          isLoggedIn={isLoggedIn}

          onRequireAuth={handleRequireAuth}

          onAddToCart={handleAddToCart}

          isWishlisted={
            selectedProduct
              ? wishlistItems.some(
                  (item) =>
                    item.id === selectedProduct.id
                )
              : false
          }

          onWishlistToggle={handleWishlistToggle}

          /*
            IMPORTANT
          */
          onBuyNow={handleBuyNow}

          onBack={handleHomeClick}
        />
      );

      break;

    /* =========================
       ORDER DETAILS
    ========================= */

    case "orderDetails":
      pageContent = (
        <OrderDetails
          product={buyNowProduct}
          quantity={buyNowQuantity}
          user={user}

          onBack={() => {
            setActivePage("products");
          }}

          onQuantityChange={setBuyNowQuantity}

          onPlaceOrder={handlePlaceOrder}
        />
      );

      break;

    /* =========================
       WISHLIST
    ========================= */

    case "wishlist":
      pageContent = (
        <Wishlist
          wishlistItems={wishlistItems}
          onRemove={handleRemoveFromWishlist}
          onAddToCart={handleAddToCart}
        />
      );

      break;

    /* =========================
       MESSAGES
    ========================= */

    case "messages":
      pageContent = <Messages />;

      break;

    /* =========================
       PROFILE
    ========================= */

    case "profile":
      pageContent = (
        <Profile
          user={user}

          onLogout={() => {
            /*
              LOGOUT
            */

            setUser(null);

            setIsLoggedIn(false);

            setActivePage("home");

            /*
              Clear any pending Buy Now
            */

            setBuyNowProduct(null);

            setBuyNowQuantity(1);
          }}

          onPageChange={handlePageChange}
        />
      );

      break;

    /* =========================
       HOME
    ========================= */

    default:
      pageContent = (
        <Home
          cartItems={cartItems}

          setCartItems={setCartItems}

          onCartClick={handleCartClick}

          isLoggedIn={isLoggedIn}

          onRequireAuth={handleRequireAuth}

          wishlistItems={wishlistItems}

          onWishlistToggle={handleWishlistToggle}

          onAddToCart={handleAddToCart}

          onProductClick={handleProductClick}

          onBuyNow={handleBuyNow}
        />
      );

      break;
  }

  /* =====================================================
     RETURN APP
  ===================================================== */

  /* =====================================================
   RETURN APP
===================================================== */

if (showLanding) {
  return (
    <Landing
      onGetStarted={handleEnterShop}
    />
  );
}

return (
  <>
    <MainLayout
      activePage={activePage}

      onHomeClick={handleHomeClick}

      onCartClick={handleCartClick}

      onPageChange={handlePageChange}

      cartCount={cartCount}

      isLoggedIn={isLoggedIn}

      user={user}

      onLoginClick={() => {
        setShowAuth(true);
      }}

      onCreateAccountClick={() => {
        setShowAuth(true);
      }}
    >
      {pageContent}
    </MainLayout>

    {/* =========================
        LOGIN / CREATE ACCOUNT
    ========================= */}

    {showAuth && (
      <Auth
        mode="login"

        onClose={() => {
          setShowAuth(false);
        }}

        onSuccess={handleLoginSuccess}
      />
    )}
  </>
);
}

export default App;