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
  const images = [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1702933339087/b11e11c5-6e1f-489a-9866-069524383a4e.jpeg',
 
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1702932650228/91f88a39-3406-4ae9-b748-2e7fd8b417e4.jpeg',
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1702932903783/1f798b1f-a3f0-45d4-8fdd-615c8df395a4.jpeg'
    
  
  ];
  return (
    <>
        <Navbar/>

        {/* Page Header */}
        <PageHeader 
        title="Exclusive value deals and discounts"
        description="Save more with coupons & up to 70% off"
        backgroundImages={images}
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