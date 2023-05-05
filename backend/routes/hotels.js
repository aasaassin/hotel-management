import express from 'express';
import {
    createHotel,
    deleteHotel,
    getAllHotel,
    getFeaturedHotel,
    getHotelCount,
    getSingleHotel,
    getTourBySearch,
    updateHotel,
} from './../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new hotel
router.post('/', verifyAdmin, createHotel);

//update hotel
router.put('/:id', verifyAdmin, updateHotel);

//delete hotel
router.delete('/:id', verifyAdmin, deleteHotel);

//get single hotel
router.get('/:id', getSingleHotel);

//get all hotel
router.get('/', getAllHotel);

//get hotel by search
router.get('/search/getHotelBySearch', getTourBySearch);
router.get('/search/getFeaturedHotel', getFeaturedHotel);
router.get('/search/getHotelCount', getHotelCount);

export default router;
