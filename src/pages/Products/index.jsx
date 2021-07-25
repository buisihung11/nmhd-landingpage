import {
  Box,
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
import Loading from '../../components/Loading';
import ProductCard from '../../components/ProductCard';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import useQuery from '../../components/useQuery';
import { getMasterProd } from '../../services/product';

const ProductListPage = ({ history }) => {
  const query = useQuery();
  const sku = query.get('sku');
  const generalProductId = query.get('generalProductId');
  const tag = query.get('tag');
  const {
    data: masterProds,
    loading,
    error,
  } = useRequest(
    () =>
      getMasterProd({
        sku,
        id: generalProductId,
        tag,
      }),
    {
      formatResult: res => res.data,
    }
  );

  if (error) {
    return (
      <Box pt={16}>
        <Center>Đã xảy ra lỗi vui lòng thử lại</Center>
      </Box>
    );
  }

  const reversedArr = [...(masterProds || [])]?.reverse();

  return (
    <Box>
      <ScrollToTopOnMount />
      <Box position="relative" h="100vh">
        <Banner />
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <Box
          w={['80%', '80%', '80%', '90%']}
          mx="auto"
          textAlign="center"
          fontSize="xl"
          py={[8, 10]}
        >
          <VStack spacing={10}>
            {reversedArr?.map(master => (
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
                    ?.slice(
                      0,
                      generalProductId ? master.childProducts.length : 4
                    )
                    ?.map(prod => (
                      <ProductCard {...prod} />
                    ))}
                </SimpleGrid>
                <Box w="full" textAlign={['center', 'center', 'end']}>
                  <GetMoreBtn
                    onClick={() =>
                      history.push(`/san-pham?generalProductId=${master.id}`)
                    }
                  />
                </Box>
              </Box>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default ProductListPage;
