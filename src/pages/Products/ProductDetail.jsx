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
  Text,
  VStack,
} from '@chakra-ui/react';
import { FacebookShareButton } from 'react-share';
import React from 'react';
import { Icon } from '@chakra-ui/react';
import { AiFillFacebook } from 'react-icons/ai';
import { useParams } from 'react-router';
import MySlider from '../../components/MySlider';
import ProductCard from '../../components/ProductCard';
import Link from '../../components/Link';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import GetMoreBtn from '../../components/GetMoreBtn';
import { useRequest } from 'ahooks';
import { getProdDetail, getRelateProduct } from '../../services/product';
import Loading from '../../components/Loading';
import { useGlobal } from '../../services/global';
import {
  facebook,
  fb_black,
  GooglePlus,
  Linkin,
  Mail,
  twitter,
} from '../../assets/icons';

const settings = {
  dots: false,
  infinite: false,
  autoScroll: false,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const ProductDetailPage = ({ history }) => {
  let { seoName } = useParams();

  const { globalState } = useGlobal();

  console.log(`globalState`, globalState);
  const {
    providerName1 = 'Ha',
    providerPhone1 = '0394236351',
    providerPhone2 = 'Thuy',
  } = globalState || {};

  const { data, loading, error } = useRequest(() => getProdDetail(seoName), {
    formatResult: res => res.data && res.data[0],
    refreshDeps: [seoName],
  });
  const { data: relateProducts } = useRequest(
    () => getRelateProduct(data?.generalProductId),
    {
      formatResult: res => res.data,
      ready: !!data?.generalProductId,
      refreshDeps: [data?.generalProductId],
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

  const gallery = Array(3).fill(thumbnail);

  return (
    <Box
      w={['90%', '80%', '80%', '90%']}
      mx="auto"
      textAlign="center"
      pt={['110px', '170px', '200px']}
      pb={20}
    >
      <ScrollToTopOnMount />
      {error && <p>Có lỗi xảy ra</p>}
      {loading ? (
        <Loading />
      ) : (
        <Box>
          <Flex spacing={[8]} flexWrap="wrap" alignItems="stretch">
            <Box width={['100%', '45%']} mr={[4, 8, 12]}>
              <VStack w="full" spacing={5}>
                <AspectRatio
                  height={{ xs: '345px', md: '523px' }}
                  width="100%"
                  ratio={1}
                >
                  <Image objectFit={'contain'} src={thumbnail} />
                </AspectRatio>
                <Box w="full">
                  <MySlider
                    className="slider variable-width"
                    color="black"
                    {...settings}
                    spacing={['10px', '25px']}
                  >
                    {gallery.map(thumb => (
                      <Box p={2} bg="white">
                        <Image
                          width={['100px', '100px', '100px', '125px', '180px']}
                          height={['100px', '100px', '100px', '125px', '180px']}
                          objectFit="contain"
                          src={thumb}
                          alt="Segun Adebayo"
                        />
                      </Box>
                    ))}
                  </MySlider>
                </Box>
              </VStack>
            </Box>

            <Box
              maxW={['90%', '100%']}
              textAlign="center"
              flex={1}
              mt={['4', '0']}
              marginX="auto"
            >
              <VStack alignItems="start" w="100%" h="100%">
                <Box
                  h={{ lg: '415px', xl: '523px' }}
                  display="flex"
                  flexDir="column"
                >
                  <Container
                    maxW="container.xl"
                    textAlign={['center', 'left']}
                    px={0}
                    mb={4}
                  >
                    <Heading
                      fontSize={['2xl', '3xl']}
                      fontFamily={'body'}
                      fontWeight={'bold'}
                      color="primary"
                    >
                      {name}
                    </Heading>
                    <Text fontWeight={600} fontSize={['lg', 'xl']}>
                      Giá sản phẩm: Liên hệ
                    </Text>
                  </Container>

                  <Box
                    textAlign="left"
                    flex={1}
                    fontSize={{ lg: 'md', xl: '2xl' }}
                    w={['100%', '90%']}
                    px={4}
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />

                  <Box textAlign="left" fontSize={['lg', 'xl', '2xl']}>
                    <Heading
                      fontWeight={'800'}
                      color="primary"
                      fontSize={['xl', '2xl']}
                    >
                      LIÊN HỆ
                    </Heading>
                    <Text>
                      Điện thoại:
                      <a href={`tel:${providerPhone1}`}>
                        {providerPhone1}
                      </a> -{' '}
                      <a href={`tel:${providerPhone2}`}>{providerPhone2}</a>
                    </Text>
                    <Text>
                      Giá sỉ liên hệ:
                      <a href={`tel:${providerPhone1}`}>{providerPhone1}</a> (
                      {providerName1})
                    </Text>
                  </Box>
                  <Divider />
                </Box>

                <Container
                  maxW="container.xl"
                  d="flex"
                  flexDir="column"
                  flex={1}
                  mt={0}
                  pt={4}
                  px={0}
                >
                  <Box textAlign="left" mb={2} fontSize={['md', 'lg']} flex={1}>
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
                  <Flex flexWrap="wrap">
                    <HStack>
                      <Text
                        textTransform="uppercase"
                        fontWeight="bold"
                        fontSize={['lg', 'xl']}
                      >
                        Share:{' '}
                      </Text>
                      <FacebookShareButton url={window.location.href}>
                        <Image w={'28px'} h={'28px'} src={fb_black} />
                      </FacebookShareButton>
                      <Image w={'28px'} h={'28px'} src={twitter} />
                      <Image w={'28px'} h={'28px'} src={Linkin} />
                      <Image w={'28px'} h={'28px'} src={GooglePlus} />
                      <Image w={'28px'} h={'28px'} src={Mail} />
                    </HStack>
                    <Spacer />
                    <Button
                      w={['150px', '150px', '150px', '200px']}
                      onClick={() => history.push('/thanh-toan', data)}
                      variant="primary"
                      fontSize="xl"
                      mt={{ base: 4, md: 4, lg: 0 }}
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
      <Container maxW={['90%', '100%']} px={0} mt={[8, 12]}>
        <HStack w="full" textAlign="left" mb={[6, 8]}>
          <Box>
            <Heading
              fontSize={['lg', '2xl', '3xl']}
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
        <SimpleGrid
          columns={[2, 2, 2, 3, 4]}
          spacing={[16, 10, 14, 12, 16]}
          spacingY={[4, 8]}
        >
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
