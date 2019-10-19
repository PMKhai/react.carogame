import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './style.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="login">
        <Card style={{ width: '30%', padding: '10px' }}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We will never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
