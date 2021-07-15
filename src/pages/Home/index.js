import React from 'react';
import {
  Box,
  Image,
  HStack,
  StackDivider,
  VStack,
  Text,
  useColorModeValue,
  SimpleGrid,
  Button,
  chakra,
} from '@chakra-ui/react';
import ProductCard from '../../components/ProductCard';

import { feat_1, feat_2, feat_3, feat_4 } from '../../assets/icons';
import nuocmam_43 from '../../assets/images/products/nuocmam_43.jpg';
import Banner from '../../components/Banner';
import PhoneRing from '../../components/PhoneRing/PhoneRing';
import styled from '@emotion/styled';

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

export const PRODUCTS_HOME = Array(8).fill({
  name: 'NƯỚC MẮM CÁ CƠM HỒNG ĐỨC',
  description: '43 ĐỘ ĐẠM (1 CHAI) 500ml',
  thumbnail: nuocmam_43,
});

const HomePage = () => {
  const primaryColor = useColorModeValue('primary', 'white');

  return (
    <Box pb={5}>
      <Box h="100vh">
        <Box position="relative" h="100vh">
          <Banner color={'white'} />
          <Box
            position="absolute"
            w="40%"
            top="50%"
            left="10%"
            display={{ base: 'none', md: 'block' }}
            transform="translate(0,-50%)"
          >
            <Text color="white" fontWeight="bold">
              <chakra.span zIndex={999} fontWeight="bold" color="primary">
                TRĂM NĂM HƯƠNG VỊ TRUYỀN THỐNG{' '}
              </chakra.span>
              Nước mắm Phú Quốc có lịch sử hình thành và phát triển trên 200
              năm, nước mắm Phú Quốc không chỉ là thương hiệu của địa phương mà
              còn là thương hiệu mạnh của quốc gia đã được nhiều nước trên thế
              giới biết đến như một thương hiệu nỗi tiếng, nước mắm Phú Quốc là
              một tài sản quý giá được thiên nhiên trao tặng và ...
            </Text>
          </Box>
          <HStack
            bg="white"
            position={['absolute']}
            bottom={['-100px', '-100px', '-80px']}
            left="50%"
            transform="translate(-50%,0)"
            p="3"
            w={['100%', '100', '90%']}
            minHeight="120px"
            mx="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            divider={<StackDivider my="20px" borderColor="gray.400" />}
          >
            {FEATURE.map(({ title, description, icon }) => (
              <VStack
                _hover={{
                  color: 'red',
                  border: `1px solid ${primaryColor}`,
                }}
                display="flex"
                alignContent="center"
                w={1 / 4}
              >
                <Image color="black" src={icon} width="50px" height="35px" />
                <Text fontWeight="bold" fontSize="small">
                  {title}
                </Text>
                <Text mt="0" fontSize={['sm', 'sm', 'md', 'lg']}>
                  {description}
                </Text>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>
      <Box h={['140px', '120px']} />

      <Box w={['90%', '90%', '90%']} mx="auto" textAlign="center" fontSize="xl">
        <SimpleGrid columns={[2, 2, 3, 4]} spacing={[8]}>
          {PRODUCTS_HOME.map(prod => (
            <ProductCard {...prod} />
          ))}
        </SimpleGrid>
        <Button mt={6} color="white" rounded="none" variant="primary">
          Xem thêm
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
