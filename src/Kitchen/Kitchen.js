import React, { Component } from 'react';
import './Kitchen.css';
import logo from '../logo.svg';

class Kitchen extends Component {
  render() {
    return (
      <div className="Kitchen">
        <div className="Kitchen-header">
          <img src={logo} className="Kitchen-logo" alt="logo" />
          <h2>Welcome to Adultify</h2>
        </div>
        <p className="Kitchen-intro">
          In the Kitchen!
        </p>
      </div>
    );
  }
}

export default Kitchen;
