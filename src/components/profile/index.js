import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img
          variant="top"
          src="https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"
        />
        <Card.Body>
          <Card.Title>minhkhai@gmail.com</Card.Title>
          <Card.Text>minhkhai@gmail.com</Card.Text>
          <Card.Text>male</Card.Text>
          <Link to="/editprofile" className="card-link">
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Home;
