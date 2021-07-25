import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';
import { useRequest } from 'ahooks';
import React from 'react';
import ContactShare from '../../components/ContactShare';
import Link from '../../components/Link';
import Loading from '../../components/Loading';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { getBlogPost } from '../../services/blog-post';

const NEWS_TYPE = 0;

const NewListPage = () => {
  const { data, loading } = useRequest(() => getBlogPost(NEWS_TYPE), {
    formatResult: res => res?.data,
  });

  return (
    <Box
      w={['80%', '80%']}
      mx="auto"
      textAlign="center"
      pt={['130px', '170px', '200px']}
      pb={20}
    >
      <ScrollToTopOnMount />
      <Container maxW="container.xl">
        <Heading
          fontSize={['xl', '2xl']}
          fontFamily={'body'}
          fontWeight={'bold'}
          color="primary"
        >
          NƯỚC MẮM CÁ CƠM HỒNG ĐỨC
        </Heading>
        <Text fontWeight={600} fontSize={['md', 'lg']}>
          TRĂM NĂM HƯƠNG VỊ TRUYỀN THỐNG
        </Text>
      </Container>
      <Box minH="40vh" py={[5, 10]}>
        {loading && <Loading />}
        {!loading &&
          data.map(newBlog => (
            <Link to={`/tin-tuc/${newBlog.id}`}>
              <Box bg="#E4E4E4" p={4} mb={[4, 8]} borderRadius="md">
                <Flex flexDir={['column', 'row']} alignItems="start">
                  <Image w={('100%', '280px')} h="185px" src={newBlog.banner} />
                  <Box px={[0, 8]} pt={[4, 0]} textAlign="left">
                    <Heading size="lg">{newBlog.title}</Heading>
                    <Box
                      maxH="100px"
                      overflowY="hidden"
                      dangerouslySetInnerHTML={{
                        __html: newBlog.content ?? 'Đang cập nhật',
                      }}
                    />
                  </Box>
                </Flex>
              </Box>
            </Link>
          ))}
      </Box>
      <ContactShare />
    </Box>
  );
};

export default NewListPage;
