import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_END_POINT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 300000, // 5 mins before timeout
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // (error) => {
  //   return Promise.reject(error);
  // },
);

export default axiosInstance;
