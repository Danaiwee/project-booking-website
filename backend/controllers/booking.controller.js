import Booking from "../models/booking.model.js";
import Room from '../models/room.model.js';
import User from "../models/user.model.js";

export const createBooking = async(req, res) => {
    try {
        const {user, hotel, room, dates, breakfast, totalPrice, adult, children, roomAmount, phone} = req.body;

        const newBooking = new Booking({
            user,
            hotel,
            room,
            dates,
            breakfast,
            totalPrice,
            adult,
            children,
            roomAmount,
            phone
        });

        if(newBooking){
            await newBooking.save();

            await Room.findByIdAndUpdate(
                newBooking.room, 
                { $push: { dateBooking: { $each: newBooking.dates } } },
                { new: true }
            );

            await User.findByIdAndUpdate(newBooking.user,
                {$push: {bookingItems: newBooking._id}},
                { new: true}
            );

            return res.status(200).json(newBooking);

        } else {
            return res.status(400).json({error: "Failed to create Booking"})
        };
    } catch (error) {
        console.log("Error in create booking: ",error.message   );
        return res.status(500).json({error: "Internal server error"});
    }
};

export const getBookings = async(req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Booking.find({user: userId}).populate("room").populate("hotel");
        if(!bookings){
            return res.status(404).json({error: "Booking not found"})
        };

        return res.status(200).json(bookings);
    } catch (error) {
        console.log("Error in getBookings controller: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};

export const getBooking = async(req, res) => {
    try {
        const userId = req.params.userId;

        const booking = await Booking.findOne({user: userId}).sort({createdAt: -1}).exec();
        if(!booking){
            return res.status(404).json({error: "Booking not found"});
        };

        return res.status(200).json(booking);
    } catch (error) {
        console.log("Error in getBooking controller: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};

export const deleteBooking = async(req, res) => {
    try {
        const bookingId = req.params.id;

        const booking = await Booking.findById(bookingId);
        if(!booking){
            return res.status(404).json({error: "Booking not found"})
        };

        await Room.findByIdAndUpdate(
            booking.room, 
            { $pull: { dateBooking: { $in: booking.dates } } }
        );

        await User.findByIdAndUpdate(booking.user,
            {$pull: {bookingItems: booking._id}}
        );

        await Booking.findByIdAndDelete(booking);

        return res.status(200).json({message: "Deleted booking successfully"});

    } catch (error) {
        console.log("Error in delete booking: ",error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};