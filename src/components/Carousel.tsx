import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Carousel: React.FC<Props> = ({ children }) => {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
