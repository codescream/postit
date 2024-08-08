import axios from 'axios';

const BASE_URL = 'http://localhost:8000/parcel';

export const parcelAPI = axios.create({
  baseURL: BASE_URL
});