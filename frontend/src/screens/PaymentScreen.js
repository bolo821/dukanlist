import React from 'react';
import Footer from '../components/Footer';
// import Header from '../components/Header';
// import Home from '../components/Home';
import BusinessNav from '../components/BusinessNav';
import MobileMenu from '../components/MobileMenu';
// import PaymentSet from '../components/PaymentSet';

import Slider from '../components/Slider'

const PaymentScreen = () => {
    return (
        <div>
        <BusinessNav />
        <MobileMenu />
        <Slider />
        {/* <PaymentSet /> */}
        <br />
        <Footer />
        </div>
    );
}

export default PaymentScreen;
