import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { useParams } from 'react-router';
import MySlider from '../../components/MySlider';
import { stringToSlug } from '../../utils';
import { PRODUCTS_HOME } from '../Home';
import ProductCard from '../../components/ProductCard';
import Link from '../../components/Link';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import GetMoreBtn from '../../components/GetMoreBtn';

const settings = {
  dots: false,
  infinite: false,
  autoScroll: false,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const ProductDetailPage = () => {
  let { seoName } = useParams();

  const getProduct = seoName => {
    return PRODUCTS_HOME.find(({ name }) => stringToSlug(name) === seoName);
  };

  const product = getProduct(seoName);

  const { name, description, thumbnail } = product;

  const gallery = Array(6).fill(thumbnail);

  return (
    <Box
      w={['80%', '80%', '80%', '90%']}
      mx="auto"
      textAlign="center"
      pt={['130px', '170px']}
      pb={20}
    >
      <ScrollToTopOnMount />
      <Box>
        <Flex spacing={[8]} flexWrap="wrap">
          <Box width={['100%', '45%']} mr={['0', '4']}>
            <VStack w="full" spacing={5}>
              <AspectRatio width="100%" maxW="full" ratio={1}>
                <Image objectFit={'cover'} src={thumbnail} />
              </AspectRatio>
              <Box w="full">
                <MySlider {...settings} spacing="18px">
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
                dangerouslySetInnerHTML={{
                  __html: `<p>Một trong những nhà thùng nước mắm truyền thống lâu đời tại Phú Quốc với kinh nghiệm được truyền qua nhiều thế hệ để cho ra nhưng chai nước mắm có mùi vị đậm đà.
                            Quy trình sản xuất thủ công từ khâu đánh bắt cá cơm đến khâu ra thành phẩm.
                            Thời gian ủ cá hoàn toàn tự nhiên.
                            Sản xuất và đóng chai tại Phú Quốc
                            Giao hàng toàn quốc</p>`,
                }}
              />
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
                    <Text color="primary">Nước mắm loại 43 độ đạm</Text>
                  </HStack>
                  <HStack>
                    <Text>Từ khóa: </Text>
                    <Text color="primary">
                      43-do-dam, nuoc-mam-hong-duc, nuoc-mam-ngon
                    </Text>
                  </HStack>
                </Box>
                <Flex>
                  <HStack>
                    <Text>Share: </Text>
                    <Icon w={10} h={10} as={AiFillFacebook} />
                  </HStack>
                  <Spacer />
                  <Link to={`/thanh-toan`}>
                    <Button variant="primary">ĐẶT DỊCH VỤ</Button>
                  </Link>
                </Flex>
              </Container>
            </VStack>
          </Box>
        </Flex>
      </Box>

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
          {PRODUCTS_HOME?.slice(0, 8).map(prod => (
            <ProductCard {...prod} />
          ))}
        </SimpleGrid>
        <Box w="full" textAlign={['center', 'center', 'end']}>
          <GetMoreBtn />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetailPage;
