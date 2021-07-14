import styled from '@emotion/styled';
import Slider from 'react-slick';

const MySlider = styled(Slider)`
  .slick-next {
    right: -10px;
    z-index: 10;
  }
  .slick-prev {
    left: -10px;
    z-index: 10;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${props => props.color ?? 'black'};
  }
  .slick-slide > div {
    padding: 0 ${props => props.spacing ?? '0'};
  }
  /* the parent */
  .slick-list {
    margin: 0 -${props => props.spacing ?? '0'};
  }
`;

export default MySlider;
