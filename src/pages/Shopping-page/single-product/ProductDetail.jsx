import React from 'react'

const ProductDetail = () => {
  return (
    <section id="product-details" className="section-p1">
  <div className="single-pro-image">
    <img src="img/products/fet3.jpeg" width="100%" id="MainImg" alt />
    <div className="small-img-group">
      <div className="small-img-col">
        <img src="img/products/fetn3.jpeg" width="100%" className="small-img" alt />  
      </div>
      <div className="small-img-col">
        <img src="img/products/fetn5.jpeg" width="100%" className="small-img" alt />  
      </div>
      <div className="small-img-col">
        <img src="img/products/fetn7.jpeg" width="100%" className="small-img" alt />  
      </div>
      <div className="small-img-col">
        <img src="img/products/fetn8.jpeg" width="100%" className="small-img" alt />  
      </div>
    </div>
  </div>
  <div className="single-pro-details">
    <h6>Home / T-Shirt</h6>
    <h4>Unisex T-Shirt</h4>
    <h2>#10,000</h2>
    <select>
      <option>Select Size</option>
      <option>XXL</option>
      <option>XL</option>
      <option>Large</option>
      <option>Medium</option>
      <option>Small</option>
    </select>
    <input type="number" defaultValue={1} />
    <button className="normal">Add To Cart</button>
    <h4>Product Details</h4>
    <span>Discover the perfect blend of comfort and style in our premium cotton crew-neck T-shirt. Its timeless design, soft feel, and durable quality make it an ideal choice for any occasion, whether you're relaxing at home or heading out for the day. With a relaxed fit and a range of versatile colors, this tee is a wardrobe staple that
      effortlessly combines comfort with fashion-forward simplicity.</span>
  </div>
</section>

  )
}

export default ProductDetail