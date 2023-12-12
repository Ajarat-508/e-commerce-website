import React from 'react'
import { Link } from 'react-router-dom'
import { faStar, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NewArrivals = () => {
  return (
    
    <section id="product1">
      <h2>New Arrivals</h2>
      <p>New Design Summer Collection</p>
      <div class="product-container">
        <div class="product">
          <img src="img/products/fetn1.jpg" alt="" />
          <div class="des">
            <span>Versace</span>
            <h5>Casual T-Shirt</h5>
            <div class="star">
              <i class="fas fa-solid fa-star"></i>
              <i class="fas fa-solid fa-star"></i>
              <i class="fas fa-solid fa-star"></i>
              <i class="fas fa-solid fa-star"></i>
              <i class="fas fa-solid fa-star"></i>
            </div>
            <h4>#10,000</h4>
          </div>
          <Link to="cart">
        <FontAwesomeIcon icon={faShoppingCart} />
        </Link> 
        </div>

        <div class="product">
          <img src="img/products/fetn2.jpg" alt="vintage shirt" />
          <div class="des">
            <span>Exotic Design</span>
            <h5>Casual Vintage Shirt</h5>
            <div class="star">
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
        <div class="product">
          <img src="img/products/fetn3.jpeg" alt="casual t-shirt" />
          <div class="des">
            <span>New Design</span>
            <h5>Casual T-Shirt</h5>
            <div class="star">
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
        <div class="product">
          <img src="img/products/fetn4.jpg" alt="men shirt" />
          <div class="des">
            <span>calvin klein</span>
            <h5>Men Shirt</h5>
            <div class="star">
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
        <div class="product">
          <img src="img/products/fetn5.jpeg" alt="vintage t-shirt" />
          <div class="des">
            <span>adidas</span>
            <h5>Vintage Astronaut T-Shirt</h5>
            <div class="star">
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

        <div class="product">
          <img src="img/products/fetn6.jpg" alt=" sweatshirt" />
          <div class="des">
            <span>New Design</span>
            <h5>Multicolor Sweat Shirt</h5>
            <div class="star">
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

        <div class="product">
          <img src="img/products/fetn7.jpeg" alt=" casual t-shirt" />
          <div class="des">
            <span>Versace</span>
            <h5>Casual T-Shirt</h5>
            <div class="star">
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

        <div class="product">
          <img src="img/products/fetn8.jpeg" alt="men t-shirt" />
          <div class="des">
            <span>Gucci</span>
            <h5>Men T-Shirt</h5>
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
      </div>
    </section>
  )
}

export default NewArrivals