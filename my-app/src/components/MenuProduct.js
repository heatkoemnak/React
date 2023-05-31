import React from "react";
import { Link } from "react-router-dom";
import "../style/MenuProduct.css";

function MenuProduct() {
  return (
    <div className="menu-category">
      <div className="menu-item">
        <i className="bx bx-menu item"></i>
        <Link className="item" to="/">
          All
        </Link>
        <Link className="item" to="/Fashion">
          Fashions
        </Link>
        <Link className="item" to="/Shoes">
          Shoes
        </Link>
        <Link className="item" to="/Bag">
          Bags
        </Link>
        <Link className="item" to="/Watch">
          Watches
        </Link>
        <Link className="item" to="/Toy">
          Toys
        </Link>
        <Link className="item" to="/Accessories">
          Accessories
        </Link>
      </div>
    </div>
  );
}

export default MenuProduct;
