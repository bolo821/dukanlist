import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateVendorPhotos } from '../actions/vendorActions'

const PhotoList = ({ handleHideModal }) => {
    const dispatch = useDispatch()
    const [vendorImage, setVendorImage] = useState()
    const submitHandler = async e => {
        e.preventDefault()

        if(vendorImage) {
            const formData = new FormData()
            formData.append('vendorImage', vendorImage)
            dispatch(updateVendorPhotos(formData))

            console.log('== I am running ===')
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
                    onChange={e => setVendorImage(e.target.files[0])}
                    filename="vendorImage" />
                <button class="uk-button uk-button-default" type="buttons" tabindex="-1">Select</button>
            </form>
        </div>
    );
}

export default PhotoList;
