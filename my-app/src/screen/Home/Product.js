import React from "react";
//import data
import data from "../../component/Data";
import "./product.css";

const Product = () => {
  return (
    <div>
      <section className="Product" id="product">
        <div className="product-container" id="product-container">
        {data.map((product) => (
          <div className="product-info" id="product-info" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-text">
              <div className="name-price">
              <div className="product-item-name">{product.name}</div>
              <div className="product-item-price">${product.price}</div>
              </div>
              <div className="product-details">
                {product.description}
              </div>
              <div className="product-card" id="card">
                <div className="star">
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bx-star"></i>
                  <i className="bx bxs-star-half"></i>
                </div>
                <i className="bx bx-shopping-bag add-to-cart"></i>
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
