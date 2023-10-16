import React from 'react';
import Card from 'react-bootstrap/Card';

function BasicExample(props) {
  return (
    <Card style={{ width: '13rem' }}>
      <Card.Body>
        <Card.Title>
          {props.icon}
        </Card.Title>
        <Card.Subtitle className="mx-auto">{props.name}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;