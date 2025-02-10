import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use(
  async (config) => {
    try {
      const userData = localStorage.getItem('metroidburger:userData');
      if (userData) {
        const token = JSON.parse(userData).token;
        config.headers.authorization = `Bearer ${token}`;
      } else {
      }
    } catch (error) {
      console.error('Error reading userData from localStorage:', error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
