import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },

    dates: {
      type: [Date],
      required: true,
    },

    breakfast: {
      type: Boolean,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
    },

    adult: {
      type: Number,
      required: true,
    },

    children: {
      type: Number,
      required: true,
    },

    roomAmount: {
      type: Number,
      required: true,
    },

    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
