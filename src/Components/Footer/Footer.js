import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Nav,
  ListGroup,
  Stack,
} from "react-bootstrap";
import logo from "../Assets/logo.png";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Row>
          <Col className="text-end py-3">
            <Image src={logo} style={{ width: "auto" }} />
          </Col>
          <Col className="fs-3 fw-bold m-auto">New Shop</Col>
        </Row>
      </Row>
      <Row className="fw-bold">
        <ListGroup horizontal>
          <ListGroup.Item>Company</ListGroup.Item>
          <ListGroup.Item>Products</ListGroup.Item>
          <ListGroup.Item>Offices</ListGroup.Item>
          <ListGroup.Item>About</ListGroup.Item>
          <ListGroup.Item>Contact</ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <ListGroup horizontal>
          <ListGroup.Item>
            <FaInstagramSquare size={25} />
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFacebookSquare size={25} />
          </ListGroup.Item>
          <ListGroup.Item>
            <FaWhatsappSquare size={25} />
          </ListGroup.Item>
        </ListGroup>
      </Row>
      <Row>
        <hr></hr>
      </Row>
      <Row className="justify-content-center fw-bold">
        Copyright @ 2024 - All Right Reserved.
      </Row>
    </Container>
  );
};

export default Footer;
