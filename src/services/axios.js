import Axios from 'axios';

const request = Axios.create({
  baseURL: 'https://localhost:44333/api',
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
