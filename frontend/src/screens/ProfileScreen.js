import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
import Profile from '../components/Profile';

const ProfileScreen = () => {
    const history = useHistory()
    const { isAuthenticated } = useSelector(state => state.vendorInfo)
    useEffect(() => {
        if(!isAuthenticated) history.push('/selectscreen')
    },[isAuthenticated])

    return (
        <div>
            <Profile />
        </div>
    );
}

export default ProfileScreen;
