import {
  AspectRatio,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { useParams } from 'react-router';
import MySlider from '../../components/MySlider';
import { stringToSlug } from '../../utils';
import ProductCard from '../../components/ProductCard';
import Link from '../../components/Link';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import GetMoreBtn from '../../components/GetMoreBtn';
import { useRequest } from 'ahooks';
import { getProdDetail, getRelateProduct } from '../../services/product';
import Loading from '../../components/Loading';

const settings = {
  dots: false,
  infinite: false,
  autoScroll: false,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const ProductDetailPage = ({ history }) => {
  let { seoName } = useParams();

  const { data, loading, error } = useRequest(() => getProdDetail(seoName), {
    formatResult: res => res.data && res.data[0],
  });
  const { data: relateProducts } = useRequest(
    () => getRelateProduct(data.generalProductId),
    {
      formatResult: res => res.data,
      ready: !!data?.generalProductId,
    }
  );

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

  const filterByGeneralProductID = generalProdId => {
    history.push(`/san-pham?generalProductId=${generalProdId}`);
  };
  const filterByTag = tag => {};

  const {
    productName: name,
    description,
    thumbnail,
    tags,
    generalProductId,
    generalProduct,
  } = data || {};

  const tagArr = tags?.split(',') || [];

  const { productName } = generalProduct;

  const gallery = Array(6).fill(thumbnail);

  return (
    <Box
      w={['80%', '80%', '80%', '90%']}
      mx="auto"
      textAlign="center"
      pt={['130px', '170px', '200px']}
      pb={20}
    >
      <ScrollToTopOnMount />
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Flex spacing={[8]} flexWrap="wrap">
            <Box width={['100%', '45%']} mr={[4, 8, 12]}>
              <VStack w="full" spacing={5}>
                <AspectRatio width="100%" maxW="full" ratio={1}>
                  <Image objectFit={'cover'} src={thumbnail} />
                </AspectRatio>
                <Box w="full">
                  <MySlider color="black" {...settings} spacing="25px">
                    {gallery.map(thumb => (
                      <Image
                        w="100vw"
                        objectFit="cover"
                        src={thumb}
                        alt="Segun Adebayo"
                      />
                    ))}
                  </MySlider>
                </Box>
              </VStack>
            </Box>

            <Box flex={1} mt={['4', '0']}>
              <VStack alignItems="start">
                <Container
                  maxW="container.xl"
                  textAlign={['center', 'left']}
                  px={0}
                >
                  <Heading
                    fontSize={['xl', '2xl']}
                    fontFamily={'body'}
                    fontWeight={'bold'}
                    color="primary"
                  >
                    {name}
                  </Heading>
                  <Text fontWeight={600} fontSize={['md', 'lg']}>
                    Giá sản phẩm: Liên hệ
                  </Text>
                </Container>

                <Box
                  textAlign="left"
                  // dangerouslySetInnerHTML={{
                  //   __html: `<p>Một trong những nhà thùng nước mắm truyền thống lâu đời tại Phú Quốc với kinh nghiệm được truyền qua nhiều thế hệ để cho ra nhưng chai nước mắm có mùi vị đậm đà.
                  //             Quy trình sản xuất thủ công từ khâu đánh bắt cá cơm đến khâu ra thành phẩm.
                  //             Thời gian ủ cá hoàn toàn tự nhiên.
                  //             Sản xuất và đóng chai tại Phú Quốc
                  //             Giao hàng toàn quốc</p>`,
                  // }}
                >
                  {description}
                </Box>
                <Box textAlign="left">
                  <Heading
                    fontSize={['lg', 'xl']}
                    fontWeight={'800'}
                    color="primary"
                  >
                    Liên hệ
                  </Heading>
                  <Text>Điện thoại: 02973.846.205 - 0915.428.829</Text>
                  <Text>Giá sỉ liên hệ: 0915.428.829 (Chị Nga)</Text>
                </Box>
                <Divider />
                <Container maxW="container.xl" px={0}>
                  <Box textAlign="left" mb={2}>
                    <HStack>
                      <Text>Danh mục: </Text>
                      <Link
                        to={`/san-pham?generalProductId=${generalProductId}`}
                      >
                        <Text color="primary">{productName}</Text>
                      </Link>
                    </HStack>
                    <HStack>
                      <Text>Từ khóa: </Text>
                      <Text color="primary">
                        {tagArr.map(tag => (
                          <Link to={`/san-pham?tag=${tag}`}>{tag}, </Link>
                        ))}
                      </Text>
                    </HStack>
                  </Box>
                  <Flex>
                    <HStack>
                      <Text>Share: </Text>
                      <Icon w={10} h={10} as={AiFillFacebook} />
                    </HStack>
                    <Spacer />
                    <Button
                      onClick={() => history.push('/thanh-toan', data)}
                      variant="primary"
                    >
                      ĐẶT DỊCH VỤ
                    </Button>
                  </Flex>
                </Container>
              </VStack>
            </Box>
          </Flex>
        </Box>
      )}
      <Container maxW="100%" px={0} mt={[4, 8]}>
        <HStack w="full" textAlign="left" mb="6">
          <Box>
            <Heading
              fontSize={['lg', 'xl', '2xl']}
              textAlign="left"
              textTransform="uppercase"
            >
              Sản phẩm tương tự
            </Heading>
          </Box>
          <Box flex={1} alignSelf="flex-end" pb="6px">
            <Divider />
          </Box>
        </HStack>
        <SimpleGrid columns={[2, 2, 2, 3, 4]} spacing={[12, 10, 14, 12, 16]}>
          {relateProducts?.slice(0, 8).map(prod => (
            <ProductCard {...prod} />
          ))}
        </SimpleGrid>
        <Box w="full" textAlign={['center', 'center', 'end']}>
          <Link to={`/san-pham?generalProductId=${generalProductId}`}>
            <GetMoreBtn />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
