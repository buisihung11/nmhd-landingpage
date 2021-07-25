import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FacebookShareButton } from 'react-share';
import { AiFillFacebook } from 'react-icons/ai';
import { useGlobal } from '../services/global';
import {
  facebook,
  fb_black,
  GooglePlus,
  Linkin,
  Mail,
  twitter,
} from '../assets/icons';

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
          <Image w={'28px'} h={'28px'} src={fb_black} />
        </FacebookShareButton>
        <Image w={'28px'} h={'28px'} src={twitter} />
        <Image w={'28px'} h={'28px'} src={Linkin} />
        <Image w={'28px'} h={'28px'} src={GooglePlus} />
        <Image w={'28px'} h={'28px'} src={Mail} />
      </HStack>
    </Flex>
  );
};

export default ContactShare;
