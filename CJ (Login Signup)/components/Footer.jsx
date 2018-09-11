import React from 'react';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <div className="text-center authNav">
      <footer className="text-center">
        <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><a href="#" className="menuLink">HELP</a></span>
        <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><a href="#" className="menuLink">PRIVACY</a></span>
        <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><a href="#" className="menuLink">TERMS</a></span>
        <span className="col-md-3 col-sm-2 col-xs-2 menuItem"><a href="#" className="menuLink">ABOUT</a></span>
      </footer>
    </div>
  );
}

export default Footer;
