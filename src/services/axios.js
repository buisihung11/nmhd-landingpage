import Axios from 'axios';

const request = Axios.create({
  baseURL: 'https://api-nmhd.nuocmamhongduc.com.vn/api',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
