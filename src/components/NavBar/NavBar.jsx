import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardWidget from "../CarWidget/CardWidget";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

export default function NavBar() {
  const [state, setstate] = useState(0);
  const { iconCart } = useCartContext();
  useEffect(() => {
    setstate(iconCart());
    openSubmenu();
  }, [iconCart]);

  const openMenu = () => {
    const menu_btn = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-nav");
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  };
  const openSubmenu = () => {
    const submenu_btn = document.querySelectorAll(".submenu-btn");
    for (let i = 0; i < submenu_btn.length; i++) {
      submenu_btn[i].addEventListener("click", function () {
        const subMenu = this.nextElementSibling;
        // const height = subMenu.scrollHeight;
        // if (subMenu.classList.contains("show-submenu")){
        //   subMenu.classList.remove("show-submenu")
        //   subMenu.removeAttribute("style")
        // }else{
        //   subMenu.classList.add("show-submenu");
        //   subMenu.style.height = height + "px"
        // }
        subMenu.classList.toggle("show-submenu");
      });
    }
  };

  window.onload = function () {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 100) {
        document.querySelector("header").classList.add("is-scrolling");
      } else {
        document.querySelector("header").classList.remove("is-scrolling");
      }
    });
  };

  return (
    <>
      {/* <Navbar expand="lg" variant="dark" className="navbar">
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
    </Navbar> */}
      <div className="container-navbar">
        <header>
          <div className="navbar">
            <div className="nav-top">
              <Link exact to="/" className="text-decoration-none">
                <h2>
                  <span>LE</span>RO
                </h2>
              </Link>
              <div className="nav-cart">
                <Link exact to="/cart">
                  <CardWidget count={state} />
                </Link>
              </div>
              <button className="hamburger" onClick={openMenu}>
                <div className="bar"></div>
              </button>
            </div>
            <div className="nav-bot">
              <nav className="desktop-nav">
                <a href="#">Home</a>
                <a href="#">Pc</a>
                <a href="#">Componentes</a>
                <a href="#">Perifericos</a>
              </nav>
            </div>
          </div>
        </header>
        <nav className="mobile-nav">
          <Link exact to="/cart">
            <CardWidget count={state} />
          </Link>
          <ul className="container-menu" id="menu">
            <li className="menu-item">
              <Link exact to="/">
                Home
              </Link>
            </li>
            <li className="container-submenu">
              <a href="#" className="menu-link submenu-btn">
                Pc
              </a>
              <ul className="submenu">
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Escritorio
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Laptop
                  </a>
                </li>
              </ul>
            </li>
            <li className="container-submenu">
              <a href="#" className="menu-link submenu-btn">
                Componentes
              </a>
              <ul className="submenu">
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Memoria Ram
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Disco Rigido
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Motherboard
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Placa de video
                  </a>
                </li>
              </ul>
            </li>
            <li className="container-submenu">
              <a href="#" className="menu-link submenu-btn">
                Perifericos
              </a>
              <ul className="submenu">
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Teclados
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Mouse
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Auriculares
                  </a>
                </li>
                <li className="menu-item">
                  <a href="#" className="menu-link">
                    Mouse Pads
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
