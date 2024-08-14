import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const userAPI = axios.create({
  baseURL: BASE_URL
});

export const allUsers = () => userAPI.get('/user');