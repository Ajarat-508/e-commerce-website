import React from 'react'
import Navbar from '../../components/Navbar'
import FeaturedProduct from '../landing-page/FeaturedProduct'
import Pagination from '../../components/Pagination'
import Newsletter from '../landing-page/Newsletter'
import Footer from '../../components/Footer'

const Shop2 = () => {
  return (
    <>
    <Navbar />

    {/* Page Header */}
    <section id="page-header">
      <h2>Exclusive value deals and discounts</h2>
      <p>Save more with coupons & up to 70% off</p>
  </section>

  <FeaturedProduct/>
  <Pagination />
  <Newsletter/>
  <Footer/>
    </>
  )
}

export default Shop2