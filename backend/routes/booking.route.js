import express from 'express';
import { protectRoute } from '../middleware/protectRoute.js';
import { createBooking, deleteBooking, getBooking, getBookings } from '../controllers/booking.controller.js';

const router = express.Router();

router.get("/all/:id", protectRoute, getBookings);
router.get("/:userId", protectRoute, getBooking);
router.post("/create", protectRoute, createBooking);
router.delete("/:id", protectRoute, deleteBooking);

export default router;