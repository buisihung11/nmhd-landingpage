import Axios from 'axios';

const request = Axios.create({
  baseURL: `https://nmhd-api.nothleft.online/api`,
});

export default request;