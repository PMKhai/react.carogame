import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class LogoutButton extends Component {
  render() {
    return (
      <Button variant="link" onClick={() => this.props.logout()}>
        Log out
      </Button>
    );
  }
}

export default LogoutButton;
