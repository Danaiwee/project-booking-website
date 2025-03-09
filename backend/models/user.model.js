import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        min: 6,
        required: true
    },

    profileImg: {
        type:String,
        default: ''
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    bookingItems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Booking"
        }
     ]
}, {timestamps: true})

const User = mongoose.model("User", userSchema);
export default User;