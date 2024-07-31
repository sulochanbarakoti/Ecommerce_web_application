import React from "react";
import "./HomeBanner.css";
import { Carousel, Image } from "react-bootstrap";
import banner1 from "../Assets/home_banner1.jpg";
import banner2 from "../Assets/home_banner2.jpg";

const HomeBanner = () => {
  return (
    <div className="pt-1">
      <Carousel>
        <Carousel.Item>
          <Image className="w-100" src={banner1} />
        </Carousel.Item>
        <Carousel.Item>
          <Image className="w-100" src={banner2} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeBanner;
