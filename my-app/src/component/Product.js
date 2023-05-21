import "./product.css";
const Product = ({ product, addToCart }) => {

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
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bxs-star-half"></i>
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
