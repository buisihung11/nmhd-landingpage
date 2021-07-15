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

const CheckoutPage = () => {
  return (
    <Container
      maxW="container.xl"
      pt={['130px', '170px']}
      px={[5, 10]}
      pb={[20, 40]}
    >
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
        <Flex
          w="full"
          direction={['column', 'row']}
          justifyContent={['space-between']}
          pt={8}
          textAlign="left"
        >
          <Box>
            <Heading fontSize={['lg', 'xl']} fontWeight={'800'} color="primary">
              Liên hệ
            </Heading>
            <Text>Điện thoại: 02973.846.205 - 0915.428.829</Text>
            <Text>Giá sỉ liên hệ: 0915.428.829 (Chị Nga)</Text>
          </Box>
          <HStack alignSelf="flex-end" pt={[2, 0]}>
            <Text textTransform="uppercase" fontWeight="bold">
              Share:{' '}
            </Text>
            <Icon w={10} h={10} as={AiFillFacebook} />
          </HStack>
        </Flex>
      </VStack>
    </Container>
  );
};

export default CheckoutPage;
