import { useEffect, useState } from "react";
import {  columns } from "../components/Products/Productsdata/prductsData";
import { Table } from "antd";
import {getProducts , deleteProductById} from './Product_crud';

const Admin = () => {

  const [Allproducts , setAllProducts] = useState([]);

  const fetchProducts = async()=>{
      const products = await getProducts();
      console.log(products);
      setAllProducts(products);
  }

  const handleDelete = async (productId) => {
    const ans=window.confirm("Do you really want to delete??")
    if(ans) {
        const data=await deleteProductById(productId);
        if(data.affectedRows>0){
            window.alert("Product deleted Successfully")
            fetchProducts();
        }
        else
            window.alert("Something went wrong....")
    }
  };

  useEffect(()=>{
    fetchProducts();
  },[])

  return (
    <div className="text-white flex ">
      <div className="w-[85%] ml-[15%] bg-gray-900 h-full">
        <div className="bg-gray-300 p-5 text-center font-semibold text-black shadow-md shadow-gray-400 text-xl ">
          All Products
        </div>
       
        <Table dataSource={Allproducts} columns={columns(handleDelete)} rowKey="productId" />
      </div>
    </div>
  );
};

export default Admin;
