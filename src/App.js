import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme,
  Image,
} from '@chakra-ui/react';
import Navigation from './components/Nav.jsx';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import banner1 from './assets/images/banner1.png';
import Slider from 'react-slick';

const theme = extendTheme({
  colors: {
    primary: '#E92529',
  },
});

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box h="100vh">
        <Navigation />
        <Box>
          <Slider {...settings}>
            <Image
              w="100vw"
              h="100vh"
              objectFit="cover"
              src={banner1}
              alt="Segun Adebayo"
            />
            <Image
              w="100vw"
              h="100vh"
              objectFit="cover"
              src={banner1}
              alt="Segun Adebayo"
            />
            <Image
              w="100vw"
              h="100vh"
              objectFit="cover"
              src={banner1}
              alt="Segun Adebayo"
            />
          </Slider>
        </Box>
      </Box>

      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
