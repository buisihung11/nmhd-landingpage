import React from 'react';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navigation from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home/index.js';
import ProductPage from './pages/Products/index.jsx';
import { Helmet } from 'react-helmet';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetailPage from './pages/Products/ProductDetail.jsx';
import CheckoutPage from './pages/Checkout/index.jsx';
import PhoneRing from './components/PhoneRing/PhoneRing.jsx';
import NewsPage from './pages/News/index.jsx';
import { useRequest } from 'ahooks';
import { getStoreConfig } from './services/store.js';
import { GlobalProvider, useGlobal } from './services/global.js';
import AboutUsPage from './pages/AboutUs/index.jsx';
import NewListPage from './pages/News/NewList.jsx';
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
  // get global state
  const { data } = useRequest(getStoreConfig, {
    formatResult: res => res?.data,
  });
  const { setGlobal } = useGlobal();

  console.log(`data`, data);
  React.useEffect(() => {
    if (data) {
      setGlobal(data);
    }
  }, [data, setGlobal]);

  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nước mắm cá cơm Hồng Đức</title>
        <meta
          property="og:description"
          content=" Nước mắm Phú Quốc có lịch sử hình thành và phát triển trên 200 năm, nước mắm Phú Quốc không chỉ là thương hiệu của địa phương mà còn là thương hiệu mạnh của quốc gia đã được nhiều nước trên thế giới biết đến như một thương hiệu nỗi tiếng, nước mắm Phú Quốc là một tài sản quý giá được thiên nhiên trao tặng"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/nmhd-b7d71.appspot.com/o/images%2Fnha-thung-phu-quoc-8.jpg?alt=media&token=f7eb9dfe-0eca-4c78-8297-e5c471256a8d"
        />
        <meta name="keywords" content="NƯỚC MẮM PHÚ QUỐC HỒNG ĐỨC" />
        <meta name="generator" content="NƯỚC MẮM PHÚ QUỐC HỒNG ĐỨC" />
        <meta property="og:url" content="http://trainghiemphuquoc.vn" />
        <meta name="robots" content="all" />
      </Helmet>
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
            <Route exact path="/tin-tuc/:id" component={NewsPage} />
            <Route exact path="/tin-tuc" component={NewListPage} />
            <Route exact path="/gioi-thieu" component={AboutUsPage} />
          </Switch>
        </Box>
        {/* END CHILDREN */}
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

const WrapperGlobal = () => (
  <GlobalProvider>
    <App />
  </GlobalProvider>
);

export default WrapperGlobal;
