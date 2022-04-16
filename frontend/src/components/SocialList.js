import React, { useState } from 'react'
import EdiText from 'react-editext'
import './todo.css'

const SocialList = ({ socialData, handleVendorSocial }) => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: '',
    twitter: '',
    youtube: '',
    linkedin: ''
  })
  
  const handleFacebook = val => {
    handleVendorSocial({ social_information: {facebook: val} })
  }
  const handleTwitter = val => {
    handleVendorSocial({ social_information: {twitter: val} })
  }
  const handleInstagram = val => {
    handleVendorSocial({ social_information: {instagram: val} })
  }
  const handleLinkedin = val => {
    handleVendorSocial({ social_information: {linkedin: val} })
  }

  return <>
    <EdiText
      className="button"
      type='text'
      value={`${(socialData && socialData.facebook) ? socialData.facebook : 'Enter your facebook link'}`}
      onSave={handleFacebook} />

  <EdiText
    className="button"
      type='text'
      value={`${(socialData && socialData.twitter) ? socialData.twitter : 'Enter your twitter link'}`}
      onSave={handleTwitter} />

    <EdiText
      className="button"
      type='text'
      value={`${(socialData && socialData.instagram) ? socialData.instagram : 'Enter your instagram link'}`}
      onSave={handleInstagram} />

    <EdiText
      className="button"
      type='text'
      value={`${(socialData && socialData.linkedin) ? socialData.linkedin : 'Enter your linkedin link'}`}
      onSave={handleLinkedin} />
  </>
  
}

export default SocialList