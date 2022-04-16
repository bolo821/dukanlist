import React from 'react';
import "./testimonial.css"

const Testimonial = () => {
    return (
        <div>
            <div class="testimonials">
        <h1><b>Testimonials</b></h1>
        <div class="test-body">
            <div class="item">
                <img src={'/userIcon.png'} />
                <div class="name">Gupta Repair Store</div>
                <small class="desig">AC Service & Repair</small>
                <div class="share"></div>
                <p>I am delighted to say that DukanList did the great job. I am fully satisfied working with them. </p>
            </div>
            <div class="item">
                <img src={'/userIcon.png'} />
                <div class="name">Kajol Interior</div>
                <small class="desig">Home Interior Designer</small>
                <div class="share"></div>
                <p> Best company in industry! Would highly recommend for first time small business owners. Working with them is one of the best decisions I have made. </p>
            </div>
            <div class="item">
                <img src={'/userIcon.png'} />
                <div class="name">Ghosh Furniture</div>
                <small class="desig">Furniture & Sofa Repair</small>
                <div class="share"></div>
                <p>I like working with companies that make any process easy and simple and are there to hold your hand and guide you through the process. Working with them is one of the best decisions I have made.  </p>
            </div>
        </div>
    </div>
        </div>
    );
}

export default Testimonial;
