import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';

const ContactShare = () => {
  return (
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
  );
};

export default ContactShare;
