import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Form, Button, FormControl } from 'react-bootstrap';

class EditProfile extends Component {
  hendleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', textAlign: 'center' }}>
          <Form
            onSubmit={(e) => {
              this.hendleSubmit(e);
            }}
          >
            <FormControl
              type="file"
              onChange={(e) => console.log(e.target.files)}
            />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="FromBasicGender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check type="radio" label="male" inline />
                <Form.Check type="radio" label="female" inline />
              </div>
            </Form.Group>

            <Button type="button" variant="outline-primary">
              Update
            </Button>
          </Form>
        </Card>
      </div>
    );
  }
}

export default EditProfile;
