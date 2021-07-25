import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { useGlobal } from '../services/global';

const ContactShare = () => {
  const { globalState } = useGlobal();

  console.log(`globalState`, globalState);
  const {
    providerName1 = 'Ha',
    providerPhone1 = '0394236351',
    providerPhone2 = 'Thuy',
  } = globalState || {};
  return (
    <Flex
      w="full"
      direction={['column', 'row']}
      justifyContent={['space-between']}
      pt={8}
      textAlign="left"
      fontSize={['lg', 'xl']}
    >
      <Box>
        <Heading fontWeight={'800'} color="primary">
          Liên hệ
        </Heading>
        <Text>
          Điện thoại: {providerPhone1} - {providerPhone2}
        </Text>
        <Text>
          Giá sỉ liên hệ: {providerPhone1} ({providerName1})
        </Text>
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
