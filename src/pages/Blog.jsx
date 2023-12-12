import React from 'react'
import Navbar from '../components/Navbar'
import PageHeader from '../components/PageHeader'
import Newsletter from './landing-page/Newsletter'
import Footer from '../components/Footer'

const Blog = () => {
  return (
    <div>
      <Navbar/>

    <PageHeader 
    title="#Read More"
    description="Read More about our Products"
    backgroundImage="img/banner/b19.jpg"
  />

  <section id="blog">
  <div className="blog-box">
    <div className="blog-img">
      <img src="https://s.alicdn.com/@sc04/kf/Hd733f1bed40e4334b509b715c163fdb4T.jpg_300x300.jpg" alt />
    </div>
    <div className="blog-details">
      <h4>The Saudi female Jalabia </h4>
      <p style={{color: '#1d2634'}}>Lorem ipsum dolor sit amet consectetur
        adipisicing elit.</p>
      <a href>CONTINUE READING</a>
      <h1>13/01</h1>
    </div>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/S/184379_1619608594.jpg"
       alt />
    </div>
    <div className="blog-details">
      <h4>Female TurtleNeck Tops </h4>
      <p style={{color: '#1d2634'}}>Lorem ipsum dolor sit amet consectetur
        adipisicing elit.</p>
      <a href>CONTINUE READING</a>
      <h1>13/01</h1>
    </div>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src="https://s.alicdn.com/@sc04/kf/H276b5809635f49b890c2955d9c272f6dm.jpg_720x720q50.jpg" alt />
    </div>
    <div className="blog-details">
      <h4>Female Abaya </h4>
      <p style={{color: '#1d2634'}}>Lorem ipsum dolor sit amet consectetur
        adipisicing elit.</p>
      <a href>CONTINUE READING</a>
      <h1>13/01</h1>
    </div>
  </div>
  <div className="blog-box">
    <div className="blog-img">
      <img src="https://lagmall.com.ng/wp-content/uploads/2020/07/Classic-sweat-shirts.jpg"
       alt='Sweat Shirt' />
    </div>
    <div className="blog-details">
      <h4>EML Sweat Shirt </h4>
      <p style={{color: '#1d2634'}}>Lorem ipsum dolor sit amet consectetur
        adipisicing elit.</p>
      <a href>CONTINUE READING</a>
      <h1>13/01</h1>
    </div>
  </div>
</section>
<Newsletter/>
<Footer/>

  </div>
  )
}

export default Blog