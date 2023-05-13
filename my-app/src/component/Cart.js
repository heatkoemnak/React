import React from "react";
import "./cart.css";

// import Image from "../screen/asset/fashion4.jpg";

const Cart = ({ cart }) => {
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
        <tbody>
          {cart.map((cartItem) => (
            <>
              <tr key={cartItem.id}>
                <td class="image">
                  <img src={cartItem.image} width={100} height={100} alt="" />
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
                    <button>-</button>
                    <input type="text" name="" value="2"></input>
                    <button>+</button>
                  </div>
                </td>
                <td className="sub-price">${cartItem.price}</td>
                <td className="sub-price">${cartItem.price}</td>
                <td className="remove-item">
                  <i class="bx bx-trash-alt"></i>
                </td>
              </tr>
            </>
          ))}
        </tbody>
        <div className="Total">
          <div>Total | </div>
          <div>$350</div>
        </div>
      </div>
      <div class="btn-group btns-cart">
        <button type="button" class="btn btn-primary">
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
