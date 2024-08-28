import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Products from "./components/Products/Products";
import Admin from "./Admin/Admin";
import Addproduct from "./Admin/Addproduct";
import Editform from "./Admin/Editform";
import Layout from "./Layout";
import Adminlayout from "./Adminlayout";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
         path: "",
         element: <Home />,
       },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />,
    children: [
      {
         path: "",
         element: <Admin />,
       },
      {
        path: "addproduct",
        element: <Addproduct />,
      },
      {
        path: "editproduct/:productId",
        element: <Editform />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
