import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calculator from './components/calculator.js';
import NotFound from './components/notFound.js';
import Navigation from './components/navigation.js';
import Home from './components/home.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Navigation />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/calculator" component={Calculator} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
        </Router>
    );
  }
}

export default App;
