import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import CartProvider from "./components/contexts/CartContext.jsx";
import FavoriteProvider from "./components/contexts/FavoriteContext.jsx";
import SearchProvider from "./components/contexts/SearchContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SearchProvider>
      <FavoriteProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavoriteProvider>
    </SearchProvider>
  </BrowserRouter>,
);
