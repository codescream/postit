import express from 'express';
import { addParcel, deleteParcel, fetchAllParcels, fetchParcel, updateParcel, userParcels } from '../controllers/parcel.js';

const router = express.Router();

// add parcel
router.post('/', addParcel);

// get all parcels
router.get('/', fetchAllParcels);

// get a parcel
router.get('/:id', fetchParcel);

// get single user parcels
router.get('/user/:id', userParcels);

// update parcel
router.patch('/:id', updateParcel);

// delete parcel
router.delete('/:id', deleteParcel);

export default router;