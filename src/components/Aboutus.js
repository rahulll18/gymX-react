const Aboutus = ()=>{
    return(
        <div id='aboutUs' data-aos="flip-left" className="md:h-screen scroll-my-[65px] md:scroll-my-[65px] flex justify-center items-center p-5 box-border z-0">
            <div data-aos-delay="500" className="md:max-w-3xl max-h-[70%] md:max-h-[90%] max-w-sm text-center bg-gray-800 md:p-8 p-8  md:mt-0 rounded-lg shadow-lg transition-transform transform duration-300 hover:scale-105" data-aos="flip-left">
                <h1 className="text-3xl font-bold text-lime-500 mb-5 transition-colors">
                About Us
                </h1>
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                Welcome to <strong>gymX</strong>, your ultimate destination for high-quality gym gear and supplements. At gymX, we are dedicated to empowering fitness enthusiasts with the best products to help them achieve their fitness goals.
                </p>
                <p className="text-lg leading-relaxed mb-4 text-gray-300">
                Our journey began with a passion for fitness and a commitment to provide top-notch gym clothes, supplements, and basic equipment. Whether you're a seasoned athlete or just starting your fitness journey, gymX is here to support you every step of the way.
                </p>
                <p className="text-lg leading-relaxed mb-4 hidden text-gray-300">
                We believe in the power of fitness to transform lives, and our mission is to make fitness accessible and enjoyable for everyone. Our carefully curated products are designed to meet the diverse needs of our customers, ensuring quality, comfort, and performance.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                Thank you for choosing gymX. Together, let's strive for a healthier, stronger, and more active lifestyle.
                </p>
            </div>
        </div>
    )
}
export default Aboutus;