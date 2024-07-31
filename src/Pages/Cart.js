import React, { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Row,
  Table,
  Form,
} from "react-bootstrap";
import { ShopContext } from "../Context/ShopContext";
import { FaTrashAlt } from "react-icons/fa";
import NavMenu from "../Components/Navbar/NavMenu";
import Footer from "../Components/Footer/Footer";

const Cart = () => {
  const { getTotalAmount, all_product, removeToCart, cartItems } =
    useContext(ShopContext);
  return (
    <div>
      <NavMenu />
      <Container>
        <Row className="py-5">
          {" "}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Products</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "initial" }}>
              {all_product
                .filter((item) => cartItems[item.id] > 0)
                .map((item, index) => (
                  <tr key={index}>
                    <td style={{ textAlign: "center" }}>
                      <Image
                        src={item.image}
                        style={{ height: "75px", width: "auto" }}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.new_price}</td>
                    <td>{cartItems[item.id]}</td>
                    <td>{item.new_price * cartItems[item.id]}</td>
                    <td>
                      <div>
                        <Button
                          className="btn-sm btn-danger"
                          onClick={() => removeToCart(item.id)}
                        >
                          <FaTrashAlt />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col>
            <div className="fs-3 fw-bolder py-4">Cart Totals</div>
            <Row>
              <Col className="fw-semibold text-left">Subtotal</Col>
              <Col className="fw-semibold text-end">${getTotalAmount()}</Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="fw-semibold text-left">Shipping Cost</Col>
              <Col className="fw-semibold text-end">Free</Col>
            </Row>
            <hr></hr>
            <Row>
              <Col className="fw-bold text-left">Total</Col>
              <Col className="fw-bold text-end">${getTotalAmount()}</Col>
            </Row>
            <Row className="py-2">
              <div>
                <Button variant="danger">PROCEED TO CHECKOUT</Button>
              </div>
            </Row>
          </Col>
          <Col className="text-center">
            <div>If you have a promo code, Enter it here</div>
            <Form>
              <Row className="align-items-center w-50 stack gap-2 pt-3 m-auto">
                <Form.Control type="text" placeholder="promo code" />
                <Button className="btn-sm btn-dark">Submit</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
