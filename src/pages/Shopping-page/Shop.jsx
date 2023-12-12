import React from 'react'
import Navbar from '../../components/Navbar'
import Products from './Products'
import Pagination from '../../components/Pagination'
import Newsletter from '../landing-page/Newsletter'
import Footer from '../../components/Footer'
import PageHeader from '../../components/PageHeader'
import {PRODUCTS} from '../Shopping-page/product'
import '../Shopping-page/shop.css'
const Shop = () => {
  return (
    <>
        <Navbar/>

        {/* Page Header */}
        <PageHeader 
        title="Exclusive value deals and discounts"
        description="Save more with coupons & up to 70% off"
        backgroundImage="img/banner/b1.jpg"
      />
      <div className='products-container'>
      {PRODUCTS.map((product) => 
      <Products data = {product}
        
       />) }
      </div>
 
      <Pagination/>
      <Newsletter/>
      <Footer/>
        </>
  )
}

export default Shop