import { useEffect } from "react";
import { useParams } from "react-router-dom";
import location from "../assets/location.png";
import RoomTypes from "../components/RoomTypes";
import { ROOM_IMAGES } from "../constants";
import { useHotelStore } from "../store/useHotelStore";

const DetailsPage = () => {
  const { id } = useParams();
  const { getHotel, hotel, isLoading } = useHotelStore();

  useEffect(() => {
    getHotel(id);
  }, [getHotel]);

  console.log("Hotel detail", hotel); 
  return (
    <section className="w-full h-full my-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">{hotel?.title}</h1>
            <div className="flex items-center gap-3 mt-1">
              <img src={location} className="size-4" />
              <p className="text-sm text-gray-900">
                21 Western gateway, newham
              </p>
            </div>
            <p className="text-blue-900 text-md mt-2 font-medium">
              Excellent location - {hotel?.distance}
            </p>
            <p className="text-green-700 text-lg mt-1 font-medium">
              Book a stay over $150 at this property and get free airport taxi
            </p>
          </div>

          <button className="w-fit h-fit text-lg font-medium px-4 py-2 rounded-md bg-blue-900 text-white cursor-pointer">
            Reserve or book now!
          </button>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-5">
          {hotel &&
            hotel?.images.map((image, index) => (
              <img src={image} className="rounded-md w-full h-70" key={index} />
            ))}
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between md:gap-5 mt-12">
          <div className="flex-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Experience World-class Service
            </h1>
            <p className="text-sm text-gray-900 mt-5">{hotel?.description}</p>
          </div>

          <div className="flex-1 bg-blue-100 rounded-md px-4 py-4">
            <h3 className="text-gray-700 font-bold text-xl">
              Perfect for 2-nights stay!
            </h3>
            <p className="text-sm text-gray-700 mt-5">
              Experience comfort and relaxation with modern amenities, stylish
              rooms, and a prime location near top attractions. Whether you're
              here for business or leisure, enjoy exceptional service and a
              memorable stay.
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-3">
            ฿{(hotel?.minPrice*2).toLocaleString()}&nbsp;
              <span className="font-light">(2 Nights)</span>
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
          <RoomTypes />
          <RoomTypes />
          <RoomTypes />
        </div>
      </dialog>
    </section>
  );
};

export default DetailsPage;
