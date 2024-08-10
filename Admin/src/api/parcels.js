import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const parcelAPI = axios.create({
  baseURL: BASE_URL
});

export const fetchParcels = () => parcelAPI.get('/parcel');
export const deleteParcel = (id) => parcelAPI.delete(`/parcel/${id}`);