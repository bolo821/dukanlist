import React from 'react';
import './paymentmethods.css'

const PaymentMethods = () => {
    return (
        <div>
            <form action="/action_page.php">
            
<div className="pay">  <input type="checkbox" className="payment" id="vehicle1" name="vehicle1" value="Cash"/> Cash</div>
<div className="pay"><input type="checkbox" className="payment" id="vehicle1" name="vehicle1" value="Credit / Debit"/> Credit / Debit </div>
<div className="pay"><input type="checkbox" className="payment" id="vehicle1" name="vehicle1" value="Net Banking"/> Net Banking </div>
<div className="pay"><input type="checkbox" className="payment" id="vehicle1" name="vehicle1" value="UPI (BHIM, G Pay etc)"/> UPI (BHIM, G Pay etc) </div>
<br />
  <input type="submit" className="buttons" value="Submit"/>
</form>

        </div>
    );
}

export default PaymentMethods;
