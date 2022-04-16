import React from "react";
import "./paymentset.css";
import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

const PaymentSet = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <div class="content8">
        <h3>Premium Packages</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          incidunt rerum officia culpa! Omnis reprehenderit dolores nemo,
          architecto nostrum ullam praesentium nihil, explicabo ea incidunt
          ratione natus facere? Ut, autem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          incidunt rerum officia culpa! Omnis reprehenderit dolores nemo,
          architecto nostrum ullam praesentium nihil, explicabo ea incidunt
          ratione natus facere? Ut, autem.
        </p>
        <h4>Contact Us</h4>
        <br />
        <h4><i class="fa fa-phone" aria-hidden="true"> </i> Toll-Free No: <span>18003093679</span>
          
        </h4>
        <h4><i class="fa fa-envelope" aria-hidden="true"></i> Gmail: <span>abc@gmail.com</span>
          
        </h4>
        <h4><i class="fab fa-whatsapp"></i> Whatsapp no: <span>0000000000</span> (Only Chat)
          
        </h4>
      </div>
    </>
  );
};
export default PaymentSet;
