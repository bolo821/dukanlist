import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom'
import BusinessList from './Businesslist'

const Business = () => {
  const history = useHistory()
  const [showModal, setShowModal] = useState(true)
  const showModalHandler = () => {
    setShowModal(!showModal)
    setTimeout(function(){
      setShowModal(true)
      history.push('/profilescreen#')
    }, 1000)
  }
  return (
    <div>
      <h4>
        <a className="button" href="#popup4">Verification Documents</a>
      </h4>
      {showModal && (<div id="popup4" className="overlay">
        <div className="popup">
          <h2>Verification Documents </h2>
          <a className="close" href="#">&times;</a>
          <div className="content">
          <BusinessList handleHideModal={showModalHandler} /> 
          </div>
        </div>
      </div>)} 
  </div>
  );
}

export default Business;
