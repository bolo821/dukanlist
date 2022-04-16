import {
    LEAD_SET_CURRENT_REQUEST,
    LEAD_SET_CURRENT_SUCCESS,
    LEAD_SET_CURRENT_FAIL
} from '../constants/leadConstants'

export const leadReducer = ( state={}, action ) => {
    const { type, payload } = action
    switch(type) {
        case LEAD_SET_CURRENT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LEAD_SET_CURRENT_SUCCESS:
            return {
                ...state,
                lead: payload,
                loading: false
            }
        case LEAD_SET_CURRENT_FAIL:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}