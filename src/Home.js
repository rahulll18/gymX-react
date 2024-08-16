import Welcome from "./components/Welcome";
import Store from "./components/Store";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const Home = ()=>{
    return(
    <div className=""> 
        <Header/>
        <Welcome/>
        <Aboutus />
        <Store/>
        <Contactus />
        <Footer />
    </div>
    )
}

export default Home;