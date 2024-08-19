import homeImage from '../img/home-img.png'
import { Link } from 'react-router-dom';

const Welcome = () =>{
    return(
        <div id="welcome" className="h-[80vh] md:h-screen mt-[52px] md:mt-[60px] flex flex-col justify-between md:flex-row md:justify-around">
            <div id="content_1" className="section_content p-3 my-10 md:my-0 text-center md:text-start md:block">
                <h2 className="md:text-4xl text-xl md:mt-32 font-sans">MAKE YOUR</h2>
                <h1 className="md:text-8xl text-4xl font-bold my-2 md:my-4 font-sans">
                BODY <span className="text-lime-400">SHAPE</span>
                </h1>
                <p className="md:my-9 text-sm md:text-lg font-serif">
                Discover a customized Approach to Achieve your fitness goals
                </p>
                <button className='bg-lime-400 mt-6 md:my-0 hover:bg-lime-500 text-lg text-black px-14 py-3'><Link to='/login'>Get started <i className="ri-arrow-right-line ml-2"></i></Link></button>
            </div>
            <div id="content_2" className="section_content flex items-center md:block">
                <img src={homeImage} alt="HomeImage" width="600" />
            </div>
        </div>
    )
}

export default Welcome;