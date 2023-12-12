import React from 'react'

const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1">
  <div className="newstext">
    <h4>Subscribe for Newsletters</h4>
    <p>
      Get Email updates about our latest Products and
      <span>special offers.</span>
    </p>
  </div>
  <div className="form">
    <input type="email" placeholder="Your Email Address" />
    <button className="normal">Subscribe</button>
  </div>
</section>

  )
}

export default Newsletter