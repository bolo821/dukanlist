import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom'
import CertificateList from './CertificateList';

const Certificate = () => {
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
      <h4><a class="button" href="#popup5">Upload Certificates</a></h4>
      {showModal && (<div id="popup5" class="overlay">
        <div class="popup">
          <h2>Upload Certificates </h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            <CertificateList handleHideModal={showModalHandler} /> 
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default Certificate;
