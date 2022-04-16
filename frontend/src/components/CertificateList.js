import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { updateVendorCertificates } from '../actions/vendorActions'

const CertificateList = ({ handleHideModal }) => {
    const dispatch = useDispatch()
    const [vendorCertificate, setVendorCertificate] = useState()
    const submitHandler = async e => {
        e.preventDefault()

        if(vendorCertificate) {
            const formData = new FormData()
            formData.append('vendorCertificate', vendorCertificate)
            dispatch(updateVendorCertificates(formData))
            handleHideModal()
        }
    }
    return (
        <div>
            <form 
                class="js-upload" 
                uk-form-custom 
                onSubmit={submitHandler} 
                encType="multipart/form-data">

                <input 
                    type="file" 
                    onChange={e => setVendorCertificate(e.target.files[0])}
                    filename="vendorImage" />
                <button class="uk-button uk-button-default" type="buttons" tabindex="-1">Select</button>
            </form>
        </div>
    );
}

export default CertificateList;
