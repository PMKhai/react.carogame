import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Home extends Component {
  render() {
    // eslint-disable-next-line object-curly-newline
    const { email, gender, picture, name } = this.props;
    let avt;
    if (picture) {
      avt = picture;
    } else {
      avt =
        'https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg';
    }
    return (
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={avt} />
        <Card.Body>
          <Card.Title>{email || name}</Card.Title>
          <Card.Text>{gender}</Card.Text>
          <Link to="/editprofile" className="card-link">
            Edit
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Home;
