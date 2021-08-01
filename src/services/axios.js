import Axios from 'axios';

const request = Axios.create({
  baseURL: 'https://nuocmamhongduc.com.vn/api',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
