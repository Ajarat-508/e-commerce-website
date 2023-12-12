import React from 'react'
import { Link } from 'react-router-dom'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeaturedProduct = () => {
  return (
   <section id="product1" className="section-p1">
  <h2>Featured Products</h2>
  <p>Best Selling Summer Collection New Modern Design</p>
  <div className="product-container">
    <div className="product">
      <img src="img/products/fet1.jpeg" alt />
      <div className="des">
        <span>Versace</span>
        <h5>Unisex T-Shirt</h5>
        <div className="star">
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
         <FontAwesomeIcon icon={faStar} />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet2.jpeg" alt />
      <div className="des">
        <span>New Design</span>
        <h5>Winter Jacket</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet3.jpeg" alt />
      <div className="des">
        <span>Versace</span>
        <h5>Vintage Men T-Shirt</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet4.jpeg" alt />
      <div className="des">
        <span>calvin klein</span>
        <h5>Vintage Astronaut T-Shirt</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet5.jpeg" alt />
      <div className="des">
        <span>Louis Vuiton</span>
        <h5>Vintage Astronaut T-Shirt</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet6.jpeg" alt />
      <div className="des">
        <span>adidas</span>
        <h5>Unisex Joggers</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet7.jpeg" alt />
      <div className="des">
        <span>Gucci</span>
        <h5>VIntage T-Shirt</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
    <div className="product">
      <img src="img/products/fet8.jpeg" alt />
      <div className="des">
        <span>foreign Print</span>
        <h5>Exotic Female Jalabia</h5>
        <div className="star">
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
          <i className="fas fa-solid fa-star" />
        </div>
        <h4>#10,000</h4>
      </div>
      <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
    </div>
  </div>
</section>

  )
}

export default FeaturedProduct