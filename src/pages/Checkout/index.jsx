import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import ContactShare from '../../components/ContactShare';
import ScrollToTopOnMount from '../../components/ScrollToTop';

const CheckoutPage = () => {
  return (
    <Container
      maxW="container.xl"
      pt={['130px', '170px']}
      px={[5, 10]}
      pb={[20, 40]}
    >
      <ScrollToTopOnMount />
      <VStack align="start" spacing={8}>
        <Heading
          fontSize={['xl', '2xl']}
          fontFamily={'body'}
          fontWeight={'bold'}
          color="primary"
        >
          ĐẶT DỊCH VỤ
        </Heading>
        <SimpleGrid w="full" columns={[1, 2]} spacing={[4, 8]}>
          <VStack spacing={4}>
            <Input bg="white" placeholder="Họ Tên" />
            <Input bg="white" placeholder="Số điện thoại" />
            <Input bg="white" placeholder="Email" />
          </VStack>
          <Box>
            <Textarea
              minH="120px"
              bg="white"
              placeholder="Nội dung"
              height="full"
            />
          </Box>
        </SimpleGrid>
        <Flex mt={4} w="full" justifyContent={['flex-end']}>
          <Button color="primary" variant="link" mr={4}>
            Làm lại
          </Button>
          <Button variant="primary">ĐẶT DỊCH VỤ</Button>
        </Flex>
        <ContactShare />
      </VStack>
    </Container>
  );
};

export default CheckoutPage;
