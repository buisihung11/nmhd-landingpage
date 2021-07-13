import React from 'react';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import Navigation from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/Home/index.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const theme = extendTheme({
  colors: {
    primary: '#E92529',
  },
  components: {
    Button: {
      variants: {
        primary: {
          bg: '#E92529',
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
  },
});

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Navigation />
        {/* CHILDREN */}
        <Box bg="gray.100">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Box>
        {/* END CHILDREN */}
        <Footer />
      </ChakraProvider>
    </Router>
  );
}

export default App;
