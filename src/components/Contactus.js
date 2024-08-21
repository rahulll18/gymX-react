import React from 'react'

const Contactus = () => {
  return (
    <div id='contactUs' className='h-screen md:scroll-my-[65px] flex justify-center items-center p-7 box-border'>
      <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl mb-5 text-[hsl(79,63%,50%)] font-bold text-center transition-colors duration-300 ease-in-out">
          Contact Us
        </h1>
        <form id="contactForm" className="flex flex-col">
          <label htmlFor="name" className="text-xl mb-2 text-[hsl(180,4%,72%)] hover:text-[hsl(180,4%,80%)] transition-colors duration-300 ease-in-out">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="text-base p-2 mb-5 border border-[hsl(180,12%,25%)] rounded bg-[hsl(180,12%,10%)] text-[hsl(180,4%,72%)] focus:border-[hsl(180,12%,35%)] focus:bg-[hsl(180,12%,12%)] focus:outline-none transition-colors duration-300 ease-in-out"
          />

          <label htmlFor="email" className="text-xl mb-2 text-[hsl(180,4%,72%)] hover:text-[hsl(180,4%,80%)] transition-colors duration-300 ease-in-out">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="text-base p-2 mb-5 border border-[hsl(180,12%,25%)] rounded bg-[hsl(180,12%,10%)] text-[hsl(180,4%,72%)] focus:border-[hsl(180,12%,35%)] focus:bg-[hsl(180,12%,12%)] focus:outline-none transition-colors duration-300 ease-in-out"
          />

          <label htmlFor="message" className="text-xl mb-2 text-[hsl(180,4%,72%)] hover:text-[hsl(180,4%,80%)] transition-colors duration-300 ease-in-out">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="text-base p-2 mb-5 border border-[hsl(180,12%,25%)] rounded bg-[hsl(180,12%,10%)] text-[hsl(180,4%,72%)] focus:border-[hsl(180,12%,35%)] focus:bg-[hsl(180,12%,12%)] focus:outline-none transition-colors duration-300 ease-in-out"
          ></textarea>

          <button type="submit" className="text-xl p-2 border-none rounded bg-gray-600 text-[hsl(180,4%,95%)] cursor-pointer hover:bg-[hsl(79,63%,50%)] hover:scale-105 transition-all duration-300 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contactus