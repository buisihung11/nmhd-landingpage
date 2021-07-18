import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Banner from '../../components/Banner';
import ProductCard from '../../components/ProductCard';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { PRODUCTS_HOME } from '../Home';

const PRODUCT_MASTERS = [
  {
    name: 'NƯỚC MẮM 43 ĐỘ ĐẠM',
    childs: PRODUCTS_HOME?.slice(0, 4),
  },
  {
    name: 'NƯỚC MẮM 40 ĐỘ ĐẠM',
    childs: PRODUCTS_HOME?.slice(0, 4),
  },
  {
    name: 'NƯỚC MẮM 35 ĐỘ ĐẠM',
    childs: PRODUCTS_HOME?.slice(0, 4),
  },
  {
    name: 'NƯỚC MẮM 30 ĐỘ ĐẠM',
    childs: PRODUCTS_HOME?.slice(0, 4),
  },
];

const ProductListPage = () => {
  return (
    <Box>
      <ScrollToTopOnMount />
      <Box position="relative" h="100vh">
        <Banner />
      </Box>
      <Box
        w={['80%', '80%', '80%', '90%']}
        mx="auto"
        textAlign="center"
        fontSize="xl"
        py={[8, 10]}
      >
        <VStack spacing={10}>
          {PRODUCT_MASTERS.map(master => (
            <Box w="full">
              <HStack w="full" textAlign="left" mb="6">
                <Box>
                  <Heading
                    fontSize={['lg', 'xl', '2xl']}
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    {master.name}
                  </Heading>
                </Box>
                <Box flex={1}>
                  <Divider />
                </Box>
              </HStack>

              <SimpleGrid
                columns={[2, 2, 2, 3, 4]}
                spacing={[12, 10, 14, 12, 16]}
              >
                {PRODUCTS_HOME?.slice(0, 4).map(prod => (
                  <ProductCard {...prod} />
                ))}
              </SimpleGrid>
              <Box w="full" textAlign={['center', 'center', 'end']}>
                <Button mt={6} color="white" rounded="none" variant="primary">
                  Xem thêm
                </Button>
              </Box>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductListPage;
