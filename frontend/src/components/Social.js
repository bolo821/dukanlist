import React from "react";
import "./social.css";
import { useDispatch, useSelector } from 'react-redux'
import SocialList from "./SocialList";
import { updateVendorProfile } from '../actions/vendorActions'

const Social = ({ vendorDetails }) => {
  const dispatch = useDispatch()
  const vendorSocialHandler = socialData => dispatch(updateVendorProfile({ about: socialData }))
  return (
    <div>
      <h4>
        <a class="button" href="#popup1">
          Update Social Links
        </a>
      </h4>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Enter Your Social Media </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
            <SocialList 
              socialData={vendorDetails ? vendorDetails.about.social_information : null} 
              handleVendorSocial={vendorSocialHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
