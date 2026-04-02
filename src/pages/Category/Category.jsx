import React, { useEffect, useState } from "react";
import Product from "../../components/slideProduct/Product";
import { Link, useParams } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [category]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <Link to={`/category/${category}`}> */}
        <h2 className="text-2xl font-bold tracking-wide text-mist-600 border-b-2 capitalize border-mist-300 pb-5">
          {category.replace("-", " ")}
        </h2>
        {/* </Link> */}

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
