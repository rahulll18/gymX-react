import React, { useRef, useState } from 'react'
import { productsList } from './Productsdata/prductsData'
import Header from '../header/Header'
import Productcard from './Productcard'

const Products = () => {
    const inputValue = useRef();
    const [filteredProducts, setfilteredProducts] = useState([...productsList]);
    
    const handleFilter = ()=>{
        const flilteredData = productsList.filter(product => product.pHeading.toLowerCase().includes(inputValue.current.value.toLowerCase()));

        setfilteredProducts(flilteredData);
    }

  return (
   <div>
        <Header />
        <div className='cloths h-sc py-20 font-serif'>
        <div className='flex justify-center p-3 bg-gray-900 z-10 fixed top-14 w-full'>
            <input type='text' ref={inputValue} className='shadow-lg shadow-slate-50 border border-white bg-gray-700 text-white p-2 w-[500px] rounded-xl mr-5' onChange={handleFilter} />
            <button className='py-2 px-5 bg-blue-400 rounded-lg text-white transition-transform delay-100 duration-700 hover:scale-125'>Search</button>
        </div>
        <h1 className='text-center mt-16 z-0 font-extrabold text-3xl'>Our Products</h1>
            <div className='flex flex-wrap justify-center'>
            {
                filteredProducts.map((product) => <Productcard key={product.id} productlist={product}/>)
            }
            </div>
        </div>
    </div>
  )
}

export default Products