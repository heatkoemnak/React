import React from "react";
import "./cart.css";

const Cart = ({ cart, props }) => {
  
  return (
    <div className="Cart">
      <div className="shopping-cart">
        <h2>SHOPPING CART</h2>
      </div>

      <div className="title-header">
        <thead>
          <tr>
            <td>Image</td>
            <td>Name</td>
            <td>Size</td>
            <td>Color</td>
            <td>Quantity</td>
            <td>Unit Price</td>
            <td>Sub Total</td>
            <td>Remove</td>
          </tr>
        </thead>
        <div>
          {cart.length === 0 && (
            <div className="place-items">
              <p>No Item are added.</p>
            </div>
          )}
        </div>
        <tbody>
          {cart.map((cartItem) => (
            <>
              <tr key={cartItem.id}>
                <td class="image">
                  <img
                    src={cartItem.image}
                    width={100}
                    height={100}
                    alt={cartItem.name}
                  />
                </td>
                <td className="product-name">{cartItem.name}</td>
                <td>
                  <select name="">
                    <option value="" selected="selected">
                      S
                    </option>
                    <option value="">M</option>
                  </select>
                </td>
                <td>
                  <select name="">
                    <option value="" selected="selected">
                      Red
                    </option>
                    <option value="">Blue</option>
                  </select>
                </td>
                <td>
                  <div className="quantity">
                    <button className="sub-btn">-</button>
                    <span>{cartItem.guantity}</span>

                    <button className="plus-btn">+</button>
                  </div>
                </td>
                <td className="sub-price">${cartItem.price}</td>
                <td className="sub-price">
                  ${cartItem.price * cartItem.quantity}
                </td>
                <td
                  className="remove-item"
                  onClick={() => props.handleRemoveItem(cartItem)}
                >
                  <i class="bx bx-trash-alt"></i>
                </td>
              </tr>
            </>
          ))}
        </tbody>
        <div className="Total">
          <div>Total | </div>
          <div>
            {cart.map((cartItem) => {
              return <div>{cartItem.price * cartItem.quantity}</div>;
            })}
          </div>
        </div>
      </div>
      <div class="btn-group btns-cart">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => props.handleCart(false)}
        >
          <i class="fa fa-arrow-circle-left"></i> Continue Shopping
        </button>
        <button type="button" class="btn btn-primary">
          Update Cart
        </button>
        <button type="button" class="btn btn-primary">
          Checkout <i class="fa fa-arrow-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
