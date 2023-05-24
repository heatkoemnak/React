import React from "react";
import "./cart.css";

const Cart = ({ cart, handleCart, removeItemFromCart }) => {
  return (
    <div className="Cart">
      <div className="shopping-cart">
        <h2>SHOPPING CART</h2>
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
                    width={100}
                    height={100}
                  />
                </div>
                <div className="item-details">
                  <div className="item-name">{cartItem.name}</div>
                  <div className="item-price">${cartItem.price}</div>
                  <div className="remove-item">
                    <button onClick={() => removeItemFromCart(cartItem.id)}>
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
          <span>Total</span>
          <span>
            {cart.map((cartItem) => {
              return <div>{cartItem.price * cartItem.quantity}</div>;
            })}
          </span>
        </div>
        <div className="checkout">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
