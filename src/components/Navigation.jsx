import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../styles.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-transparent bg-transparent navigation">
      <a className="navbar-brand logo" href='/'>
         {/* <img src={logo} alt="Drive logo" height="30" /> */}
      </a>
      <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <button className="order-now-button btn btn-danger">Order Now</button>
      <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav ml-auto'>
        <li className='nav-item'><Link to="/">Home</Link></li>
        <li className='nav-item'><Link to="/about">About Us</Link></li>
        <li className='nav-item'><Link to="/menu">Menu</Link></li>
      </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;








