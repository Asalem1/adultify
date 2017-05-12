import React, { Component } from 'react';
import Bank from './Bank/Bank';
import Employment from './Employment/Employment';
import Home from './Home/Home';
import Insurance from './Insurance/Insurance';
import Kitchen from './Kitchen/Kitchen';
import Navigation from './Navigation/Navigation';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Navigation />
          <Route path="/Bank" component={Bank}></Route>
          <Route path="/Employment" component={Employment}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Insurance" component={Insurance}></Route>
          <Route path="/Kitchen" component={Kitchen}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
