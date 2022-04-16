import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          color: "#555",
          fontWeight: "600",
          marginTop: "40px",
        }}
      >
        Our Services
      </h2>
      <div className="row5">
        <div className="column5">
          <div className="container3">
            <div className="content">
              <div>

              <Link to="/interior-screen"><div className="content-overlay"></div></Link>
                
                <img
                  className="content-image"
                  src="https://limashandyman.com/wp-content/uploads/sites/1394/2015/06/slide-2.jpg"
                />

                <div className="content-details">
                <Link to="/interior-screen"><h3 className="content-title">Interior Designers</h3></Link>
                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="column5">
          <div className="container3">
            <div className="content">
              <div>
              <Link to="/event-screen"><div className="content-overlay"></div></Link>
                <img
                  className="content-image"
                  src="https://www.redoakevents.com/wp-content/uploads/2017/06/stlouis-event-planning.jpg"
                />
                <Link to="/interior-screen">
                  <div className="content-details">
                  <Link to="/event-screen"><h3 className="content-title">Event</h3></Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
