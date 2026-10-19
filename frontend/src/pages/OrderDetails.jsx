import { useState } from "react";

function OrderDetails({
  product,
  quantity,
  user,
  onBack,
  onPlaceOrder,
  onQuantityChange,
}) {
  const [fullName, setFullName] = useState(
    user?.name || ""
  );

  const [phone, setPhone] = useState(
    user?.phone || ""
  );

  const [address, setAddress] = useState("");

  const [city, setCity] = useState("");

  const [postalCode, setPostalCode] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  if (!product) {
    return (
      <div className="order-details-page">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="empty-product">
          <h2>No product selected</h2>

          <p>
            Please select a product before
            proceeding to checkout.
          </p>
        </div>

      </div>
    );
  }

  /* =========================
     QUANTITY
  ========================= */

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  /* =========================
     PRICE
  ========================= */

  const price = Number(product.price);

  const subtotal = price * quantity;

  const deliveryFee = 50;

  const total = subtotal + deliveryFee;

  /* =========================
     PLACE ORDER
  ========================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !postalCode.trim()
    ) {
      alert(
        "Please complete all delivery information."
      );

      return;
    }

    const orderData = {
      product: product,
      quantity: quantity,
      customer: {
        name: fullName,
        phone: phone,
        address: address,
        city: city,
        postalCode: postalCode,
      },
      paymentMethod: paymentMethod,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      total: total,
      orderDate: new Date().toISOString(),
    };

    onPlaceOrder(orderData);
  };

  return (
    <div className="order-details-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="order-details-header">

        <button
          className="back-button"
          onClick={onBack}
        >
          ← Back to Product
        </button>

        <div>
          <p className="details-category">
            GEARNEST CHECKOUT
          </p>

          <h1>
            Order Details
          </h1>

          <p className="order-subtitle">
            Review your product and provide
            your delivery information.
          </p>
        </div>

      </div>

      {/* =========================
          MAIN CONTENT
      ========================= */}

      <form
        className="order-details-layout"
        onSubmit={handleSubmit}
      >

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="order-details-left">

          {/* PRODUCT CARD */}

          <section className="order-section">

            <div className="section-heading">
              <h2>
                Product Information
              </h2>

              <span>
                01
              </span>
            </div>

            <div className="order-product-card">

              <div className="order-product-image">

                <img
                  src={product.image}
                  alt={product.name}
                />

              </div>

              <div className="order-product-info">

                <p className="order-product-category">
                  MOBILE ACCESSORY
                </p>

                <h3>
                  {product.name}
                </h3>

                <div className="order-product-rating">
                  ★★★★★
                  <span>
                    {product.rating}
                  </span>
                </div>

                <strong className="order-product-price">
                  ₱
                  {price.toLocaleString(
                    "en-PH",
                    {
                      minimumFractionDigits: 2,
                    }
                  )}
                </strong>

              </div>

            </div>

            {/* QUANTITY */}

            <div className="order-quantity-row">

              <span>
                Quantity
              </span>

              <div className="order-quantity-control">

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

          </section>

          {/* DELIVERY INFORMATION */}

          <section className="order-section">

            <div className="section-heading">

              <h2>
                Delivery Information
              </h2>

              <span>
                02
              </span>

            </div>

            <div className="form-grid">

              {/* FULL NAME */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(event) =>
                    setFullName(
                      event.target.value
                    )
                  }
                  placeholder="Enter your full name"
                />

              </div>

              {/* PHONE */}

              <div className="form-group">

                <label>
                  Contact Number
                </label>

                <input
                  type="tel"
                  value={phone}
                  onChange={(event) =>
                    setPhone(
                      event.target.value
                    )
                  }
                  placeholder="09XXXXXXXXX"
                />

              </div>

              {/* ADDRESS */}

              <div className="form-group full-width">

                <label>
                  Delivery Address
                </label>

                <input
                  type="text"
                  value={address}
                  onChange={(event) =>
                    setAddress(
                      event.target.value
                    )
                  }
                  placeholder="House No., Street, Barangay"
                />

              </div>

              {/* CITY */}

              <div className="form-group">

                <label>
                  City / Municipality
                </label>

                <input
                  type="text"
                  value={city}
                  onChange={(event) =>
                    setCity(
                      event.target.value
                    )
                  }
                  placeholder="Enter city or municipality"
                />

              </div>

              {/* POSTAL CODE */}

              <div className="form-group">

                <label>
                  Postal Code
                </label>

                <input
                  type="text"
                  value={postalCode}
                  onChange={(event) =>
                    setPostalCode(
                      event.target.value
                    )
                  }
                  placeholder="Enter postal code"
                />

              </div>

            </div>

          </section>

          {/* PAYMENT */}

          <section className="order-section">

            <div className="section-heading">

              <h2>
                Payment Method
              </h2>

              <span>
                03
              </span>

            </div>

            <div className="payment-options">

              <label
                className={`payment-option ${
                  paymentMethod ===
                  "Cash on Delivery"
                    ? "selected"
                    : ""
                }`}
              >

                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={
                    paymentMethod ===
                    "Cash on Delivery"
                  }
                  onChange={(event) =>
                    setPaymentMethod(
                      event.target.value
                    )
                  }
                />

                <div>

                  <strong>
                    Cash on Delivery
                  </strong>

                  <span>
                    Pay when your order arrives.
                  </span>

                </div>

              </label>

              <label
                className={`payment-option ${
                  paymentMethod ===
                  "GCash"
                    ? "selected"
                    : ""
                }`}
              >

                <input
                  type="radio"
                  name="payment"
                  value="GCash"
                  checked={
                    paymentMethod === "GCash"
                  }
                  onChange={(event) =>
                    setPaymentMethod(
                      event.target.value
                    )
                  }
                />

                <div>

                  <strong>
                    GCash
                  </strong>

                  <span>
                    Online payment via GCash.
                  </span>

                </div>

              </label>

            </div>

          </section>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <aside className="order-summary">

          <div className="summary-header">

            <h2>
              Order Summary
            </h2>

            <span>
              04
            </span>

          </div>

          <div className="summary-product">

            <img
              src={product.image}
              alt={product.name}
            />

            <div>

              <strong>
                {product.name}
              </strong>

              <span>
                Qty: {quantity}
              </span>

            </div>

          </div>

          <div className="summary-divider"></div>

          <div className="summary-row">

            <span>
              Product Price
            </span>

            <strong>
              ₱
              {price.toLocaleString(
                "en-PH",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Quantity
            </span>

            <strong>
              × {quantity}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Subtotal
            </span>

            <strong>
              ₱
              {subtotal.toLocaleString(
                "en-PH",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          <div className="summary-row">

            <span>
              Delivery Fee
            </span>

            <strong>
              ₱
              {deliveryFee.toLocaleString(
                "en-PH",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">

            <span>
              Total Amount
            </span>

            <strong>
              ₱
              {total.toLocaleString(
                "en-PH",
                {
                  minimumFractionDigits: 2,
                }
              )}
            </strong>

          </div>

          <button
            type="submit"
            className="place-order-button"
          >
            Place Order
          </button>

          <p className="secure-checkout">
            ✓ Secure and protected checkout
          </p>

        </aside>

      </form>

    </div>
  );
}

export default OrderDetails;