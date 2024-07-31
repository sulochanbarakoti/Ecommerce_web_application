import React from "react";
import { Image, Row } from "react-bootstrap";
import centerBanner from "../Assets/centerBanner.png";

const CenterBanner = () => {
  return (
    <Row className="p-4">
      <Image src={centerBanner} />
    </Row>
  );
};

export default CenterBanner;
