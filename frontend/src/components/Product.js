// import { DesktopAccessDisabledSharp } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import AdditionalList from "./AdditionalList";

import "./product.css";

const Product = () => {
  return (
    <div>
      {/* <Header />
      <MobileMenu /> */}
      <ul class="tabs">
        <li tabindex="1" class="tab1" focus>
          <a href="#!" className="tab__link category_section">
            <img src={'/workplace.png'} className="category_icon" />
            <span>Home & Office <i class="fas fa-angle-down"></i></span>
          </a>

          <div class="tab__content">
            <div class="row">
              <div class="newcols">
                <h2>Home & Office Product Services</h2>
                <div class="flex">
                  <h3>
                    <div id="popup6" class="overlay" style={{ zIndex: 10 }}>
                      <div class="popup1">
                        <h2>Additional Update </h2>
                        <a class="close" href="#">
                          &times;
                        </a>
                        <div class="content">
                          <AdditionalList />
                        </div>
                      </div>
                    </div>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/ac-dealers">AC Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/air-purifier-dealers">Air Purifier Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/air-purifier-dealers">Air Cooler Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/water-purifier-dealers">Water Purifier Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/ups-dealers">UPS Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/gas-water-heater-dealers">Gas Water Heater Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/gas-geyser-dealers">Gas Geyser Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/sign-board-agencies">Sign Board Agencies</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/photocopier-dealers">Photocopier Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/washing-machine-dealers">Washing machine dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/online-ups-dealers">Online UPS Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/industrial-voltage-stabilizers-dealers">Industrial Voltage Stabilizers Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/generator-dealers">Generators Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/epabx-dealers">EPABX Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/bean-bag-dealers">Bean Bag Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/tv-dealers">TV Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/satellite-tv-dealers">Satellite TV Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/projector-dealers">Projector Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/music-system-dealers">Music System Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/iPod-dealers">iPod Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/home-theater-dealers">Home Theatre Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dvd-player-dealers">DVD Player Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/audio-visual-equipment-dealers">Audio Visual Equipment Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fan-dealers">Fan Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/exhaust-fan-dealers">Exhaust Fan Dealers</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
              
                <h2>Kitchen Appliances</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/water-dispenser-dealers">Water Dispenser Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/water-cooler-dealers">Water Cooler Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/refrigerator-dealers">Refrigerator Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/modular-kitchen-dealers">Modular Kitchen Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/mixer-grinder-dealers">Mixer Grinder Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/microwave-oven-dealers">Microwave Oven Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/induction-stove-dealers">Induction Stove Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/induction-stove-repair-services">Induction Stove Repair Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/gas-stove-dealers">Gas Stove Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/flask-dealers">Flask Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dishwasher-dealers">Dishwasher Dealers</Link>
                  </h3>
                </div>
               
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/induction-stove-dealers">Induction Stove Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/hob-cooktops-repair-services">Hob & Cooktops Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/cook-service">cook Service</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/grinder-repair-services">Grinder Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dishwasher-repair-services">Dishwasher Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/cooking-range-repair-services">Cooking Range Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/cookers-stoves-repair-services">Cookers & Stove Repairs</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <h2>Other Services</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/curtains-blinds-dealers">Blinds Installation Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/iPad-dealers">iPad Dealers</Link>
                  </h3>
                </div>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/cameras-dealers">Cameras Dealers</Link>
                  </h3>
                </div> */}
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/hire-verified-drivers">hire Verified Drivers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/baby-sitter">Baby Sitting Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/electrical-motor-winding-services">Electrical Motor Winding Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/tiffin-services">Tiffin Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/caterers-services">Catering Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/water-tank-cleaning-services">Water Tank Cleaning Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/pest-control-services">Pest Control Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/marble-cleaning-polishing-services">Marble Cleaning Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/housekeeping-services">Housekeeping Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/garbage-cleaning-services">Garbage Cleaning Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dry-cleaning-services">Dry Cleaning Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/cleaning-services">Cleaning Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/women-beauty-parlours">Women Home Beautician Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/maid-services">Maid Services</Link>
                  </h3>
                </div>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Driver Services</Link>
                  </h3>
                </div> */}
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/domestic-help-services">Domestic Help Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/website-service">Website Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/web-hosting-companies">Web Hosting Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/web-design-development">Web Development Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/web-designers">Web Design Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/software-development-services">Software Development Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/printing-services">Printing Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/logo-designerss">Logo Design Services</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/internet-service-providers">Internet Service Providers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/industrial-design-services">Industrial Design Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/bulk-email-software-services">Bulk Email Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/international-courier-services">International Courier Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/domestic-courier-services">Domestic Courier Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/industrial-flooring-contractors">Air Charter Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/building-consultants-contractors">Building Maintenance Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/industrial-flooring-contractors">Industrial Flooring Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fire-fighting-equipment-services">Fire Fighting Equipment AMC Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fire-alarms-system-dealers">fire Alarms System Dealers</Link>
                  </h3>
                </div>
                <br />
                <h2>Safety & Security</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/cctv-camera-dealers">CCTV Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/safety-door-dealers">Safety Door Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/burglar-alarms-dealers">Burglar Alarms Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/firefighting-equipment-dealers">Firefighting Equipment Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/security-system-dealers">Security System Dealers</Link>
                  </h3>
                </div>
                <br />
                {/* <h2>Electronics</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Printers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Mobiles</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Laptops</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Computers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Cameras</Link>
                  </h3>
                </div> */}
                <br />
                {/* <h2>Automotive</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Bikes</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Cars</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Security System Dealers</Link>
                  </h3>
                </div> */}
              </div>
              <div class="newcols">
                <h2>Home Appliances Repair</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/ac-service-repair">AC Service & Repair</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/air-cooler-repair">Air Cooler Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/air-cooler-dealers">Air Cooler Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/tv-repair">TV Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/washing-machine-repair">Washing Machine Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/refrigerator-repair">Refrigerator Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/microwave-oven-dealers">Microwave Oven Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/home-theater-repair">Home Theatre Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/audio-system-repair">Audio System Repairs</Link>
                  </h3>
                </div>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Electric Chimney Repairs</Link>
                  </h3>
                </div> */}
              </div>
              <div class="newcols">
                <h2>Office & Other Appliances Repair</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/geyser-repair-services">Geyser & Heater Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/inverter-repair-services">Inverter Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/generator-repair-services">Generator Repairs</Link>
                  </h3>
                </div>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Blu Ray Player Repairs</Link>
                  </h3>
                </div> */}
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/blu-ray-player-repair">Computer Motherboard Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/motherboard-repair-services">Motherboard Repair Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/conference-solution-repair-service">Conference Solution Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/sofa-repair-services">Furniture and Sofa Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/currency-counting-machine-service">Currency Counting Machine Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/coffee-and-tea-vending-machine-repair-services">Coffee / Tea Vending Machine Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/photocopier-repair">Photocopier Repairs</Link>
                  </h3>
                </div>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/">EPABX Repairs</Link>
                  </h3>
                </div> */}
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/laptop-charger-repair">Laptop Charger Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dvd-cd-player-repair">DVD & CD Player Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/desktop-repair-services">Desktop Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/computer-scanner-repair">Computer Scanners Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/computer-printer-repair">Computer Printer Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/computer-amc-services">Computer AMC Service </Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/computer-repair">Computer Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/laptop-repair">Laptop Repairs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/camera-repair">Camera Repair Service</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/elevator-repair">Elevator Repairs</Link>
                  </h3>
                </div>
                <h2>Interior Design</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/camera-repair">Camera Repair Service</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/elevator-repair">Elevator Repairs</Link>
                  </h3>
                </div>
              </div>
              {/* <div class="newcols">
                <h2>Home Products</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Wet Grinders</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Water Purifiers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Water Heaters</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Washing Machines</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">TVs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Refrigerators</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Modular Kitchen</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Microwave Ovens</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Juicer Mixer Grinders</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Home Theatres</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Dishwashers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Air Coolers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">ACs</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Weighing Scales</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Office Furniture</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Fans</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Bathroom & Sanitaryware Fittings</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Air Compressors</Link>
                  </h3>
                </div>
                <h2>Solar Products</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Solar Products</Link>
                  </h3>
                </div>
                <h2>Others</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Gifts</Link>
                  </h3>
                </div>
              </div> */}
            </div>
          </div>
        </li>

        <li tabindex="1" class="tab1" focus>
          <a href="#!" class="tab__link category_section">
            <img src={'/renovation.png'} className="category_icon" />
            <span>Home Improve <i class="fas fa-angle-down"></i></span>
          </a>

          <div class="tab__content">
            <div class="row">
              <div class="newcols">
                <h2>Interior Designs</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/interior-designers-decorators-dealers">Interior Designers & Decorators</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/home-interior-designers-dealers">Home interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/office-interior-designers-dealers">Office Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/showroom-interior-designers-dealers">Showroom Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/shop-interior-designers-dealers">Shop Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/living-room-interior-designers-dealers">Living Room Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/bathroom-interior-designers-dealers">Bathroom Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/bedroom-interior-designers-dealers">Bedroom Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/kitchen-interior-designers-dealers">Kitchen Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/3d-interior-designers-dealers">3D Interior Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/flooring-contractors-dealers">Flooring Contractors</Link>
                  </h3>
                </div>
                <br />
                <h2>Interior Decoration</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/modular-kitchen-dealers">Modular Kitchen Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wooden-modular-kitchen-dealers">Wooden Modular Kitchen Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/pvc-modular-kitchen-dealers">Pvc Modular Kitchen Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/painting-contractors-dealers">Painting Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/house-painting-dealers">House Painting Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/interior-painting-dealers">Interior Painting Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/exterior-painting-dealers">Exterior Painting Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/textured-painting-dealers">Textured Painting Contractors</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <h2>Building Construction</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/building-consultants-dealers">Building Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/aluminium-fabricators-dealers">Aluminium Fabricators</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/rain-water-harvesting-dealers">Rain Water Harvesting Consultants</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fencing-contractors-dealers">Fencing Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/swimming-pool-contractors-dealers">Swimming Pool Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/waterproofing-contractors-dealers">Waterproofing Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/terrace-waterproofing-contractors">Terrace Waterproofing Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/roofing-contractors">Roofing Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/plumbers-contractors">Plumbers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/vastu-consultant">Vastu Consultants</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <h2>Architect</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/architects">Architects</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/residential-architects">Residential Architects</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/commercial-architects">Commercial Architects</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/urban-architects">Urban Design Architects</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <h2>Home Decor</h2>
                {/* <div class="flex">
                  <h3>
                    <Link to="/lead-info/">Furniture Dealers</Link>
                  </h3>
                </div> */}
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/landscaping-contractors">Landscaping Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/borewell-contractors">Borewell Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/carpet-dealers">Carpet Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/solar-productt-dealers">Solar Product Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/home-automation-system">Home Automation System Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/bathroom-accessories-sanitaryware">Bathroom Accessories Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/doors-windows-dealers">Doors & Windows Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/enclosures-partitions-dealers">Enclosures Partitions Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/curtains-blinds-dealers">Curtains & Blinds Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fixtures-fittings-dealers">Fixtures & Fittings Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/construction-material-dealers">Construction Material Dealers</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/*  */}
        <li tabindex="1" class="tab1" focus>
          <a href="#!" class="tab__link category_section">
            <img src={'/planner.png'} className="category_icon" />
            <span>Events & Parties <i class="fas fa-angle-down"></i></span>
          </a>

          <div class="tab__content">
            <div class="row">
              <div class="newcols">
                <h2>Show Events</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fashion-show-beauty-pageant-organisers-dealers">Fashion Show & Beauty Pageant Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/game-show-organisers-dealers">Games Show Event Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/ghazal-show-orchestra-dealers">Ghazal Show Orchestra</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/laser-show-organisers-dealers">Laser Show Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/magic-show-organisers-dealers">Magic Show Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/mimicry-show-organisers-dealers">Mimicry Show Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/roadshow-organisers-dealers">Roadshows Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/stage-show-organisers-dealers">Stage Shows Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/sufi-music-orchestra-dealers">Sufi Show Orchestra</Link>
                  </h3>
                </div>
                <br />
                <h2>Wedding Planners</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/candid-wedding-photographers-dealers">Candid Wedding Photographers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/christian-wedding-planners-dealers">Christian Wedding Planners</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/men-women-wedding-clothes-dealers">Men & Women Wedding Clothes Dealers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/party-wedding-contractors-dealers">Party & Wedding Contractors</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-catering-services-dealers">Wedding Caterers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-invitation-card-designers-dealers">Wedding Invitation Card Designers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-music-bands-designers-dealers">Wedding Music Bands</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-photographers-dealers">Wedding Photographers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-videographers-dealers">Wedding Videographers</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
              <h2>Party Rentals / Suppliers</h2>
              <div class="flex">
                  <h3>
                    <Link to="/lead-info/costume-rentals-dealers">Costume Rentals</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/fire-cracker-suppliers-dealers">Fire Cracker Suppliers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/marriage-halls-dealers">Marriage Halls</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/banquet-halls-dealers">Party & Banquet Hall</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/party-lawns-farmhouses-dealers">Party Lawns & Farmhouses</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/shamiana-rentals-dealers">Shamiana Rentals</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/tents-tarpaulin-rentals-dealers">Tents & Tarpaulins Suppliers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-party-electric-appliances-dealers">Wedding Party Electric Appliances Rentals</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/wedding-party-equipment-supplies-dealers">Wedding Party Equipment Supplies</Link>
                  </h3>
                </div>
              </div>
              <div class="newcols">
                <h2>Party Services</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/astrologers-dealers">Astrologers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/caterers-dealers">Catering Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/dj-service-dealers">DJ Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/lights-and-sounds-service-dealers">Lights & Sounds Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/registrar-offices-dealers">Marriage Registrar Offices</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/marriage-bureau-dealers">Matrimonial Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/orchestra-music-organizers-dealers">Orchestra & Music Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/photographers-videographers-dealers">Photographers & Videographers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/priests-purohits-dealers">Priests & Purohits</Link>
                  </h3>
                </div>
                <br />
                <h2>Corporate Parties</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/conference-seminar-organisers-dealers">Conference & Seminar Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/corporate-event-organisers-dealers">Corporate Event Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/exhibition-and-trade-fair-organisers-dealers">Exhibition and Trade Fair Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/product-launch-and-promotion-services-dealers">Product Launch and Promotion Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/sports-event-organisers-dealers">Sports Event Organisers</Link>
                  </h3>
                </div>
                

              </div>
              <div class="newcols">
                <h2>Event Organisers</h2>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/balloon-decorators-dealers">Balloon Decorators</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/birthday-party-organisers-dealers">Birthday Party Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/entertainment-event-companies-dealers">Entertainment Event Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/event-and-venue-decoration-services-dealers">Event and Venue Decoration Services</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/kitty-party-organisers-dealers">Kitty Party Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/party-wedding-flower-decorators-dealers">Party & Wedding Flower Decorators</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/party-organisers-dealers">Party Organisers</Link>
                  </h3>
                </div>
                <div class="flex">
                  <h3>
                    <Link to="/lead-info/stage-decorators-dealers">Stage Decorators</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </li>

       
      </ul>

      {/* <img
        src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="Nature"
        class="responsive"
      />
      <Footer /> */}
    </div>
  );
};

export default Product;
