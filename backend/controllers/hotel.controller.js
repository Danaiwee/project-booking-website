import Hotel from "../models/hotel.model.js";


export const getAllHotels = async(req, res) => {
    try {
        const hotels = await Hotel.find();
        if(!hotels){
            return res.status(404).json({error: "Hotels not found"})
        };
        
        return res.status(200).json(hotels);
    } catch (error) {
        console.log("Error in getAllHotels controller: ", error.message);
        return res.status(500).json({error: "Internal server error"})
    };
};

export const getHotel = async(req, res) => {
    try {
        const hotelId = req.params.id;
        
        const hotel = await Hotel.findById(hotelId);
        if(!hotel){
            return res.status(404).json({error: "Hotel not found"});
        };
        
        return res.status(200).json(hotel);
    } catch (error) {
        console.log("Error in getHotel controller: ", error.message);
        return res.status(500).json({error: "Internal server error"})
    }
};

export const getHotelByCity = async(req, res) => {
    try {
        const city = req.params.city;
        
        const hotels = await Hotel.find({ city: new RegExp(city, 'i') });
        if(!hotels){
            return res.status(404).json({error: "Hotel not found"});
        };

        return res.status(200).json(hotels);
    } catch (error) {
        console.log("Error in getHotelByCity controller: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    };  
};

export const getHotelByType = async(req, res) => {
    try {
        const type = req.params.type;
        
        const hotels = await Hotel.find({type});
        if(!hotels){
            return res.status(404).json({error: "Hotel not found"});
        };
        
        return res.status(200).json(hotels);
    } catch (error) {
        console.log("Error in getHotelByType: ", error.message);
        return res.status(500).json({error: "Interal server error"});
    };
};

export const getHotelRooms = async(req, res) => {
    try {
        const hotelId = req.params.id;

        const hotels = await Hotel.findById(hotelId).select("rooms");
        if(!hotels){
            return res.status(404).json({error: "Hotel not found"});
        };
        
        return res.status(200).json(hotels);
    } catch (error) {
        console.log("Error in getHotelRoom: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    };
};

export const getCountByType = async(req, res) => {
    try {
        const hotelCount = await Hotel.countDocuments({type: "hotel"}) || 0;
        const villaCount = await Hotel.countDocuments({type: "villa" }) || 0;
        const resortCount = await Hotel.countDocuments({type: "resort"}) || 0;
        const apartmentCount = await Hotel.countDocuments({type: "apartment"}) || 0;
        const houseCount = await Hotel.countDocuments({type: "house"}) || 0;

        return res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "villa", count: villaCount},
            {type: "resort", count: resortCount},
            {type: "apartment", count: apartmentCount},
            {type: "house", count: houseCount}
        ]);
    } catch (error) {
        console.log("Error in getCountByType: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};

export const createHotel = async(req, res) => {
    try {
        const {name, type, city, distance, title, description, minPrice} = req.body;
        if(!name || !type || !city || !distance || !title || !description || !minPrice){
            return res.status(400).json({error: "All fields are required"});
        };

        const newHotel = new Hotel({
            name,
            type,
            city,
            distance,
            title,
            description,
            minPrice,
        });

        if(newHotel){
            await newHotel.save();

            return res.status(201).json(newHotel)
        };
    } catch (error) {
        console.log('Error in createHotel controller: ', error.message);
        return res.status(500).json({error: "Internal server error"})
    };
};

export const updateHotel = async(req, res) => {
    try {
        const hotelId = req.params.id;

        const updatedHotel = await Hotel.findByIdAndUpdate(
            hotelId, 
            {$set: req.body}, 
            {new: true}
        );

        if(updatedHotel){
            return res.status(200).json(updatedHotel);
        }else {
            return res.status(400).json({error: "Update failed"})
        };

    } catch (error) {
        console.log('Error in update hotel: ', error.message);
        return res.status(500).json({error: "Internal server error"});
    };
};

export const deleteHotel = async(req, res) => {
    try {
        const hotelId = req.params.id;

        await Hotel.findByIdAndDelete(hotelId);

        return res.status(200).json({message: "Deleted hotel successfully"});
    } catch (error) {
        console.log("Erorr in deleteHotel controller: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};