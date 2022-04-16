import React, { useEffect, useState } from "react";
import "./profile.css";
import { useDispatch, useSelector } from 'react-redux'
import Todo from "./Todo";
import Social from "./Social"
import Payment from "./Payment";
import Photos from "./Photos";
import Business from "./Business";
import Certificate from "./Certificate";
import Additional from "./Additional";
import Header from "./Header";
import Footer from "./Footer";
import BusinessNav from "./BusinessNav";
import MobileMenu from "./MobileMenu";
import { updateVendorProfile, getVendorProfile, deleteVendorPhotos } from '../actions/vendorActions'
import axios from "axios";

const Profile = () => {
  const dispatch = useDispatch()
  const { vendor } = useSelector(state => state.vendorInfo)
  const vendorProfileHandler = vendorData => dispatch(updateVendorProfile(vendorData))
  const imageDeleteHandler = async imageName => {
    // const { data: { data, success } } = await axios.delete(`/api/vendors/${vendor._id}/photos/${imageName}`)
    // if(success) {
    //   localStorage.setItem('vendorInfo', JSON.stringify(data))
    // }
    // console.log(data, success)
    // setReload({})
    dispatch(deleteVendorPhotos(imageName))
  }

  useEffect(() => {
    if(vendor && vendor.isAuthenticated) {
      dispatch(getVendorProfile())
    }
  },[vendor])

  // useEffect(() => {
  //   dispatch(getVendorProfile())
  // })

  return (
    <div>
    <BusinessNav />
      <div class="header">
        <h1>Your Profile</h1>
      </div>
      <MobileMenu />

      <div class="rin">
        <div class="cols-3 menus">
          <ul>
            <li className="vendorProfile_card">
              <h2>Profile</h2>
              <p><strong>Business Name</strong>: <span>{(vendor && vendor.name) ? vendor.name : ''}</span></p>
              <p><strong>Service</strong>: <span>{(vendor && vendor.service.service_name) ? vendor.service.service_name : ''}</span></p>
              <p><strong>Rating</strong>: <span>{vendor && vendor.rating}</span></p>
            </li>
            <li>
              <h2>Photos</h2>
              <div className="imageWrapper">
                {vendor && vendor.about.photos.map(photo => (<div key={photo} className="imageWrapper_container">
                  <img src={`/uploads/vendorPhotos/${photo}`} />
                  <button onClick={() => imageDeleteHandler(photo)}><i class="fas fa-trash-alt"></i></button>
                </div>))}
              </div>
            </li>
            <li>
              <h2>Certificates</h2>
              <div className="imageWrapper">
                {vendor && vendor.about.certificates.map(photo => (<img src={`/uploads/vendorCertificates/${photo}`} />))}
              </div>
            </li>
            <li>
              <h2>Documents</h2>
              <div className="imageWrapper">
                {vendor && vendor.about.documents.bank_proof.map(photo => (<img src={`/uploads/vendorDocuments/${photo}`} />))}
                {vendor && vendor.about.documents.business_proof.map(photo => (<img src={`/uploads/vendorDocuments/${photo}`} />))}
                {vendor && vendor.about.documents.id_proof.map(photo => (<img src={`/uploads/vendorDocuments/${photo}`} />))}
              </div>
            </li>
          </ul>
        </div>
        <div class="cols-9">
          <h2>
            <i class="fa fa-map-marker" aria-hidden="true"></i> Address
          </h2>
          <Todo 
            field="address" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.address ? vendor.address : ' '}`} />
        </div>
        <div class="cols-9">
          <h2>
            <i class="fas fa-id-card"></i> Aadhaar Number
          </h2>
          <Todo 
            field="aadhaar_number" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.aadhaar_number ? vendor.aadhaar_number : ' '}`} />
        </div>
        <div class="cols-9">
          <h2>
            <i class="fas fa-percent"></i> Gst Number
          </h2>
          <Todo 
            field="gst_number" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.gst_number ? vendor.gst_number : ' '}`} />
        </div>
        <div class="cols-9">
          <h2>
            <i class="fa fa-envelope" aria-hidden="true"></i> Email Id
          </h2>
          <Todo 
            field="email" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.email ? vendor.email : ' '}`} />
        </div>
        <div class="cols-9">
          <h2>
            <i class="fa fa-mobile" aria-hidden="true"></i> Mobile Number
          </h2>
          <Todo 
            field="number" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.number ? vendor.number : ' '}`} />
        </div>
        <div class="cols-9">
          <h2>
            <i class="fa fa-link" aria-hidden="true"></i> Profile URL
          </h2>
          <Todo 
            field="website_url" 
            handleVendorProfile={vendorProfileHandler} 
            data={`${vendor && vendor.website_url ? vendor.website_url : ' '}`} />
        </div>
        <div class="cols-9">
        <div class="cols-3 right">
        <h2>Others</h2>
        {/* <ul>
            <li>
              <h5>
                 About Content 
              </h5>
              <Todo />
            </li>
          </ul> */}
          {/* <br /> */}
        <ul>
          <li>
            <h5>Social Media <Social vendorDetails={vendor} /></h5>
          </li>
        </ul>
        {/* <br /> */}
        {/* <ul>
          <li>
            <h5>
                Additional Update               
                <Additional />
            </h5>
          </li>
        </ul> */}
        <br />
        {/* <ul>
          <li>
            <h5>
                Payment Methods               
                <Payment />
            </h5>
          </li>
        </ul> */}
        <br />
        <ul>
          <li>
            <h5>Photos <Photos /></h5>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <h5>Verification Documents <Business /></h5>
          </li>
        </ul>
        <br />
        <ul>
          <li>
            <h5>Upload Certificates <Certificate /></h5>
          </li>
        </ul>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
