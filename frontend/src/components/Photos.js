import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import PhotoList from './PhotoList';

const Photos = () => {
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
      <h4><a class="button" href="#popup3" >Select Photos</a></h4>
      {showModal && (<div id="popup3" class="overlay">
        <div class="popup">
          <h2>Select Photos </h2>
          <a class="close" href="#">&times;</a>
          <div class="content">
            <PhotoList handleHideModal={showModalHandler} /> 
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default Photos;
