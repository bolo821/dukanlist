import  React,{ useEffect, useState } from 'react'
import { useHistory, Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import BusinessNav from '../components/BusinessNav';
import Footer from '../components/Footer';
import './VerificationScreen.css'

const VerificationScreen = () => {
    const history = useHistory()
    const { vendor, isAuthenticated } = useSelector(state => state.vendorInfo)
    useEffect(() => {
        if(!isAuthenticated) history.push('/selectscreen')
        if(vendor && (vendor.hasKYCSubmitted && vendor.isVerified)) history.push('/ad-min')
    },[vendor])
    return (
        <>
            <BusinessNav />
            <div class="verificationScreen_container">
                <h1>Your Documents is <span class="days">under review</span> process. </h1>
                <Link to="/ad-min" class="button button4" style={{ borderRadius: '3px', width: '200px' }}>&larr; Home</Link>
                {/* <div class="logo-placeholder">
                    <h1>Your Documents is <span class="days">under review</span> process. </h1>
                    <Link to="/ad-min" class="button button4" style={{ borderRadius: '0' }}>&larr; Home</Link>
                </div> */}
                {/* <div class="content">
                    <Link to="/ad-min" class="button button4">Home</Link>
                </div> */}
            </div>
            <Footer />
        </>
    )
}

export default VerificationScreen