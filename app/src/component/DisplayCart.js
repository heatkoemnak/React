import React from "react";
import { Link } from "react-router-dom";

const DisplayCart = ({ cart }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <div className="cart-header-right">
          {cart.map((itemproduct, index) => {
            return (
              <div key={index}>
                <Link to={`/product/${itemproduct.product._id}`}>
                  <img src={itemproduct.product.image} alt="" />
                </Link>
                <div className="cart-item-info">
                  <h4>{itemproduct.product.name}</h4>
                  <p>{itemproduct.product.description}</p>
                  <p>Price: ${itemproduct.product.price}</p>
                  <p>Quantity: {itemproduct.quantity}</p>
                  <p>
                    Total: $
                    {(itemproduct.product.price * itemproduct.quantity).toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default DisplayCart;
