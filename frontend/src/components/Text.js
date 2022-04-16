import React from "react";
import { Link } from 'react-router-dom'
import "./text.css";

const Text = () => {
  return (
    <div>
    <h1><b>Frequently Asked Questions</b></h1>
    <br />
      <div class="contents">
        {/* <h1><i class="fa fa-arrow-right" aria-hidden="true"></i> Dukanlist Qustions?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          nihil nostrum explicabo veniam quo reprehenderit amet optio provident!
          Quibusdam, voluptatum. Atque facere corporis in dolor rerum impedit
          nisi nihil suscipit.
        </p>
        <br /> */}
        <h1>Why should I register my business on Dukanlist?</h1>
        <p>
          As a business owner, you want to get as more leads as possible. So as to increase your business profitability and get more genuine leads, you can register your business on DukanList.
        </p>
      </div>
      <br />
      <div class="contents">
        {/* <h1><i class="fa fa-arrow-right" aria-hidden="true"></i> Dukanlist Qustions?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          nihil nostrum explicabo veniam quo reprehenderit amet optio provident!
          Quibusdam, voluptatum. Atque facere corporis in dolor rerum impedit
          nisi nihil suscipit.
        </p>
        <br /> */}
        <h1>How can I list my business on DukanList?</h1>
        <p>
          To begin your sign up, just visit our <Link to="/selectscreen">Join Business</Link>, and fill up your details to begin. Or if having any problems regarding acount setup, contact our support team for the account setup process.
        </p>
      </div>
      <br />
      <div class="contents">
        {/* <h1><i class="fa fa-arrow-right" aria-hidden="true"></i> Dukanlist Qustions?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
          nihil nostrum explicabo veniam quo reprehenderit amet optio provident!
          Quibusdam, voluptatum. Atque facere corporis in dolor rerum impedit
          nisi nihil suscipit.
        </p>
        <br /> */}
        <h1>How will DukanList solve customer's problem?</h1>
        <p>
          Customer is provided with various options to choose from. Customer will fill and submit his/her details. Any vendor receiving customer details will call the corresponding customer to provide solutions.
        </p>
      </div>
    </div>
  );
};

export default Text;
