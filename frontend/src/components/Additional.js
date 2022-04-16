import React from "react";
import AdditionalList from "./AdditionalList";
import "./newadd.css";

const Additional = () => {
  return (
    <div>
      <h4>
        <a className="button" href="#popup6">
          Additional Update
        </a>
      </h4>

      <div id="popup6" className="overlay" style={{ zIndex: 10 }}>
        <div className="popup1">
          <h2>Additional Update </h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <AdditionalList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
