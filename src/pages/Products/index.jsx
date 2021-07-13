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
      <Box position="relative" h="100vh">
        <Banner />
      </Box>
      <Box
        w={['90%', '90%', '90%']}
        mx="auto"
        textAlign="center"
        fontSize="xl"
        py={[4, 10]}
      >
        <VStack spacing={10}>
          {PRODUCT_MASTERS.map(master => (
            <Box w="full">
              <HStack w="full" textAlign="left" mb="6">
                <Box w="80%">
                  <Heading
                    fontSize={['xl', '2xl', '3xl']}
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    {master.name}
                  </Heading>
                </Box>
                <Divider borderColor="grey.300" borderBottomWidth={2} />
              </HStack>
              <SimpleGrid columns={[2, 2, 3, 4]} spacing={[8]}>
                {PRODUCTS_HOME?.slice(0, 4).map(prod => (
                  <ProductCard {...prod} />
                ))}
              </SimpleGrid>
              <Button
                float="right"
                mt={6}
                color="white"
                rounded="none"
                variant="primary"
              >
                Xem thêm
              </Button>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductListPage;
