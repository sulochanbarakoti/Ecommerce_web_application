import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";

const Breadcurms = (props) => {
  const { product } = props;
  return (
    <Container className="py-3">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/${product.category}`}>
          {product.category}
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
    </Container>
  );
};

export default Breadcurms;
