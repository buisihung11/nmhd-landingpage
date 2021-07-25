import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { useRequest } from 'ahooks';
import React from 'react';
import ContactShare from '../../components/ContactShare';
import Loading from '../../components/Loading';
import { getBlogPost } from '../../services/blog-post';

const ABOUT_TYPE = 1;

const AboutUsPage = () => {
  const { data, loading } = useRequest(() => getBlogPost(ABOUT_TYPE), {
    formatResult: res => res?.data[0],
  });

  const { content = 'Hiện tại chưa có tin tức gì mới' } = data || {};

  return (
    <Box
      w={['80%', '70%']}
      mx="auto"
      textAlign="center"
      pt={['130px', '170px', '200px']}
      pb={20}
    >
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
        <Center>
          {loading && <Loading />}
          {!loading && (
            <Box mt={4}>
              <div dangerouslySetInnerHTML={{ __html: content }}></div>
            </Box>
          )}
        </Center>
      </Box>
      <ContactShare />
    </Box>
  );
};

export default AboutUsPage;
