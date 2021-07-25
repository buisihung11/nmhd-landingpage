import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { useRequest } from 'ahooks';
import React from 'react';
import ContactShare from '../../components/ContactShare';
import Loading from '../../components/Loading';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { getBlogPost } from '../../services/blog-post';

const NEWS_TYPE = 0;

const NewsPage = () => {
  const { data, loading } = useRequest(() => getBlogPost(NEWS_TYPE), {
    formatResult: res => res?.data[0],
  });

  const { content = 'Hiện tại chưa có tin tức gì mới' } = data || {};

  return (
    <Container
      w={['80%', '80%']}
      maxW="container.lg"
      pt={['130px', '170px']}
      px={[5, 10]}
      pb={[20, 40]}
    >
      <ScrollToTopOnMount />
      <Box textAlign="center">
        <Heading
          fontSize={['2xl', '3xl']}
          fontFamily={'body'}
          fontWeight={'bold'}
          color="primary"
        >
          NƯỚC MẮM CÁ CƠM HỒNG ĐỨC
        </Heading>
        <Text fontWeight={600} fontSize={['lg', 'xl']}>
          TRĂM NĂM HƯƠNG VỊ TRUYỀN THỐNG
        </Text>
      </Box>

      <Box py={[5, 10]}>
        {loading && <Loading />}
        {!loading && (
          <Box mt={4}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Box>
        )}
      </Box>

      <ContactShare />
    </Container>
  );
};

export default NewsPage;
