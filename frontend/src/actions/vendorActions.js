import axios from 'axios'
import {
    VENDOR_REGISTER_REQUEST,
    VENDOR_REGISTER_SUCCESS,
    VENDOR_REGISTER_FAIL,
    VENDOR_LOGIN_REQUEST,
    VENDOR_LOGIN_SUCCESS,
    VENDOR_LOGIN_FAIL,
    VENDOR_LOGOUT_SUCCESS,
    VENDOR_LOGOUT_FAIL,
    VENDOR_UPDATE_REQUEST,
    VENDOR_UPDATE_SUCCESS,
    VENDOR_UPDATE_FAIL,
    VENDOR_PHOTO_UPLOAD_REQUEST,
    VENDOR_PHOTO_UPLOAD_SUCCESS,
    VENDOR_PHOTO_UPLOAD_FAIL,
    VENDOR_DOCUMENT_UPLOAD_REQUEST,
    VENDOR_DOCUMENT_UPLOAD_SUCCESS,
    VENDOR_DOCUMENT_UPLOAD_FAIL,
    VENDOR_CERTIFICATE_UPLOAD_REQUEST,
    VENDOR_CERTIFICATE_UPLOAD_SUCCESS,
    VENDOR_CERTIFICATE_UPLOAD_FAIL,
    VENDOR_PROFILE_REQUEST,
    VENDOR_PROFILE_SUCCESS,
    VENDOR_PROFILE_FAIL,
    VENDOR_UPDATE_PAYMENT_STATUS_REQUEST,
    VENDOR_UPDATE_PAYMENT_STATUS_SUCCESS,
    VENDOR_UPDATE_PAYMENT_STATUS_FAIL,
    VENDOR_UPDATE_KYC_STATUS_REQUEST,
    VENDOR_UPDATE_KYC_STATUS_SUCCESS,
    VENDOR_UPDATE_KYC_STATUS_FAIL
} from '../constants/vendorConstants'

export const vendorRegister = vendorDetails => async dispatch => {
    try {
        dispatch({ type: VENDOR_REGISTER_REQUEST })

        const config = {
            headers: { 
                'Content-Type': 'application/json' 
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/vendors`, vendorDetails, config)
        dispatch({ type: VENDOR_REGISTER_SUCCESS, payload: data })

    } catch(err) {
        const errResponse = err.response && err.response.data.error
        dispatch({ type: VENDOR_REGISTER_FAIL, payload: errResponse })
    }
}

export const vendorLogin = vendorDetails => async dispatch => {
    try {
        console.log('== vendorDetails ==', vendorDetails)
        dispatch({ type: VENDOR_LOGIN_REQUEST })

        const config = {
            headers: { 
                'Content-Type': 'application/json' 
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/auth/login`, vendorDetails, config)
        dispatch({ type: VENDOR_LOGIN_SUCCESS, payload: data })

    } catch(err) {
        dispatch({ type: VENDOR_LOGIN_FAIL, payload: err.response.data.error })
    }
}

export const vendorLogout = () => dispatch => {
    try {
        dispatch({ type: VENDOR_LOGOUT_SUCCESS })
    } catch(err) {
        dispatch({ type: VENDOR_LOGOUT_FAIL, payload: 'Some error occured' })
    }
}

export const getVendorProfile = () => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_PROFILE_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor && vendor._id}`)
        dispatch({ type: VENDOR_PROFILE_SUCCESS, payload: data })
    } catch(err) {
        console.log('== Error ==:',err.response)
        dispatch({ type: VENDOR_PROFILE_FAIL, payload: (err.response.data && err.response.data.error) })
    }
}

export const updateVendorProfile = vendorData => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_UPDATE_REQUEST })
        const config = {
            headers: { 
                'Content-Type': 'application/json' 
            }
        }
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}`, vendorData, config)
        dispatch({ type: VENDOR_UPDATE_SUCCESS, payload: data })

    } catch(err) {
        dispatch({ type: VENDOR_UPDATE_FAIL, payload: err.response.data.error })
    }
}

