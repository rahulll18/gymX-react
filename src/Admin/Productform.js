import React, { useEffect, useState } from "react";
import { Product } from "./Product";
import { addProduct, updateProductById } from "./Product_crud";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const Productform = () => {
  const prod = useLoaderData();
  const [product, setProduct] = useState(() => setInitialProduct());
  const [image, setImage] = useState(null);
  let { productId } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === "file") {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
    } else {
      setProduct({ ...product, [e.target.id]: e.target.value });
    }
  };

  function setInitialProduct() {
    console.log("in Initalproduct function");
    if (prod != null) {
      return prod;
    } else return new Product();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (productId !== undefined) {
      updateProduct();
    } else {
      const result = await addProduct(product, image);

      if (result !== null) {
        window.alert("Product added Sunccessfully");
        navigate("/admin");
      } else {
        window.alert("Failed to add the Product");
      }
    }
  };

  const updateProduct = async () => {
    const data = await updateProductById(productId, product, image);
    console.log(data);
    if (data.affectedRows > 0) {
      window.alert(`Product updated successfully.....`);
      navigate("/admin");
    } else window.alert("something went wrong");
  };

  useEffect(() => {}, []);

  return (
    <div className=" max-w-96 border h-1/2 mx-auto shadow-white shadow-lg bg-gray-800 p-4 rounded-lg ">
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
          value={product.productheading}
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
          value={product.productDescription}
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
          value={product.productPrice}
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
          value={product.productStrike}
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
          value={product.productOffer}
          onChange={handleChange}
        />

        <label
          htmlFor="ProductImage"
          className="text-base font-medium mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300"
        >
          Product Image
        </label>
        <input
          type="file"
          id="ProductImage"
          name="ProductImage"
          className="text-base p-1 mb-2 border border-gray-600 rounded-md bg-gray-900 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white  outline-none"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          type="submit"
          className="mt-4 p-3 bg-gray-700 text-gray-100 rounded hover:bg-lime-400 hover:scale-105 transform transition-all"
        >
          Save Product
        </Button>
      </form>
    </div>
  );
};

export default Productform;
