import React, { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favItems, setFavItems] = useState(() => {
    const savedItem = localStorage.getItem("favItem");
    try {
      return savedItem ? JSON.parse(savedItem) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favItem", JSON.stringify(favItems));
  }, [favItems]);

  const addToFavorite = (item) => {
    setFavItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  };
  const removeFromFav = (id) => {
    setFavItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{
        addToFavorite,
        removeFromFav,
        favItems,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
