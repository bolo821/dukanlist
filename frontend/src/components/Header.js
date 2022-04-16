import  React,{ useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import zIndex from "@material-ui/core/styles/zIndex";
// import Button from "@restart/ui/esm/Button";
import { getAllCategories } from '../data/categories'
import {
  Navbar,
  Nav,
 
} from "react-bootstrap";
import "./Header.css";

const Header = () => {
  const [categories, setCategories] = useState([])
  const [service, setService] = useState('none')
  useEffect(() => {
    const fetchedCategories = getAllCategories()
    setCategories(fetchedCategories)
  },[])
  return (
  
    <div style={{ backgroundColor: '#fff' }}>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="headerNavbar">
        <Navbar.Brand href="/">
          <img src={'/new-logo.png'} className="brandLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ backgroundColor: '#fff !important' }}>
          <Nav className="me-auto" style={{ backgroundColor: '#fff !important' }}></Nav>
          <Nav style={{ backgroundColor: '#fff !important' }}>
            <Nav.Link href="/" className="navbar_menu"><i className="fas fa-home"></i>Home</Nav.Link>
            <Nav.Link href="" className="navbar_menu"><i class="fas fa-mobile-alt"></i>Download App</Nav.Link>
            <Nav.Link href="/selectscreen" className="navbar_menu"><i class="fas fa-business-time"></i>Join Business</Nav.Link>
            {/* <Nav.Link href="/productscreen" className="navbar_menu">Products</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    
      {/* <div class="box">
        <img src={'/hero2.png'} alt="image"  style={{height:500, objectFit:"cover"}}/>
        <div class="wrap">
        <h2 className="hero_text">Lorem Ipsum Dolor Sit Amet</h2>
          <div class="barra">
            <form action="/search.html" class="search-wrapper cf">
              <select name="service" value={service} onChange={e => setService(e.target.value)} style={{ marginBottom: '12px' }}>
                <option value="none" selected disabled hidden>Service</option>
                {categories.map(category => (<option value={category.slug}>{category.name}</option>))}
              </select>
              <Link to={`/lead-info/${service}`} className="botton searchButton" type="submit"><i class="lni lni-search-alt searchIcon"></i></Link>
            </form> 
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
