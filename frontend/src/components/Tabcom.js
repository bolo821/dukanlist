import React from "react";
import "./tabcom.css";

const Tabcom = () => {
  return (
    <div>
      <div id="line-multiple">
        <h3>Traffic Deaths Per 100,000 Persons, 1951-1959</h3>

        <chart
          data="#traffic"
          map-xy="year deathsPer100000"
          scale-x-linear="1951 1959"
          scale-y-linear="6 16"
        >
          <guide-y></guide-y>
          <guide-x></guide-x>
          <groups by="state">
            <line></line>
          </groups>
          <groups by="state">
            <points></points>
          </groups>
          <annotation data-deaths-per100000="12.9" data-year="1959">
            NY
          </annotation>
          <annotation data-deaths-per100000="10" data-year="1959">
            CT
          </annotation>
          <annotation data-deaths-per100000="11" data-year="1959">
            MA
          </annotation>
          <annotation data-deaths-per100000="9" data-year="1959">
            RI
          </annotation>
        </chart>
      </div>
    </div>
  );
};

export default Tabcom;
