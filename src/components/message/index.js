import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './style.css';

class Message extends Component {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { display, color, message, author } = this.props;
    return (
      <div className={display}>
        <div className="w-75 ml-2 mr-2">
          {author && <small className="m-3">{author}</small>}
          <Alert variant={color} className="radius">
            {message}
          </Alert>
        </div>
      </div>
    );
  }
}

export default Message;
