import { StarIcon } from "@heroicons/react/20/solid";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import { CartContext } from "../../components/contexts/CartContext";
import { FavoriteContext } from "../../components/contexts/FavoriteContext";
import toast from "react-hot-toast";
import Product from "../../components/slideProduct/Product";
import LoadingProductDetails from "./LoadingProductDetails";
import LoadingSlideProduct from "../../components/slideProduct/LoadingSlideProduct";

export default function ProductDeatails() {
  const [product, setproduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [RelatedProducts, setRelatedProducts] = useState([]);
  const [LoadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  const { id } = useParams();
  const navgate = useNavigate();

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setproduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchproduct();
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false));
  }, [product?.category]);

  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const { addToFavorite, removeFromFav, favItems } =
    useContext(FavoriteContext);

  const IsInCart = cartItems.some((i) => i.id === Number(id));
  const IsInFav = favItems.some((i) => i.id === Number(id));

  const handelAddToCart = () => {
    if (!IsInCart) {
      addToCart(product);
      (toast.success(
        <div className="flex  items-center justify-between gap-6">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-15 h-15"
            />
          </div>
          <div>
            <strong className="text-lg truncate line-clamp-2 w-35 md:w-40 lg:w-48">{product.title}</strong>
            <p className="text-sm py-2">Added to Cart</p>
            <button
              className="inline-flex items-center cursor-pointer transition-all duration-300 hover:bg-mist-600 gap-2 rounded-lg bg-mist-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              onClick={() => navgate("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>,
      ),
        { duration: 200 });
    } else {
      removeFromCart(Number(id));
      (toast.error(
        <div className="flex  items-center justify-between gap-6">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-15 h-15"
            />
          </div>
          <div>
            <strong className="text-lg truncate line-clamp-2 w-35 md:w-40 lg:w-48">{product.title}</strong>
            <p className="text-sm py-2">Removed from Cart</p>
            <button
              className="inline-flex items-center cursor-pointer transition-all duration-300 hover:bg-mist-600 gap-2 rounded-lg bg-mist-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              onClick={() => navgate("/cart")}
            >
              View Cart
            </button>
          </div>
        </div>,
      ),
        { duration: 3000 });
    }
  };
  const handelAddToFav = () => {
    if (!IsInFav) {
      addToFavorite(product);
      (toast.success(
        <div className="flex  items-center justify-between gap-6">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-15 h-15"
            />
          </div>
          <div>
            <strong className="text-lg truncate line-clamp-2 w-35 md:w-40 lg:w-48">{product.title}</strong>
            <p className="text-sm py-2">Added to Favorite</p>
            <button
              className="inline-flex items-center cursor-pointer transition-all duration-300 hover:bg-mist-600 gap-2 rounded-lg bg-mist-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              onClick={() => navgate("/favorite")}
            >
              View Favorite
            </button>
          </div>
        </div>,
      ),
        { duration: 200 });
    } else {
      removeFromFav(product.id);
      (toast.error(
        <div className="flex  items-center justify-between gap-6">
          <div>
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-15 h-15"
            />
          </div>
          <div>
            <strong className="text-lg truncate line-clamp-2 w-35 md:w-40 lg:w-48">{product.title}</strong>
            <p className="text-sm py-2">Removed from Favorite</p>
            <button
              className="inline-flex items-center cursor-pointer transition-all duration-300 hover:bg-mist-600 gap-2 rounded-lg bg-mist-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
              onClick={() => navgate("/favorite")}
            >
              View Favorite
            </button>
          </div>
        </div>,
      ),
        { duration: 3000 });
    }
  };

  return (
    <div className="py-5 px-3">
      {loading ? (
        <LoadingProductDetails/>
      ) : !product ? (
        <p>Product Not Found</p>
      ) : (
        <div className="bg-white">
          <div className="pt-6 w-auto flex items-center justify-between gap-1 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row  md:px-10 lg:px-10 ">
            {/* Product imgs */}
            <div className=" flex items-center justify-center lg:ml-20 flex-col w-80  sm:px-6 sm:w-100 md:w-120 lg:w-200  ">
              <div className=" w-auto sm:w-auto md:w-80 lg:w-100 flex items-center justify-center">
                <img
                  alt={product.images[0]}
                  src={product.images[0]}
                  className=" w-auto  object-fill  rounded-lg  "
                  id="big-img"
                />
              </div>
              <div className="flex gap-1 overflow-x-auto sm:overflow-visible mt-2 p-1">
                {product.images.map((item,index) => (
                  <img
                    alt={item}
                    src={item}
                    className={`flex-shrink-0 
                                w-18 h-20 sm:w-20 sm:h-22 md:w-22 md:h-24 lg:w-24 lg:h-28
                                object-cover rounded-lg cursor-pointer  `}
                    onClick={() =>
                      (document.getElementById("big-img").src = item)
                    }
                  />
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="w-auto px-4 pt-10 pb-16 sm:px-7 md-7 lg:px-10 xl:px-25   lg:pt-4 ">
              {/* Title */}
              <div className="lg:col-span-2  ">
                <h1 className="text-2xl font-bold tracking-tight text-mist-500 sm:text-3xl">
                  {product.title}
                </h1>
              </div>

              <div className="mt-4 lg:row-span-3 lg:mt-0">
                {/* Stars Icon */}
                <div className="flex items-center my-5 text-2xl text-amber-500 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                </div>

                {/* price */}
                <div className="mb-5">
                  <p className="text-3xl font-bold tracking-tight text-olive-700">
                    ${product.price}
                  </p>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-md font-medium ">
                    Availability:{" "}
                    <span className="text-mist-500 font-bold">
                      {product.availabilityStatus}
                    </span>
                  </h3>
                </div>

                {/* Brand */}
                <div className="flex items-center justify-between my-4">
                  <h3 className="text-md font-medium text-gray-900">
                    Brand:{" "}
                    <span className="text-mist-500 font-bold">
                      {product.brand}
                    </span>
                  </h3>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-md text-gray-700">{product.description}</p>
                </div>

                {/* inStock */}
                <div className="mt-5">
                  <h3 className="text-lg font-bold text-mist-500 capitalize">
                    Hurry up! only <span>{product.stock}</span> products left in
                    stock.
                  </h3>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="my-6  flex  items-center justify-center gap-2 rounded-md border border-transparent bg-mist-500 px-6 py-2 cursor-pointer transition-all duration-300 text-base font-medium text-white hover:bg-mist-600 focus:ring-2 focus:ring-mist-500 focus:ring-offset-2 focus:outline-hidden"
                  onClick={handelAddToCart}
                >
                  {!IsInCart ? "Add to cart" : "Remove from cart"}
                  <span className="text-2xl">
                    <TiShoppingCart />
                  </span>
                </button>

                {/* Favorite Icon */}
                <div className="flex items-center text-3xl gap-5">
                  <span
                    className={`h-10 w-10 flex items-center justify-center rounded-full  transition-all duration-400 cursor-pointer hover:scale-105 
                ${!IsInFav ? "text-mist-500 bg-olive-200 hover:text-mist-600" : "text-olive-200 bg-mist-500 hover:text-mist-300"}
              `}
                    onClick={handelAddToFav}
                  >
                    <MdOutlineFavoriteBorder />
                  </span>
                  <span className=" h-10 w-10 flex items-center justify-center rounded-full text-mist-500 bg-olive-200 transition-all duration-400 cursor-pointer hover:scale-105 hover:text-mist-700 ">
                    <IoIosShareAlt />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {LoadingRelatedProducts ? (
        <LoadingSlideProduct/>
      ) : (
         <div className="bg-white">
              <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-wide text-mist-600 border-b-2 capitalize border-mist-300 pb-5">
                  {product.category.replace("-", " ")}
                </h2>
        
                  <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                    {RelatedProducts.map((item) => (
                      <Product item={item} />
                    ))}
                  </div>
                
              </div>
            </div>
      )}
    </div>
  );
}
