import { Check, User } from "lucide-react";

import ruler from "../assets/ruler.png";
import nonSmoking from "../assets/smoking.png";
import bathtub from "../assets/bathtub.png";
import shower from "../assets/shower.png";
import refrige from "../assets/refige.png";
import air from "../assets/air.png";
import bed from "../assets/bed.png";

import { useSearchStore } from "../store/useSearchStore.js";
import { useEffect, useState } from "react";
import { generateDateArray } from "../utils/date.js";
import { useNavigate } from "react-router-dom";
import { useHotelStore } from "../store/useHotelStore.js";

const RoomTypes = ({ room }) => {
  const {setBookingType, setBookingRoom} = useHotelStore();
  const [isAvailable, setIsAvailable] = useState(true);
  const { searchDetails } = useSearchStore();

  const navigate = useNavigate();

  const priceWithBreakfast = (room?.price ?? 0) + (room?.breakfast ?? 0);
  const numberOfMaxPeople = Array.from({ length: room?.maxPeople ?? 0 });


  useEffect(() => {
    if (searchDetails) {
      const checkAvailability = () => {
        // Convert startDate and endDate to Date objects
        const start = new Date(searchDetails.dates.startDate);
        const end = new Date(searchDetails.dates.endDate);

        // Generate date array between startDate and endDate (in YYYY-MM-DD format)
        const dateArray = generateDateArray(start, end);

        // Normalize the room's dateBooking to the same format (YYYY-MM-DD)
        const normalizedRoomBooking = room?.dateBooking.map((date) => new Date(date).toISOString().split("T")[0]);

        // Check if any of the generated dates match the normalized dateBooking array
        for (let date of dateArray) {
          if (normalizedRoomBooking.includes(date)) {
            return false; // If a match is found, return false (not available)
          }
        };

        const totalGuests = searchDetails?.adult + searchDetails?.children;
        const maxPeoeple = room?.maxPeople;
        if(totalGuests>maxPeoeple){
          return false;
        };

        const availableRoom = room?.totalRoom;
        const useRoom = searchDetails?.room;
        if(useRoom > availableRoom){
          return false
        }

        return true; // If no match is found, return true (available)
      };

      setIsAvailable(checkAvailability());
    }
  }, [searchDetails, room]); // Re-run when searchDetails or room changes


  const handleChoose = async (e,type) => {
    e.preventDefault();

    await setBookingType(type);
    await setBookingRoom(room?._id);
    
    navigate(`/purchase/${room?._id}`);
  };


  return (
    <div className="w-full border-1 border-gray-300 rounded-md shadow-md px-2 py-4 mt-3">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex-1 max-w-[240px] flex flex-col">
          <h1 className="text-xl font-bold text-gray-900">{room?.title}</h1>
          <img src={room?.images[0]} className="w-full h-35 rounded-md" />

          <div className="flex justify-between mt-3">
            <div className="flex-1 flex items-center gap-2">
              <img src={ruler} className="size-6" />
              <span className="text-sm">{room?.area.toFixed(2)} sq.m</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <img src={nonSmoking} className="size-6" />
              <span className="text-sm">Non-smoking</span>
            </div>
          </div>

          <div className="flex justify-between mt-1.5">
            <div className="flex-1 flex items-center justify-start gap-2">
              <img src={bathtub} className="size-6" />
              <span className="text-sm">Bathtub</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-2">
              <img src={shower} className="size-6" />
              <span className="text-sm">shower</span>
            </div>
          </div>

          <div className="flex justify-between mt-1.5">
            <div className="flex-1 flex items-center justify-start gap-2">
              <img src={refrige} className="size-6" />
              <span className="text-sm">Refrigerator</span>
            </div>
            <div className="flex-1 flex items-center justify-start gap-2">
              <img src={air} className="size-6" />
              <span className="text-sm">Air-condition</span>
            </div>
          </div>
        </div>

        <div className="flex-3 flex flex-col md:flex-row items-center">
          <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Room options</th>
                  <th>Guest(s)</th>
                  <th>Price/room/night</th>
                  <th>Select</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="flex flex-col">
                    <p className="text-xs text-gray-500">{room?.title} Room</p>
                    <p className="text-md font-bold text-gray-900">
                      Without breakfast
                    </p>
                    <div className="flex gap-1 items-center">
                      <img src={bed} className="size-3" />
                      <span className="text-sm">
                        {room?.bedAmount} {room?.bedType}
                      </span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Check className="size-3" />
                      <span className="text-sm font-bold">Non refundable</span>
                    </div>
                  </td>
                  <td>
                    <div className="w-30 flex items-center gap-1">
                      {numberOfMaxPeople &&
                        numberOfMaxPeople.map((_, index) => (
                          <User key={index} />
                        ))}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <h1 className="text-orange-600 text-xl font-bold">
                        ฿{room?.price.toLocaleString()}
                      </h1>
                      <p className="text-md text-gray-500">
                        Exclude taxes & fees
                      </p>
                    </div>
                  </td>
                  <td>
                    <button
                      className="bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer disabled:bg-gray-300 disabled:active:scale-none"
                      disabled={!isAvailable}
                      onClick={(e) => handleChoose(e, false)}
                    >
                      Choose
                    </button>
                    {isAvailable && (
                      <p className="text-xs text-red-500 font-medium mt-1">
                        {room?.totalRoom} room left!!!
                      </p>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className="flex flex-col">
                    <p className="text-xs text-gray-500">{room?.title} Room</p>
                    <p className="text-md font-bold text-gray-900">
                      With breakfast
                    </p>
                    <div className="flex gap-1 items-center">
                      <img src={bed} className="size-3" />
                      <span className="text-sm">
                        {room?.bedAmount} {room?.bedType}
                      </span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Check className="size-3" />
                      <span className="text-sm font-bold">Non refundable</span>
                    </div>
                  </td>
                  <td>
                    <div className="w-30 flex items-center gap-1">
                      {numberOfMaxPeople &&
                        numberOfMaxPeople.map((_, index) => (
                          <User key={index} />
                        ))}
                    </div>
                  </td>
                  <td>
                    <div className="flex flex-col">
                      <h1 className="text-orange-600 text-xl font-bold">
                        ฿{priceWithBreakfast.toLocaleString()}
                      </h1>
                      <p className="text-md text-gray-500">
                        Exclude taxes & fees
                      </p>
                    </div>
                  </td>
                  <td>
                    <button
                      className="bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer disabled:bg-gray-300 disabled:active:scale-none"
                      disabled={!isAvailable}
                      onClick={(e) => handleChoose(e, true)}
                    >
                      Choose
                    </button>
                    {isAvailable && (
                      <p className="text-xs text-red-500 font-medium mt-1">
                        {room?.totalRoom} room left!!!
                      </p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomTypes;
