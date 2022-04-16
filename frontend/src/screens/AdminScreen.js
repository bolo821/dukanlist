import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer';
import Lead from '../components/Lead';
import { getVendorProfile } from '../actions/vendorActions'


const AdminScreen = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { isAuthenticated } = useSelector(state => state.vendorInfo)
    useEffect(() => {
        if(!isAuthenticated) history.push('/selectscreen')
        dispatch(getVendorProfile())
        
    },[isAuthenticated])

    return (
        <div>
           <Lead />  
           <Footer />         
        </div>
    );
}

export default AdminScreen;
