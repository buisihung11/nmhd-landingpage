import Axios from 'axios';

const request = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'content-type': 'application/json; charset=utf-8',
  },
});

export default request;
