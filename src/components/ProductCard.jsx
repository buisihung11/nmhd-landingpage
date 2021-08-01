import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  AspectRatio,
} from '@chakra-ui/react';
import { stringToSlug } from '../utils';
import Link from './Link';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auhref=format&fit=crop&w=1350&q=80';

export default function ProductCard({
  productName: name,
  generalProduct,
  thumbnail,
  sku: slug,
}) {
  const { productName: description = 'Sản phẩm Nước Mắm Hồng Đức' } =
    generalProduct || {};
  // const slug = stringToSlug(name);
  return (
    <Link height="100%" to={`/san-pham/${slug}`}>
      <Box
        role={'group'}
        p={[2, 4]}
        maxW={'330px'}
        w={['127px', '274px']}
        bg={useColorModeValue('white', 'gray.800')}
        height="100%"
        pos={'relative'}
        zIndex={1}
        // height={['211px', '456px']}
        display="flex"
        flexDir="column"
        _hover={{
          boxShadow: '2xl',
        }}
      >
        <Box pt={['15px', '40px']} position="relative">
          <Image
            w={['127px', '243px']}
            h={['127px', '243px']}
            rounded={'lg'}
            mx="auto"
            objectFit={'cover'}
            src={thumbnail}
          />
          <Box
            top={['5px', '10px']}
            left={['5px', '15px']}
            bg="white"
            p={1}
            position="absolute"
            _groupHover={{
              border: `1px solid red`,
            }}
            border={`1px solid gray`}
            rounded="full"
          >
            <Box
              _groupHover={{
                bg: 'primary',
              }}
              rounded="full"
              w={['10px', '18px']}
              h={['10px', '18px']}
              bg="gray.500"
            />
          </Box>
        </Box>
        <Stack
          _groupHover={{
            borderBottom: '2px solid red',
          }}
          py={[1, 4]}
          px={[2, 4]}
          align={'center'}
          flex={1}
          justifyContent="start"
        >
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading
            fontSize={['sm', 'md', 'lg', '2xl']}
            fontFamily={'body'}
            fontWeight={'bold'}
            textTransform="uppercase"
          >
            Nước mắm cá cơm Hồng Đức
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text
              fontWeight={500}
              color={'primary'}
              fontSize={['xs', 'xs', 'md', 'md']}
            >
              {name}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
