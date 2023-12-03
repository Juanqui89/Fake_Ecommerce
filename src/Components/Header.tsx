import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../assets/CSS/Header.css";
import "../assets/CSS/Queries.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Row>
        <Col>
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler collap"
              type="button"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

            <div
              className={`collapse navbar-collapse nav ${isOpen ? "show" : ""}`}
            >
              <div className="navbar-nav">
                <NavLink
                  className="nav-link"
                  to="/Home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/Electronics"
                  onClick={() => setIsOpen(false)}
                >
                  Electronics
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/Jewerely"
                  onClick={() => setIsOpen(false)}
                >
                  Jewerely
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/Mens_Clothes"
                  onClick={() => setIsOpen(false)}
                >
                  Men Clothes
                </NavLink>

                <NavLink
                  className="nav-link"
                  to="/Women_Clothes"
                  onClick={() => setIsOpen(false)}
                >
                  Women Clothes
                </NavLink>
              </div>
            </div>
          </nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
