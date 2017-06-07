import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/Galeries_Lafayette.svg';

class Navigation extends Component {
  render() {
    return (
        <ul className="menu expanded">
          <li><img src={logo} className="logo_gl" alt="logo" /></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
    );
  }
}

export default Navigation;




