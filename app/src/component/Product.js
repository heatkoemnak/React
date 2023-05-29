import "./product.css";
import React, { useState } from "react";

//react-icons
import { FaStar } from "react-icons/fa";
const Product = ({ product, addToCart }) => {
  const star = Array(5).fill(0);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div>
      <section className="Product" id="product">
        <div className="product-container" id="product-container">
          {product.map((productItem, productIdex) => (
            <div
              className="product-info"
              id="product-info"
              key={productItem.id}
            >
              <div className="product-image">
                <img src={productItem.image} alt={productItem.name} />
              </div>
              <div className="product-text">
                <div className="name-price">
                  <div className="product-item-name">{productItem.name}</div>
                  <div className="product-item-price">${productItem.price}</div>
                </div>
                <div className="product-details">{productItem.description}</div>
                <div className="product-card" id="card">
                  <div className="star">
                    {star.map((_, index) => {
                      const current = (index += 1);

                      return (
                        <label key={index}>
                          <FaStar
                            className="star"
                            color={
                              current <= (hover || rating)
                                ? "#ffc107"
                                : "#e4e5e9"
                            }
                            onMouseEnter={() => setHover(current)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => setRating(current)}
                          />
                        </label>
                      );
                    })}
                  </div>
                  <i
                    onClick={() => addToCart(productItem)}
                    className="bx bx-shopping-bag add-to-cart"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
