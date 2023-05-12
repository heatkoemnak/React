//import data
import data from "../../component/Data";
import "./product.css";


//import cart

const Product = ({ addToCart}) => {
  
  return (
    <div>
      <section className="Product" id="product">
        <div className="product-container" id="product-container">
          {data.map((item) => (
            <div className="product-info" id="product-info" key={item.id} item={data} addToCart={addToCart}>
              <div className="product-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="product-text">
                <div className="name-price">
                  <div className="product-item-name">{item.name}</div>
                  <div className="product-item-price">${item.price}</div>
                </div>
                <div className="product-details">{item.description}</div>
                <div className="product-card" id="card">
                  <div className="star">
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bx-star"></i>
                    <i className="bx bxs-star-half"></i>
                  </div>
                  <i
                    onClick={() => addToCart(item)}
                    
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
