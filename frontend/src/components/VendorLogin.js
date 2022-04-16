import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, Form, Col, Row, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { vendorLogin } from '../actions/vendorActions'
import axios from 'axios'

const OTPModal = ({show, handleClose}) => {
  let history = useHistory();
  const dispatch = useDispatch()
  const { isAuthenticated, vendor } = useSelector(state => state.vendorInfo)
  
  const [number, setNumber] = useState(null)
  const [otp, setOTP] = useState(null)
  const [OTPDetails, setOTPDetails] = useState({})
  const [OTPVerificationDetails, setOTPVerificationDetails] = useState({})
  const [isOTPInfoRequired, setIsOTPInfoRequired] = useState(true)

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

  const submitHandler = e => {
    e.preventDefault()
    if(OTPVerificationDetails.Status === 'Success') dispatch(vendorLogin({ number }))
  }
  useEffect(() => {
    if(isAuthenticated && vendor) history.push('/ad-min')
  },[vendor])
  return (
    <>
      <Modal
        show={show}
        style={{ marginTop: "6%" }}
        dialogClassName="modal-60w"
        aria-labelledby="example-custom-modal-styling-title"
        className="loginModal">
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title" class="modalHeader-Title">
            <h5>Sign In</h5>
            <CloseButton style={{marginLeft: '360px'}} onClick={handleClose} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="number" style={{ display:'flex', margin: 0 }}>
                <Form.Control
                  type="text"
                  placeholder="Enter Number" 
                  className="vendorLoginInput" 
                  onChange={e => setNumber(e.target.value)} />
                <button 
                  style={{ 
                    marginLeft: 5,
                    border: 'none',
                    background: '#1abc9c',
                    color: '#fff',
                    width: '150px'}}
                  onClick={sendOTP}>Send OTP</button>
              </Form.Group>
              {(isOTPInfoRequired && OTPDetails.Status === 'Success') && (
                <span style={{ display:'block', color: '#1abc9c' }}>OTP has been sent!</span>
              )}
              {OTPDetails.Status === 'Success' && (
                <Form.Group controlId="number" style={{ 
                  display:'flex', 
                  margin: '10px 0 0 0' }}>
                  <Form.Control
                    type="text"
                    placeholder="Enter OTP" 
                    className="vendorLoginInput"  
                    onChange={e => setOTP(e.target.value)} 
                    onFocus={() => setIsOTPInfoRequired(false)} />
                  <button style={{ 
                    marginLeft: 5,
                    border: 'none',
                    background: '#1abc9c',
                    color: '#fff',
                    width: '150px'}}
                    onClick={verifyOTP}>Verify OTP</button>
                </Form.Group>
              )}
              {OTPVerificationDetails.Status === 'Error' 
                ? <span style={{ color: 'red' }}>Invalid OTP</span> 
                : OTPVerificationDetails.Status === 'Success'
                  ? <span style={{ color: '#1abc9c' }}>OTP Successfully Verified</span>
                  : null
              }
              <Button 
                className="mt-3 ml-0" 
                type="submit" 
                variant="primary"
                disabled={!(OTPVerificationDetails.Status === 'Success')}>Sign In</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OTPModal;