export const updateVendorPhotos = vendorPhoto => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_PHOTO_UPLOAD_REQUEST })
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/photos`, vendorPhoto)
        dispatch({ type: VENDOR_PHOTO_UPLOAD_SUCCESS, payload: data })
    } catch(err) {
        dispatch({ type: VENDOR_PHOTO_UPLOAD_FAIL })
    }
}

export const deleteVendorPhotos = vendorPhoto => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: 'VENDOR_PHOTO_DELETE_REQUEST' })
        const { data } = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor._id}/photos/${vendorPhoto}`)
        dispatch({ type: 'VENDOR_PHOTO_DELETE_SUCCESS', payload: data })
    } catch(err) {
        dispatch({ type: 'VENDOR_PHOTO_DELETE_FAIL' })
    }
}

export const updateVendorDocuments = vendorDocument => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_DOCUMENT_UPLOAD_REQUEST })
        
        if(vendorDocument.type === 'bank_proof'){
            const { data } =  await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/documents/bank_proof`, vendorDocument.data)
            dispatch({ type: VENDOR_DOCUMENT_UPLOAD_SUCCESS, payload: data })
        } 
        if(vendorDocument.type === 'id_proof'){
            const { data } =  await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/documents/id_proof`, vendorDocument.data)
            dispatch({ type: VENDOR_DOCUMENT_UPLOAD_SUCCESS, payload: data })
        }
        if(vendorDocument.type === 'business_proof'){
            const { data } =  await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/documents/business_proof`, vendorDocument.data)
            dispatch({ type: VENDOR_DOCUMENT_UPLOAD_SUCCESS, payload: data })
        }
    } catch(err) {
        dispatch({ type: VENDOR_DOCUMENT_UPLOAD_FAIL })
    }
}

export const updateVendorCertificates = vendorCertificate => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_CERTIFICATE_UPLOAD_REQUEST })
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/certificates`, vendorCertificate)
        dispatch({ type: VENDOR_CERTIFICATE_UPLOAD_SUCCESS, payload: data })
    } catch(err) {
        dispatch({ type: VENDOR_CERTIFICATE_UPLOAD_FAIL })
    }
}

export const updatePaymentStatus = paymentDetails => async (dispatch, getState) => {
    try {
        console.log('== I am running from  update payment ==')
        const { packageAmount, expires_at } = paymentDetails
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_UPDATE_PAYMENT_STATUS_REQUEST })
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/paymentStatus`, { hasPaid: { status: true, package_name: (packageAmount === 3000) ? 'basic' : (packageAmount === 6000) ? 'standard' : 'premium', expires_at: expires_at } })
        dispatch({ type: VENDOR_UPDATE_PAYMENT_STATUS_SUCCESS, payload: data })
    } catch(err) {
        dispatch({ type: VENDOR_UPDATE_PAYMENT_STATUS_FAIL })
    }
}

export const updateKYCStatus = () => async (dispatch, getState) => {
    try {
        const { vendorInfo: { vendor } } = getState()
        dispatch({ type: VENDOR_UPDATE_KYC_STATUS_REQUEST })
        const { data } = await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor.id}/paymentStatus`, { hasKYCSubmitted: true})
        dispatch({ type: VENDOR_UPDATE_KYC_STATUS_SUCCESS, payload: data })
    } catch(err) {
        dispatch({ type: VENDOR_UPDATE_KYC_STATUS_FAIL })
    }
}

export const getNewVendorProfile = vendorID => async (dispatch, getState) => {
    try {
        dispatch({ type: VENDOR_PROFILE_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendorID}`)
        dispatch({ type: VENDOR_PROFILE_SUCCESS, payload: data })
    } catch(err) {
        dispatch({ type: VENDOR_PROFILE_FAIL, payload: { error: 'Some error occurred' } })
    }
}