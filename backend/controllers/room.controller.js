import Room from "../models/room.model.js";
import Hotel from "../models/hotel.model.js";

export const getAllRoom = async(req, res) => {
    try {
        const rooms = await Room.find();
        if(!rooms){
            return res.status(404).json({error: "Room not found"});
        };

        return res.status(200).json(rooms)
    } catch (error) {
        console.log("Error in getAllRooms controller", getAllRoom);
        return res.status(500).json({error: "Internal server error"});
    }
}

export const getRoom = async(req, res) => {
    try {
        const roomId = req.params.id;

        const room = await Room.findById(roomId);
        if(!room){
            return res.status(404).json({error: "Room not found"})
        };

        return res.status(200).json(room);
    } catch (error) {
        console.log("Error in getRoom controller: ", error.message);
        return res.status(500).json({error: "Internal server error"});
    }
};

export const createRoom = async (req, res) => {
  try {
    const hotelId = req.params.hotelId;
    const { title, price, area, bedType, bedAmount, maxPeople, images, breakfast, totalRoom } = req.body;

    const newRoom = new Room({
      title,
      price,
      area,
      bedType,
      bedAmount,
      maxPeople,
      hotel: hotelId,
      images,
      breakfast,
      totalRoom
    });

    await newRoom.save();

    //update Hotel rooms
    await Hotel.findByIdAndUpdate(hotelId, {
      $push: { rooms: newRoom._id },
    });

    return res.status(201).json(newRoom);
  } catch (error) {
    console.log("Error in createRoom controller: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateRoom = async (req, res) => {
  try {
    const roomId = req.params.id;

    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      { $set: req.body },
      { new: true }
    );

    if (updateRoom) {
      return res.status(200).json(updatedRoom);
    } else {
      return res.status(400).jso({ error: "Failed to update room" });
    }
  } catch (error) {
    console.log("Error in updateRoom controller: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const bookDateRoom = async (req, res) => {
  try {
    const roomId = req.params.id;
    const updatedRoom = await Room.findByIdAndUpdate(
      roomId,
      {
        $push: {
          dateBooking: req.body.dates,
        },
      },
      { new: true }
    );

    if (updatedRoom) {
      return res.status(200).json(updatedRoom);
    } else {
      return res.status(400).json({ error: "Failed to book room" });
    }
  } catch (error) {
    console.log("Error in bookDateRoom controller: ", error.message);
    return res.status(200).json({ error: "Internal server error" });
  }
};

export const deleteRoom = async (req, res) => {
  try {
    const roomId = req.params.id;

    const room = await Room.findById(roomId);
    const hotelId = room.hotel;

    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: room._id } });
    await Room.findByIdAndDelete(roomId);

    return res.status(200).json({ message: "Deleted room successfully" });
  } catch (error) {
    console.log("Error in deleteRoom controller: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};
