import React from 'react';
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
    return (
        <div>
			<footer className="footer">
				<div className="container2">
					<div className="row2">
						<div className="footer-col">
							<h4>Sitesoch</h4>
							<ul style={{ paddingLeft: '0' }}>
								<li style={{ textAlign: 'left !important' }}><Link to="/">Home</Link></li>
								<li><Link to="/selectscreen">Join Business</Link></li>	
							</ul>
						</div>
						<div className="footer-col">
							<h4>Get Help</h4>
							<ul style={{ paddingLeft: '0' }}>
								<li>About</li>
								<li><Link to="/privacy-policy">Privacy Policy</Link></li>
							</ul>
						</div>
						<div className="footer-col">
							<h4>Address</h4>
							<ul style={{ paddingLeft: '0' }} className="footer_address">
								<li><p>Shiv Mandir (Saradapally, Kadamtala)</p></li>
								<li><p>P.O- Kadamtala, Siliguri, P.S- Matigara</p></li>
								<li><p>Dist: Darjeeling, PIN:734011, WB</p></li>
								<li><p>Toll Free Number: 18003093679</p></li>
								<li><p>Email: bws@bluewebsurfer.com</p></li>
								<li><p>GST Number: 19AAXFB5868Q1Z2</p></li>
							</ul>
						</div>
						<div className="footer-col" style={{ textAlign: 'center' }}>
							<h4>follow us</h4>
							<div className="social-links">
								{/* <a href=""><i className="fab fa-google"></i></a> */}
								<a href="https://www.facebook.com/BlueWeb2021"><i className="fab fa-facebook-f"></i></a>
								<a href="https://www.instagram.com/bluewebsurfer/"><i className="fab fa-instagram"></i></a>
								<a href="https://twitter.com/bluewebsurfer"><i className="fab fa-twitter"></i></a>
								<a href="https://www.linkedin.com/in/blueweb-surfer-a8819a212"><i className="fab fa-linkedin"></i></a>
							</div>
						</div>
					</div>
				</div>
				<div style={{ textAlign: 'center' }}>&copy; Blueweb Surfer. All rights reserved</div>
			</footer>
        </div>
    );
}

export default Footer;
