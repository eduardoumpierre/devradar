import api from './api';

export const searchDevs = params => api.get('/search', { params });
