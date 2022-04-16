import React, { useState } from 'react';
import axios from 'axios'
import './form.css'

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const { name, email, phone, subject, message } = formData
  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    const { data: { message } } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/sendEmail`, formData)

    // Clear all fields
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setLoading(false)
  }

  return (
    <div>
      <section className="contact-page-sec">
        <div className="container3">
          <div className="row">
            <div className="col-md-4" >
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marked"></i>
                  </div>
                  <div style={{ paddingLeft:'5px', paddingRight:'5px'}}  className="contact-info-text">
                    <h4>Address</h4>
                    <span>Shiv Mandir (Saradapally, Kadamtala), Siliguri, West Bengal</span> 
                    <span>P.O- Kadamtala, Siliguri, P.S- Matigara</span> 
                  </div>
                </div>            
              </div>          
            </div>          
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>E-mail</h4>
                    <span>admin@dukanlist.com</span> 
                    <span>dukanlist2021@gmail.com</span>
                  </div>
                </div>            
              </div>                
            </div>                
            <div className="col-md-4">
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-info-text">
                    <h4>Customer Service</h4>
                    <span>Everyday - 10:00 am - 10:00 pm</span>
                  </div>
                </div>            
              </div>          
            </div>          
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-page-form" method="post">
                <h2>Get in Touch</h2> 
                <form onSubmit={handleSubmit}>
                  <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input 
                        type="text" 
                        placeholder="Your Name" 
                        name="name" 
                        value={name}
                        onChange={handleInputChange} 
                        required />
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input 
                        type="text" 
                        placeholder="Your Email.." 
                        name="email"
                        value={email}
                        onChange={handleInputChange} 
                        required />
                    </div>
                  </div>                             
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input 
                        type="text" 
                        placeholder="Phone Number" 
                        name="phone"
                        value={phone}
                        onChange={handleInputChange} 
                        required />
                    </div>
                  </div>  
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="single-input-field">
                      <input 
                        type="text" 
                        placeholder="Subject" 
                        name="subject"
                        value={subject}
                        onChange={handleInputChange} 
                        required />
                    </div>
                  </div>                
                  <div className="col-md-12 message-input">
                    <div className="single-input-field">
                      <textarea  
                        placeholder="Write Your Message" 
                        name="message"
                        value={message}
                        onChange={handleInputChange} 
                        required ></textarea>
                    </div>
                  </div>                                                
                  <div className="single-input-fieldsbtn">
                    <input 
                      type="submit" 
                      disabled={loading}
                      value={`${loading ? 'Submitting...' : 'Submit'}`} />
                  </div>                          
                </div>
                </form>   
              </div>      
            </div>
            <div className="col-md-4">        
              <div className="contact-page-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14256.61911519659!2d88.35654558459484!3d26.707501874006383!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe78f7395c1fcc50c!2sBlueweb%20Surfer%20-%20IT%20company%20in%20siliguri!5e0!3m2!1sen!2sin!4v1634991237519!5m2!1sen!2sin" width="100%" height="534" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>  
              </div>   
            </div>        
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;

