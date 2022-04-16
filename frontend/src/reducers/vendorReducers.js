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

export const vendorReducer = ( state={}, action ) => {
    const { type, payload } = action
    switch(type) {

        // === Vendor Register ===
        case VENDOR_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_REGISTER_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                vendor: payload.data
            }
        case VENDOR_REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }


        // === Vendor Login ===
        case VENDOR_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_LOGIN_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                vendor: payload.data
            }
        case VENDOR_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        
        // === Vendor Logout ===
        case VENDOR_LOGOUT_SUCCESS:
            localStorage.removeItem('vendorInfo');
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                vendor: null
            }
        case VENDOR_LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }


        // === Vendor Update Profile ===
        case VENDOR_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_UPDATE_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_UPDATE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        
        // === Vendor Photo Upload ===
        case VENDOR_PHOTO_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_PHOTO_UPLOAD_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_PHOTO_UPLOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        // === Vendor Photo Delete ===
        case 'VENDOR_PHOTO_DELETE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'VENDOR_PHOTO_DELETE_SUCCESS':
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case 'VENDOR_PHOTO_DELETE_FAIL':
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        
        // === Vendor Document Upload ===
        case VENDOR_DOCUMENT_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_DOCUMENT_UPLOAD_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_DOCUMENT_UPLOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        
        // === Vendor Certificate Upload ===
        case VENDOR_CERTIFICATE_UPLOAD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_CERTIFICATE_UPLOAD_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_CERTIFICATE_UPLOAD_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        // === Vendor Certificate Upload ===
        case VENDOR_PROFILE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_PROFILE_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        // === Update Vendor Payment Status ===
        case VENDOR_UPDATE_PAYMENT_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_UPDATE_PAYMENT_STATUS_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_UPDATE_PAYMENT_STATUS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }

        // === Update Vendor KYC Status ===
        case VENDOR_UPDATE_KYC_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VENDOR_UPDATE_KYC_STATUS_SUCCESS:
            localStorage.setItem('vendorInfo', JSON.stringify(payload.data))
            return {
                ...state,
                loading: false,
                vendor: payload.data
            }
        case VENDOR_UPDATE_KYC_STATUS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload.error
            }
        default: 
            return state
    }
}