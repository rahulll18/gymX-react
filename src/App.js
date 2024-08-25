import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  return (
    <div className="App bg-gray-900 text-white">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
