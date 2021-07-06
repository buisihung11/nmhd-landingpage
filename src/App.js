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
