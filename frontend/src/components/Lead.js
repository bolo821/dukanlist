import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import BusinessNav from "./BusinessNav";
import MobileMenu from "./MobileMenu";
import { getLeadsByCategory } from '../data/leads'
import Feeds from './Feeds'
import NumberModal from './NumberModal'
import { setCurrentLead } from '../actions/leadActions'
import { getNewVendorProfile } from '../actions/vendorActions'
import { getVendorProfile } from '../actions/vendorActions'
import "./lead.css";

const Lead = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [leads, setLeads] = useState([])
  const { vendor } = useSelector(state => state.vendorInfo) // vendor.leads
  const [callNowCounter, setCallNowCounter] = useState(0)
  const [showNumberModal, setShowNumberModal] = useState(true)
  const [showFeedbackModal, setShowFeedbackModal] = useState(true)
  const numberModalHandler = () => {
    setShowNumberModal(!showNumberModal)
    setTimeout(function(){
      setShowNumberModal(true)
      history.push('/ad-min#')
    }, 1000)
  }
  const feedbackModalHandler = () => {
    setShowFeedbackModal(!showFeedbackModal)
    setTimeout(function(){
      setShowFeedbackModal(true)
      history.push('/ad-min#')
    }, 1000)
  }

  const handleCurrentLeadStatus = async lead => {
    dispatch(setCurrentLead(lead))
    // if(callNowCounter < 1) {
    //   const feedbackData = {
    //     feedback: { isSpoken: true },
    //     vendor_id: vendor._id
    //   }
    //   const { data: { success } } = await axios.put(`/api/leads/${lead._id}`, feedbackData)
  
    //   // Dispatch action for new data
    //   if(success) dispatch(getNewVendorProfile(vendor._id))
    //   setCallNowCounter(callNowCounter + 1)
    // }

    if(!lead.lead_status.isSpoken && !lead.lead_status.isHired && !lead.lead_status.isNotHired && !lead.lead_status.jobCompleted) {
      const feedbackData = {
        feedback: { isSpoken: true },
        vendor_id: vendor._id
      }
      const { data: { success } } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/leads/${lead._id}`, feedbackData)
  
      // Dispatch action for new data
      if(success) dispatch(getNewVendorProfile(vendor._id))
      setCallNowCounter(callNowCounter + 1)
    }
  }
  // Update lead status to spoken
  const handleLeadStatus = async lead => {
    dispatch(setCurrentLead(lead))
  }

  // === Code for handling package expiry ===
  const updatePackage = async () => {
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/payment/updatePackage/${vendor._id}`, { expired: true })
  } 
  const updatePackageHandler = async () => {
    return await updatePackage()
  }
  const updateVendorPckage = async () => {
    return await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor._id}`, { hasPaid: {  package_name: vendor.hasPaid.package_name, expired: true }})
  }
  const updateVendorPackageHandler = async () => {
    return await updateVendorPckage()
  }

  // Code for handling missed lead
  const updateMissedLeadHandler = async lead_id => {
    const feedbackData = {
      feedback: { isMissed: true },
      vendor_id: vendor._id
    }
    const { data: { success } } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/leads/${lead_id}`, feedbackData)
  }

  useEffect(() => {
    if(vendor){
      const fetchedLeads = getLeadsByCategory(vendor.service.service_slug)
      setLeads(fetchedLeads)

      // logic for package expiry
      const currentDate = new Date()
      const expiryDate = new Date(vendor.hasPaid.expires_at)
      if(currentDate > expiryDate) {
        updatePackageHandler()
        updateVendorPackageHandler()
      }
    }
    if(vendor && vendor.isAuthenticated) {
      // Update vendor Profile
      dispatch(getVendorProfile())
    }
  },[vendor])

  useEffect(() => {
    // Logic for missed lead
    (vendor && vendor.leads) && vendor.leads.leads.forEach(lead => {
      const currentDate = new Date()
      const leadExpiry = new Date(lead.expiresAt)
      if((currentDate > leadExpiry) && !lead.lead_status.isMissed) {
        if(!lead.lead_status.isSpoken ? !lead.lead_status.isHired ? !lead.lead_status.isNotHired ? !lead.lead_status.jobCompleted ? true : false : false : false : false){
          updateMissedLeadHandler(lead._id)
        }
      }
    })
  })
  
  return (
    <>
      <BusinessNav />
      <div className="header">
        <h1>Lead Management</h1>
      </div>
      <MobileMenu />

      <div className="rin">
        <div className="cols-3 menus">
          <ul>
            <li>
              <div class="offer">
                <img
                  src={'/vendorBanner.gif'}
                  alt="BluewebSurfer" 
                  className="offer_img" />
                {/* <div class="post">Post Ads / Offer <i class="fa fa-arrow-right" aria-hidden="true"></i></div> */}
              </div>
            </li>
            <li><div class="offer">
                <img
                  src={'/appBanner.gif'}
                  alt="BluewebSurfer"
                  className="offer_img" 
                />
                {/* <div class="post">Post Ads / Offer <i class="fa fa-arrow-right" aria-hidden="true"></i></div> */}
              </div></li>
            {/* <li>Post Ads / Offer</li>
            <li>Post Ads / Offer</li> */}
          </ul>
        </div>
        
        {/* == Original Leads == */}
        {((vendor && vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_standard') || (vendor && vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_premium') && (vendor && vendor.hasPaid.expired)) && (<div style={{
          backgroundColor: '#f8d7da',
          display: 'inline-block',
          padding: '12px 24px',
          border: '1px solid #f5c6cb',
          color: '#721c24',
          width: '60%',
          textAlign: 'center',
          marginTop: 10
        }}><i class="fas fa-info-circle"></i> You package has expired</div>)}
        {(vendor && vendor.leads) && vendor.leads.leads.map(lead => (<div key={lead._id} className="cols-9">
          <h2>{lead.name} <span style={{
            fontSize: '13px',
            color: '#666',
            fontWeight: 'bold',
            marginLeft: '20px'
          }}>{`${moment(lead.createdAt).fromNow()}`}</span> <span style={{
            fontSize: '13px',
            color: '#555',
            fontWeight: 'bold',
            marginLeft: '10px',
            background: '#b2e3b2',
            padding: '6px 12px',
            borderRadius: '5px'
          }}>{leads && (lead.lead_status.isMissed ? 'Missed' : lead.lead_status.isSpoken ? 'Spoken' : lead.lead_status.isHired ? 'Hired' : lead.lead_status.isNotHired ? 'Not Hired' : lead.lead_status.jobCompleted ? 'Job Completed' : 'New')}</span> </h2>
          <div className="text">
            <span style={{ display: 'block' }}>Service: {lead.category_details.service}</span>
            <span style={{ display: 'block' }}>{lead.service_category}</span>
            <span style={{ display: 'block' }}>Location: {vendor && vendor.city}</span>
          </div>
          {(leads && lead.lead_status.isMissed) ? '' : (<a href="#numberModal" style={{
            border: 'none',
            display: 'inline-block',
            backgroundColor: '#e0e0e0',
            padding: '6px 12px',
            marginTop: '10px',
            fontSize: '15px',
            color: '#333',
            pointerEvents: `${((vendor && vendor.hasPaid) && !vendor.hasPaid.status) ? 'none' : 'auto'}`}}
            onClick={() => handleCurrentLeadStatus(lead)}> Call Now &nbsp;<i className="fas fa-phone"></i></a>)}
          {(vendor && vendor.hasPaid.status) ? (leads && (lead.lead_status.isMissed)) ? '' : (leads && (lead.lead_status.isSpoken || lead.lead_status.isHired || lead.lead_status.isNotHired || lead.lead_status.jobCompleted)) ? (<a href="#feedbackModal" name="feedback" style={{
            border: 'none',
            display: 'inline-block',
            backgroundColor: '#ff6262',
            padding: '6px 12px',
            marginTop: '10px',
            marginLeft: '10px',
            fontSize: '15px',
            color: '#fff' }}
            disabled={!vendor.hasPaid.status}
            onClick={() => handleLeadStatus(lead)}> Feedback &nbsp;<i class="fas fa-comments" /></a>) : '' : (leads && lead.lead_status.isMissed) ? '' : ''}
          {(vendor && vendor.hasPaid.status) ? '' : (leads && lead.lead_status.isMissed || (vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_standard') || (vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_premium')) ? '' : (<Link style={{
            border: 'none',
            backgroundColor: 'steelblue',
            padding: '6px 12px',
            marginTop: '10px',
            fontSize: '15px',
            color: '#fff',
            marginLeft: 10}}
            to={`${vendor.isVerified ? '/payment-screen' : '/kyc-screen'}`}> Pay Now</Link>)}
        </div>))}

        {/* == Fake Leads == */}
        {(vendor && ((vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_standard') || (vendor.hasPaid && vendor.hasPaid.package_name === 'deluxe_premium'))) ? (vendor && vendor.leads) ? '' : <div style={{
          backgroundColor: '#d4edda',
          display: 'inline-block',
          padding: '12px 24px',
          border: '1px solid #c3e6cb',
          color: '#155724',
          width: '60%',
          textAlign: 'center',
          marginTop: 10
        }}><i class="fas fa-info-circle"></i> You will soon start receiving leads</div> : leads.map(lead => (<div className="cols-9">
          <h2>{lead && lead.lead_name} <span style={{
            fontSize: '13px',
            color: '#666',
            fontWeight: 'bold',
            marginLeft: '20px'
          }}>{`${moment(vendor && vendor.createdAt).fromNow()}`}</span> <span style={{
            fontSize: '13px',
            color: '#555',
            fontWeight: 'bold',
            marginLeft: '10px',
            background: (vendor && vendor.hasPaid.status && ((vendor && vendor.hasPaid.package_name === 'basic') || (vendor && vendor.hasPaid.package_name === 'standard') || (vendor && vendor.hasPaid.package_name === 'premium'))) ? '#fbc19f' : (vendor && vendor.hasPaid.expired) ? '#fbc19f' : 'lightgreen',
            padding: '6px 12px',
            borderRadius: '5px'
          }}>{(vendor && vendor.hasPaid.status && ((vendor && vendor.hasPaid.package_name === 'basic') || (vendor && vendor.hasPaid.package_name === 'standard') || (vendor && vendor.hasPaid.package_name === 'premium'))) ? 'Taken' : (vendor && vendor.hasPaid.expired) ? 'taken' : 'New'}</span></h2>
          <div className="text">
            <span style={{ display: 'block' }}>Service: {lead.service}</span>
            <span style={{ display: 'block' }}>Category: {lead.service_category}</span>
            <span style={{ display: 'block' }}>Location: {vendor && vendor.city}</span>
          </div>
          {vendor && vendor.hasPaid.status && ((vendor && vendor.hasPaid.package_name === 'basic') || (vendor && vendor.hasPaid.package_name === 'standard') || (vendor && vendor.hasPaid.package_name === 'premium')) ? '' : (vendor && vendor.hasPaid.expired) ? '' : (<a href="#numberModal" style={{
            border: 'none',
            display: 'inline-block',
            backgroundColor: '#e0e0e0',
            padding: '6px 12px',
            marginTop: '10px',
            fontSize: '15px',
            color: '#333',
            cursor: 'not-allowed',
            pointerEvents: `${(vendor && !vendor.hasPaid.status) ? 'none' : 'auto'}`
          }}
            onClick={handleLeadStatus}
            disabled={(vendor && !vendor.hasPaid.status) && 'disabled'}> Call Now &nbsp;<i className="fas fa-phone"></i></a>)}
          {(vendor && vendor.hasPaid.status && ((vendor && vendor.hasPaid.package_name === 'basic') || (vendor && vendor.hasPaid.package_name === 'standard') || (vendor && vendor.hasPaid.package_name === 'premium'))) ? '' :  (vendor && vendor.hasPaid.expired) ? '' :(<Link style={{
            border: 'none',
            backgroundColor: 'steelblue',
            padding: '6px 12px',
            marginTop: '10px',
            fontSize: '15px',
            color: '#fff',
            marginLeft: 10}}
            to={`${(vendor && vendor.isVerified) ? '/payment-screen' : '/kyc-screen'}`}> Pay Now</Link>)}
        </div>))}

        {/*<div className="cols-3 right">
          <div className="aside">
            <h2>Dukanlist business app users</h2>
            <p>View more to see the Amazing benefits</p>
            <p>You can reach siliguri from all over West bengal.</p>
          </div>
        </div>*/}
      </div>
      {showNumberModal && (<div id="numberModal" class="overlay">
        <div class="popup">
          <h2>Number </h2>
          <a class="close" href="#" onClick={numberModalHandler}>&times;</a>
          <div class="content">
            <NumberModal /> 
          </div>
        </div>
      </div>)}
      {showFeedbackModal && (<div id="feedbackModal" class="overlay">
        <div class="popup">
          <h2>Feedback </h2>
          <a class="close" href="#" onClick={feedbackModalHandler}>&times;</a>
          <div class="content">
            <Feeds handleHideModal={feedbackModalHandler} /> 
          </div>
        </div>
      </div>)}
    </>
  );
};

export default Lead;
