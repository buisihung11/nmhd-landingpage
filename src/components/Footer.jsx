import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { facebook, youtube } from '../assets/icons';

import footerImage from '../assets/images/footer.jpg';
import sloganImage from '../assets/images/SLOGAN.png';
import { useGlobal } from '../services/global';
import Link from './Link';

const ListHeader = ({ children }) => {
  return (
    <Box
      pos="relative"
      _after={{
        content: `""`,
        position: 'absolute',
        width: '30px',
        height: '3px',
        bg: 'primary',
        left: 0,
      }}
    >
      <Text textTransform="uppercase" fontWeight={'bold'} fontSize={'lg'}>
        {children}
      </Text>
    </Box>
  );
};

export default function Footer() {
  const { globalState } = useGlobal();

  console.log(`globalState`, globalState);
  const {
    address = `477 Nguyễn Huệ, khu phố 8, Phường Dương Đông, Thành phố Phú Quốc, Tỉnh Kiên Giang, Việt Nam`,
    endTime = '2021-07-18T10:00:00',
    providerMail1 = 'buisihung321@gmail.com',
    providerPhone1 = '0394236351',
    providerPhone2 = 'Thuy',
    startTime = '2021-07-18T07:00:00',
    websiteURL = 'http://nmhd-fe.nothleft.online/thanh-toan',
  } = globalState || {};

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('white', 'white')}
      backgroundImage={`url(${footerImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      px={[6, 14]}
      py={[6, 10]}
    >
      <Box textAlign="center" mx="auto" py={8} mb={4}>
        <Image mx="auto" w={['70%', '35%']} src={sloganImage} />
      </Box>
      <SimpleGrid
        fontSize={['sm', 'md', 'lg']}
        minChildWidth="150px"
        spacing={['15px', '40px']}
      >
        <Stack align={'flex-start'}>
          <ListHeader>Theo dõi</ListHeader>
          <HStack spacing={2}>
            <a
              href="https://www.facebook.com/hongduc.nuocmamphuquoc"
              target="_blank"
              rel="noreferrer"
            >
              <Image w={'28px'} h={'28px'} src={facebook} />
            </a>
            <Link to={'#'}>
              <Image w={'28px'} h={'28px'} src={youtube} />
            </Link>
          </HStack>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Về chúng tôi</ListHeader>
          <Link to={'/tin-tuc'}>Thông tin</Link>
          <Link to={'/san-pham'}>Sản phẩm</Link>
          <Link to={'/lien-he'}>Liên lạc</Link>
        </Stack>
        <Stack align={'flex-start'}>
          <ListHeader>Hoạt động</ListHeader>
          <Text color="white">Mở cửa các ngày trong tuần: </Text>
          <Text color="primary" fontWeight="bold">
            {startTime?.slice(-8)} - {endTime?.slice(-8)}
          </Text>
        </Stack>
        <Stack>
          <ListHeader>Địa chỉ</ListHeader>
          <Text w="50%" color="white">
            {address}
          </Text>

          <Box pt={4}>
            <Link to={websiteURL} color="primary" fontWeight="bold">
              {websiteURL}
            </Link>
            <a href={`mailto:${providerMail1}`}>
              <Text>{providerMail1}</Text>
            </a>
            <Text>
              <a href={`tel:${providerPhone1}`}>{providerPhone1}</a>
            </Text>
            <Text>
              <a href={`tel:${providerPhone2}`}>{providerPhone2}</a>
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}
