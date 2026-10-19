import { Heart, Trash2, ShoppingCart } from "lucide-react";

function Wishlist({
  wishlistItems,
  onRemove,
  onAddToCart,
}) {
  return (
    <div className="wishlist-page">

      <div className="wishlist-header">
        <div>
          <p className="wishlist-label">MY COLLECTION</p>
          <h1>Wishlist</h1>
          <p>
            Products you've saved for later.
          </p>
        </div>

        <div className="wishlist-count">
          <Heart size={18} />
          {wishlistItems.length}
        </div>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="wishlist-empty">

          <div className="wishlist-empty-icon">
            <Heart size={35} />
          </div>

          <h2>Your wishlist is empty</h2>

          <p>
            Save products you love and find them here later.
          </p>

        </div>
      ) : (
        <div className="wishlist-grid">

          {wishlistItems.map((product) => (
            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="wishlist-details">

                <h3>{product.name}</h3>

                <p className="wishlist-price">
                  ₱{Number(product.price).toLocaleString()}
                </p>

                <div className="wishlist-buttons">

                  <button
                    className="wishlist-cart-btn"
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>

                  <button
                    className="wishlist-remove-btn"
                    onClick={() => onRemove(product.id)}
                    title="Remove from Wishlist"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Wishlist;