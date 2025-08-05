import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { checkAdmin } from "../middleware/checkAdmin.js";
import {
  bookDateRoom,
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controllers/room.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllRoom);
router.get("/:id", protectRoute, getRoom);

router.post("/create/:hotelId", protectRoute, checkAdmin, createRoom);
router.post("/book/:id", protectRoute, bookDateRoom);

router.put("/update/:id", protectRoute, checkAdmin, updateRoom);
router.delete("/:id", protectRoute, checkAdmin, deleteRoom);

export default router;
