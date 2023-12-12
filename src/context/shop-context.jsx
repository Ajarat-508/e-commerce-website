import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { PRODUCTS } from '../pages/Shopping-page/product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {    
    let cart ={};
    for (let i = 0; i < PRODUCTS.length + 1;  i++) {
        cart[i] = 0;
        
    }
    return cart;
}


export const ShopContextProvider = (props) => {
const [cartItems, setCartItems] = useState(getDefaultCart());

useEffect(() => {
  // Load cart items from local storage when the component mounts
  const storedCartItems = localStorage.getItem('cartItems');
  if (storedCartItems) {
    setCartItems(JSON.parse(storedCartItems));
  }
}, []);

useEffect(() => {
  // Save cart items to local storage whenever it changes
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
 const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const addCartToMemory = () => {
    localStorage.setItem('PRODUCTS', JSON.stringify(PRODUCTS));
}
const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
    addCartToMemory
}
// console.log(cartItems)
    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
}

export default ShopContext