import React, { Component } from 'react';
//  import { Form, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './style.css';
import Profile from '../profile/index';

class Home extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Profile />
      </div>
    );
  }
}

export default Home;
