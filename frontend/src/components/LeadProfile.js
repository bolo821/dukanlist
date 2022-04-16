import React from "react";
import BusinessNav from "./BusinessNav";
import Footer from "./Footer";
import Header from "./Header";
import "./leadprofile.css";
import MobileMenu from "./MobileMenu";

const LeadProfile = () => {
  return (
    <div>
    <BusinessNav />
    
      <div class="content5">
        <div class="red">
          <div class="clms1">
            <h2>Client Name <button className="buttons danger1">
              <i className="fas fa-phone"></i> <b>Call</b>
            </button></h2>
            <br />
            <p>Interior Design</p>
            <p>Date: 11 Sep 2021 08:18 PM</p>
            
          </div>
          
          <div class="clms">
          
            
            <h2>Service for</h2>
            <p>Partial Home Design</p>
            
            <h2>City</h2>
            <p>Darjeeling</p>
            
            <h2>Email</h2>
            <p>abc@gmail.com</p>
          </div>
        </div>
        <br />
        {/* <div class="red">
          <div class="clms1">
            <h2>Client Name <button className="buttons danger1">
              <i className="fas fa-phone"></i> <b>Call</b>
            </button></h2>
            <br />
            <p>Interior Design</p>
            <p>Date: 11 Sep 2021 08:18 PM</p>
            
          </div>
          
          <div class="clms">
            
            
            
            <h2>Service for</h2>
            <p>Partial Home Design</p>
            
            <h2>City</h2>
            <p>Darjeeling</p>
            
            <h2>Email</h2>
            <p>abc@gmail.com</p>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default LeadProfile;
