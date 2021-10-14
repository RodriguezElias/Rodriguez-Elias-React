import { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWidget from "../CarWidget/CardWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export default function NavBar() {
  const [state, setstate] = useState(0);
  const { iconCart } = useCartContext();
  useEffect(() => {
    setstate(iconCart());
  }, [iconCart]);

  return (
    <Navbar expand="lg" variant="dark" className="navbar">
      <Container className="container">
        <Link exact to="/">
          <Navbar.Brand className="list">Viva Lugano</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="collapse">
          <Nav className="me-auto list text-white">
            <NavDropdown
              className="text-white"
              title="Menu"
              id="basic-nav-dropdown"
            >
              <Link exact to="/categoria/Pc-escritorio" className="text-decoration-none">
                <NavDropdown.Item href="#action/3.1">
                  Pc Escritorio
                </NavDropdown.Item>
              </Link>
              <Link exact to="/categoria/Laptop" className="text-decoration-none">
                <NavDropdown.Item href="#action/3.2" >Laptop</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Gabinetes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Link exact to="/cart">
              <CardWidget count={state} />
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
