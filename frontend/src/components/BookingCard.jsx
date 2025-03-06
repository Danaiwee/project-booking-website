import { VerifiedIcon, Utensils } from "lucide-react";
import {motion} from 'framer-motion';

import { formatStartAndEndDate } from "../utils/date";

const BookingCard = ({ booking }) => {
  const { title: hotelTitle, distance, profileImg } = booking.hotel;
  const { title: roomTitle } = booking.room;
  const { totalPrice, _id: bookingId, dates, breakfast } = booking;

  const totalPriceAndTaxes = (totalPrice + totalPrice * 0.07).toFixed(2);

  const dateRange = formatStartAndEndDate(dates);
  const startDate = dateRange.startDate;
  const endDate = dateRange.endDate;

  return (
    <motion.div 
      className="w-full border-1 border-gray-300 shadow-md rounded-sm px-6 py-6 flex flex-col md:flex-row gap-3"
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
    >
      <div className="flex-2">
        <img src={profileImg} alt="room" className="w-full h-full rounded-md" />
      </div>

      <div className="flex-4 flex justify-between">
        <div className="flex-3 flex flex-col">
          <h3 className="text-xl font-bold text-blue-900">{hotelTitle}</h3>

          <div className="flex flex-col gap-0">
            <p className="text-xs text-gray-900">{distance}</p>
            <p className="text-md text-gray-900 font-medium">
              1x {roomTitle} Room
            </p>
            <p className="font-bold text-sm text-red-500 mt-3">
              Check-in and Check-out date
            </p>
            <p className="max-w-md text-gray-900 text-md font-bold">
              Check-in:{" "}
              <span className="text-md text-gray-500 font-medium">
                {startDate}
              </span>
            </p>

            <p className="max-w-md text-gray-900 text-md font-bold">
              Check-out:{" "}
              <span className="text-md text-gray-500 font-medium">
                {endDate}
              </span>
            </p>

            <div className="flex items-center mt-5 gap-2">
              <Utensils className="text-gray-600 size-4" />
              <p className="text-sm font-medium">
                {breakfast ? "With breakfast" : "Without breakfast"}
              </p>
            </div>
            <p className="text-green-700 font-medium text-sm">
              Free cancellation
            </p>
            <p className="text-green-700 text-sm">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        </div>
      </div>

      <div className="flex-3 flex flex-col justify-between items-end">
        <p className="text-sm text-green-600">Booking id: #{bookingId}</p>

        <div className="flex flex-col gap-1 items-end">
          <div className="flex items-end gap-1">
            <p className="text-lg text-gray-500 font-medium">
              Total amount:&nbsp;{" "}
            </p>
            <p className="text-3xl font-bold">฿{totalPriceAndTaxes}</p>
          </div>

          <p className="text-sm text-gray-500">Include taxes and fees</p>

          <button className="w-fit px-4 py-2 text-white font-medium bg-green-700 rounded-md cursor-pointer flex items-center gap-1">
            Paid
            <VerifiedIcon />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingCard;
