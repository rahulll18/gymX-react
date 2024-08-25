import React from 'react';
import welcome from '../img/welcome-equi.jpg';
import supplements from '../img/supplement.jpg';
import { Link } from 'react-router-dom';

const Store = () => {
  return (
    <div id='Store' className='md:h-screen md:mt-0 mt-12 scroll-my-[65px] box-border '>
        <h1 className="text-center text-4xl font-sans font-bold text-lime-400 md:mb-4">Our Store</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-around md:items-center max-w-full ">
        <div data-aos="fade-up" className="bg-gray-800 p-4 -3xl rounded-xl text-center transition-all transform duration-300 md:w-1/4 w-80 md:my-0 my-3 md:max-h-[380px] max-h-[400px] md:mx-2 border border-white hover:scale-105">
          <img
            src="https://media.istockphoto.com/id/486662770/photo/friends-in-fitness.jpg?s=612x612&w=0&k=20&c=diU0UHIy0QCzH3-NoSX_fcZfinhTJCg-BMrV5OhjJmU="
            alt="Clothes"
            className="w-44 mx-auto my-0 h-[200px] rounded-lg mb-5"
          />
          <h2 className="md:text-2xl font-serif md:mb-5 mb-2 text-gray-300 hover:text-gray-400 transition-colors">
            Clothes
          </h2>
          <button className="px-4 py-3 rounded bg-lime-400 text-black hover:bg-lime-500 hover:scale-105 transform transition-all">
            <Link to="/products" className="no-underline">
              Purchase now
            </Link>
          </button>
        </div>

        <div data-aos="fade-up" className="bg-gray-800 p-4 -3xl rounded-xl text-center transition-all transform duration-300 md:w-1/4 w-80 md:my-0 my-3 md:max-h-[380px] max-h-[400px] md:mx-2 border border-white hover:scale-105">
          <img
            src={supplements}
            alt="Supplements"
            className="w-44 mx-auto my-0 h-[200px] rounded-lg mb-5"
          />
          <h2 className="md:text-2xl font-serif md:mb-5 mb-2 text-gray-300 hover:text-gray-400 transition-colors">
            Clothes
          </h2>
          <button className="px-4 py-3 rounded bg-lime-400 text-black hover:bg-lime-500 hover:scale-105 transform transition-all">
            <Link to="/products" className="no-underline">
              Purchase now
            </Link>
          </button>
        </div>
        <div data-aos="fade-up" className="bg-gray-800 p-4 -3xl rounded-xl text-center transition-all transform duration-300 md:w-1/4 w-80 md:my-0 my-3 md:max-h-[380px] max-h-[400px] md:mx-2 border border-white hover:scale-105">
          <img
            src={welcome}
            alt="Equipments"
            className="w-44 mx-auto my-0 h-[200px] rounded-lg mb-5"
          />
          <h2 className="md:text-2xl font-serif md:mb-5 mb-2 text-gray-300 hover:text-gray-400 transition-colors">
            Clothes
          </h2>
          <button className="px-4 py-3 rounded bg-lime-400 text-black hover:bg-lime-500 hover:scale-105 transform transition-all">
            <Link to="/products" className="no-underline">
              Purchase now
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Store