import React from "react";
import HeroSlide from "../../components/HeroSlide";
import SlideProduct from "../../components/slideProduct/SlideProduct";
import Product from "../../components/slideProduct/Product";
import { useEffect, useState } from "react";
import ProductDeatails from "../ProductDetails/ProductDetails";
import LoadingSlideProduct from "../../components/slideProduct/LoadingSlideProduct";

const categories = [
  "smartphones",
  "Mobile-accessories",
  "laptops",
  "tablets",
  "mens-watches",
  "sunglasses",
];

const Home = () => {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const result = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );
        const productsData = Object.assign({}, ...result);
        setProducts(productsData);
      } catch (erorr) {
        console.error("error fetching", erorr);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  console.log(products);
  return (
    <div>
      <HeroSlide />
      {loading ? (
        <LoadingSlideProduct/>
      ) : (
        categories.map((category) => (
          <SlideProduct
            key={category}
            data={products[category]}
            title={category.replace("-", " ")}
          />
        ))
      )}
    </div>
  );
};

export default Home;
