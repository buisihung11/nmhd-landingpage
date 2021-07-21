import React from 'react';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navigation from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home/index.js';
import ProductPage from './pages/Products/index.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetailPage from './pages/Products/ProductDetail.jsx';
import CheckoutPage from './pages/Checkout/index.jsx';
import PhoneRing from './components/PhoneRing/PhoneRing.jsx';
import NewsPage from './pages/News/index.jsx';
import axios from 'axios';
const theme = extendTheme({
  fonts: {
    heading: 'Roboto Condensed',
    body: 'Roboto Condensed',
  },
  colors: {
    primary: '#E92529',
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
    Input: {
      baseStyle: {
        field: {
          bg: 'white',
        },
      },
      defaultProps: {
        size: 'lg',
      },
    },
    Button: {
      variants: {
        primary: {
          bg: '#E92529',
          rounded: 'none',
          color: 'white',
          boxShadow: '0 0 2px 2px #efdfde',
          _hover: {
            bg: '#e92529d1',
          },
        },
        defaultProps: {
          variant: 'primary',
        },
        // 4. We can override existing variants
      },
    },
    Divider: {
      baseStyle: {
        borderBottomWidth: '2px',
        borderColor: 'black',
      },
    },
  },
});

function App() {
  React.useEffect(() => {
    console.log('Test API');
    axios
      .get('https://nmhd-api.nothleft.online/api/products')
      .then(console.log)
      .catch(console.log);
  }, []);

  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navigation />
        {/* CHILDREN */}
        <Box bg="gray.100">
          <PhoneRing />

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/san-pham" component={ProductPage} />
            <Route
              exact
              path="/san-pham/:seoName"
              component={ProductDetailPage}
            />
            <Route exact path="/thanh-toan" component={CheckoutPage} />
            <Route exact path="/tin-tuc" component={NewsPage} />
          </Switch>
        </Box>
        {/* END CHILDREN */}
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
