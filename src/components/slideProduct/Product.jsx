import React, { useContext } from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import toast from "react-hot-toast";
import { FavoriteContext } from "../contexts/FavoriteContext";

const Product = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { favItems, addToFavorite, removeFromFav } =
    useContext(FavoriteContext);
  const navgate = useNavigate();

  const IsInCart = cartItems.some((i) => i.id === item.id);
  const IsInFav = favItems.some((i) => i.id === item.id);

  const handelAddToCart = () => {
    if (!IsInCart) {
      addToCart(item);
      (toast.success(
        <div className="flex items-center gap-3 sm:gap-4 max-w-[300px]">
          <div>
            <img src={item.images[0]} alt={item.title} className='w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md shrink-0' />
          </div>
          <div className="flex flex-col overflow-hidden">
            <strong className="text-sm sm:text-base truncate line-clamp-2 w-35 md:w-40 lg:w-48">{item.title}</strong>
            <p className="text-xs sm:text-sm py-1 text-gray-300">Added to Cart</p>
            <button
              className="mt-1 w-fit text-xs sm:text-sm 
        rounded-md bg-mist-500 px-2 sm:px-3 py-1 
        text-white hover:bg-mist-600 transition"
              onClick={() => navgate("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>,
      ),
        { duration: 300 });
    } else {
      removeFromCart(item.id);
      (toast.error(
        <div className="flex items-center gap-3 sm:gap-4 max-w-[300px]">
          <div>
            <img src={item.images[0]} alt={item.title} className='w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md shrink-0' />
          </div>
          <div className="flex flex-col overflow-hidden">
            <strong className="text-sm sm:text-base truncate line-clamp-2 w-35 md:w-40 lg:w-48">{item.title}</strong>
            <p className="text-xs sm:text-sm py-1 text-gray-300">Removed from Cart</p>
            <button
              className="mt-1 w-fit text-xs sm:text-sm 
        rounded-md bg-mist-500 px-2 sm:px-3 py-1 
        text-white hover:bg-mist-600 transition"
              onClick={() => navgate("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>,
      ),
        { duration: 300 });
    }
  };
  const handelAddToFav = () => {
    if (!IsInFav) {
      addToFavorite(item);
      (toast.success(
        <div className="flex items-center gap-3 sm:gap-4 max-w-[300px]">
          <div>
            <img src={item.images[0]} alt={item.title} className='w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md shrink-0' />
          </div>
          <div className="flex flex-col overflow-hidden">
            <strong className="text-sm sm:text-base truncate line-clamp-2 w-35 md:w-40 lg:w-48">{item.title}</strong>
            <p className="text-xs sm:text-sm py-1 text-gray-300">Added to Fav</p>
            <button
              className="mt-1 w-fit text-xs sm:text-sm 
        rounded-md bg-mist-500 px-2 sm:px-3 py-1 
        text-white hover:bg-mist-600 transition"
              onClick={() => navgate("/favorite")}
            >
              View Favorite
            </button>
          </div>
        </div>,
      ),
        { duration: 300 });
    } else {
      removeFromFav(item.id);
      (toast.error(
        <div className="flex items-center gap-3 sm:gap-4 max-w-[300px]">
          <div>
            <img src={item.images[0]} alt={item.title} className='w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md shrink-0' />
          </div>
          <div className="flex flex-col overflow-hidden">
            <strong className="text-sm sm:text-base truncate line-clamp-2 w-35 md:w-40 lg:w-48">{item.title}</strong>
            <p className="text-xs sm:text-sm py-1 text-gray-300">Removed from Fav</p>
            <button
              className="mt-1 w-fit text-xs sm:text-sm 
        rounded-md bg-mist-500 px-2 sm:px-3 py-1 
        text-white hover:bg-mist-600 transition"
              onClick={() => navgate("/favorite")}
            >
              View Favorite
            </button>
          </div>
        </div>,
      ),
        { duration: 300 });
    }
  };

  return (
    <div className="relative group  max-w-40 sm:max-w-45 pt-5 md:max-w-55 lg:max-w-56 xl:max-w-64 overflow-hidden">
      <Link to={`/products/${item.id}`}>
        <div className=" relative cursor-pointer overflow-hidden  border transition-all duration-400  border-mist-300 rounded-lg shadow-xl p-3 m-auto group-hover:border-mist-500">
          <p
            className={`absolute left-1/2 -translate-x-1/2 flex items-center gap-2 
            text-xs sm:text-sm  text-mist-700 font-semibold
            transition-all duration-300
            ${IsInCart ? "top-1 opacity-100" : "-top-20 opacity-0"}`}
          >
            <FaCheck className="text-green-500" />
            In Cart
          </p>
          <p
            className={`absolute left-3 flex items-center justify-center 
            gap-2 text-sm sm:text-base text-mist-700 font-semibold
            transition-all duration-300 ease-in-out
            ${IsInFav ? "top-1 opacity-100" : "-top-20 opacity-0"}`}
          >
            <MdFavorite className="text-red-500" />
          </p>
          <div className="aspect-square w-auto  rounded-md p-5 group-hover:opacity-75 lg:aspect-auto lg:h-50">
            <img src={item.images[0]} className=" " />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm md:text-base lg:text-xl capitalize truncate w-25 md:w-40 lg:w-48 ">
                {item.title}
              </h3>
              <div className="icon flex mt-2 ">
                <FaStar className="text-amber-400 text-20 md:text-xl lg:text-2xl" />
                <FaStar className="text-amber-400 text-20 md:text-xl lg:text-2xl" />
                <FaStar className="text-amber-400 text-20 md:text-xl lg:text-2xl" />
                <FaRegStarHalfStroke className="text-amber-400 text-20 md:text-xl lg:text-2xl" />
              </div>
              <p className="text-500 md:text-xl lg:text-xl font-bold text-olive-500 mt-2">
                ${item.price}
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="absolute top-8 md:top-10 lg:top-13 -right-1 lg:-right-12 flex flex-col gap-3 md:gap-4 lg:gap-5 p-2 items-center justify-center space-x-1 z-5  transition-all duration-400 group-hover:right-1">
        <span
          className={`text-sm md:text-xl lg:text-2xl w-6 h-6 md:w-9 md:h-9 flex items-center justify-center rounded-full cursor-pointer
                 ${IsInCart ? "text-olive-100 bg-mist-600" : "text-mist-600 bg-olive-100"}`}
          onClick={handelAddToCart}
        >
          <TiShoppingCart />
        </span>
        <span
          className={`text-sm md:text-xl lg:text-2xl w-6 h-6 md:w-9 md:h-9 flex items-center justify-center rounded-full cursor-pointer 
                  ${IsInFav ? "text-olive-100 bg-mist-600" : "text-mist-600 bg-olive-100"}`}
          onClick={handelAddToFav}
        >
          <MdFavoriteBorder />
        </span>
        <span className="text-sm md:text-xl lg:text-2xl text-mist-600 bg-olive-100 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center rounded-full cursor-pointer">
          <IoIosShareAlt />
        </span>
      </div>
    </div>
  );
};

export default Product;
