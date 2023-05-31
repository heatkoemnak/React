import React from "react";
import "./cart.css";
import { Link } from "react-router-dom";

const Cart = ({ cart, qty, qtyMinus, removeItemFromCart }) => {
  return (
    <div className="Cart">
      <div className="shopping-cart">
        <h2>SHOPPING CART</h2>
      </div>
      <div className="cart-title">
        <div className="cart-deltail">
          <div className="cart-image">Image</div>
          <div className="cart-name">Name</div>
          <div className="-cart-qty">Quantity</div>
        </div>

        <div className="cart-price">
          <div className="cart-item-price">Price</div>
          <div className="cart-sub-total">Sub-Price</div>
          <div className="cart-remove-item">Remove</div>
        </div>
      </div>
      <div className="cart">
        {cart.map((cartItem) => {
          return (
            <>
              <div className="cart-item" key={cartItem.id}>
                <div className="item-image">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    width={90}
                    height={90}
                  />
                </div>
                <div className="item-details">
                  <div className="item-name">{cartItem.name}</div>
                </div>
                <div className="qty">
                  <button onClick={() => qtyMinus(cartItem.id)}>-</button>
                  <div className="qty-value">{cartItem.quantity}</div>
                  <button onClick={() => qty(cartItem.id)}>+</button>
                </div>
                <div className="price">
                  <div className="item-price">${cartItem.price.toFixed(2)}</div>
                  <div className="sub-total">
                    ${(cartItem.price * cartItem.quantity).toFixed(2)}
                  </div>
                  <div className="remove-item">
                    <button
                      className="btn-remove"
                      onClick={() => removeItemFromCart(cartItem.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="total">
        <div className="total-price">
          <span>Total </span>
          <span>
            $
            {cart
              .reduce((total, item) => {
                return total + item.price * item.quantity;
              }, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="checkout">
          <button>Checkout</button>
          <Link to="/cart">
            <button>Go to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Cart;
