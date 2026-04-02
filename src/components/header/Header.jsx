import React, { useContext, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegHeart, FaBars } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { MdFormatListBulleted, MdClose } from "react-icons/md";
import './header.css'

const navigation = [
  { name: "Home", href: "/"},
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { IoSearchSharp } from "react-icons/io5";
import { searchContext } from '../contexts/SearchContext';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const { favItems } = useContext(FavoriteContext);
  const {setSearchTirm, SearchTirm} = useContext(searchContext)
  const navgate = useNavigate();

  const [active, SetActive] = useState(0);
  const [cateoryList, setCateoryList] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/category-list");
        const data = await res.json();
        setCateoryList(data);
      } catch {
        setCateoryList([]);
      }
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if(location.pathname !== '/search')
      setSearchTirm("")
  }, [location.pathname]);

  return (
    <div className="fixed w-full z-10  ">
      <Disclosure as="nav" className="relative bg-mist-600  sm:px-3 ">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-2 lg:px-8 min-w-0">
          <div className="flex h-14 sm:h-14 md:h-14 lg:h-16 items-center justify-between gap-0 md:gap-3 lg:gap-4 ">

            {/* Mobile menu */}
            <div className="flex items-center  sm:hidden md:hidden">
              <Disclosure.Button className="p-2 text-gray-400">
                <FaBars className=" size-5 sm:size-5 md:size-5 lg:size-6  group-data-open:hidden"/>
                <MdClose className="hidden size-6 group-data-open:block"/>
              </Disclosure.Button>
            </div>

            {/* Logo */}
            <h2 className="logo text-2xl sm:text-2xl sm:mr-2 md:text-3xl lg:text-4xl text-gray-100 shrink-0 ">Ahmed</h2>

            {/* Category */}
            <div className="block relative shrink-0">
              <div
                className="flex items-center gap-1 text-xl sm:text-sm md:text-base lg:text-xl text-gray-300 bg-white/5 hover:text-white rounded-md px-1 py-1 md:px-2 md:py-2 lg:px-3 lg:py-2 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <MdFormatListBulleted />
                <h6 className="text-xs sm:text-sm md:text-base lg:text-base">Category list</h6>
                <BiChevronDown className={`transition-all duration-300 text-xl ${open ? "rotate-180" : ""}`} />
              </div>

              <div className={`absolute bg-mist-100 transition-all duration-300 h-55 overflow-y-auto px-3 mt-2 rounded shadow w-40 ${open ? "opacity-100 visible translate-y " : "opacity-0 invisible -translate-y-2"}}`}>
                <ul>
                  {cateoryList.map((item) => (
                    <li key={item} className="p-2 text-md capitalize text-mist-700 border-t border-mist-300 hover:text-mist-500 first:border-t-0">
                      <Link to={`/category/${item}`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Nav */}
            <div className="hidden sm:flex gap-2 md:gap-3 lg:gap-4 shrink-0">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md  ${
                    location.pathname === item.href ? "bg-mist-700 text-mist-300" : "text-olive-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop Search */}
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                if(!SearchTirm.trim()) return;
                navgate('/search')
              }}
              className="hidden lg:flex items-center bg-amber-50 rounded-3xl p-2 w-full max-w-md"
            >
              <input
                type="text"
                placeholder="Search..."
                value={SearchTirm}
                onChange={(e) => setSearchTirm(e.target.value)}
                className="flex-1 outline-none px-2"
              />
              <button type="submit" className="text-olive-600 hover:text-white cursor-pointer">
                <IoSearchSharp className="size-7" />
              </button>
            </form>

            {/* Icons */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 shrink-0">

              {/* Mobile Search Button */}
              <button
                className="lg:hidden p-2 text-olive-300 hover:text-white cursor-pointer -mr-2"
                onClick={() => setOpenSearch(true)}
              >
                <IoSearchSharp className="size-5 sm:size-5 md:size-6 lg:size-7" />
              </button>

              {/* Favorite */}
              <button
                onClick={() => navgate("/favorite")}
                className="relative flex p-2 text-olive-300 hover:text-white cursor-pointer"
              >
                <FaRegHeart className="size-5 sm:size-5 md:size-6 lg:size-7" />

                {favItems.length > 0 && (
                  <span
                    className="absolute top-0 -right-1 
                    text-[10px] sm:text-xs md:text-sm 
                    text-white flex items-center justify-center 
                    rounded-full min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] md:min-w-[20px] md:h-[20px] px-0
                    bg-olive-500"
                  >
                    {favItems.length}
                  </span>
                )}
              </button>

              {/* Cart */}
              <button
                onClick={() => navgate("/cart")}
                className="relative flex p-2 text-olive-300 hover:text-white cursor-pointer"
              >
                <TiShoppingCart className="size-5 sm:size-5 md:size-6 lg:size-7" />

                {cartItems.length > 0 && (
                  <span
                    className="absolute top-0 -right-1 
                    text-[10px] sm:text-xs md:text-sm 
                    text-white flex items-center justify-center 
                    rounded-full min-w-[16px] h-[16px] sm:min-w-[18px] sm:h-[18px] md:min-w-[20px] md:h-[20px] px-0
                    bg-olive-500"
                  >
                    {cartItems.length}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Disclosure.Panel className="md:hidden px-2 pb-3">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              to={item.href}
              className="block py-2 text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </Disclosure.Panel>
      </Disclosure>

      {/* Search Popup */}
      {openSearch && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 px-4 ">
          <div className="bg-white w-full max-w-md rounded-2xl p-4 flex items-center gap-2">
            
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                if(!SearchTirm.trim()) return;
                navgate('/search');
                setOpenSearch(false);
              }}
              className="flex-1 flex"
            >
              <input
                type="text"
                value={SearchTirm}
                onChange={(e)=>setSearchTirm(e.target.value)}
                placeholder="Search..."
                className="flex-1 outline-none px-2"
              />
              <button type="submit">
                <IoSearchSharp />
              </button>
            </form>

            <button onClick={()=>setOpenSearch(false)}>
              <MdClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
