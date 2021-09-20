import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CardWidget from "../CarWidget/CardWidget";
import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <Navbar  expand="lg" variant="dark" className="navbar">
  <Container>
    <Link exact to='/'> 
    <Navbar.Brand className="list" >Viva Lugano</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto list text-white">
        <Link exact to='/categoria/hombre'> 
        <Nav.Link className="text-white" href="#link">Hombre</Nav.Link>
        </Link>
        <Link exact to='/categoria/mujer'> 
        <Nav.Link className="text-white" href="#link">Mujer</Nav.Link>
        </Link>
        <NavDropdown className="text-white" title="Menu" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pantalones</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Camisas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Zapatos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Link exact to='/cart'> 
      <CardWidget/>
      </Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}
