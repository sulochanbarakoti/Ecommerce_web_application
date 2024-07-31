import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { Container, Image, Col, Row } from "react-bootstrap";
import Items from "../Components/Items/Items";
import NavMenu from "../Components/Navbar/NavMenu";
import Footer from "../Components/Footer/Footer";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      <NavMenu />
      <Container fluid>
        <Row>
          <Image src={props.banner} />
        </Row>

        <Row className="mt-3">
          <Col>Showing 1-12 out of 36 products</Col>
          <Col className="text-end">Sort by</Col>
        </Row>
        <Row>
          {all_product.map((item, index) => {
            if (item.category === props.category) {
              return (
                <Col key={index}>
                  <Items product={item} />
                </Col>
              );
            }
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ShopCategory;
