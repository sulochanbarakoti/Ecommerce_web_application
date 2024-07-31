import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";

const NewCollection = () => {
  return (
    <Container fluid className="mt-4">
      <Row>
        <div className="fs-3 fw-bolder" style={{ textAlign: "center" }}>
          NEW COLLECTIONS
        </div>
      </Row>
      <Row className="mt-3">
        {/* Map through the array of products and create a new component for each one */}
        {new_collections.map((item, index) => (
          <Col key={index}>
            <Items product={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewCollection;
