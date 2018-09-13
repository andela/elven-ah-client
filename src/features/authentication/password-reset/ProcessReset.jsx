import React from 'react';
import { connect } from 'react-redux';
import './password-reset.css';

const ProcessReset = () => (
  <div className="container my-4">
    <h2>Please wait ......</h2>
  </div>
);

const mapStateToProps = state => ({
  location: state.router.location,
});

export default connect(mapStateToProps)(ProcessReset);
