import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/footer.css';

const Footer = () => (
  <div className="text-center authNav">
    <footer className="text-center">
      <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><Link to="/" className="menuLink">HELP</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><Link to="/" className="menuLink">PRIVACY</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><Link to="/" className="menuLink">TERMS</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><Link to="/" className="menuLink">ABOUT</Link></span>
    </footer>
  </div>
);

export default Footer;
