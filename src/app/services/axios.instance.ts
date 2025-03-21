import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/', // Your backend API
  headers: { 'Content-Type': 'application/json' }
});

// Interceptor to attach Authorization token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log("in instance:"+token)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;