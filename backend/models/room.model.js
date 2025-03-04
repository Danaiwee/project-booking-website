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
        type: String,
        required: true
    },

    bedAmount: {
        type: Number,
        required: true
    },

    maxPeople: {
        type: Number,
        required: true
    },

    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel"
    },

    images: {
        type: [String],
        default: []
    },

    dateBooking: [{
        type: Date
    }]

}, {timestamps: true});

const Room = mongoose.model("Room", roomSchema);

export default Room;