import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function ProductCard({ name, description, thumbnail }) {
  return (
    <Center>
      <Box
        role={'group'}
        p={[0]}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          pos={'relative'}
          height={['140px', '170px', '240px']}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${thumbnail})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Box
            top="20px"
            left="20px"
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
              w="10px"
              h="10px"
              bg="gray.500"
            />
          </Box>
          <Image
            rounded={'lg'}
            width={'full'}
            height={'full'}
            objectFit={'cover'}
            src={thumbnail}
          />
        </Box>
        <Stack
          _groupHover={{
            boxShadow: '2xl',
            borderBottom: '2px solid red',
          }}
          py={[2, 4]}
          px={[2, 4]}
          align={'center'}
        >
          {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            Brand
          </Text> */}
          <Heading
            fontSize={['sm', 'md', 'lg', 'xl']}
            fontFamily={'body'}
            fontWeight={'bold'}
          >
            {name}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text
              fontWeight={500}
              color={'primary'}
              fontSize={['sm', 'sm', 'md', 'md']}
            >
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
