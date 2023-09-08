import React, { createContext, useState } from 'react';
import { PRODUCTS } from "./products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };



export const ShopContextProvider = (props) => {

const [cartItems, setCartItems] = useState(getDefaultCart());

//Total Sum
const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
totalAmount += cartItems[item] * itemInfo.price;
    }
  }

  return totalAmount;

}

//Number of products in the cart

const getTotalCount = () => {
 
  let totalCount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
totalCount += cartItems[item];
    }
  }

  return totalCount;

}





const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}) )
  }


  // remove all of the items of one kind from cart
  const removeItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }));
  };


const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getTotalCount, removeItem};

return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

