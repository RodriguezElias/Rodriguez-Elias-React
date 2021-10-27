import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardWidget from "../CarWidget/CardWidget";
import { useCartContext } from "../../context/cartContext";
import { useLoginContext } from "../../context/loginContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  const [state, setstate] = useState(0);
  const { iconCart } = useCartContext();
  useEffect(() => {
    setstate(iconCart());
    openSubmenu();
  }, [iconCart]);

  const { user, desloguearse } = useLoginContext();

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
        const height = subMenu.scrollHeight;
        if (subMenu.classList.contains("show-submenu")) {
          subMenu.classList.remove("show-submenu");
          subMenu.removeAttribute("style");
        } else {
          subMenu.classList.add("show-submenu");
          subMenu.style.height = height + "px";
        }
        //subMenu.classList.toggle("show-submenu");
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
                <ul className="container-menu">
                  <li className="container-submenu">
                    <p className="mb-0">
                      Pc <i className="fas fa-angle-down"></i>
                    </p>
                    <ul className="submenu">
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Pc-escritorio"
                          className="menu-link"
                        >
                          Escritorio
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Laptop"
                          className="menu-link"
                        >
                          Laptop
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="container-submenu">
                    <p href="#" className="mb-0">
                      Componentes <i className="fas fa-angle-down"></i>
                    </p>
                    <ul className="submenu">
                      <li className="menu-item">
                        <Link exact to="/categoria/Ram" className="menu-link">
                          Memoria Ram
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Disco-rigido"
                          className="menu-link"
                        >
                          Disco Rigido
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Disco-solido"
                          className="menu-link"
                        >
                          Disco Solido
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Motherboard"
                          className="menu-link"
                        >
                          Motherboard
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Placa-video"
                          className="menu-link"
                        >
                          Placa de video
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="container-submenu">
                    <p href="#" className="mb-0">
                      Perifericos <i className="fas fa-angle-down"></i>
                    </p>
                    <ul className="submenu">
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Teclado"
                          className="menu-link"
                        >
                          Teclado
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link exact to="/categoria/Mouse" className="menu-link">
                          Mouse
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Auriculares"
                          className="menu-link"
                        >
                          Auriculares
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link
                          exact
                          to="/categoria/Mousepad"
                          className="menu-link"
                        >
                          Mousepad
                        </Link>
                      </li>
                    </ul>
                  </li>
                  {user && (
                    <li className="container-submenu">
                      <p href="#" className="mb-0">
                        Administrar <i className="fas fa-angle-down"></i>
                      </p>
                      <ul className="submenu">
                        <li className="menu-item">
                          <Link exact to="/Add-product" className="menu-link">
                            Agregar Productos{" "}
                            <i className="fas fa-box-open text-secondary"></i>
                          </Link>
                        </li>
                        <li className="menu-item">
                        <Link exact to="/login" className="menu-link" onClick={desloguearse}>
                            Desloguearse{" "}
                            <i className="fas fa-box-open text-secondary"></i>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  )}
                  {!user && (
                    <li className="container-submenu">
                      <Link exact to="/login" className="menu-link">
                        <p href="#" className="mb-0">
                          Login
                        </p>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <nav className="mobile-nav">
          <ul className="container-menu" id="menu">
            <li className="menu-item">
              <Link exact to="/cart">
                <CardWidget count={state} />
              </Link>
            </li>
            <li className="container-submenu">
              <p href="#" className="menu-link submenu-btn">
                Administrar <i className="fas fa-angle-down"></i>
              </p>
              <ul className="submenu">
                <li className="menu-item">
                  <Link exact to="/add-product" className="menu-link">
                    Agregar Productos
                    <i className="fas fa-box-open text-secondary"></i>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="container-submenu">
              <p href="#" className="menu-link submenu-btn">
                Pc <i className="fas fa-angle-down"></i>
              </p>
              <ul className="submenu">
                <li className="menu-item">
                  <Link
                    exact
                    to="/categoria/Pc-escritorio"
                    className="menu-link"
                  >
                    Escritorio
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Laptop" className="menu-link">
                    Laptop
                  </Link>
                </li>
              </ul>
            </li>
            <li className="container-submenu">
              <p href="#" className="menu-link submenu-btn">
                Componentes <i className="fas fa-angle-down"></i>
              </p>
              <ul className="submenu">
                <li className="menu-item">
                  <Link exact to="/categoria/Ram-ddr4" className="menu-link">
                    Memoria Ram
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    exact
                    to="/categoria/Disco-rigido"
                    className="menu-link"
                  >
                    Disco Rigido
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    exact
                    to="/categoria/Disco-solido"
                    className="menu-link"
                  >
                    Disco solido
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Motherboard" className="menu-link">
                    Motherboard
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Placa-video" className="menu-link">
                    Placa de video
                  </Link>
                </li>
              </ul>
            </li>
            <li className="container-submenu">
              <p href="#" className="menu-link submenu-btn">
                Perifericos <i className="fas fa-angle-down"></i>
              </p>
              <ul className="submenu">
                <li className="menu-item">
                  <Link exact to="/categoria/Teclado" className="menu-link">
                    Teclado
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Mouse" className="menu-link">
                    Mouse
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Auriculares" className="menu-link">
                    Auriculares
                  </Link>
                </li>
                <li className="menu-item">
                  <Link exact to="/categoria/Mousepad" className="menu-link">
                    Mousepad
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
