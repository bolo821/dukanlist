import React, { useState, useEffect }  from 'react';
import axios from 'axios'
import Razorpay from 'razorpay'
import moment from 'moment'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { updatePaymentStatus } from '../actions/vendorActions'
import { getVendorProfile } from '../actions/vendorActions'
import './slider.css'

const Slider = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { vendor } = useSelector(state => state.vendorInfo)
    const { vendorInfo } = useSelector(state => state)
    const [paymentStatus, setPaymentStatus] = useState()

    // == Razorpay checkout script ==
	const loadScript = (src) => {
		return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
	}
    const packageHandler = async packageAmount => {
		const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        // creating a new order
        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/createOrder`, { amount: 1 });

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_live_OiP8OwONzhErW6",
            amount: amount.toString(),
            currency: currency,
            name: "Dukaan List",
            description: "Package Payment",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/verifyPayment`, data);
                // alert(result.data.msg);
                
                if(result.data.msg === 'success') {
                    let expiryDate = ''
                    if(packageAmount === 3000) {
                        expiryDate = Date.now() + 84 * 24 * 3600 * 1000
                    }
                    if(packageAmount === 6000) {
                        expiryDate = Date.now() + 168 * 24 * 3600 * 1000
                    }
                    if(packageAmount === 15000) {
                        expiryDate = Date.now() + 336 * 24 * 3600 * 1000
                    }
                    const packageData = {
                        vendor_id: vendor._id,
                        order_id: order_id,
                        package: {
                            package_name: (packageAmount === 3000) ? 'basic' : (packageAmount === 6000) ? 'standard' : 'premium',
                            package_price: 1
                        },
                        expires_at: expiryDate,
                    }

                    // If payment successfully verified, create new package for a vendor
                    const { data: { success, data, message } } = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/payment/createPackage/${vendor._id}`, packageData)

                    // If package successfully created, update vendor 'hasPaid' to 'true'
                    if(success && message === 'Package created successfully') {
                        if(success) dispatch(updatePaymentStatus({ packageAmount: packageAmount, expires_at: data.expires_at}))
                        // history.push('/payment-screen')
                    }
                }

                if(packageAmount === 3000) setPaymentStatus({ package: 'basic', status: 'Paid' })
                if(packageAmount === 6000) setPaymentStatus({ package: 'standard', status: 'Paid' })
                if(packageAmount === 15000) setPaymentStatus({ package: 'premium', status: 'Paid' })
            },
            theme: {
                color: "#1abc9c",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
	}

    const updatePackage = async () => {
        return await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/payment/updatePackage/${vendor._id}`, { expired: true })
    } 
    const updatePackageHandler = async () => {
        return await updatePackage()
    }
    const updateVendorPckage = async () => {
        return await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/vendors/${vendor._id}`, { hasPaid: {  package_name: vendor.hasPaid.package_name, expired: true }})
    }
    const updateVendorPackageHandler = async () => {
        return await updateVendorPckage()
    }
    useEffect(() => {
        if(!vendorInfo.isAuthenticated) history.push('/selectscreen')
        if(vendor){
            const currentDate = new Date()
            const expiryDate = new Date(vendor.hasPaid.expires_at)
            if(currentDate > expiryDate) {
                updatePackageHandler()
                updateVendorPackageHandler()
            }
        }
        // dispatch(getVendorProfile())

    },[vendor])

    return (
        <div>
            <div class="cantainer ">
                <h1 style={{ marginTop: '30px', color: '#444' }}>Choose your investment</h1>
                <div class="package" style={{ marginTop: '25px' }}>
                    <div class="package__item">
                        <div class="card">
                            <div class="package__header">
                            <div class="package__name">Basic</div>
                        </div>
                        <div class="package__body">
                            <div class="package__price-container">
                                <div class="package__price">Rs 3,000.00</div>
                            </div>
                            <ul>
                                <li>Total 50 leads.</li>
                                <li>Per lead cost ₹60/-</li>
                                <li>GST not included</li>
                                <li>Time duration 3 months</li>
                                <li>If vendor contact with customer then those lead will be counted</li>
                                {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'basic' && !vendor.hasPaid.expired)) && (<li style={{ color: '#777' }}>Expires in: {moment(vendor.hasPaid.expires_at).format('MMMM Do YYYY, h:mm a')}</li>)}
                            </ul>
                        </div>
                        <div class="package__footer">
                            <button onClick={() => packageHandler(3000)}>
                                {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'basic' && !vendor.hasPaid.expired)) ? 'Paid' : 'Pay Now'}
                            </button>
                        </div>
                    </div>
                </div>
            
                <div class="package__item">
                    <div class="card">
                        <div class="package__header">
                            <div class="package__name">Standard</div>
                        </div>
                    <div class="package__body">
                        <div class="package__price-container">
                            <div class="package__price package__price--sm package__price--monthly">Rs 6,000.00</div>
                        </div>
                        <ul>
                            <li>Total 120 leads.</li>
                            <li>Per lead cost ₹50/-</li>
                            <li>GST not included</li>
                            <li>Time duration 6 months</li>
                            <li>If vendor contact with customer then those lead will be counted</li>
                            {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'standard' && !vendor.hasPaid.expired)) && (<li style={{ color: '#777' }}>Expires in: {moment(vendor.hasPaid.expires_at).format('MMMM Do YYYY, h:mm a')}</li>)}
                        </ul>
                    </div>
                    <div class="package__footer">
                        <button onClick={() => packageHandler(6000)}>
                            {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'standard' && !vendor.hasPaid.expired)) ? 'Paid' : 'pay Now'}
                        </button>
                    </div>

            </div>

            </div>
            <div class="package__item">
                <div class="card">
                <div class="package__header">
                    <div class="package__name">Premium</div>
                </div>
                <div class="package__body">
                    <div class="package__price-container">
                        <div class="package__price package__price--sm package__price--monthly">Rs 15,000.00</div>
                    </div>
                    <ul>
                        <li>Total 375 leads.</li>
                        <li>Per lead cost ₹40/-</li>
                        <li>GST not included</li>
                        <li>Time duration 12 months</li>
                        <li>If vendor contact with customer then those lead will be counted</li>
                        {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'premium' && !vendor.hasPaid.expired)) && (<li style={{ color: '#777' }}>Expires in: {moment(vendor.hasPaid.expires_at).format('MMMM Do YYYY, h:mm a')}</li>)}
                    </ul>
                </div>
                <div class="package__footer">
                    <button onClick={() => packageHandler(15000)}>
                        {(vendor && (vendor.hasPaid && vendor.hasPaid.package_name === 'premium' && !vendor.hasPaid.expired)) ? 'Paid' : 'Pay Now'}
                    </button>
                </div>

            </div>
            

            </div>
        </div>
    </div>
        </div>
    );
}

export default Slider;
