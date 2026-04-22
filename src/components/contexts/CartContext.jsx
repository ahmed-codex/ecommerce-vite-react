import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedItem = localStorage.getItem("cartItem");

    try {
      return savedItem ? JSON.parse(savedItem) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prevItem) => {
      if (prevItem.some((i) => i.id === item.id)) return prevItem;
      return [...prevItem, { ...item, quantity: 1 }];
    });
  };
  const increasQuantity = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreasQuantity = (id) => {
    setCartItems((prevItem) =>
      prevItem.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItem) => prevItem.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        increasQuantity,
        decreasQuantity,
        removeFromCart,
        cartItems,
        setCartItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
