import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouteLink } from 'react-router-dom';

const Link = props => <ChakraLink {...props} as={RouteLink} />;

export default Link;
