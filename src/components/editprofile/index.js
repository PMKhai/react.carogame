import React, { Component } from 'react';
// eslint-disable-next-line object-curly-newline
import { Card, Form, Button } from 'react-bootstrap';

class EditProfile extends Component {
  hendleSubmit = (event) => {
    event.preventDefault();
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    const { email, gender } = this.props.editProfile;
    let male = null;
    let female = null;
    if (gender !== undefined && gender !== null) {
      // eslint-disable-next-line nonblock-statement-body-position
      // eslint-disable-next-line no-unused-expressions
      gender === true ? (male = 'true') : (female = 'true');
    }
    return (
      <div className="d-flex justify-content-center m-5">
        <Card style={{ width: '18rem', textAlign: 'center', padding: '10px' }}>
          <Form
            onSubmit={(e) => {
              this.hendleSubmit(e);
            }}
          >
            {/* <FormControl
              type="file"
              onChange={(e) => console.log(e.target.files)}
            /> */}

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                disabled
                value={email}
              />
            </Form.Group>

            <Form.Group controlId="FromBasicGender">
              <Form.Label>Gender</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="male"
                  name="gender"
                  value="true"
                  inline
                  defaultChecked={male}
                  onClick={(e) => this.props.handleChooseMale(e.target.value)}
                />
                <Form.Check
                  type="radio"
                  label="female"
                  name="gender"
                  value="false"
                  defaultChecked={female}
                  onClick={(e) => this.props.handleChooseFemale(e.target.value)}
                  inline
                />
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
