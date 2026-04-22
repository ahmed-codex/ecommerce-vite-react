import React, { useContext, useState } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import toast from "react-hot-toast";

const ConfirmCart = () => {
  const {
    cartItems,
    setCartItems,
    increasQuantity,
    decreasQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (cartItems.length) {
      // 🔥 اظهار التوست
      toast.success("Order completed successfully ✅", {
        position: "top-center",
        autoClose: 2000,
        style: {
          width: "300px",
          height: "60px",
        },
      });
      // 🔥 تفريغ الفورم
      setFormData({
        name: "",
        phone: "",
        address: "",
      });

      // 🔥 تفريغ الكارت
      setCartItems([]);
    } else {
      // 🔥 اظهار التوست
      toast.error("Cart is Empty 🛒", {
        position: "top-center",
        autoClose: 2000,
        style: {
          width: "150px",
          height: "60px",
        },
      });
    }
  };

  return (
    <div className="isolate bg-mist-700 px-6 py-10 -mt-3 md:mt-0 sm:py-14 lg:px-8 h-screen">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          Delivery Information
        </h2>
        <p className="mt-2 text-lg/8 text-gray-400">
          Please enter your details to confirm the order.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-xl sm:mt-7"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
          <div className="flex items-center gap-2 text-white pb-2 border-b border-gray-600 w-fit">
            <FaRegUser className="size-5" />
            <h2>Personal info</h2>
          </div>

          <div className="sm:col-span-2 -mt-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-300"
            >
              Full name
            </label>
            <div className="mt-2.5">
              <input
                name="name"
                placeholder="Enter Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-xs md:text-sm text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2 border-b border-gray-500 pb-5">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-300"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                name="phone"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-xs md:text-sm text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-white pb-2 border-b border-gray-600 w-fit">
            <IoLocationOutline className="size-5" />
            <h2>Delivery address</h2>
          </div>

          <div className="sm:col-span-2 -mt-2">
            <label
              htmlFor="address"
              className="block text-sm/6 font-semibold text-gray-300"
            >
              Address
            </label>
            <div className="mt-2.5">
              <textarea
                name="address"
                placeholder="Enter Your address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-xs md:text-sm text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-mist-500"
                defaultValue={""}
              />
            </div>
          </div>

          <label className="block text-sm/6 font-semibold text-gray-300 ">
            <div className="flex items-center gap-3 border border-gray-500 p-2 w-fit rounded-2xl bg-white/5">
              <h3>Total Price:</h3>
              <h3>$ {total.toFixed(2)}</h3>
            </div>
          </label>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full rounded-md bg-mist-500 px-3.5 py-2 text-center text-base font-semibold text-white shadow-xs cursor-pointer transition-all duration-300 hover:bg-mist-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
export default ConfirmCart;
