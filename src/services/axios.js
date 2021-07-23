import Axios from 'axios';

const request = Axios.create({
  baseURL: 'https://nmhd-api.nothleft.online/api',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
