import React from 'react'
import { Link } from 'react-router-dom'

const CouponBanner = () => {
  return (
    <section id="banner" class="section-m1">
    <h4>Redeem Coupon</h4>
    <h2>Up to <span>70% off</span> -All t-Shirts & Accessories Purchased</h2>
    <Link>
    <button class="normal ban-btn">Shop More</button></Link>
  </section>
  )
}

export default CouponBanner