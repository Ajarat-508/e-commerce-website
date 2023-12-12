import React from 'react'
import { Link } from 'react-router-dom'
// import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
   <footer className="section-p1">
  <div className="column">
    <img className="logo" src="img/Bolam-logo.png" alt width="100px" height="70px" />
    <h4>Contact</h4>
    <p><strong>Address:</strong> Abuja Municipal, Abuja, Nigeria</p>
    <p><strong>Phone:</strong> 09160134647</p>
    <p><strong>Hours:</strong> 8:00am - 11:00am , Mon- Sun</p>
    <div className="follow">
      <h4>Follow Us</h4>
      <div className="icon">
        <Link to="/"> <FontAwesomeIcon icon={faFacebook} /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faTwitter} /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faInstagram} /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faYoutube} /></Link>
        <Link to="/"> <FontAwesomeIcon icon={faLinkedin} /></Link>
      </div>
    </div>
  </div>
  <div className="column">
    <h4>About</h4>
    <Link  to="about">About Us</Link>
    <Link  to="/">Delivery Information</Link>
    <Link  to="/">Privacy Policy</Link>
    <Link  to="/">Terms &amp; Conditions</Link>
    <Link  to="contact">Contact Us</Link>
  </div>
  <div className="column">
    <h4>My Account</h4>
    <Link to="/">Sign In</Link>
    <Link to="/">View Cart</Link>
    <Link to="/">My Wishlist</Link>
    <Link to="/">Track my Order</Link>
    <Link to="/">Help</Link>
  </div>
  <div className="column install">
    <h4>Install App</h4>
    <p>From App Store or Google Play</p>
    <div className="row">
      <img src="img/pay/app.jpg" alt />
      <img src="img/pay/play.jpg" alt />
    </div>
    <p>Secured Payment Gateways</p>
    <img src="img/pay/pay.png" alt />
  </div>
  <div className="copyright">
    <p>© 2022, Bolam Shopping All Rights Reserved</p>
  </div>
</footer>


  )
}

export default Footer