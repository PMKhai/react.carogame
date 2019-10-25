import React, { Component } from 'react';
//  import { Form, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './style.css';
import Profile from '../profile/index';

class Home extends Component {
  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.fecthUser();
  }

  render() {
    const { email, gender } = this.props.home;
    console.log(gender);
    return (
      <div className="d-flex justify-content-center">
        <Profile email={email} gender={gender} />
      </div>
    );
  }
}

export default Home;
