import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    area: {
        type: Number,
        required: true
    },

    bedType: {
        amount: {
            type: Number,
            required: true
        },

        type: {
            type: String,
            required: true,
            enum: ["double bed", "single bed"]
        }
    },

    maxPeople: {
        type: Number,
        required: true
    },

    hotel: {
        hotelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel"
        }
    },

    dateBooking: {
        type: [Date]
    }

}, {timestamps: true});

const Room = mongoose.model("Room", roomSchema);

export default Room;