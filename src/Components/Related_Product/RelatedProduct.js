import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Items from "../Items/Items";
import data_product from "../Assets/data";

const RelatedProduct = () => {
  return (
    <div>
      <Row>
        <div className="fs-3 fw-bold text-center">Related Product</div>
        <hr
          style={{
            width: "50%",
            margin: "auto",
            height: "3px",
          }}
        />
      </Row>
      <Row>
        {/* Map through the array of products and create a new component for each one */}
        {data_product.map((item, index) => (
          <Col key={index}>
            <Items product={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RelatedProduct;
