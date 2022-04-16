import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ 
        border: 'none'
      }}>
        <Navbar.Brand href="#home">
          <img src={'/logo.png'} className="brandLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      </Navbar>
    </div>
  );
}

export default Home;
