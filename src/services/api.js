import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Verifica que el puerto sea correcto
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;