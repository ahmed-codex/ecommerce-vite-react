import React, { useContext } from "react";
import { CartContext } from "../../components/contexts/CartContext";
import { RiDeleteBinFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, increasQuantity, decreasQuantity, removeFromCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const navgate = useNavigate();
  return (
    <div className="w-full max-w-3xl mx-auto my-4 ">
      <div className="flex  flex-col overflow-y-auto p-3 bg-white shadow-xl border border-mist-500/15 rounded-xl">
        <h2 className="  text-xl font-bold capitalize text-mist-600 ">
          Shopping cart
        </h2>
        <p className="border-b w-auto border-t-mist-500 p-2"></p>
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className=" mt-5 flow-root h-70">
            <ul role="list" className="-my-6 divide-y  divide-gray-200">
              {cartItems.length > 0 ? (
                cartItems.map((product) => (
                  <li key={product.id} className="py-3">
                    <div className="flex justify-between items-center">
                      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt={product.title}
                          src={product.images[0]}
                          className="size-full cursor-pointer object-cover"
                          onClick={() => navgate(`/products/${product.id}`)}
                        />
                      </div>
                      {/* Content */}
                      <div className="ml-4 flex flex-1 flex-col">
                        {/* Product title */}
                        <div className=" text-base font-medium text-gray-900 truncate">
                          <h3
                            className="text-sm md:text-base lg:text-lg font-bold cursor-pointer truncate line-clamp-2 w-35 md:w-40 lg:w-48 text-mist-500"
                            onClick={() => navgate(`/products/${product.id}`)}
                          >
                            {product.title}
                          </h3>
                        </div>
                        {/* Product quantity */}
                        <div className="flex items-center justify-start gap-2 my-3">
                          <button
                            className="flex items-center justify-center rounded-sm bg-gray-300 w-5 h-5 text-md font-semibold text-mist-800 shadow-inner hover:cursor-pointer hover:scale-105 transition-all duration-300"
                            onClick={() => decreasQuantity(product.id)}
                          >
                            -
                          </button>
                          <p className="text-gray-500">{product.quantity}</p>
                          <button
                            className="inline-flex items-center justify-center rounded-sm bg-gray-300 w-5 h-5 text-md font-semibold text-mist-800 shadow-inner hover:cursor-pointer hover:scale-105 transition-all duration-300"
                            onClick={() => increasQuantity(product.id)}
                          >
                            +
                          </button>
                        </div>
                        {/* Product price */}
                        <div className=" text-olive-500 text-sm md:text-base lg:text-lg font-bold">
                          <p className="">${product.price}</p>
                        </div>
                      </div>
                      {/* Delete icon */}
                      <button
                        type="buttom"
                        className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl cursor-pointer transition-all duration-300 hover:scale-106  text-red-500 hover:text-red-600"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <RiDeleteBinFill />
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p className="text-xl text-mist-700 ">Cart Is Empty</p>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
          {/* total Cart */}
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="text-lg text-mist-500 font-bold">Subtotal</p>
            <p className="text-olive-500 text-lg font-bold">
              ${total.toFixed(2)}
            </p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>

          {/* checkout Button  */}
          <div className="mt-5 w-full">
            <button className="flex w-full items-center justify-center rounded-md cursor-pointer transition-all duration-300 bg-mist-500 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-mist-600 focus:ring-2 focus:ring-mist-500 focus:ring-offset-2 focus:outline-hidden">
              Checkout
            </button>
          </div>
          {/* continue Shoping */}
          <div className="mt-4 flex justify-center text-center text-md text-gray-500">
            <p>
              or{" "}
              <button
                type="button"
                onClick={() => navgate("/")}
                className="font-medium text-olive-400 hover:text-olive-500 cursor-pointer"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
