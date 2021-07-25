import React from 'react';
import Slider from 'react-slick';
import { Box, Image } from '@chakra-ui/react';

import banner1 from '../assets/images/banner1.jpg';
import MySlider from './MySlider';
import { useRequest } from 'ahooks';
import { getBlogPost } from '../services/blog-post';

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
  customPaging: i => (
    <Box
      p={1}
      _groupHover={{
        border: `1px solid red`,
      }}
      border={`1px solid white`}
      rounded="full"
      className="dot_child"
    >
      <Box
        _groupHover={{
          bg: 'primary',
        }}
        rounded="full"
        w={['10px', '10px']}
        h={['10px', '10px']}
        bg="white"
      />
    </Box>
  ),
  dotsClass: 'slick-dots slick-thumb',
};

const Banner = ({ color }) => {
  const { data, loading } = useRequest(() => getBlogPost(2), {
    formatResult: res => res?.data,
  });

  const images = data?.map(({ banner }) => banner);

  return (
    <MySlider {...settings} color={color}>
      {images?.map(image => (
        <Image
          w="100vw"
          h="100vh"
          objectFit="cover"
          src={image}
          alt="Segun Adebayo"
        />
      )) ?? (
        <Image
          w="100vw"
          h="100vh"
          objectFit="cover"
          src={banner1}
          alt="Segun Adebayo"
        />
      )}
    </MySlider>
  );
};

export default Banner;
