import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook } from 'react-icons/ai';
import ContactShare from '../../components/ContactShare';
import Link from '../../components/Link';
import ScrollToTopOnMount from '../../components/ScrollToTop';
import { createOrder } from '../../services/order';

const CheckoutPage = ({ history }) => {
  const {
    location: { state: orderProduct },
  } = history;
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    custName: '',
    custPhone: '',
    custEmail: '',
    note: `Đặt mua ${orderProduct?.productName}` ?? '',
    products: [
      {
        productId: orderProduct.id,
        quantity: 1,
      },
    ],
  });

  if (!orderProduct) {
    return (
      <Container
        maxW="container.xl"
        pt={['130px', '170px']}
        px={[5, 10]}
        pb={[20, 40]}
        height="60vh"
      >
        <Center h="100%" flexDir="column">
          <Heading mt={4} mb={2}>
            Chưa chọn sản phẩm
          </Heading>
          <Link to="/san-pham">
            <Button variant="primary">Xem danh sách sản phẩm</Button>
          </Link>
        </Center>
      </Container>
    );
  }

  const onSubmit = async data => {
    console.log(data);
    try {
      const res = await createOrder(data);
      if (res.status === 201) {
        toast({
          title: 'Đơn hàng thành công',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      } else {
        toast({
          title: 'Đơn hàng chưa thành công. Vui lòng thử lại.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right',
        });
      }
    } catch {
      toast({
        title: 'Đơn hàng chưa thành công. Vui lòng thử lại.',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    }
  };

  return (
    <Container
      maxW="container.xl"
      pt={['130px', '170px']}
      px={[5, 10]}
      pb={[20, 40]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            {...register('products[0].productId')}
            defaultValue={orderProduct.id}
            hidden
          />
          <Input
            {...register('products[0].quantity')}
            defaultValue={1}
            hidden
          />
          <SimpleGrid w="full" columns={[1, 2]} spacing={[4, 8]}>
            <VStack spacing={4}>
              <Input
                isInvalid={errors.custName}
                bg="white"
                placeholder="Họ Tên"
                {...register('custName', { required: true })}
              />
              <Input
                isInvalid={errors.custPhone}
                bg="white"
                placeholder="Số điện thoại"
                {...register('custPhone', { required: true })}
              />
              <Input
                isInvalid={errors.custEmail}
                bg="white"
                placeholder="Email"
                {...register('custEmail', { required: true })}
              />
            </VStack>
            <Box>
              <Textarea
                defaultValue={`Đặt mua ${orderProduct?.productName}`}
                {...register('note', { required: true })}
                minH="120px"
                bg="white"
                placeholder="Nội dung"
                height="full"
              />
            </Box>
          </SimpleGrid>
          <Flex mt={4} w="full" justifyContent={['flex-end']}>
            <Button
              onClick={() =>
                reset({
                  custName: '',
                  custPhone: '',
                  custEmail: '',
                  note: '',
                })
              }
              color="primary"
              variant="link"
              mr={4}
            >
              Làm lại
            </Button>
            <Button
              // onClick={() => handleSubmit(console.log)}
              type="submit"
              variant="primary"
            >
              ĐẶT DỊCH VỤ
            </Button>
          </Flex>
          <ContactShare />
        </VStack>
      </form>
    </Container>
  );
};

export default CheckoutPage;
