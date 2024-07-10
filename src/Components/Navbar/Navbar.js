import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
     <div className='content1'>
          <div className="navbar">
            <Link to="/perfumes">CANDLES</Link>
            <Link to="/products">SHOP</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/products">CART</Link>
          </div>
          <div className='Left'>
            <Link to="/">AURA ALURE</Link>
          </div>
        </div>
  );
};

export default Navbar;
