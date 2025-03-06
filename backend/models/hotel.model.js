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
        type: String,
        required: true
    },

    images: {
        type: [String],
        default: []
    },

    profileImg: {
        type: String,
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },
    
    minPrice: {
        type: Number,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        min: 0,
        max: 10,
    },

    rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    }],

    featured: {
        type: Boolean,
        default: false
    },
}, {timestamps: true});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;