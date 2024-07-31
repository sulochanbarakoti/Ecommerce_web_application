import React, { useContext, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Button,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Menu = () => {
  const { getTotalCart } = useContext(ShopContext);
  const [menu, setMenu] = useState(""); // default menu is home
  return (
    <Navbar
      id="navbar"
      collapseOnSelect
      expand="lg"
      className="shadow bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">
          <Row>
            <Col className="text-end">
              <Image src={logo} style={{ width: "auto" }} />
            </Col>
            <Col className="fs-3 fw-bold m-auto">New Shop</Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-4 fw-semibold mx-auto">
            <Nav.Link
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
              {menu === "home" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setMenu("women");
              }}
            >
              <Link to="/women" style={{ textDecoration: "none" }}>
                Women
              </Link>
              {menu === "women" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setMenu("man");
              }}
            >
              <Link to="/men" style={{ textDecoration: "none" }}>
                Men
              </Link>
              {menu === "man" ? <hr /> : <></>}
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setMenu("kid");
              }}
            >
              <Link to="/kid" style={{ textDecoration: "none" }}>
                Kids
              </Link>
              {menu === "kid" ? <hr /> : <></>}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/login">
                <Button
                  variant="success"
                  className="btn-sm fw-semibold rounded"
                >
                  Login
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2}>
              <Link to="/cart">
                <Image
                  src={cartIcon}
                  style={{ height: "30px", width: "30px" }}
                />
              </Link>
              <Badge bg="danger" pill>
                {getTotalCart()}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
