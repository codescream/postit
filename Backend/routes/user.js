import express from 'express';
import { deleteUser, fetchAllUsers, fetchUser } from '../controllers/user.js';

const router = express.Router();

router.get('/:id', fetchUser);
router.get('/', fetchAllUsers);
router.delete('/:id', deleteUser);

export default router;