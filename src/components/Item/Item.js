import React, { useState } from "react";
import { Button, Container, Form, Col, Row, Nav, Navbar, NavDropdown, Card } from "react-bootstrap";


const Item = () => {

return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://image6.coupangcdn.com/image/vendor_inventory/47be/05fc66fbc46e3d48773231ac027d91ebe486cd2c2d56cb34d9caf5e3a3dc.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
);
};

export default Item;