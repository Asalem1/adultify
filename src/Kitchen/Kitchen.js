import React, { Component } from 'react';
import './Kitchen.css';
import logo from '../logo.svg';
import Cooking from './Cooking/Cooking';
import Equipment from './Equipment/Equipment';

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
        <Cooking />
        <Equipment />
      </div>
    );
  }
}

export default Kitchen;
