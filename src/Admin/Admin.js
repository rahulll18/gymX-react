import { useEffect, useState } from "react";
import {  columns } from "../components/Products/Productsdata/prductsData";
import { Table } from "antd";
import {getProducts} from './Product_crud';

const Admin = () => {

  const [Allproducts , setAllProducts] = useState([
    // {
    //   "productId": 1,
    //   "productheading": "Stringer",
    //   "productDescription": "Checks Stringer Ultimate Grey",
    //   "productPrice": "Rs. 399",
    //   "productStrike": "Rs. 900",
    //   "productOffer": "60% off"
    // }
  ]);

  const fetchProducts = async()=>{
      const products = await getProducts();
      console.log(products);
      setAllProducts(products);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div className="text-white flex ">
      <div className="w-[85%] ml-[15%] bg-gray-900 h-full">
        <div className="bg-gray-300 p-5 text-center font-semibold text-black shadow-md shadow-gray-400 text-xl ">
          All Products
        </div>
       
        <Table dataSource={Allproducts} columns={columns} />
      </div>
    </div>
  );
};

export default Admin;
