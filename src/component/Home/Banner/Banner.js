import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../image/banner/banner2.jpg';
import banner2 from "../../../image/banner/banner4.jpg";
import banner3 from "../../../image/banner/banner5.jpg";
import banner4 from "../../../image/banner/banner3.jpg";
import banner5 from "../../../image/banner/banner1.jpg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img style={{ height: "300px" }}
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "300px" }}
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "300px" }}
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "300px" }}
            className="d-block w-100"
            src={banner4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "300px" }}
            className="d-block w-100"
            src={banner5}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;