import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getCart());
  console.log(cartItems);
  const addToCart = (itemId) => {
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] + 1 }));
  };
  const removeToCart = (itemId) => {
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] - 1 }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = all_product.find((i) => i.id === Number(key));
        totalAmount += itemInfo.new_price * cartItems[key];
      }
    }
    return totalAmount;
  };

  const getTotalCart = () => {
    let totalCart = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) totalCart += cartItems[key];
    }
    return totalCart;
  };
  const contextValue = {
    getTotalAmount,
    getTotalCart,
    all_product,
    cartItems,
    addToCart,
    removeToCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
