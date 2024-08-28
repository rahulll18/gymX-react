import { productsList , columns } from "../components/Products/Productsdata/prductsData";
import { Table } from "antd";

const Admin = () => {
  return (
    <div className="text-white flex ">
      <div className="w-[85%] ml-[15%] bg-gray-900 h-full">
        <div className="bg-gray-300 p-5 text-center font-semibold text-black shadow-md shadow-gray-400 text-xl ">
          All Products
        </div>
       
        <Table dataSource={productsList} columns={columns} />;
      </div>
    </div>
  );
};

export default Admin;
