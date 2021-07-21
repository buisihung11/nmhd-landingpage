import { Button } from '@chakra-ui/react';
import React from 'react';

const GetMoreBtn = props => {
  return (
    <Button
      w={['120px', '200px']}
      my={[10, 16]}
      color="white"
      rounded="none"
      variant="primary"
      textTransform="uppercase"
      fontSize={['md', 'lg']}
      {...props}
    >
      Xem thêm
    </Button>
  );
};

export default GetMoreBtn;
