import homeImage from '../img/home-img.png'
import { Link } from 'react-router-dom';

const Welcome = () =>{
    return(
        <div id="welcome" className="h-screen md:[85vh] mt-[52px] md:mt-[60px] flex flex-col md:flex-row justify-evenly md:justify-around">
            <div id="content_1" className="section_content p-3  md:my-0 text-center md:text-start md:block">
                <h2 className="md:text-4xl text-3xl md:mt-32 font-sans">MAKE YOUR</h2>
                <h1 className="md:text-8xl text-6xl font-bold my-2 md:my-4 font-sans">
                BODY <span className="text-lime-400">SHAPE</span>
                </h1>
                <p className="md:my-9 md:mt-3 mt-5 text-xs md:text-lg font-serif">
                Discover a customized Approach to Achieve your fitness goals
                </p>
                <button className='bg-lime-400 w-64 md:mt-10 mt-14 md:my-0 hover:bg-lime-500 rounded-xl text-lg text-black px-16 py-5 transition-all duration-500 delay-150 ease-in hover:w-80'><Link to='/login'>Get started <i className="ri-arrow-right-line ml-2"></i></Link></button>
            </div>
            <div id="content_2" className="section_content flex items-center md:block">
                <img src={homeImage} alt="HomeImage" width="600" className='' />
            </div>
        </div>
    )
}

export default Welcome;