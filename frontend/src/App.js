import  React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomeScreen  from './screens/HomeScreen';
import SelectScreen from './screens/SelectScreen';
import AdminScreen from './screens/AdminScreen';

import ProfileScreen from './screens/ProfileScreen';
// import LeadProfile from './components/LeadProfile';
import ProductScreen from './screens/ProductScreen';
import LeadInfo from './components/LeadInfo'
import Kycscreen from './screens/Kycscreen'
import PaymentScreen from './screens/PaymentScreen'
import VerificationScreen from './screens/VerificationScreen'
import EventScreen from './screens/EventScreen'
import InteriorScreen from './screens/InteriorScreen';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header /> */}
      <main className="py-0">
      <Route path="/" component={HomeScreen} exact />
      <Route path="/selectscreen" component={SelectScreen}  exact/>
      <Route path="/ad-min" component={AdminScreen} exact/>     
      <Route path="/profilescreen" component={ProfileScreen} exact/> 
      <Route path="/productscreen" component={ProductScreen} exact/>
      <Route path="/lead-info/:category" component={LeadInfo} exact/>
      <Route path="/kyc-screen" component={Kycscreen} exact/>
      <Route path="/payment-screen" component={PaymentScreen} exact/>
      <Route path="/verification-screen" component={VerificationScreen} exact/>
      <Route path="/event-screen" component={EventScreen} exact/>
      <Route path="/interior-screen" component={InteriorScreen} exact/>
      <Route path="/privacy-policy" component={PrivacyPolicy} exact/>
      </main>
      </Router>
    </div>
  );
}

export default App;
