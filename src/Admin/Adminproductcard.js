import React from "react";
import { Link } from "react-router-dom";

const Adminproductcard = ({ product }) => {
  const { id, pHeading, imgUrl, description, price, strikePrice, offerPrice } =
    product;

  return (
    <>
      <div
        data-aos="fade-up"
        className="md:max-w-[250px] md:h-[400px] m-5 transition-transform duration-300 bg-[hsl(180,12%,20%)] flex flex-col items-center rounded-lg shadow-xl hover:scale-105 cursor-pointer"
      >
        <h2 className="text-white font-semibold mb-2">{pHeading}</h2>
        <img
          className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-lg mb-3"
          src={imgUrl}
          alt="Product"
        />
        <p className="text-white font-serif mb-4 text-center">{description}</p>
        <div className="w-[250px] flex items-center mb-5">
          <div className="text-lg font-bold ml-5 mr-1 text-white">{price}</div>
          <div className="line-through text-gray-400 text-sm mr-6">
            {strikePrice}
          </div>
          <div className="text-[hsl(79,63%,50%)]">{offerPrice}</div>
        </div>
        <div className="flex justify-around w-full">
          <button className="px-4 py-1 border border-green-400 font-bold text-white rounded-lg  hover:bg-white hover:text-green-600">
            <Link to={`/editproduct/${id}`}>
              Edit <i class="ri-edit-box-fill ml-2"></i>
            </Link>
          </button>
          <button className="px-4 py-1 bg-red-600 font-bold text-white rounded-lg  hover:bg-red-700 ">
            Delete <i class="ri-delete-bin-line ml-2"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Adminproductcard;
