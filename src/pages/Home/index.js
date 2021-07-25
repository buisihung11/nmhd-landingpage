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
  chakra,
  Center,
} from '@chakra-ui/react';
import { useRequest } from 'ahooks';

import ProductCard from '../../components/ProductCard';
import { feat_1, feat_2, feat_3, feat_4 } from '../../assets/icons';
import Banner from '../../components/Banner';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import Link from '../../components/Link';
import GetMoreBtn from '../../components/GetMoreBtn';
import { getChildProd } from '../../services/product';
import Loading from '../../components/Loading';

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
  const primaryColor = useColorModeValue('primary', 'white');

  const { data, loading, error } = useRequest(getChildProd);

  if (error) {
    return (
      <Box pt={16}>
        <Center>Đã xảy ra lỗi vui lòng thử lại</Center>
      </Box>
    );
  }

  const products = data?.data;

  return (
    <Box pb={5} minH="60vh">
      <ScrollToTopOnMount />
      <Box h="100vh">
        <Box position="relative" h="100vh">
          <Banner color={'white'} />
          <Box
            position="absolute"
            w={[0, '50%', '50%', '50%', '40%']}
            top="50%"
            left="10%"
            display={{ base: 'none', md: 'block' }}
            transform="translate(0,-50%)"
          >
            <Text color="white" fontWeight="bold" fontSize={['md', 'lg', 'xl']}>
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
            bottom={['-160px', '-140px', '-140px', '-100px']}
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
            divider={
              <StackDivider
                my="20px"
                maxH={['40px', 'full']}
                borderColor="gray.400"
              />
            }
          >
            {FEATURE.map(({ title, description, icon }) => (
              <VStack
                role="group"
                display="flex"
                alignContent="center"
                w={1 / 4}
                sx={{
                  _hover: {
                    color: 'red',
                    border: `1px solid ${primaryColor}`,
                    cursor: 'pointer',
                    img: {
                      filter:
                        'invert(24%) sepia(97%) saturate(2004%) hue-rotate(340deg) brightness(89%) contrast(107%)',
                    },
                  },
                }}
              >
                <Box height="40px">
                  <Center>
                    <Image
                      color="black"
                      src={icon}
                      width="50px"
                      height="35px"
                    />
                  </Center>
                </Box>
                <Box height={['60px', '50px', '30px']}>
                  <Text fontWeight="bold" fontSize={['xs', 'sm']}>
                    {title}
                  </Text>
                </Box>
                <Box height={['50px', '60px', '60px', '30px']}>
                  <Center>
                    <Text mt="0" fontSize={['xs', 'sm', 'md', 'lg']}>
                      {description}
                    </Text>
                  </Center>
                </Box>
              </VStack>
            ))}
          </HStack>
        </Box>
      </Box>
      <Box h={['200px', '160px']} />

      {loading ? (
        <Loading />
      ) : (
        <Box
          w={['80%', '80%', '80%', '90%']}
          mx="auto"
          textAlign="center"
          fontSize="xl"
        >
          <SimpleGrid columns={[2, 2, 2, 3, 4]} spacing={[12, 10, 14, 12, 16]}>
            {products?.slice(0, 8)?.map(prod => (
              <ProductCard {...prod} />
            ))}
          </SimpleGrid>
          <Link to={`/san-pham`}>
            <GetMoreBtn />
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
