import React, { useRef, useState } from "react";
import { productsList } from "./Productsdata/prductsData";
import Header from "../header/Header";
import Productcard from "./Productcard";

const Products = () => {
  const inputValue = useRef();
  const [filteredProducts, setfilteredProducts] = useState([...productsList]);

  const handleFilter = () => {
    const flilteredData = productsList.filter((product) =>
      product.pHeading
        .toLowerCase()
        .includes(inputValue.current.value.toLowerCase())
    );

    setfilteredProducts(flilteredData);
  };

  return (
    <div className="h-full z-0 text-white bg-gray-900">
      <Header />
      <div className="cloths py-20 font-serif">
        <div className="flex  bg-gray-900 justify-center p-3 fixed top-12 md:top-14 w-full">
          <input
            type="text"
            ref={inputValue}
            className="shadow-lg shadow-slate-50 border border-white bg-gray-700 text-white p-2 w-[500px] rounded-xl mr-5"
            onChange={handleFilter}
          />
          <button className="py-2 px-5 bg-blue-400 rounded-lg text-white transition-transform delay-100 duration-700 hover:scale-125">
            Search
          </button>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="font-bold fixed bg-gray-900 top-[18%] md:top-[27%] h-screen w-full">
            {" "}
            <h2 className="text-white fixed w-full top-[40%] md:text-4xl text-3xl  text-center">
              No Products <span className="text-red-600">found</span>{" "}
            </h2>{" "}
          </div>
        ) : (
          <div>
            <h1 className="text-center mt-16 z-0 font-extrabold text-3xl">
              Our Products
            </h1>
            <div className="flex flex-wrap justify-center">
              {filteredProducts.map((product) => (
                <Productcard key={product.id} productlist={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
