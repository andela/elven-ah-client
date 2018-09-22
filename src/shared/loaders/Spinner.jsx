import React from 'react';
import spinner from '../assets/img/spinner.svg';

const Spinner = () => (
  <nav className="loader">
    <img src={spinner} alt="loading........" />
  </nav>
);

export default Spinner;
