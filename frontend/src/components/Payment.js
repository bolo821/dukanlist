import React from 'react';
import PaymentMethods from './PaymentMethods'

const Payment = () => {
    return (
        <div>
             <h4>
        <a class="button" href="#popup2">
          Select Payment
        </a>
      </h4>

      <div id="popup2" class="overlay">
        <div class="popup">
          <h2>Payment Methods </h2>
          <a class="close" href="#">
            &times;
          </a>
          <div class="content">
           <PaymentMethods />
          </div>
        </div>
      </div>
        </div>
    );
}

export default Payment;
