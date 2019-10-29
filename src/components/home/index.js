import React, { Component } from 'react';
//  import { Form, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './style.css';
import Profile from '../profile/index';

class Home extends Component {
  // eslint-disable-next-line camelcase
  // UNSAFE_componentWillMount() {
  //   this.props.fecthUser();
  // }

  constructor(props) {
    super(props);
    this.props.fecthUser();
  }

  render() {
    // eslint-disable-next-line object-curly-newline
    const { email, gender, picture, name } = this.props.home;
    let displayGender = null;
    console.log(gender);
    if (gender !== null) {
      // eslint-disable-next-line no-unused-expressions
      gender === true ? (displayGender = 'Male') : (displayGender = 'Female');
    }
    return (
      <div className="d-flex justify-content-center">
        <Profile
          email={email}
          gender={displayGender}
          picture={picture}
          name={name}
        />
      </div>
    );
  }
}

export default Home;
