import React, { useContext } from "react";
import Product from "../../components/slideProduct/Product";
import { searchContext } from "../../components/contexts/SearchContext";

const Search = () => {
  const {SearchItem}  = useContext(searchContext);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-wide text-mist-600 border-b-2 capitalize border-mist-300 pb-5">
          search items
        </h2>

        {SearchItem.length > 0 ? (
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
            {SearchItem.map((item) => (
              <Product item={item} />
            ))}
          </div>
        ) : (
          <h2 className="text-lg font-semibold text-mist-500 tracking-wider p-5">
            Product Is Not Found
          </h2>
        )}
      </div>
    </div>
  );
};

export default Search;
