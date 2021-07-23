import styled from '@emotion/styled';
import Slider from 'react-slick';

const MySlider = styled(Slider)`
  .slick-dots {
    bottom: 60px;
    /* background-color: blue; */
    height: 35px;
  }
  .slick-dots > li:not(:first-child):not(:last-child) {
    margin: 0 2rem;
    @media (min-width: 768px) {
      margin: 0 6rem;
    }
  }
  .slick-dots .slick-active .dot_child {
    border-color: #e92529;
    & > div {
      background-color: #e92529;
    }
  }
  .slick-next {
    right: -15px;
    z-index: 10;
    width: 30px;
    height: 30px;
  }
  .slick-prev {
    left: -15px;
    z-index: 10;
    width: 30px;
    height: 30px;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${props => props.color ?? 'white'};
    font-size: 30px;
    opacity: 1;
  }
  .slick-slide > div {
    padding: 0 ${props => props.spacing ?? '0'};
  }
  /* the parent */
  .slick-list {
    margin: 0 -${props => props.spacing ?? '0'};
  }
  .slick-dots .slick-active .slick-next,
  .slick-prev {
    width: 30px;
    height: 30px;
  }
`;

export default MySlider;
