import location from "../assets/location.png";
import RoomTypes from "../components/RoomTypes";
import { ROOM_IMAGES } from "../constants";

const DetailsPage = () => {
  return (
    <section className="w-full h-full my-10">
      <div className="w-full max-w-7xl mx-auto flex flex-col px-5">
        <div className="flex flex-col gap-3 md:flex-row md:gap-0 justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900">
              Austin David Hotel
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <img src={location} className="size-4" />
              <p className="text-sm text-gray-900">
                21 Western gateway, newham
              </p>
            </div>
            <p className="text-blue-900 text-md mt-2 font-medium">
              Excellent location - 700m from center
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
          {ROOM_IMAGES.map((image, index) => (
            <img src={image} className="rounded-md w-full h-70" key={index} />
          ))}
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between md:gap-5 mt-12">
          <div className="flex-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Experience World-class Service
            </h1>
            <p className="text-sm text-gray-900 mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              pariatur recusandae doloremque illo doloribus voluptatum, ad
              earum, labore eius at aperiam, in nemo voluptatem eaque veritatis
              sequi consequuntur illum id soluta. Iusto molestias sunt odit
              omnis officiis voluptates cupiditate similique, deleniti
              temporibus impedit nam, repudiandae eum dolor harum! Maxime iusto
              vero, perferendis maiores repudiandae unde veniam perspiciatis
              fugiat harum cupiditate ducimus dolor beatae, amet tenetur
              veritatis vitae cumque provident error aliquid eaque quasi illum
              molestias dolores. Animi ipsa laborum, perspiciatis ea a explicabo
              dolorem iste temporibus facere illum, deserunt tempora quo
              corporis officia recusandae sed optio iusto porro beatae. Error?
            </p>
          </div>

          <div className="flex-1 bg-blue-100 rounded-md px-4 py-4">
            <h3 className="text-gray-700 font-bold text-xl">
              Perfect for 2-nights stay!
            </h3>
            <p className="text-sm text-gray-700 mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
              excepturi molestiae quos dolorem veritatis assumenda quod tempore
              natus doloremque et.
            </p>
            <p className="text-2xl font-bold text-gray-900 mt-3">
              $200&nbsp;
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
