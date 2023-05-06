import express from 'express';
import { createBooking, getAllBooking, getAllBookingsByUser, getBooking } from '../controllers/bookingController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', verifyUser, createBooking);
router.get('/:id', verifyUser, getBooking);
router.get('/', verifyAdmin, getAllBooking);

router.get('/user/:userId', verifyUser, getAllBookingsByUser);

export default router;
