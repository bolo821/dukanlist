import React from 'react';
import "./services.css"

const Services = () => {
    return (
        <div style={{ margin: '15px 0 30px' }}>
        <br />
        <h3 style={{ fontSize: '40px'}}><b>Services</b></h3>
            <div class="rows">
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i> */}
    <img src={'/workplace2.png'} className="category_icon" />
      <h5>Home & Office </h5>
      <span style={{ color: 'green', fontSize: 17 }}>Currently Available</span>
    </div>
  </div>

  <div class="Tabs">
    <div class="tab">
    {/* <i class="fa fa-calendar" aria-hidden="true"></i>    */}
    <img src={'/renovation2.png'} className="category_icon" />
     <h5>Home Improvement</h5>
     <span style={{ color: 'green', fontSize: 17 }}>Currently Available</span>
    </div>
  </div>
  
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>    */}
    <img src={'/planner2.png'} className="category_icon" />
     <h5>Events</h5>
     <span style={{ color: 'green', fontSize: 17 }}>Currently Available</span>
    </div>
  </div>
  
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>    */}
    <img src={'/rental.png'} className="category_icon" />
     <h5>Properties & Rentals</h5>
     <span style={{ color: 'red', fontSize: 17 }}>Coming soon</span>
    </div>
  </div>
</div>

<br/>
<div class="rows">
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>   */}
    <img src={'/training.png'} className="category_icon" />
    <h5>Education & Training</h5> 
    <span style={{ color: 'red', fontSize: 17 }}>Coming soon</span>
    </div>
  </div>

  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>    */}
    <img src={'/service.png'} className="category_icon" />
     <h5>Professional Services</h5>
     <span style={{ color: 'red', fontSize: 17 }}>Coming soon</span>
    </div>
  </div>
  
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>    */}
    <img src={'/travel.png'} className="category_icon" />
     <h5>Travel & Transport</h5>
     <span style={{ color: 'red', fontSize: 17 }}>Coming soon</span>
    </div>
  </div>
  
  <div class="Tabs">
    <div class="tab">
    {/* <i class="fas fa-building"></i>    */}
    <img src={'/health.png'} className="category_icon" />
     <h5>Health & Wellness</h5>
     <span style={{ color: 'red', fontSize: 17 }}>Coming soon</span>
    </div>
  </div>
</div>

        </div>
    );
}

export default Services;
