import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex md:items-center items-start  justify-center min-h-screen bg-gray-900 ">
      <div className="w-full md:max-w-md max-w-96 p-5 md:mt-0 mt-28 md:p-10 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-10 hover:text-gray-300 transition-colors ">
          Login
        </h2>
        <form className="flex flex-col space-y-8">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 rounded bg-gray-900 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <p className="text-red-500 text-sm hidden">Email is required</p>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-900 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <p className="text-red-500 text-sm hidden">Password is required</p>
          <button
            type="submit"
            className="mt-4 p-3 bg-gray-700 text-gray-100 rounded hover:bg-lime-400 hover:scale-105 transform transition-all"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-400">
          Don't have an account?{' '}
          <Link to='/register' className='text-lime-400 hover:text-lime-400 transition-colors'>Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
