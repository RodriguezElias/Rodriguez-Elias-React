import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Viva Lugano</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
        <NavDropdown title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Pizzas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">hamburguesas</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Milanesas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Bebidas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
