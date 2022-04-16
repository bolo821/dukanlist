import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { vendorLogout } from '../actions/vendorActions'
import './businessnav.css'

const BusinessNav = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isAuthenticated, vendor } = useSelector(state => state.vendorInfo)
  const handleLogout = () => dispatch(vendorLogout())

  // useEffect(() => {
  //   if(isAuthenticated) history.push('/selectscreen')
  // }, [])
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/ad-min">
          <img src={'/logo.png'} className="brandLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            {(isAuthenticated && vendor) && (
              <>
                <Nav.Link href="/ad-min">Leads</Nav.Link>
                <Nav.Link href="/profilescreen">Profile</Nav.Link>
                <NavDropdown title={vendor.name} id="basic-nav-dropdown" class="font-weight-bold">
                  {vendor.hasPaid && (vendor.hasPaid.package_name === 'deluxe_premium' || vendor.hasPaid.package_name === 'deluxe_basic') ? '' : (<NavDropdown.Item><Link to="/payment-screen">Billing</Link></NavDropdown.Item>)}
                  <NavDropdown.Item onClick={handleLogout}>Log out</NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default BusinessNav;
