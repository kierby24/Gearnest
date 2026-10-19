import { Heart } from "lucide-react";

function ProductCard({
  product,
  cartItems,
  setCartItems,
  isLoggedIn,
  onRequireAuth,
  isWishlisted,
  onWishlistToggle,
  onAddToCart,
  onProductClick,
}) {
  const handleProductClick = () => {
    onProductClick(product);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();

    onWishlistToggle(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();

    onAddToCart(product);
  };

  return (
    <article
      className="product-card"
      onClick={handleProductClick}
    >
      {/* IMAGE */}
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {/* WISHLIST */}
        <button
          type="button"
          className={`wishlist-button ${
            isWishlisted ? "wishlisted" : ""
          }`}
          onClick={handleWishlistClick}
          title={
            isWishlisted
              ? "Remove from Wishlist"
              : "Add to Wishlist"
          }
        >
          <Heart
            size={18}
            fill={
              isWishlisted
                ? "currentColor"
                : "none"
            }
          />
        </button>

        {/* BADGE */}
        <span className="image-badge">
          {product.badge}
        </span>
      </div>

      {/* INFORMATION */}
      <div className="product-information">
        <h3 className="product-price">
          ₱
          {Number(product.price).toLocaleString(
            "en-PH",
            {
              minimumFractionDigits: 2,
            }
          )}
        </h3>

        <h4 className="product-name">
          {product.name}
        </h4>

        <div className="product-rating">
          <span className="star">
            ★
          </span>

          <span>
            {product.rating}
          </span>

          <span className="separator">
            |
          </span>

          <span>
            {product.sold} sold
          </span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;