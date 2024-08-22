import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const authAPI = axios.create({
  baseURL: BASE_URL
});

export const authenticate = (data) => authAPI.post('/auth/signin', data);