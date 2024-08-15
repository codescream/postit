import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const userAPI = axios.create({
  baseURL: BASE_URL
});

export const addUser = (userData) => userAPI.post('/auth/register', userData);