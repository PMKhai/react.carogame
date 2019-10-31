import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import io from 'socket.io-client';
import { API_URL } from '../../constants';

const socket = io(API_URL);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsername();

    socket.on('RECEIVE_MESSAGE', (data) => {
      this.props.addMessage(data);
    });

    this.sendMessage = (e) => {
      e.preventDefault();

      const room = localStorage.getItem('roomId'); // get room from local storage
      socket.emit('subscribe', room);

      socket.emit('SEND_MESSAGE', {
        room,
        author: this.props.chat.username,
        message: this.props.chat.message,
      });
      this.props.sendMessage();
    };
  }

  render() {
    const loading = false;
    const { message } = this.props.chat;

    return (
      <div className="w-25" style={{ height: '600px' }}>
        <Card className="h-100 ml-2">
          <Card.Header>Chat</Card.Header>
          <Form className="d-inline clearfix">
            <Form.Control
              type="text"
              className="d-inline clearfix"
              style={{ width: '249px' }}
              onChange={(e) => this.props.onChangeInputMessage(e.target.value)}
              value={message}
            />
            <Button
              type="submit"
              className="d-inline clearfix"
              style={{ marginBottom: '5px' }}
              onClick={this.sendMessage}
            >
              {loading && (
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              )}
              Send
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Chat;
