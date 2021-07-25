import request from './axios';

export const getStoreConfig = () => request.get(`/storeconfig`);
