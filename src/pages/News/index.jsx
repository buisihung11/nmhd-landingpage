import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import ContactShare from '../../components/ContactShare';
import ScrollToTopOnMount from '../../components/ScrollToTop';

const NewsPage = () => {
  return (
    <Container
      maxW="container.lg"
      pt={['130px', '170px']}
      px={[5, 10]}
      pb={[20, 40]}
    >
      <ScrollToTopOnMount />
      <Box textAlign="center">
        <Heading
          fontSize={['2xl', '3xl']}
          fontFamily={'body'}
          fontWeight={'bold'}
          color="primary"
        >
          NƯỚC MẮM CÁ CƠM HỒNG ĐỨC
        </Heading>
        <Text fontWeight={600} fontSize={['lg', 'xl']}>
          TRĂM NĂM HƯƠNG VỊ TRUYỀN THỐNG
        </Text>
      </Box>

      <Box py={[5, 10]}>
        <Text>
          Nước mắm Phú Quốc có lịch sử hình thành và phát triển trên 200 năm,
          nước mắm Phú Quốc không chỉ là thương hiệu của địa phương mà còn là
          thương hiệu mạnh của quốc gia đã được nhiều nước trên thế giới biết
          đến như một thương hiệu nỗi tiếng, nước mắm Phú Quốc là một tài sản
          quý giá được thiên nhiên trao tặng và những người con Phú Quốc quyết
          tâm gìn giữ và phát triển nó, xem nó như báo vật của ông bà để lại cho
          những người con nơi đây. Nước mắm Phú Quốc nói chung và Nước mắm Hồng
          Đức nói riêng được sản xuất truyền thống theo phương pháp cá được trộn
          với muối tỷ lệ 3 cá 1 muối thời gian ủ chượp là 12 tháng, sau đó tháo
          trộn cho ra thành phẩm gọi là nước mắm, nước mắm có mùi thơm nhẹ, màu
          hồng nâu sậm, vị mặn đầu lưỡi, hậu ngọt. Nước mắm Hồng Đức tự hào là
          một trong những thương hiệu làm nên tên tuổi của Nước mắm Phú Quốc
          ngày nay.
        </Text>
      </Box>

      <ContactShare />
    </Container>
  );
};

export default NewsPage;
