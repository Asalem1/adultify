import React, { Component } from 'react';
import './Bank.css';
import logo from '../logo.svg';
import Loan from './Loan_Application/Loan';
import Credit from './Build_Credit/Credit';

class Bank extends Component {
  render() {
    return (
      <div className="Bank">
        <div className="Bank-header">
          <img src={logo} className="Bank-logo" alt="logo" />
          <h2>Welcome to Adultify</h2>
        </div>
        <p className="Bank-intro">
        In the Bank!
        </p>
        <Credit />
        <Loan />
      </div>
    );
  }
}

export default Bank;
