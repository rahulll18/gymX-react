// m092166
import React, { useState } from 'react';

const RegistrationForm = () => {
    const[user , setUser] = useState({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const handleChange = (e)=>{
        setUser({...user , [e.target.id] : e.target.value})
    }

    const collectUserInfo = (e)=>{
        e.preventDefault();
        console.log(user);
    }

  return (
    <div className='h-screen flex justify-center items-center'>
    <div className=" md:w-full max-w-96 border border-white  shadow-white bg-gray-800 p-6 rounded-lg transition-transform duration-300 ease-in-out">
      <h1 className="text-center font-bold text-3xl text-gray-100 transition-colors duration-300 ease-in-out hover:text-gray-200">Register</h1>
      <form id="registrationForm" className="flex flex-col" onSubmit={collectUserInfo}>
        <label htmlFor="fullName" className="text-lg mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="text-base p-2 mb-5 border border-gray-600 rounded-md bg-gray-900 text-gray-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white  outline-none" value={user.name} onChange={handleChange} />

        <label htmlFor="email" className="text-lg mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">Email</label>
        <input type="email" id="email" name="email" className="text-base p-2 mb-5 border border-gray-600 rounded-md bg-gray-900 text-gray-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white  outline-none" value={user.email} onChange={handleChange}/>

        <label htmlFor="password" className="text-lg mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">Password</label>
        <input type="password" id="password" name="password" className="text-base p-2 mb-5 border border-gray-600 rounded-md bg-gray-900 text-gray-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white  outline-none" value={user.password} onChange={handleChange}/>

        <label htmlFor="confirmPassword" className="text-lg mb-2 text-gray-400 transition-colors duration-300 ease-in-out hover:text-gray-300">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" className="text-base p-2 mb-5 border border-gray-600 rounded-md bg-gray-900 text-gray-400 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white  outline-none" value={user.confirmPassword} onChange={handleChange} />

        <button type="submit" className="mt-4 p-3 bg-gray-700 text-gray-100 rounded hover:bg-lime-400 hover:scale-105 transform transition-all">Register</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
