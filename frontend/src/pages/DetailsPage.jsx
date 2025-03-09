import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from 'framer-motion';
import { ArrowLeft } from "lucide-react";

import location from "../assets/location.png";
import RoomTypes from "../components/RoomTypes";
import { useHotelStore } from "../store/useHotelStore.js";
import { useSearchStore } from "../store/useSearchStore.js";
import { calculateDaysDifference } from "../utils/date.js";
import DetailsSearch from "../components/DetailSearch.jsx";

const DetailsPage = () => {
  const { id } = useParams();
  const { getHotelRooms, hotel, isLoading } = useHotelStore();
  const { searchDetails } = useSearchStore();

  const navigate = useNavigate();

  const differentDay = calculateDaysDifference(
    searchDetails?.dates.startDate,
    searchDetails?.dates.endDate
  );

  useEffect(() => {
    getHotelRooms(id);
  }, [getHotelRooms, id]);


  if(isLoading){
    return (
      <div className='w-full h-[80vh] overflow-hidden flex items-center justify-center'>
        <span className='loading loading-dots loading-xl'></span>
      </div>
    )
  }

  return (
    <section className="w-full h-full my-10 relative">
      <div className="w-full max-w-7xl mx-auto flex flex-col px-5">
        <motion.div 
          className='w-full max-w-4xl mx-auto px-5 lg:px-0'
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          <DetailsSearch />
        </motion.div>

        <motion.div 
          className="flex flex-col gap-3  md:flex-row md:gap-0 justify-between"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">{hotel?.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <img src={location} className="size-4" />
              <p className="text-sm text-gray-900">
                {hotel?.location}
              </p>
            </div>
            <p className="text-blue-900 text-md mt-2 font-medium">
              Excellent location - {hotel?.distance}
            </p>
            <p className="text-green-700 text-lg mt-1 font-medium">
              Book a stay over ฿{(hotel?.minPrice*5).toLocaleString()} at this property and get free airport taxi
            </p>
          </div>

          <button 
            className="w-fit h-fit text-lg font-medium px-4 py-2 rounded-md bg-blue-900 text-white cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Reserve or book now!
          </button>
        </motion.div>

        <motion.div 
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
        >
          {hotel &&
            hotel?.images.map((image) => (
              <img src={image} className="rounded-md w-full h-70" key={image} />
            ))}
        </motion.div>

        <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between md:gap-5 mt-12">
          <div className="flex-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Experience World-class Service
            </h1>
            <p className="text-sm text-gray-900 mt-5">{hotel?.description}</p>
          </div>

          <div className="flex-1 bg-blue-100 rounded-md px-4 py-4">
            <h3 className="text-gray-700 font-bold text-lg">
              Perfect for {differentDay}-night(s) stay!
            </h3>
            <p className="text-sm text-gray-700 mt-5">
              Experience comfort and relaxation with modern amenities, stylish
              rooms, and a prime location near top attractions. Whether you're
              here for business or leisure, enjoy exceptional service and a
              memorable stay.
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-3">
              ฿{(hotel?.minPrice * differentDay).toLocaleString()}&nbsp;
              <span className="font-light">({differentDay} Nights)</span>
            </p>
            <button
              className="w-full bg-blue-900 p-2 rounded-md text-white font-bold text-md mt-5 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Reserve or Book now!
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-7xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-2xl font-bold text-gray-900">
            Please select room type
          </h1>

          {hotel && hotel?.rooms.map((room) => <RoomTypes key={room._id} room={room} />)}
        </div>
      </dialog>

      <motion.button 
        className='absolute flex items-center -top-7 left-3 rounded-md p-3 border-1 border-gray-300 gap-2 cursor-pointer hover:bg-gray-100 active:scale-95'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8}}
        onClick={() => navigate("/search")}
      >
            <ArrowLeft className='size-4' />
            <span className='hidden lg:inline'>Back</span>
      </motion.button>
    </section>
  );
};

export default DetailsPage;
