import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getCountByType,
  getFeaturedHotels,
  getHotel,
  getHotelByCity,
  getHotelByType,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.get("/getAll", getAllHotels);
router.get("/count", getCountByType);
router.get("/:id", getHotel);
router.get("/featured", getFeaturedHotels);
router.get("/city/:city", getHotelByCity);
router.get("/type/:type", getHotelByType);
router.get("/rooms/:id", getHotelRooms);

router.post("/create", protectRoute, checkAdmin, createHotel);

router.put("/update/:id", protectRoute, checkAdmin, updateHotel);

router.delete("/:id", protectRoute, checkAdmin, deleteHotel);

export default router;
