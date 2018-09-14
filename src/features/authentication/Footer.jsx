import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="auth-nav">
    <footer className="text-center">
      <span className="col-md-3 col-sm-2 col-xs-2 menu-item"><Link to="/" className="menu-link">HELP</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menu-item"><Link to="/" className="menu-link">PRIVACY</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menu-item"><Link to="/" className="menu-link">TERMS</Link></span>
      <span className="col-md-3 col-sm-2 col-xs-2 menu-item"><Link to="/" className="menu-link">ABOUT</Link></span>
    </footer>
  </div>
);

export default Footer;
