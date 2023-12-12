import React from 'react'
import { Link } from 'react-router-dom'

const Banners = () => {
  return (
    <>
   
  <section id="sm-banner" className='section-p1'>
    <div className="banner-box">
      <h4>Best Deals and Discounts</h4>
      <h2>Buy 2 get 1 free</h2>
      <span>The best classic wears collection are on sales at Bolam</span>
      <Link to="/products"><button className="white-btn">Learn More</button></Link>
    </div>

    <div className="banner-box banner-box2">
      <h4>Spring/Summer</h4>
      <h2>Soon-to-arrive Season</h2>
      <span>The finest collection of classic clothing is currently available for
        sale at Bolam.</span>
      <button className="white-btn">Collections</button>
    </div>
  </section>
  

  <section id="banner3">
    <div className="banner-box">
      <h2>SEASONAl DISCOUNTS</h2>
      <h3>Winters Collections -40% OFF</h3>
    </div>
    <div className="banner-box banner-box2">
      <h2>NEW FOOTWEAR</h2>
      <h3>New Trending Collections</h3>
    </div>
    <div className="banner-box banner-box3">
      <h2>WINTER JACKETS</h2>
      <h3>New Trendy Designs</h3>
    </div>
  </section>


  </>
  )
}

export default Banners