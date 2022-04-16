import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { updateVendorDocuments } from '../actions/vendorActions'

const PhotoList = ({ handleHideModal }) => {
    const dispatch = useDispatch()
    const [vendorBankProof, setVendorBankProof] = useState()
    const [vendorIdProof, setVendorIdProof] = useState()
    const [vendorBusinessProof, setVendorBusinessProff] = useState()

    const submitHandler = async e => {
      e.preventDefault()

      if(vendorBankProof) {
        const formData = new FormData()
        formData.append('vendorDocument', vendorBankProof)
        dispatch(updateVendorDocuments({ type:'bank_proof', data:formData }))
      }
      if(vendorIdProof) {
        const formData = new FormData()
        formData.append('vendorDocument', vendorIdProof)
        dispatch(updateVendorDocuments({ type:'id_proof', data:formData }))
      }
      if(vendorBusinessProof) {
        const formData = new FormData()
        formData.append('vendorDocument', vendorBusinessProof)
        dispatch(updateVendorDocuments({ type:'business_proof', data:formData }))
      }

      // Run Hide Modal
      handleHideModal()
    }
    return (
        <div>
            <form 
              class="js-upload" 
              uk-form-custom 
              onSubmit={submitHandler} 
              encType="multipart/form-data">

              {/* === Bank Proof === */}
              <label>Upload Bank Proof</label>
              <input 
                  type="file" 
                  onChange={e => setVendorBankProof(e.target.files[0])}
                  filename="vendorDocument" 
                  style={{marginBottom: '15px'}} />

              {/* === Business Proof === */}
              <label>Upload Business Proof</label>
              <input 
                  type="file" 
                  onChange={e => setVendorBusinessProff(e.target.files[0])}
                  filename="vendorDocument" 
                  style={{marginBottom: '15px'}} />

              {/* === ID Proof === */}
              <label>Upload ID Proof</label>
              <input 
                  type="file" 
                  onChange={e => setVendorIdProof(e.target.files[0])}
                  filename="vendorDocument" 
                  style={{ display: 'block' }} />

              <input type="submit" value="Submit" style={{
                border: '1px solid #888',
                backgroundColor: '#f0f0f0',
                padding: '6px 12px',
                marginTop: '15px'
              }} />
            </form>
        </div>
    );
}

export default PhotoList;
