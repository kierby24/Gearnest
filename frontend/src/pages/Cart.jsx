
function Cart({
    cartItems,
    onBack,
    onRemove,
    onUpdateQuantity,
    onCheckout
  }) {
  
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  
  
    return (
      <div className="cart-page">
  
        {/* Header */}
  
        <div className="cart-header">
  
          <button
            className="back-button"
            onClick={onBack}
          >
            ← Continue Shopping
          </button>
  
          <div>
            <p className="small-label">
              GEARNEST
            </p>
  
            <h1>
              Shopping Cart
            </h1>
          </div>
  
        </div>
  
  
        {/* Empty Cart */}
  
        {cartItems.length === 0 ? (
  
          <div className="empty-cart">
  
            <div className="empty-cart-icon">
              🛒
            </div>
  
            <h2>
              Your cart is empty
            </h2>
  
            <p>
              Looks like you haven't added
              anything to your cart yet.
            </p>
  
            <button
              className="shop-now-cart"
              onClick={onBack}
            >
              Start Shopping
            </button>
  
          </div>
  
        ) : (
  
          <div className="cart-layout">
  
            {/* LEFT SIDE */}
  
            <div className="cart-items-section">
  
              <div className="cart-items-header">
  
                <h2>
                  Cart Items
                </h2>
  
                <span>
                  {totalItems} item
                  {totalItems !== 1 ? "s" : ""}
                </span>
  
              </div>
  
  
              {cartItems.map((item) => (
  
                <div
                  className="cart-item"
                  key={item.id}
                >
  
                  {/* Product Image */}
  
                  <div className="cart-item-image">
  
                    <img
                      src={item.image}
                      alt={item.name}
                    />
  
                  </div>
  
  
                  {/* Product Information */}
  
                  <div className="cart-item-info">
  
                    <span className="cart-item-category">
                      MOBILE ACCESSORY
                    </span>
  
                    <h3>
                      {item.name}
                    </h3>
  
                    <p>
                      ₱{item.price.toLocaleString("en-PH", {
                        minimumFractionDigits: 2
                      })}
                    </p>
  
                  </div>
  
  
                  {/* Quantity */}
  
                  <div className="cart-quantity">
  
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>
  
                    <span>
                      {item.quantity}
                    </span>
  
                    <button
                      onClick={() =>
                        onUpdateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
  
                  </div>
  
  
                  {/* Item Total */}
  
                  <div className="cart-item-total">
  
                    ₱{(
                      item.price * item.quantity
                    ).toLocaleString("en-PH", {
                      minimumFractionDigits: 2
                    })}
  
                  </div>
  
  
                  {/* Remove */}
  
                  <button
                    className="remove-cart-item"
                    onClick={() =>
                      onRemove(item.id)
                    }
                  >
                    ×
                  </button>
  
                </div>
  
              ))}
  
            </div>
  
  
            {/* RIGHT SIDE */}
  
            <div className="cart-summary">
  
              <h2>
                Order Summary
              </h2>
  
  
              <div className="summary-row">
  
                <span>
                  Items
                </span>
  
                <span>
                  {totalItems}
                </span>
  
              </div>
  
  
              <div className="summary-row">
  
                <span>
                  Subtotal
                </span>
  
                <span>
                  ₱{totalPrice.toLocaleString("en-PH", {
                    minimumFractionDigits: 2
                  })}
                </span>
  
              </div>
  
  
              <div className="summary-row">
  
                <span>
                  Shipping
                </span>
  
                <span className="free-shipping">
                  FREE
                </span>
  
              </div>
  
  
              <div className="summary-divider"></div>
  
  
              <div className="summary-total">
  
                <span>
                  Total
                </span>
  
                <strong>
                  ₱{totalPrice.toLocaleString("en-PH", {
                    minimumFractionDigits: 2
                  })}
                </strong>
  
              </div>
  
  
              <button
                className="checkout-button"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </button>
  
  
              <p className="secure-checkout">
                🔒 Secure and protected checkout
              </p>
  
            </div>
  
          </div>
  
        )}
  
      </div>
    );
  }
  
  export default Cart;