import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import './LeadInfo.css'
// import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { getServicesByCategory } from '../data/services'

const LeadInfo = props => {
  // let history = useHistory();
  const category = props.match.params.category
  const [services, setServices] = useState([])
  const dispatch = useDispatch()
  
  const [otp, setOTP] = useState(null)
  const [OTPDetails, setOTPDetails] = useState({})
  const [OTPVerificationDetails, setOTPVerificationDetails] = useState({})
  const [isOTPInfoRequired, setIsOTPInfoRequired] = useState(true)
  const [leadResponse, setLeadResponse] = useState(null)
  // console.log('isLeadResponse Present:', leadResponse['success'])

  const [service, setService] = useState('none')
  const [city, setCity] = useState('none')
  const [description, setDescription] = useState('')
  const [leadName, setLeadName] = useState('')
  const [leadNumber, setLeadNumber] = useState('')
  const [leadEmail, setLeadEmail] = useState('')

  // Submit Handler
  const submitHandler = async e => {
    e.preventDefault()
    try {
      console.log('=== Submit Handler Running ===')

      let newLead = {
        name: leadName,
        email: leadEmail,
        phone: leadNumber,
        category_details: {
          category: category,
          service: service,
          city: city,
          description: description
        },
        expiresAt: Date.now() + 3 * 3600 * 1000
      }

      console.log('New Lead:', newLead)
      const { data: { success, message } } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/filter`, newLead)
      setLeadResponse({ success, message })
      console.log({ success, message })
    } catch(err) {
      setLeadResponse({ success: false, error: err.response.data.error })
      console.log({ error: err.response.data.error })
    }
  }

  // Send OTP 
  const sendOTP = async e => {
  e.preventDefault()

  const { data: { Status, Details } } = await axios.get(`https://2factor.in/API/V1/690d098f-364d-11ec-a13b-0200cd936042/SMS/${leadNumber}/AUTOGEN`)
  setOTPDetails({ Status, Details }) 
}

  // Verify OTP
  const verifyOTP = async () => {
    try{
      const { data: { Status, Details } } = await axios.get(`https://2factor.in/API/V1/690d098f-364d-11ec-a13b-0200cd936042/SMS/VERIFY/${OTPDetails.Details}/${otp}`)
      setOTPVerificationDetails({ Status, Details })

    } catch(err) {
      const { Status, Details } = err.response.data
      setOTPVerificationDetails({ Status, Details })
    }
  }
  
  const falseHandler = () => {}

  useEffect(() => {
    const fetchedServices = getServicesByCategory(category)
    setServices(fetchedServices)
  }, [])
  return (<div className="leadInfo_wrapper">
    <Header />
    <div className="leadInfo_row">
      {!leadResponse ? (<>
        <div className="leadInfo_column" style={{ backgroundColor: '#f2f2f2' }}>
          <div className="leadInfo_container5">
            <form onSubmit={falseHandler}>
                <label>Select Your Service</label>
                <select name="service" value={service} onChange={e => setService(e.target.value)}>
                  <option value="none" selected disabled hidden>Service</option>
                  {services.map(service => (<option value={service}>{service}</option>))}
                </select>
                <label style={{ marginTop: '20px' }}>Select Your Location</label>
                <select name="city" value={city} onChange={e => setCity(e.target.value)}>
                    <option value="none" selected disabled hidden>City</option>
                    <option value="alipurduar sadar">Alipurduar</option>
                    <option value="falakata">Falakata</option>
                    <option value="kalchini">Kalchini</option>
                    <option value="kumarnagar">Kumarnagar</option>
                    <option value="madarihat">Madarihat</option>
                    <option value="jalpaiguri sadar">Jalpaiguri</option>
                    <option value="dhupguri">Dhupguri</option>
                    <option value="malbazar">Malbazar</option>
                    <option value="matiali">Matiali</option>
                    <option value="moynaguri">Moynaguri</option>
                    <option value="nagrakata">Nagrakata</option>
                    <option value="bankura sadar">Bankura</option>
                    <option value="khatra">Khatra</option>
                    <option value="bishnupur">Bishnupur</option>
                    <option value="suri sadar">Suri</option>
                    <option value="bolpur">Bolpur</option>
                    <option value="rampurhat">Rampurhat</option>
                    <option value="coochbiharsadar">Cooch Bihar</option>
                    <option value="mekhliganj">Mekhliganj</option>
                    <option value="mathabhanga">Mathabhanga</option>
                    <option value="tufanganj">Tufanganj</option>
                    <option value="dinhata">Dinhata</option>
                    <option value="gangarampur">Gangarampur</option>
                    <option value="balurghat">Balurghat</option>
                    <option value="darjeeling sadar">Darjeeling</option>
                    <option value="kurseong">Kurseong</option>
                    <option value="siliguri sadar">Siliguri</option>
                    <option value="Mirik">Mirik</option>
                    <option value="jhargram sadar">Jhargram</option>
                    <option value="jamda">Jamda</option>
                    <option value="kalimpong">Kalimpong</option>
                    <option value="gorubathan">Gorubathan</option>
                    <option value="bagda">Bagda</option>
                    <option value="amdanga">Amdanga</option>
                    <option value="barasat">Barasat</option>
                    <option value="barrackpur">Barrackpur</option>
                    <option value="basirhat">Basirhat</option>
                    <option value="deganga">Deganga</option>
                    <option value="habra">Habra</option>
                    <option value="howra">howra</option>
                    <option value="higalganj">Higalganj</option>
                    <option value="rajarhat">Rajarhat</option>
                    <option value="sandeshkhali">Sandeshkhali</option>
                    <option value="baduria">Baduria</option>
                    <option value="bangaon">Bangaon</option>
                    <option value="galighata">Galighata</option>
                    <option value="hasnabad">Hasnabad</option>
                    <option value="manikhan">Manikhan</option>
                    <option value="swarupnagar">Swarupnagar</option>
                    <option value="malda sadar">Malda</option>
                    <option value="chanchal">Chanchal</option>
                    <option value="baharampur">Baharampur</option>
                    <option value="domkol">Domkol</option>
                    <option value="jangipur">Jangipur</option>
                    <option value="kandi">Kandi</option>
                    <option value="krishnanagar sadar">Krishnanagar</option>
                    <option value="ranaghat">Ranaghat</option>
                    <option value="kalyani">Kalyani</option>
                    <option value="tehatta">tehatta</option>
                    <option value="medinipur sadar">Medinipur</option>
                    <option value="kharagpur">Kharagpur</option>
                    <option value="ghatal">Ghatal</option>
                    <option value="bardhaman sadar north">Bardhaman North</option>
                    <option value="bardhaman sadar south">Bardhaman South</option>
                    <option value="katwa">Katwa</option>
                    <option value="kalna">Kalna</option>
                    <option value="asansol">Asansol</option>
                    <option value="tamluk">Tamluk</option>
                    <option value="haldia">Haldia</option>
                    <option value="egra">Egra</option>
                    <option value="contai">Contai</option>
                    <option value="gmedinipur sadar">Medinipur </option>
                    <option value="purulia sadar">purulia </option>
                    <option value="jhalda">Jhalda</option>
                    <option value="raghunathpur">Raghunathpur</option>
                    <option value="baruipur">Baruipur</option>
                    <option value="diamond harbour">Diamond Harbour</option>
                    <option value="canning">Canning</option>
                    <option value="kakdwip">Kakdwip</option>
                    <option value="raiganj">Raiganj</option>
                    <option value="islampur">Islampur</option>
                    <option value="chinsura sadar">Chinsura </option>
                    <option value="serampur">Serampur</option>
                    <option value="chandan nagar">Chandan Nagar</option>
                    <option value="arambag">Arambag</option>
                    <option value="hawra sadar">Hawra </option>
                    <option value="uluberia">Uluberia</option>
                </select>
                <label>Description</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  className="leadInfo_desc"
                  style={{ 
                    height: '200px !important', 
                    marginTop: '30px' 
                  }}
                  value={description}
                  onChange={e => setDescription(e.target.value)}>
                </textarea>
            </form>
          </div>
        </div>
        <div className="leadInfo_column" style={{ backgroundColor: '#f2f2f2' }}>
          <div className="leadInfo_container6">
            <form onSubmit={submitHandler}>
              <label>Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                value={leadName} 
                onChange={e => setLeadName(e.target.value)} />
              <label style={{ marginTop: '10px' }}>Number</label>
              <div style={{ display: 'flex' }}>
              <input
                type="number"
                id="number"
                name="number"
                placeholder="Your Number"
                value={leadNumber} 
                style={{ marginTop: '0', backgroundColor: '#fff' }}
                onChange={e => setLeadNumber(e.target.value)} />
              <button 
                type="button"
                style={{ 
                  marginLeft: 5,
                  border: 'none',
                  background: '#1abc9c',
                  color: '#fff',
                  width: '150px',
                  height: '55px',
                  background: 'rgb(166, 249, 232)',
                  color: 'rgb(119, 119, 119)'
                }}
                  onClick={sendOTP}>Send OTP</button>
              </div>
              {(isOTPInfoRequired && OTPDetails.Status === 'Success') && (
                <span style={{ display:'block', color: '#1abc9c' }}>OTP has been sent!</span>
              )}
              {OTPDetails.Status === 'Success' && (
                <div style={{ 
                  display:'flex', 
                  margin: '10px 0 0 0' }}>
                  <input
                    type="text"
                    placeholder="Enter OTP" 
                    className="vendorLoginInput"  
                    onChange={e => setOTP(e.target.value)} 
                    onFocus={() => setIsOTPInfoRequired(false)} />
                  <button 
                    type="button"
                    style={{ 
                    marginLeft: 5,
                    border: 'none',
                    background: '#1abc9c',
                    color: '#fff',
                    width: '150px'}}
                    onClick={verifyOTP}>Verify OTP</button>
                </div>
              )}
              {OTPVerificationDetails.Status === 'Error' 
                ? <span style={{ color: 'red' }}>Invalid OTP</span> 
                : OTPVerificationDetails.Status === 'Success'
                  ? <span style={{ color: '#1abc9c' }}>OTP Successfully Verified</span>
                  : null
              }
                <label style={{ marginTop: '17px', display: 'block' }}>Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={leadEmail} 
                  onChange={e => setLeadEmail(e.target.value)} />
                <input 
                  type="submit" 
                  value="Submit"
                  disabled={!(OTPVerificationDetails.Status === 'Success')} 
                  style={{
                    padding: '12px 24px',
                    border: '1px solid #999',
                    color: '#555'}} 
                  className="leadInfo_disabled" />
            </form>
          </div>
        </div></>) : (leadResponse['error'] === 'Vendors not found') ? (<span style={{ 
            marginTop: '10%',
            marginBottom: '10%',
            fontSize: '40px', 
            backgroundColor: '#fff',
            padding: '10px',
            borderRadius: '5px' 
          }}><i class="far fa-frown"></i> Vendor Not Found</span>) : (<div style={{
          color: '#155724',
          backgroundColor: '#d4edda',
          borderColor: '#c3e6cb',
          padding: '12px 20px',
          margin: 'auto',
          borderRadius: '5px'
        }}>Details successfully submitted! Vendors will call you within 24 hours</div>)}
      </div>
    <Footer />
  </div>)
}

export default LeadInfo