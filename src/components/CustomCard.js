import React from "react";
import Card from "react-bootstrap/Card";
function CustomCard({cardHeader, cardTitle, cardText}) {
  return (
    <>
      <Card>
        <Card.Header as="h5">{cardHeader}</Card.Header>
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Text>{cardText}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CustomCard;
