import React from 'react'
import Productform from './Productform';

const Addproduct = () => {
  return (
    <div className='text-white flex bg-gray-900 '>
      <div className='w-[85%] ml-[15%] h-full'>
          <div className='bg-gray-300 p-5 text-center font-semibold text-black text-xl'>Add Products</div>
          <div id='addProduct' className='mt-2 p-5'>
             <Productform />
          </div>
      </div>
  </div>
    
  )
}

export default Addproduct