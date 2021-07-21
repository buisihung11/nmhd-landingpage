import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { useRequest } from 'ahooks';
import React from 'react';
import Banner from '../../components/Banner';
import GetMoreBtn from '../../components/GetMoreBtn';
import ProductCard from '../../components/ProductCard';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import useQuery from '../../components/useQuery';
import { getMasterProd } from '../../services/product';
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

const ProductListPage = ({ history }) => {
  const { data, loading, error } = useRequest(getMasterProd);
  const query = useQuery();
  const [filter, setFilter] = React.useState(null);

  React.useEffect(() => {
    const sku = query.get('sku');
    if (sku) {
      setFilter(sku);
    }
  }, [query]);

  if (loading) {
    return <p>Loading</p>;
  }
  if (error) {
    return (
      <Box pt={16}>
        <Center>Đã xảy ra lỗi vui lòng thử lại</Center>
      </Box>
    );
  }

  const masterProds = filter
    ? data?.data.filter(({ sku }) => sku === filter)
    : data?.data;

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
          {masterProds.map(master => (
            <Box w="full">
              <HStack w="full" textAlign="left" mb="6">
                <Box>
                  <Heading
                    fontSize={['lg', '2xl', '3xl']}
                    textAlign="left"
                    textTransform="uppercase"
                  >
                    {master.productName}
                  </Heading>
                </Box>
                <Box flex={1} alignSelf="flex-end" pb="6px">
                  <Divider />
                </Box>
              </HStack>

              <SimpleGrid
                columns={[2, 2, 2, 3, 4]}
                spacing={[12, 10, 14, 12, 16]}
                alignItems="start"
              >
                {master.childProducts
                  ?.slice(0, filter !== null ? master.childProducts?.length : 4)
                  ?.map(prod => (
                    <ProductCard {...prod} />
                  ))}
              </SimpleGrid>
              <Box w="full" textAlign={['center', 'center', 'end']}>
                <GetMoreBtn onClick={() => setFilter(master.sku)} />
              </Box>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default ProductListPage;
