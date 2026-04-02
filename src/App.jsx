import React from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import ProductDeatails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Favorite from "./pages/Favorite/Favorite";
import Category from "./pages/Category/Category";
import Search from "./pages/Search/Search";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#e9e9e9",
            borderRadius: "5px",
            padding: "10px",
            minWidth: "220px",
          },
        }}
      />

      <main className="pt-15">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/products/:id" element={<ProductDeatails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
