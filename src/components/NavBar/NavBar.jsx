import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CardWidget from "../CarWidget/CardWidget";


export default function NavBar() {
  return (
    <Navbar  expand="lg" variant="dark" className="navbar">
  <Container>
    <Navbar.Brand className="list" href="#home">Viva Lugano</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto list text-white">
        <Nav.Link className="text-white" href="#home">Inicio</Nav.Link>
        <Nav.Link className="text-white" href="#link">Productos</Nav.Link>
        <NavDropdown className="text-white" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Camisas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Zapatos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <CardWidget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
