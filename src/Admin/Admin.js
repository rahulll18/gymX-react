import { useEffect, useState } from "react";
import { columns } from "../components/Products/Productsdata/prductsData";
import { Table } from "antd";
import { getProducts, deleteProductById, getProductById } from "./Product_crud";

const Admin = () => {
  const [Allproducts, setAllProducts] = useState([]);
  const [productId, setProductId] = useState(0);

  const fetchProductId = async () => {
    if (productId != undefined) {
      const product = await getProductById(productId);
      setAllProducts([product]);
    }
  };

  const handleSearch = async () => {
    if (productId != undefined) {
      await fetchProductId();
    }
  };

  const fetchProducts = async () => {
    const products = await getProducts();
    // console.log(products);
    setAllProducts(products);
  };

  const handleDelete = async (productId) => {
    const ans = window.confirm("Do you really want to delete??");
    if (ans) {
      const data = await deleteProductById(productId);
      if (data.affectedRows > 0) {
        window.alert("Product deleted Successfully");
        fetchProducts();
      } else window.alert("Something went wrong....");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="text-white flex">
      <div className="w-[85%] ml-[15%] bg-gray-900 h-full">
        <div className="bg-gray-300 p-5 relative text-center font-semibold text-black shadow-md shadow-gray-400 text-xl ">
          All Products
          <div className="absolute top-4 right-10">
            <input
              type="text"
              className="w-44 text-md font-normal p-1 border border-black rounded-lg mr-4"
              placeholder=""
              onChange={(e) => setProductId(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="font-normal p-2 bg-blue-900 text-base text-white rounded-lg"
            >
              Search
            </button>
          </div>
        </div>

        <Table
          dataSource={Allproducts}
          columns={columns(handleDelete)}
          rowKey="productId"
        />
      </div>
    </div>
  );
};

export default Admin;
