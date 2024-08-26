import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Editform = () => {
    let {productId} = useParams();
    console.log(productId)

  const [product, setproduct] = useState({
    productheading: "",
    productDescription: "",
    productPrice: "",
    productStrike: "",
    productOffer: "",
  });

  const handleChange = (e) => {
    setproduct({ ...product, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
  };
  return (
    <div className="h-screen flex justify-center items-center">
    <div className=" max-w-96 border shadow-white shadow-lg bg-gray-800 p-7 rounded-lg ">
      <form
        id="registrationForm"
        className="flex flex-col"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="productheading"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Product Name
        </label>
        <input
          type="text"
          id="productheading"
          name="productheading"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
          onChange={handleChange}
        />

        <label
          htmlFor="productDescription"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Product Description
        </label>
        <input
          type="text"
          id="productDescription"
          name="productDescription"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
          onChange={handleChange}
        />

        <label
          htmlFor="productPrice"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Product Price
        </label>
        <input
          type="text"
          id="productPrice"
          name="productPrice"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
          onChange={handleChange}
        />

        <label
          htmlFor="productStrike"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Strike Price
        </label>
        <input
          type="text"
          id="productStrike"
          name="productStrike"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
          onChange={handleChange}
        />

        <label
          htmlFor="productOffer"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Offer Price
        </label>
        <input
          type="text"
          id="productOffer"
          name="productOffer"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white outline-none"
          onChange={handleChange}
        />

        {/* <label
          htmlFor="productImage"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Product Image
        </label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
        /> */}

        <button
          type="submit"
          className="mt-4 p-3 bg-gray-700 text-gray-100 rounded hover:bg-lime-400 hover:scale-105 transform transition-all"
        >
          Save Product
        </button>
      </form>
    </div>
    </div>
  );
};

export default Editform;
