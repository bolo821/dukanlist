import  React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../data/categories'
import "./Header.css";

const Header = () => {
  const [categories, setCategories] = useState([])
  const [service, setService] = useState('none')
  useEffect(() => {
    const fetchedCategories = getAllCategories()
    setCategories(fetchedCategories)
  },[])
  return (
  <>
    <div style={{ backgroundColor: '#fff' }}>
      <div class="box">
        <img src={'/hero2.png'} alt="image"  style={{height:500, objectFit:"cover"}}/>
        <div class="wrap">
        <h2 className="hero_text">Have some doubt? Just search for it.</h2>
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
      </div>
    </div>
    </>
  );
};

export default Header;
