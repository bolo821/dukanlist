import React from 'react'
import Event from '../components/Event'

import Footer from '../components/Footer'

// import BusinessNav from '../components/BusinessNav'
import Header from '../components/Header'

export default function EventScreen() {
    return (
        <div>
            <Header />
           <Event />
           <div style={{padding:40}}>
           <h3 style={{fontSize:40}}>Our Best Photos & Celebrations</h3>
           
           <div className="container" style={{
            //    boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 16px 14px', 
            //    background: '#fff',
            //    borderRadius: 10,
               width: 1500,
               padding: 10
            }}>
               <p style={{ fontSize: 20 }}>Coming Soon...</p>
           </div>
           </div>
          
           <Footer />
          
        </div>
    )
}
