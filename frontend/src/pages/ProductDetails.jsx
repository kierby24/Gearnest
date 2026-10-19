import { useState } from "react";
import { Heart } from "lucide-react";

function ProductDetails({
  product,
  onBack,
  onAddToCart,
  isWishlisted,
  onWishlistToggle,
  onBuyNow,
}) {
  const [quantity, setQuantity] = useState(1);

  /* =========================
     NO PRODUCT
  ========================= */

  if (!product) {
    return (
      <div className="product-details-page">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="empty-product">
          <h2>Product not found</h2>

          <p>
            Please select a product again.
          </p>
        </div>

      </div>
    );
  }

  /* =========================
     QUANTITY
  ========================= */

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) =>
      current > 1
        ? current - 1
        : 1
    );
  };

  /* =========================
     TOTAL
  ========================= */

  const totalPrice =
    Number(product.price) * quantity;

  /* =========================
     WISHLIST
  ========================= */

  const handleWishlist = () => {
    if (typeof onWishlistToggle !== "function") {
      console.error(
        "onWishlistToggle is missing."
      );

      return;
    }

    onWishlistToggle(product);
  };

  /* =========================
     ADD TO CART
  ========================= */

  const handleAddToCart = () => {
    if (typeof onAddToCart !== "function") {
      console.error(
        "onAddToCart is missing."
      );

      return;
    }

    onAddToCart(
      product,
      quantity
    );
  };

  /* =========================
     BUY NOW
  ========================= */

  const handleBuyNow = () => {
    console.log("================================");
    console.log("BUY NOW CLICKED");
    console.log("Product:", product);
    console.log("Quantity:", quantity);
    console.log("onBuyNow:", onBuyNow);
    console.log("Type:", typeof onBuyNow);
    console.log("================================");

    /*
      Make sure App.jsx actually supplied
      the Buy Now function.
    */

    if (typeof onBuyNow !== "function") {
      console.error(
        "ERROR: onBuyNow was not passed to ProductDetails."
      );

      return;
    }

    /*
      Send product + quantity to App.jsx
    */

    onBuyNow(
      product,
      quantity
    );
  };

  return (
    <div className="product-details-page">

      {/* =========================
          BACK BUTTON
      ========================= */}

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Back to Products
      </button>

      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <div className="product-details-container">

        {/* =========================
            LEFT - IMAGE
        ========================= */}

        <div className="product-details-image-section">

          <div className="product-details-image-box">

            <img
              src={product.image}
              alt={product.name}
              className="product-details-image"
            />

            <span className="details-badge">
              {product.badge}
            </span>

            {/* =========================
                WISHLIST
            ========================= */}

            <button
              type="button"
              className={`details-wishlist ${
                isWishlisted
                  ? "wishlisted"
                  : ""
              }`}
              onClick={handleWishlist}
              title={
                isWishlisted
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"
              }
            >
              <Heart
                size={22}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

        </div>

        {/* =========================
            RIGHT - INFORMATION
        ========================= */}

        <div className="product-details-information">

          <p className="details-category">
            MOBILE ACCESSORIES
          </p>

          <h1>
            {product.name}
          </h1>

          {/* =========================
              RATING
          ========================= */}

          <div className="details-rating">

            <span className="details-stars">
              ★★★★★
            </span>

            <strong>
              {product.rating}
            </strong>

            <span>
              ({product.sold} sold)
            </span>

          </div>

          {/* =========================
              PRICE
          ========================= */}

          <div className="details-price">
            ₱
            {Number(
              product.price
            ).toLocaleString(
              "en-PH",
              {
                minimumFractionDigits: 2,
              }
            )}
          </div>

          {/* =========================
              DESCRIPTION
          ========================= */}

          <p className="details-description">
            Experience quality and reliable
            performance with this mobile
            accessory from GEARNEST.
            Designed for everyday use with
            a balance of style, convenience,
            and functionality.
          </p>

          <div className="details-divider"></div>

          {/* =========================
              QUANTITY
          ========================= */}

          <div className="quantity-section">

            <span>
              Quantity
            </span>

            <div className="quantity-control">

              <button
                type="button"
                onClick={decreaseQuantity}
              >
                −
              </button>

              <span>
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>

            </div>

          </div>

          {/* =========================
              TOTAL
          ========================= */}

          <div className="details-total">

            <span>
              Total
            </span>

            <strong>
              ₱
              {totalPrice.toLocaleString(
                "en-PH",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          {/* =========================
              ACTION BUTTONS
          ========================= */}

          <div className="details-actions">

            <button
              type="button"
              className="add-cart-button"
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>

            <button
              type="button"
              className="buy-now-button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

          {/* =========================
              FEATURES
          ========================= */}

          <div className="product-features">

            <div>
              <span>✓</span>
              <p>
                Quality Products
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Secure Checkout
              </p>
            </div>

            <div>
              <span>✓</span>
              <p>
                Fast Delivery
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;