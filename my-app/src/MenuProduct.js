import React from 'react'
import { Link } from 'react-router-dom'

function MenuProduct() {
  return (
    <div className="menu-category" id="menu-category">
          <div className="menu-content">
            <div className="menu-item">
              <i className="bx bx-menu menu-icon" id="menu"></i>
              <Link className="item" to="/">
                All
              </Link>
              <Link className="item" to="/Fashion">
                Fashion/
              </Link>
              <Link className="item" to="/Shoes">
                Shoes/
              </Link>
              <Link className="item" to="/Bag">
                Bag/
              </Link>
              <Link className="item" to="/Watch">
                Watches/
              </Link>
              <Link className="item" to="/Toy">
                Toy/
              </Link>
              <Link className="item" to="/Accessories">
                Accessories/
              </Link>
            </div>
          </div>
        </div>
  )
}

export default MenuProduct