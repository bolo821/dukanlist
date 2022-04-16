import React from 'react'
import "./HomeScreen.css"
// import {Image} from "react-bootstrap"
// import Home from "./home&office.png"
// import Improvement from "./Home&Improvement.png"
// import Rentals from "./Properties&Rentals.png"
// import Events from "./Events.png"
// import CardSlider from "../components/CardSlider"
// import Cards from '../components/Cards'
import Main from '../components/Main'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
// import Select from '../components/Select'
import Header from '../components/Header'
import Abouts from '../components/Abouts'
// import Livelead from '../components/Livelead'
// import Slides from '../components/Slides'
import Form from '../components/Form'
import Product from '../components/Product'
import Youtube from '../components/Youtube';
import Text from '../components/Text';
import Services from '../components/Services';
import Showcase from '../components/Showcase';


const HomeScreen = () => {
    return (
        <>

        <Header />
        <Showcase />
            {/* <div className="bg-slide img-2">
                <h1>Fast, FREE way to get experts.</h1>  
            </div>  */}
           
            {/* <div className="page-info">
                <ul>
                    <li>
                        <strong>30+ M</strong>
                        <b className="animate">"Happy Users"</b>
                    </li>
                    <li>
                        <strong>200+ K</strong>
                        <b className="animate">"Verified Experts"</b>
                    </li>
                    <li>
                        <strong>200+</strong>
                        <b className="animate">"Categories"</b>
                    </li>
                </ul>

            </div> */}
            {/* <div className="category-info">
                <ul>
                    <li>
                        <strong><Image className="cat-icon" src={Home}/></strong>
                        <b className="animate">Home & Office</b>
                    </li>
                    <li>
                        <strong><Image className="cat-icon" src={Rentals}/></strong>
                       <b className="animate"> Properties & Rentals</b>
                    </li>
                    <li>
                        <strong><Image className="cat-icon" src={Improvement}/></strong>
                        <b className="animate">Home Improvement</b>
                    </li>
                    <li>
                        <strong><Image className="cat-icon" src={Events}/></strong>
                       <b className="animate">Events</b>
                    </li>
                </ul>

            </div> */}
            {/* <Cards /> */}
            {/* <Select /> */}
            {/* <CardSlider/> */}
            <Product />
            <Main />
            {/* <Livelead /> */}
            
            <Abouts />
            <Youtube />
   
            <Text />
            <Services />
           
            

            <Testimonial />
            
           <Form />
            <div>
                
            <Footer />
            
            
            </div>
        

          

            
            
        </>
    )
}

export default HomeScreen
