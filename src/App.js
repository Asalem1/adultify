import React, { Component } from 'react';
import Home from './Home/Home';
import Kitchen from './Kitchen/Kitchen';
import Bank from './Bank/Bank';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Kitchen" component={Kitchen}></Route>
          <Route exact path="/Bank" component={Bank}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
