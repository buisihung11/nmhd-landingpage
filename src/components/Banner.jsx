import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

import banner1 from '../assets/images/banner1.jpg';
import MySlider from './MySlider';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '40px',
        fontSize: '40px',
        zIndex: 5,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        zIndex: 5,
        left: '40px',
        fontSize: '40px',
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: (dots, ...res) => {
    return <Box>{dots}</Box>;
  },
  customPaging: i => <Box w="4" h="4" color="primary" />,
};

const Banner = () => {
  return (
    <MySlider {...settings}>
      <Image
        w="100vw"
        h="100vh"
        objectFit="cover"
        src={banner1}
        alt="Segun Adebayo"
      />
      <Image
        w="100vw"
        h="100vh"
        objectFit="cover"
        src={banner1}
        alt="Segun Adebayo"
      />
      <Image
        w="100vw"
        h="100vh"
        objectFit="cover"
        src={banner1}
        alt="Segun Adebayo"
      />
    </MySlider>
  );
};

export default Banner;
