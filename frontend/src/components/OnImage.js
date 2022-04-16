import React, { useState, useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { vendorRegister } from '../actions/vendorActions'
import VendorLogin from './VendorLogin'
import { getAllCategories } from '../data/categories'
import "./onimage.css"

const OnImage = () => {
  const [categories, setCategories] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  const { isAuthenticated, vendor } = useSelector(state => state.vendorInfo)

  const [vendorDetails, setVendorDetails] = useState({ name: '', service: 'none', city: '', number: '' })
  const [OTPDetails, setOTPDetails] = useState({})
  const [otp, setOTP] = useState(null)
  const [OTPVerificationDetails, setOTPVerificationDetails] = useState({})
  const [isOTPInfoRequired, setIsOTPInfoRequired] = useState(true)
  const [show, setShow] = useState(false)
  const { name, service, city, number } = vendorDetails

  // Handle Input Change
  const handleChange = e => {
    if(e.target.name === 'service')
      setVendorDetails({ ...vendorDetails, service: { service_slug: e.target.value, service_name: e.target.options[e.target.selectedIndex].text } })
    else
      setVendorDetails({ ...vendorDetails, [e.target.name]: e.target.value })
  }

  // Send OTP 
  const sendOTP = async () => {
    const { data: { Status, Details } } = await axios.get(`https://2factor.in/API/V1/862b88f0-324d-11ec-a13b-0200cd936042/SMS/${number}/AUTOGEN`)
    setOTPDetails({ Status, Details }) 
  }

  // Verify OTP
  const verifyOTP = async () => {
    try{
      const { data: { Status, Details } } = await axios.get(`https://2factor.in/API/V1/862b88f0-324d-11ec-a13b-0200cd936042/SMS/VERIFY/${OTPDetails.Details}/${otp}`)
      setOTPVerificationDetails({ Status, Details })

    } catch(err) {
      const { Status, Details } = err.response.data
      setOTPVerificationDetails({ Status, Details })
    }
  }

  // Handle Submit
  const handleSubmit = async e => {
    e.preventDefault()
    if(OTPVerificationDetails.Status === 'Success') dispatch(vendorRegister(vendorDetails))
  }

  useEffect(() => {
    const fetchedCategories = getAllCategories()
    setCategories(fetchedCategories)
    
    if(isAuthenticated && vendor) history.push('/ad-min')
  },[vendor])

  return (
    <div style={{ display: 'flex'}}>
      <div className=" vendorForm_wrapper">
        <Link to="/"><img src={'/logo.png'} className="brandLogo" /></Link>
        <form onSubmit={handleSubmit} className="container4 vendorForm">
          <label for="email"><b>Build a professional profile</b></label>
          <input 
            type="text" 
            placeholder="Business Name" 
            name="name" 
            required 
            value={name}  
            onChange={handleChange} />
          <label>Select Your Service</label>
          <select name="service" value={service.service_slug} onChange={handleChange} style={{ 
            marginBottom: '12px', 
            backgroundColor: '#e9e9e9',
            height: '62px !important'
            }}>
            <option value="none" selected disabled hidden>Service</option>
            {categories.map(category => (<option value={category.slug}>{category.name}</option>))}
          </select>
          <input 
            type="text" 
            placeholder="City" 
            name="city" 
            required 
            value={city}  
            onChange={handleChange} />
          <div style={{ display: 'flex'}}>
            <input 
            type="text" 
            placeholder="Your Phone" 
            name="number" 
            required 
            value={number}  
            onChange={handleChange} 
            style={{ marginBottom: 0, marginTop: 0 }} />
            <button style={{ 
              marginLeft: 5,
              border: 'none',
              background: 'rgb(166 249 232)',
              border: '1px solid rgb(166 249 232)',
              color: '#777',
              // color: '#fff',
              width: '150px',
              borderRadius: '3px'
            }} onClick={sendOTP}>Send OTP</button>
          </div>
          {(isOTPInfoRequired && OTPDetails.Status === 'Success') && (
            <span style={{ display:'block', color: '#1abc9c' }}>OTP has been sent!</span>
          )}
          {OTPDetails.Status === 'Success' && (
            <div style={{ display: 'flex', marginTop: '10px', }}>
              <input 
              type="text" 
              placeholder="Enter OTP" 
              name="otp" 
              required 
              value={otp} 
              onFocus={() => setIsOTPInfoRequired(false)}  // Info: OTP has been sent to your email!
              onChange={e => setOTP(e.target.value)} 
              style={{ marginBottom: 0, marginTop: 0 }} />
              <button style={{ 
                marginLeft: 5,
                // border: 'none',
                // background: '#1abc9c',
                // color: '#fff',
                background: 'rgb(166 249 232)',
                border: '1px solid rgb(166 249 232)',
                color: '#777',
                width: '150px',
                borderRadius: '5px'
              }} onClick={verifyOTP}>Verify OTP
              </button>
            </div>)}
          {OTPVerificationDetails.Status === 'Error' 
            ? <span style={{ color: 'red' }}>Invalid OTP</span> 
            : OTPVerificationDetails.Status === 'Success'
              ? <span style={{ color: '#1abc9c' }}>OTP Successfully Verified</span>
              : null
          }
          <input 
            type="submit" 
            class="btn" 
            style={{ marginTop: '15px', marginBottom: '10px' }} 
            value="Submit" 
            disabled={!(OTPVerificationDetails.Status === 'Success')} />
            
          <div><label for="email">Already register?</label> &nbsp; <strong onClick={() => setShow(true)} style={{ cursor: 'pointer' }}>Log In</strong></div>
        </form>
      </div>
      <img src={'/business.jpg'} className="vendorForm_image" />
      <VendorLogin show={show} handleClose={() => setShow(false)} />
    </div>
  );
}

export default OnImage;
    