import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Form, Button, Spinner } from 'react-bootstrap';

class Chat extends Component {
  render() {
    const loading = true;
    return (
      <div className="w-25" style={{ height: '600px' }}>
        <Card className="h-100 ml-2">
          <Card.Header>Chat</Card.Header>
          <Form className="d-inline clearfix">
            <Form.Control
              type="text"
              className="d-inline clearfix"
              style={{ width: '249px' }}
            />
            <Button
              type="submit"
              className="d-inline clearfix"
              style={{ marginBottom: '5px' }}
              disabled
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
