import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Home from "../components/Home";
import BusinessNav from "../components/BusinessNav";
import "../components/kyc.css";
import '../components/LeadInfo.css'
import { updateKYCStatus } from '../actions/vendorActions'
import Footer from '../components/Footer'

const Kycscreen = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { vendor, isAuthenticated } = useSelector(state => state.vendorInfo)

  const [loading, setLoading] = useState(false)
  const [vendorID, setVendorID] = useState(null)
  const [vendorGST, setVendorGST] = useState(null)
  const [vendorTradeLicense, setVendorTradeLicense] = useState(null)
  const [vendorMSME, setVendorMSME] = useState(null)
  const [vendorPanCard, setVendorPanCard] = useState(null)
  const [vendorPassbook, setVendorPassbook] = useState(null)
  // const [KYCDocuments, setKYCDocuments] = useState([])

  const submitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    let imageNames = []

    if(vendorID) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorID)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }
    if(vendorGST) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorGST)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }
    if(vendorTradeLicense) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorTradeLicense)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }
    if(vendorMSME) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorMSME)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }
    if(vendorPanCard) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorPanCard)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }
    if(vendorPassbook) {
      const formData = new FormData()
      formData.append('vendorKYC', vendorPassbook)
      const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc/${vendor._id}`, formData)
      imageNames.push(data.data)
    }

    const vendorDetails = {
      name: vendor.name,
      number: vendor.number,
      vendor_id: vendor._id
    }
    const { data: { success, message } } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/kyc`, { images: imageNames, vendorDetails: vendorDetails})
    if(success && message === 'Email sent successfully') {
      // await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor._id}/kycUploadedStatus`, { hasKYCSubmitted: true })
      dispatch(updateKYCStatus())
      setLoading(false)
    }
  }

  const fakeHandler = e => { e.preventDefault() }

  useEffect(() => {
    if(!isAuthenticated) history.push('/selectscreen')
    if(vendor && vendor.hasKYCSubmitted) history.push('/verification-screen')
  },[vendor])
  return (
    <div>
      <BusinessNav />
      <h1>KYC Verification</h1>
      <div class="rex">
        <div class="divide">
          <div class="container15">
            <form onSubmit={submitHandler} enctype="multipart/form-data">
              {/* === ID Card === */}
              <h2>
                Aadhaar Card / Voter Card / Passport / Driving license / PAN
                Card <span style={{ color: 'red', fontSize: '12px', fontWeight: 'bold' }}>(Required)</span>
              </h2>
              <span>Select image to upload:{" "}</span>
              <input
                type="file"
                onChange={e => setVendorID(e.target.files[0])}
                filename="vendorKYC" 
              />
              
              {/* === GST === */}
              <h2 style={{ marginTop: 20 }}>GST Certificate</h2>
              <span>Select image to upload:{" "}</span>
              <input 
                type="file" 
                filename="vendorKYC" 
                onChange={e =>  setVendorGST(e.target.files[0])} />

              {/* === Trade License === */}
              <h2 style={{ marginTop: 20 }}>Trade license</h2>
              <span>Select image to upload:{" "}</span>
              <input 
                type="file"
                filename="vendorKYC" 
                onChange={e =>  setVendorTradeLicense(e.target.files[0])} />

              {/* === MSME Certificate === */}
              <h2 style={{ marginTop: 20 }}>MSME Certificate</h2>
              <span>Select image to upload:{" "}</span>
              <input 
                type="file" 
                filename="vendorKYC" 
                onChange={e =>  setVendorMSME(e.target.files[0])} />

              {/* === Business Pan Card === */}
              <h2 style={{ marginTop: 20 }}>Business PAN Card</h2>
              <span>Select image to upload:{" "}</span>
              <input 
                type="file"
                filename="vendorKYC" 
                onChange={e =>  setVendorPanCard(e.target.files[0])} />

              {/* === Passbook === */}
              <h2 style={{ marginTop: 20 }}>Current Account Passbook</h2>
              <span>Select image to upload:{" "}</span>
              <input 
                type="file" 
                filename="vendorKYC" 
                onChange={e =>  setVendorPassbook(e.target.files[0])} />
              <input 
                type="submit" 
                className="button button4" 
                value={`${loading ? 'Submitting...' : 'Submit'}`} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
      {/* <button class="button button4">Submit</button> */}
    </div>
  );
};

export default Kycscreen;
