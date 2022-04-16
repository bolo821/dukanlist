import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { getNewVendorProfile } from '../actions/vendorActions'
import './Feeds.css'

export default function Feeds({ handleHideModal }) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { vendorInfo: { vendor }, leadInfo: { lead } } = useSelector(state => state)
  const [feedback, setFeedback] = useState({
    isSpoken: false,
    jobCompleted: false,
    isHired: false,
    isNotHired: false
  })
  const { jobCompleted, isHired, isNotHired } = feedback
  const handleChange = e => setFeedback({ [e.target.name]: true })
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      console.log('feedback', feedback)
      if(jobCompleted === false && isHired === false && isNotHired === false) {
        alert('Please select any one options')
      } else {
        const feedbackData = {
          feedback: {...feedback},
          vendor_id: vendor._id
        }
        console.log('== Feedback Data ==', feedbackData)
        await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/leads/${lead._id}`, feedbackData)
  
        // Dispatch action for new data
        dispatch(getNewVendorProfile(vendor._id))
      }
      
    } catch(err) {
      console.log(err.response.data)
    }

    // Run Hide Modal
    handleHideModal()
  }

  return (
    <form onSubmit={handleSubmit} >
      <label class="feeds">Hired
        <input 
          type="radio" 
          // checked={jobCompleted ? 'checked' : ''}
          value={jobCompleted ? jobCompleted : ''}
          name="isHired"
          onChange={handleChange} />
        <span class="checkmark"></span>
      </label>
      <label class="feeds">Not Hired
        <input 
          type="radio"
          // checked={isHired ? 'checked' : ''}
          value={isHired ? isHired : ''}
          name="isNotHired"
          onChange={handleChange} />
        <span class="checkmark"></span>
      </label>
      <label class="feeds">Job Completed
        <input 
          type="radio"
          // checked={isNotHired ? 'checked' : ''}
          value={isNotHired ? isNotHired : ''}
          name="jobCompleted"
          onChange={handleChange} />
        <span class="checkmark"></span>
      </label>
      <input type="submit" className="submit" value="Submit" />
    </form>
  )
}
