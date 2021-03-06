import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoginGoogle from '../logingoogle/index';
import './style.css';

class LoginForm extends Component {
  hendleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    const { email, password } = this.props.loginForm;
    return (
      <div className="d-flex justify-content-center login">
        <Card style={{ width: '30%', padding: '10px' }}>
          <Form
            onSubmit={(e) => {
              this.hendleSubmit(e);
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
            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%' }}
              onClick={() => this.props.onClickButton()}
            >
              Login
            </Button>
            <div className="text-center">
              or
              <LoginGoogle onRedirect={this.props.redirectAfterLogin} />
            </div>
          </Form>
          <Link to="register" className="text-center">
            Create new account
          </Link>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
