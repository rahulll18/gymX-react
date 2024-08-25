import React from 'react'

const Productcard = ({productlist}) => {
    const{pHeading , imgUrl , description , price , strikePrice ,offerPrice} = productlist;
  return (
    <>
    <div data-aos="fade-up" className="md:w-[250px] md:h-[400px] m-5 transition-transform duration-300 bg-[hsl(180,12%,20%)] flex flex-col items-center rounded-lg shadow-xl hover:scale-105 cursor-pointer">
    <h2 className="text-white font-semibold mb-2">{pHeading}</h2>
      <img className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-lg mb-3" src={imgUrl} alt="Product" />
      <p className="text-white font-serif mb-4">{description}</p>
      <div className="w-[250px] flex items-center mb-5">
      <div className="text-lg font-bold ml-5 mr-1 text-white">{price}</div>
      <div className="line-through text-gray-400 text-sm mr-6">{strikePrice}</div>
      <div className="text-[hsl(79,63%,50%)]">{offerPrice}</div>
      </div>
      <button className="py-2 px-5 bg-green-600 font-bold text-white rounded-lg w-[150px] hover:bg-white hover:text-[hsl(79,44%,59%)]">
      Buy Now</button>
    </div>
    </>
  )
}

export default Productcard