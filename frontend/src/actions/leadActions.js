import axios from 'axios'
import {
    LEAD_SET_CURRENT_REQUEST,
    LEAD_SET_CURRENT_SUCCESS,
    LEAD_SET_CURRENT_FAIL
} from '../constants/leadConstants'

export const setCurrentLead = leadID => async dispatch => {
    try {
        dispatch({ type: LEAD_SET_CURRENT_REQUEST })
        dispatch({ type: LEAD_SET_CURRENT_SUCCESS, payload: leadID })

    } catch(err) {
        dispatch({ type: LEAD_SET_CURRENT_FAIL, payload: 'Some error occurred' })
    }
}