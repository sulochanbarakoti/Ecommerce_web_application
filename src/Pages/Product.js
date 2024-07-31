import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useLocation } from "react-router-dom";
import Breadcurms from "../Components/Breadcrums/Breadcurms";
import {
  Button,
  Col,
  Image,
  ListGroup,
  Row,
  Stack,
  Tab,
  Tabs,
} from "react-bootstrap";
import RelatedProduct from "../Components/Related_Product/RelatedProduct";
import NavMenu from "../Components/Navbar/NavMenu";
import Footer from "../Components/Footer/Footer";

const Product = () => {
  const location = useLocation();
  const { all_product, addToCart } = useContext(ShopContext);
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id");
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <NavMenu />
      <Breadcurms product={product} />
      <Row>
        <Col className="d-flex">
          <Col
            className="m-1"
            style={{ display: "grid", direction: "rtl", flexFlow: "row wrap" }}
          >
            <Image
              src={product.image}
              style={{ height: "auto", width: "80px" }}
              rounded
            />
            <Image
              src={product.image}
              style={{ height: "auto", width: "80px" }}
              rounded
            />
            <Image
              src={product.image}
              style={{ height: "auto", width: "80px" }}
              rounded
            />
            <Image
              src={product.image}
              style={{ height: "auto", width: "80px" }}
              rounded
            />
          </Col>
          <Col>
            <Image src={product.image} style={{ width: "auto" }} rounded />
          </Col>
        </Col>
        <Col>
          <Stack gap={3}>
            {" "}
            <div className="text-start fs-2 fw-semibold">{product.name}</div>
            <div>
              <span className="fs-4 fw-bold me-1 text-danger text-decoration-line-through">
                ${product.old_price}
              </span>
              <span className="fs-4 fw-bold me-1">${product.new_price}</span>
            </div>
            <div>
              A lightweight, usually knitted, pullover shirt, close-fitting and
              with a round neckline and short sleeves, worn as an undershirt or
              outer garment.
            </div>
            <div>
              <div className="fw-semibold">Select Size</div>
              <div>
                {" "}
                <ListGroup horizontal style={{ justifyContent: "left" }}>
                  <ListGroup.Item className="border">S</ListGroup.Item>
                  <ListGroup.Item className="border">M</ListGroup.Item>
                  <ListGroup.Item className="border">L</ListGroup.Item>
                  <ListGroup.Item className="border">XL</ListGroup.Item>
                  <ListGroup.Item className="border">XXL</ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            <div>
              {" "}
              <Button
                variant="danger"
                style={{ width: "auto" }}
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                ADD TO CART
              </Button>
            </div>
            <div>
              <div>Category: Women, T-Shirt</div>
              <div>Tags: Modern, Latest</div>
            </div>
          </Stack>
        </Col>
      </Row>
      <Row className="py-3" style={{ width: "70%", margin: "auto" }}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Description">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer. E-commerce websites
            typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g.
            sizes, colors). Each product usually has its own dedicated page with
            relevant information.
          </Tab>
          <Tab eventKey="profile" title="Review">
            Tab content for Profile
          </Tab>
        </Tabs>
      </Row>
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default Product;
