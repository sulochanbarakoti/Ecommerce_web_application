import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import data_product from "../Assets/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Popular.css";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <div className="fs-3 fw-bolder" style={{ textAlign: "center" }}>
          POPULAR IN WOMEN
        </div>
      </Row>
      <Row className="mt-3">
        {/* Map through the array of products and create a new component for each one */}
        {data_product.map((item, index) => (
          <Col key={index}>
            <Items product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Popular;
