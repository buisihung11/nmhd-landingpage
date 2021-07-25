import { Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FacebookShareButton } from 'react-share';
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
          Điện thoại:
          <a href={`tel:${providerPhone1}`}>{providerPhone1}</a> -{' '}
          <a href={`tel:${providerPhone2}`}>{providerPhone2}</a>
        </Text>
        <Text>
          Giá sỉ liên hệ:
          <a href={`tel:${providerPhone1}`}>{providerPhone1}</a> (
          {providerName1})
        </Text>
      </Box>
      <HStack alignSelf="flex-end" pt={[2, 0]}>
        <Text textTransform="uppercase" fontWeight="bold">
          Share:{' '}
        </Text>
        <FacebookShareButton url={window.location.href}>
          <Icon w={10} h={10} as={AiFillFacebook} color="facebook.500" />
        </FacebookShareButton>
      </HStack>
    </Flex>
  );
};

export default ContactShare;
