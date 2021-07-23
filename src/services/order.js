import request from './axios';

export const createOrder = data => request.post(`/orders`, data);
