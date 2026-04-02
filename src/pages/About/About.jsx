import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5 md:px-20">
      
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold text-center text-mist-500 mb-10">
        About Our Store
      </h1>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-gray-600 text-lg leading-8 mb-6">
          Welcome to our E-Commerce store, your one-stop destination for everything you need.
          We provide a wide range of products for everyone, making shopping simple and convenient.
        </p>

        <p className="text-gray-600 text-lg leading-8 mb-6">
          Our main goal is to offer products at the best and most affordable prices,
          so everyone can enjoy shopping without worrying about cost.
        </p>

        <p className="text-gray-600 text-lg leading-8">
          We believe that great service makes the difference, so we are always here
          to help you and ensure you have the best shopping experience possible.
        </p>

      </div>

      {/* Features */}
      <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
        
        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Affordable Prices</h3>
          <p className="text-gray-500">Best deals for everyone</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">Customer Service</h3>
          <p className="text-gray-500">We are always here to help</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow">
          <h3 className="font-bold text-lg mb-2">All-in-One Store</h3>
          <p className="text-gray-500">Everything you need in one place</p>
        </div>

      </div>

      {/* About Owner */}
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About the Owner</h2>

        <p className="text-gray-600 leading-7 mb-3">
          Created by Ahmed Mohamed, a passionate front-end developer.
        </p>

        <p className="text-gray-600 leading-7">
          This project is part of my journey in learning web development. I’m constantly improving this store to make it better, faster, and more user-friendly.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Link to="/">
          <button className="bg-mist-500 text-white px-6 py-3 cursor-pointer rounded-lg hover:bg-mist-600 transition">
            Start Shopping
          </button>
        </Link>
      </div>

    </div>
  );
}