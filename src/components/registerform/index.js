import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

class LoginForm extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password, repassword } = this.props.registerForm;
    return (
      <div className="login d-flex justify-content-center">
        <Card style={{ width: '30%', padding: '10px' }}>
          <Form
            onSubmit={(e) => {
              this.handleSubmit(e);
            }}
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => this.props.onChangeEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => this.props.onChangePassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicRepassword">
              <Form.Label>Repassword</Form.Label>
              <Form.Control
                type="password"
                placeholder="Repassword"
                value={repassword}
                onChange={(e) => this.props.onChangeRepassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%' }}
              onClick={() => this.props.onClickButton()}
            >
              Register
            </Button>
          </Form>
          <Link to="login" className="text-center">
            Do you have already an account?
          </Link>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
