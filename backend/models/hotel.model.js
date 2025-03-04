import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },

    distance: {
        type: Number,
        required: true
    },

    images: {
        type: [String],
        default: []
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        require: true
    },
    
    minPrice: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        min: 0,
        max: 5,
    },

    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }],

    featured: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;