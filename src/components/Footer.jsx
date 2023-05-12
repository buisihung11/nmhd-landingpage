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
import notiPng from '../assets/images/logoSaleNoti.png';
import { useGlobal } from '../services/global';
import Link from './Link';
import { useRequest } from 'ahooks';
import { getBlogPost } from '../services/blog-post';

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

const FOOTER_TYPE = 3;

export default function Footer() {
  const { globalState } = useGlobal();
  const { data: footerNavs, loading } = useRequest(() => getBlogPost(FOOTER_TYPE), {
    formatResult: res => res?.data,
  });

  console.log(`globalState`, globalState);
  const {
    address = `477 Nguyễn Huệ, khu phố 8, Phường Dương Đông, Thành phố Phú Quốc, Tỉnh Kiên Giang, Việt Nam`,
    endTime = '2021-07-18T10:00:00',
    providerMail1 = 'nuocmamhongduc@gmail.com',
    providerPhone1 = '02973.846.205',
    providerPhone2 = 'Thuy',
    startTime = '2021-07-18T07:00:00',
    websiteURL = 'http://nuocmamhongduc.com.vn',
    footerImageUrl,
  } = globalState || {};

  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('white', 'white')}
      backgroundImage={`url(${footerImage})`}
      bgRepeat="no-repeat"
      sx={{ filter: 'blur(30)' }}
      bgSize="cover"
      bgPosition="center"
      px={[6, 14]}
      py={[6, 10]}
      pos="relative"
    >
      <Box
        w="100%"
        h="100%"
        pos="absolute"
        top="0"
        left="0"
        zIndex="1"
        sx={{
          backdropFilter: 'blur(2px)',
        }}
      />
      <Box zIndex="2" pos="relative" textAlign="center" mx="auto" py={8} mb={4}>
        <Image mx="auto" w={['70%', '35%']} src={sloganImage} />
        <Box mt={6}>
          <a
            rel="noreferrer"
            target="_blank"
            href={'http://online.gov.vn/Home/WebDetails/102355'}
          >
            <Image mx="auto" w={['50%', '35%', '25%']} src={notiPng} />
          </a>
        </Box>
      </Box>
      <SimpleGrid
        zIndex="2"
        pos="relative"
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
            {startTime?.slice(-8).slice(0, 5)} -{' '}
            {endTime?.slice(-8).slice(0, 5)}
          </Text>
        </Stack>
        <Stack>
          <ListHeader>Địa chỉ</ListHeader>
          <Text w={['90%', '60%', '70%', '50%']} color="white">
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
      <Stack mt={[2,4]} zIndex="3" position="relative">
          <ListHeader>THÔNG TIN CHUNG - CHÍNH SÁCH</ListHeader>
          {footerNavs?.map((nav) => 
            <Link key={nav.id} to={`/tin-tuc/${nav.id}#`}>{nav.title}</Link>
          )}
        </Stack>
    </Box>
  );
}
