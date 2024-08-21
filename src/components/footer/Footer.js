import React from 'react';
import './footer.css'
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="w-full md:footer bg-gray-900 text-white py-5">
      <div className=" mx-auto flex flex-wrap justify-around items-start">
        <div className="max-w-24  md:flex-1 md:max-w-[250px]">
          <h2 className="text-sm md:text-xl text-yellow-400 mb-2 md:mb-4 transition-colors duration-300">About GymX</h2>
          <p className="text-xs md:text-base  transition-colors duration-300">
            GymX provides top-quality products to enhance your fitness journey.
          </p>
        </div>
        <div className="max-w-24 md:flex flex-col justify-center  items-center md:max-w-[250px]">
          <h2 className="text-sm md:text-xl text-yellow-400 mb-2 md:mb-4 transition-colors duration-300">Quick Links</h2>
          <ul className='leading-none'>
            <li><HashLink to="/#" className="text-xs md:text-base duration-300">Home</HashLink></li>
            <li><HashLink to="/#aboutUs" className="text-xs md:text-base transition-colors duration-300">About Us</HashLink></li>
            <li><HashLink to="/#Store" className="text-xs md:text-base transition-colors duration-300">Store</HashLink></li>
            <li><HashLink to="/#contactUs" className="text-xs md:text-base transition-colors duration-300">Contact Us</HashLink></li>
          </ul>
        </div>
        <div className="max-w-24 md:flex flex-col items-center md:max-w-[250px]">
          <h2 className="text-sm md:text-xl text-yellow-400  mb-2 md:mb-4 transition-colors duration-300">Contact Us</h2>
          <p className="text-xs md:text-base transition-colors duration-300">Email: info@gymx.com</p>
          <p className="text-xs md:text-base transition-colors duration-300">Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center pt-4">
        <p className="text-xs md:text-base text-gray-400">© 2024 GymX | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
