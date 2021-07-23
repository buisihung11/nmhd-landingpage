import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import React from 'react';

const Loading = () => {
  return (
    <Box h="60vh">
      <Center flexDirection="column" h="100%">
        <Spinner size="xl" color="primary" />
        <Box>
          <Heading mt={2} color="primary" variant="h5">
            Đang tải
          </Heading>
        </Box>
      </Center>
    </Box>
  );
};

export default Loading;
