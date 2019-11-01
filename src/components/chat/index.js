import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Form, Button, Spinner } from 'react-bootstrap';
import io from 'socket.io-client';
import { API_URL } from '../../constants';
import Message from '../message/index';
import './style.css';

const socket = io(API_URL);

class Chat extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsername();

    socket.on('RECEIVE_MESSAGE', (data) => {
      console.log(data);
      this.props.addMessage(data);
    });

    this.sendMessage = (e) => {
      e.preventDefault();

      const room = localStorage.getItem('roomId');
      socket.emit('subscribe', room);

      socket.emit('SEND_MESSAGE', {
        room,
        author: this.props.chat.username,
        message: this.props.chat.message,
      });
      this.props.sendMessage();
    };
  }

  subcriptRoom = () => {
    const room = localStorage.getItem('roomId');
    socket.emit('subscribe', room);
  };

  // eslint-disable-next-line camelcase
  componentDidMount() {
    this.subcriptRoom();
  }

  componentWillUnmount() {
    const room = localStorage.getItem('roomId');
    socket.emit('unsubscribe', room);
  }

  render() {
    const loading = false;
    const { message, messages, username } = this.props.chat;

    return (
      <div className="w-25 " style={{ height: '600px' }}>
        <Card className="h-100 ml-2">
          <Card.Header>Chat</Card.Header>
          <div className="scroll" style={{ height: '510px' }}>
            {messages.map(
              (message, index) =>
                (message.author === username && (
                  <Message
                    key={index}
                    color="info"
                    display="right"
                    message={message.message}
                  />
                )) ||
                (message.author !== username && (
                  <Message
                    key={index}
                    color="dark"
                    display="left"
                    message={message.message}
                    author={message.author}
                  />
                ))
            )}
          </div>
          <Form className="d-inline clearfix">
            <Form.Control
              type="text"
              className="d-inline clearfix"
              style={{ width: '270px', outline: 'none' }}
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
