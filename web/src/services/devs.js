import api from './api';

export const getDevs = () => api.get('/devs');

export const addDev = data => api.post('/devs', data);
