import request from './axios';

export const getChildProd = () =>
  request.get('/products', {
    params: {
      isParent: false,
    },
  });

export const getMasterProd = params => {
  return request.get('/products', {
    params: {
      isParent: true,
      ...params,
    },
  });
};

export const getProdDetail = sku =>
  request.get(`/products`, {
    params: {
      isParent: false,
      sku,
    },
  });

export const getRelateProduct = generalProductId =>
  request.get(`/products`, {
    params: {
      isParent: false,
      generalProductId,
    },
  });
