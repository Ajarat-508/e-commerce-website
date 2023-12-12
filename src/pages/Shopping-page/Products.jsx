import React from "react";
import { Link } from "react-router-dom";
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";
// import {ShopContext} from "/context/shop-context"

const Products = (props) => {
  const { id, productName, price, productImage } = props.data
  const { addToCart, cartItems } = useContext(ShopContext);

  // const cartItemCount = cartItems[id];

  return (
    // <section id="product1" class="section-p1">
      <section  className="products-container">
        <div className="product">
          <Link to="/singleproduct">
            <img src={productImage} alt="" />
          </Link>
          <div className="des">
            <span className="quantity">Versace</span>
            <h5 className="name">{productName}</h5>
            <div className="star">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>

            <h4 className="price">#{price}</h4>
            
          </div>
       
          <button className="addToCartBtn" onClick={() => addToCart(id)}
          >
            <FontAwesomeIcon icon={faShoppingCart} style={{ width: "20px" }} />
           
            {/* {cartItemCount > 0 && (
  <span className="cart-count" >
    {cartItemCount}
  </span>
)} */}
          </button>
         
          
        </div>
            </section>
      
            // </section>
  );
};

export default Products;
