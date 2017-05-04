import React, { Component } from 'react';
import logo from '../logo.svg';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Adultify</h2>
        </div>
        <p className="Home-intro">
          Plantr is an online gardening and outdoor decor service, enabling people to create and plan their seasonal gardens based on regional variations and personal needs. Plantr was started by a group of passionate urban farmers looking to maximize their lots while incorporating the tech they use to help connect with their garden. It is through the passion of our users that Plantr is able to tell the story of who we are and how we connect with one another. Click <a href='#'>here</a> to get started.
        </p>
      </div>
    );
  }
}

export default Home;
