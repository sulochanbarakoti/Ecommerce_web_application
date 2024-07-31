import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";

const Items = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-3">
        <Link
          to={`/product?id=${props.product.id}`}
          onClick={window.scrollTo(0, 0)}
        >
          <Card.Img variant="top" src={props.product.image} />
        </Link>
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>
            <p className="fw-semibold">
              ${props.product.new_price}
              {"  "}
              <span className="text-decoration-line-through">
                ${props.product.old_price}
              </span>
            </p>
          </Card.Text>
          <Link to={`/product?id=${props.product.id}`}>
            {" "}
            <Button variant="outline-success">
              Go To Product <BsArrowRightCircleFill />{" "}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Items;
