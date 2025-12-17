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
import { findMaxOfSameKey, generateObj } from "../utils/generateObject.js";

const RoomTypes = ({ room }) => {
  const { setBookingType, setBookingRoom } = useHotelStore();
  const { searchDetails } = useSearchStore();

  const [isAvailable, setIsAvailable] = useState(true);
  const [roomLeft, setRoomLeft] = useState(1);

  const navigate = useNavigate();

  const priceWithBreakfast = (room?.price ?? 0) + (room?.breakfast ?? 0);
  const numberOfMaxPeople = Array(room?.maxPeople ?? 0).fill(null);

  useEffect(() => {
    if (searchDetails) {
      const startDate = searchDetails.dates.startDate;
      const endDate = searchDetails.dates.endDate;
      const guestDateRange = generateDateArray(startDate, endDate); // Generate date array between startDate and endDate (in YYYY-MM-DD format) [2025-02-13, 2025-02-14]
      const normalizedRoomBooking = room?.dateBooking.map(
        (date) => new Date(date).toISOString().split("T")[0]
      ); // Normalize the room's dateBooking to the same format (YYYY-MM-DD) [2025-02-13, 2025-02-14]

      const bookRoom = searchDetails?.room; //how many room guest needed
      const totalRoom = room?.totalRoom; // how many room in hotel

      const guestDateObj = generateObj(guestDateRange); //eg. {2025-06-06: 1, 2025-06-07: 1}
      const databaseDateObj = generateObj(normalizedRoomBooking); //eg. {2025-05-06: 1, 2025-05-07: 2}

      const checkAvailability = () => {
        // Check if any of the generated dates match the normalized dateBooking array and also compare with max room
        for (let date of guestDateRange) {
          const bookedRoom = databaseDateObj[date] + bookRoom || bookRoom; // 2
          if (bookedRoom > totalRoom) {
            return false;
          }
        }

        //check if guests are more than maxPeople
        const totalGuests = searchDetails?.adult + searchDetails?.children; //3
        const maxPeoeple = room?.maxPeople;
        if (totalGuests > maxPeoeple) {
          return false;
        }

        return true; // If no match is found, return true (available)
      };

      const checkRoomLeft = () => {
        const maxDate = findMaxOfSameKey(databaseDateObj, guestDateObj);

        const availableRoom = totalRoom - maxDate;

        return availableRoom;
      };

      setIsAvailable(checkAvailability());
      setRoomLeft(checkRoomLeft());
    }
  }, [searchDetails, room]); // Re-run when searchDetails or room changes

  const handleChoose = async (e, type) => {
    e.preventDefault();
    try {
      await setBookingType(type);
      await setBookingRoom(room?._id);

      navigate(`/purchase/${room?._id}`);
    } catch (error) {
      console.log("Error in handleChoose RoomTypes: ", error);
    }
  };

  return (
    <div className='w-full border-1 border-gray-300 rounded-md shadow-md px-2 py-4 mt-3'>
      <div className='w-full flex flex-col md:flex-row justify-between items-start gap-5'>
        <div className='flex-1 max-w-[240px] flex flex-col'>
          <h1 className='text-xl font-bold text-gray-900'>{room?.title}</h1>
          <img
            src={room?.images[0]}
            alt={room.title}
            className='w-full h-35 rounded-md'
          />

          <div className='flex justify-between mt-3'>
            <div className='flex-1 flex items-center gap-2'>
              <img src={ruler} className='size-6' />
              <span className='text-sm'>{room?.area.toFixed(2)} sq.m</span>
            </div>
            <div className='flex-1 flex items-center gap-2'>
              <img src={nonSmoking} className='size-6' />
              <span className='text-sm'>Non-smoking</span>
            </div>
          </div>

          <div className='flex justify-between mt-1.5'>
            <div className='flex-1 flex items-center justify-start gap-2'>
              <img src={bathtub} className='size-6' />
              <span className='text-sm'>Bathtub</span>
            </div>
            <div className='flex-1 flex items-center justify-start gap-2'>
              <img src={shower} className='size-6' />
              <span className='text-sm'>shower</span>
            </div>
          </div>

          <div className='flex justify-between mt-1.5'>
            <div className='flex-1 flex items-center justify-start gap-2'>
              <img src={refrige} className='size-6' />
              <span className='text-sm'>Refrigerator</span>
            </div>
            <div className='flex-1 flex items-center justify-start gap-2'>
              <img src={air} className='size-6' />
              <span className='text-sm'>Air-condition</span>
            </div>
          </div>
        </div>

        <div className='flex-3 flex flex-col md:flex-row items-center'>
          <div className='w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100'>
            <table className='table'>
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
                  <td className='flex flex-col'>
                    <p className='text-xs text-gray-500'>{room?.title} Room</p>
                    <p className='text-md font-bold text-gray-900'>
                      Without breakfast
                    </p>
                    <div className='flex gap-1 items-center'>
                      <img src={bed} className='size-3' />
                      <span className='text-sm'>
                        {room?.bedAmount} {room?.bedType}
                      </span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Check className='size-3' />
                      <span className='text-sm font-bold'>Non refundable</span>
                    </div>
                  </td>
                  <td>
                    <div className='w-30 flex items-center gap-1'>
                      {numberOfMaxPeople &&
                        numberOfMaxPeople.map((_, index) => (
                          <User key={index} />
                        ))}
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col'>
                      <h1 className='text-orange-600 text-xl font-bold'>
                        ฿{room?.price.toLocaleString()}
                      </h1>
                      <p className='text-md text-gray-500'>
                        Exclude taxes & fees
                      </p>
                    </div>
                  </td>
                  <td>
                    <button
                      className='bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer disabled:bg-gray-300 disabled:active:scale-none'
                      disabled={!isAvailable}
                      onClick={(e) => handleChoose(e, false)}
                    >
                      Choose
                    </button>
                    {isAvailable && (
                      <p className='text-xs text-red-500 font-medium mt-1'>
                        {roomLeft} room left!!!
                      </p>
                    )}
                  </td>
                </tr>

                <tr>
                  <td className='flex flex-col'>
                    <p className='text-xs text-gray-500'>{room?.title} Room</p>
                    <p className='text-md font-bold text-gray-900'>
                      With breakfast
                    </p>
                    <div className='flex gap-1 items-center'>
                      <img src={bed} className='size-3' />
                      <span className='text-sm'>
                        {room?.bedAmount} {room?.bedType}
                      </span>
                    </div>

                    <div className='flex gap-1 items-center'>
                      <Check className='size-3' />
                      <span className='text-sm font-bold'>Non refundable</span>
                    </div>
                  </td>
                  <td>
                    <div className='w-30 flex items-center gap-1'>
                      {numberOfMaxPeople &&
                        numberOfMaxPeople.map((_, index) => (
                          <User key={index} />
                        ))}
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col'>
                      <h1 className='text-orange-600 text-xl font-bold'>
                        ฿{priceWithBreakfast.toLocaleString()}
                      </h1>
                      <p className='text-md text-gray-500'>
                        Exclude taxes & fees
                      </p>
                    </div>
                  </td>
                  <td>
                    <button
                      className='bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer disabled:bg-gray-300 disabled:active:scale-none'
                      disabled={!isAvailable}
                      onClick={(e) => handleChoose(e, true)}
                    >
                      Choose
                    </button>
                    {isAvailable && (
                      <p className='text-xs text-red-500 font-medium mt-1'>
                        {roomLeft} room left!!!
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
