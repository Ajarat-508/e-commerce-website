import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import {PRODUCTS} from '../Shopping-page/product'
import  {CartItem}  from "./cart-item";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <>
<Navbar/>
   
    <div className="cart">
    <div className="cart-heading">

      <div className="cart-heading">
        <h2>Cart Items</h2>
      </div>
      
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>

    </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/shop")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
           
            Checkout
          </button>
        </div>
      ) : (
        <h3> Your Shopping Cart is Empty</h3>
      )}
   
    </>
  );
 
};

export default Cart;