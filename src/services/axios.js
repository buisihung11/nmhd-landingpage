import Axios from 'axios';

const request = Axios.create({
  baseURL: 'http://api-nmhd.nuocmamhongduc.com.vn/api',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
