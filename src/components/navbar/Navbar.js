import React, { useState } from "react";
import img from "../../img/logo-nav.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="p-3 w-full bg-gray-900 fixed top-0  md:flex  md:h-[60px] md:p-[10px] md:items-center md:justify-between z-10 shadow-sm shadow-white">
      <HashLink
        to="/"
        className="md:ml-12 inline md:flex md:justify-center text-base text-black font-bold md:text-lg no-underline "
      >
        <img src={img} alt="GymX Logo" className="w-7 md:w-[25px] inline" />
        <span className="text-white">GymX</span>
      </HashLink>

      <div className="hidden md:flex md:justify-around md:w-[700px] md:mr-3 font-bold">
        <ul className="flex justify-center text-xs md:text-base items-center space-x-3 mr-3 md:space-x-12">
          <li>
            <HashLink to="/#welcome" className="hover:text-lime-400 ">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink to="/#aboutUs" className="hover:text-lime-400 ">
              About Us
            </HashLink>
          </li>
          <li>
            <HashLink to="/#Store" className="hover:text-lime-400 ">
              Store
            </HashLink>
          </li>
          <li>
            <HashLink to="/#contactUs" className="hover:text-lime-400 ">
              Contact Us
            </HashLink>
          </li>
        </ul>
        <button
          type="button"
          className="px-2 py-1 text-xs md:text-base md:px-6 md:py-2 font-bold text-black bg-lime-400 w-12 md:w-[120px] rounded-lg hover:bg-lime-300 hover:scale-105 transition-transform duration-200"
        >
          <Link to="/login">Log in</Link>
        </button>
      </div>

      {!show ? (
        <div className="md:hidden mr-3 z-0 fixed right-2 inline top-3">
          <i
            class="ri-menu-3-line w-full transition-transform  text-xl"
            onClick={() => setShow(!show)}
          ></i>
        </div>
      ) : (
        <div className="fixed h-screen border border-1 w-1/2 bg-gray-900/50 backdrop-blur-md text-white top-0 left-full z-10 transition-transform hover:translate-x-[-200px] delay-150 duration-500">
          <i
            onClick={() => setShow(!show)}
            class="ri-close-fill text-3xl block my-2"
          ></i>

          <div className="sidenav flex flex-col items-center justify-center space-y-9 my-4">
            <ul className="flex flex-col text-sm justify-center space-y-9 items-center">
              <li onClick={() => setShow(!show)}>
                <HashLink to="/#welcome" className="hover:text-lime-400 ">
                  Home
                </HashLink>
              </li>
              <li onClick={() => setShow(!show)}>
                <HashLink to="/#aboutUs" className="hover:text-lime-400 ">
                  About Us
                </HashLink>
              </li>
              <li onClick={() => setShow(!show)}>
                <HashLink to="/#Store" className="hover:text-lime-400 ">
                  Store
                </HashLink>
              </li>
              <li onClick={() => setShow(!show)}>
                <HashLink to="/#contactUs" className="hover:text-lime-400 ">
                  Contact Us
                </HashLink>
              </li>
            </ul>
            <button
              type="button"
              className=" px-4 py-1 text-black text-sm bg-lime-400 w-20 rounded-lg"
            >
              <Link to="/login">Log in</Link>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
