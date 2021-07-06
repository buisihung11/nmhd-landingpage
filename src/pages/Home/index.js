import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Image,
  HStack,
  StackDivider,
  VStack,
  Text,
} from '@chakra-ui/react';

import { feat_1, feat_2, feat_3, feat_4 } from '../../assets/icons';
import banner1 from '../../assets/images/banner1.png';

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

const FEATURE = [
  {
    title: 'GIAO HÀNG MIỄN PHÍ TẠI PHÚ QUỐC',
    description: 'Nhận hàng trong 3 ngày',
    icon: feat_1,
  },
  {
    title: 'GIAO HÀNG MIỄN PHÍ TẠI PHÚ QUỐC',
    description: 'Nhiều quà tặng và ưu đãi',
    icon: feat_2,
  },
  {
    title: 'ĐẢM BẢO CHẤT LƯỢNG',
    description: 'Sản phẩm đã được kiểm định',
    icon: feat_3,
  },
  {
    title: 'HOTLINE: 0915428829 ( CHỊ NGA )',
    description: 'Phục vụ tận tình chu đáo',
    icon: feat_4,
  },
];

const HomePage = () => {
  return (
    <Box>
      <Box h="100vh">
        <Box position="relative" h="100vh">
          <Slider {...settings}>
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
          </Slider>
          <HStack
            bg="white"
            position="absolute"
            bottom="-80px"
            left="50%"
            transform="translate(-50%,0)"
            p="1"
            w={['100%', '100', '90%']}
            height="120px"
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            divider={<StackDivider borderColor="gray.200" />}
          >
            {FEATURE.map(({ title, description, icon }) => (
              <VStack display="flex" alignContent="center" w={1 / 4}>
                <Image src={icon} width="50px" height="35px" />
                <Text fontWeight="bold">{title}</Text>
                <Text mt="0" noOfLines={2}>
                  {description}
                </Text>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>
      <Box h="100px" />
      <Box textAlign="center" fontSize="xl">
        Main content
      </Box>
    </Box>
  );
};

export default HomePage;
