import request from './axios';

export const getChildProd = () =>
  request.get('/products', {
    params: {
      isParent: false,
    },
  });

export const getMasterProd = () =>
  request.get('/products', {
    params: {
      isParent: true,
    },
  });

export const getProdDetail = id =>
  request.get(`/products/${id}`, {
    params: {
      isParent: true,
    },
  });
