import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import io from 'socket.io-client';
import { API_URL, LOGIN_GOOGLE } from '../../constants';

const url = `${API_URL}${LOGIN_GOOGLE}`;
const socket = io(API_URL);

class LoginGoogle extends Component {
  componentDidMount() {
    socket.on('google', (user) => {
      this.popup.close();
      localStorage.setItem('token', user.token);
      this.props.onRedirect();
    });
  }

  checkPopup() {
    const check = setInterval(() => {
      const { popup } = this;
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(check);
      }
    }, 1000);
  }

  openPopup = () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const urlWithSocketId = `${url}/?socketId=${socket.id}`;

    return window.open(
      urlWithSocketId,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
          scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
          height=${height}, top=${top}, left=${left}`
    );
  };

  startAuth = () => {
    this.popup = this.openPopup();
    this.checkPopup();
  };

  render() {
    return (
      <Button
        variant="danger"
        type="Button"
        style={{ width: '100%' }}
        onClick={() => this.startAuth()}
      >
        Google
      </Button>
    );
  }
}

export default LoginGoogle;
