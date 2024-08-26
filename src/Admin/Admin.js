import Adminproductcard from "./Adminproductcard";
import { productsList } from "../components/Products/Productsdata/prductsData";

const Admin = () => {
  return (
    <div className="text-white flex ">
      <div className="w-[85%] ml-[15%] bg-gray-900 h-full">
        <div className="bg-gray-300 p-5 text-center font-semibold text-black shadow-md shadow-gray-400 text-xl ">
          All Products
        </div>
        <div className="adminProducts flex justify-center items-center max-w-[85%] mx-auto">
            <div className="flex flex-wrap p-4 z-0">
                {productsList.map((product) => (
                <Adminproductcard key={product.id} product={product} />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
