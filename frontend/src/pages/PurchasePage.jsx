import { List, PersonStanding, User } from "lucide-react";
import { BedDouble } from "lucide-react";
import { Coffee } from "lucide-react";
import { Wifi } from "lucide-react";
import { CigaretteOff } from "lucide-react";
import { ScrollText } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import { TowerControl } from "lucide-react";

import room from "/room/room-1.jpg";

const PurchasePage = () => {
  return (
    <article className="w-full h-full bg-gray-100">
      <section className="w-full max-w-7xl flex flex-col mx-auto py-10 px-3">
        <h1 className="text-gray-900 text-2xl md:text-3xl font-bold">
          Your Accommodation Booking
        </h1>
        <p className="text-gray-500 text-md md:text-lg">
          Make sure all the details on this page are correct before proceeding
          to payment.
        </p>

        <div className="flex flex-col-reverse md:flex-row md:gap-5 mt-2 md:mt-5">
          <div className="flex-2 flex flex-col gap-5 mt-5 md:mt-0">
            <div className="bg-white px-4 py-6 rounded-md shadow-md">
              <h3 className="text-gray-900 text-lg font-bold">
                Contact Details
              </h3>
              <p className="text-sm text-gray-500">
                Please fill in all fields correctly to ensure you receive the
                booking confirmation voucher in your email.
              </p>

              <form className="flex flex-col mt-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-md text-gray-500 font-medium"
                  >
                    Contact's name
                  </label>
                  <input
                    className="w-full h-8 bg-white rounded-md shadow-sm px-4 text-sm"
                    type="text"
                    placeholder="eg.John Doe"
                  />
                  <p className="text-sm text-gray-400">
                    Please use only alphabet (A-Z), without title, special
                    characters, and punctuation.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row md:items-center mt-3 gap-3">
                  <div className="flex-3 flex flex-col">
                    <label
                      htmlFor="email"
                      className="text-md text-gray-500 font-medium"
                    >
                      Contact's email address
                    </label>
                    <input
                      className="w-full h-8 bg-white rounded-md shadow-sm px-4 text-sm"
                      type="email"
                      placeholder="eg.johndoe@email.com"
                    />
                    <p className="text-sm text-gray-400">
                      We will send the e-voucher to this email.
                    </p>
                  </div>
                  <div className="flex-2 flex flex-col">
                    <label
                      htmlFor="mobile"
                      className="text-md text-gray-500 font-medium"
                    >
                      Phone number
                    </label>
                    <input
                      className="w-full h-8 bg-white rounded-md shadow-sm px-4"
                      type="text"
                    />
                    <p className="text-sm text-gray-400">eg. ++6686888888</p>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-white px-4 py-6 rounded-md shadow-md flex flex-col">
              <h3 className="text-gray-900 text-lg font-bold">Price details</h3>
              <p className="text-sm text-green-900 font-bold">
                Please check for your payment
              </p>
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-700 font-medium">
                    Room Price
                  </h3>
                  <p className="text-xs text-gray-700">
                    (1x) Deluxe Double - Room Only (1 Night)
                  </p>
                </div>

                <p className="text-lg text-gray-700 font-medium">
                  THB 1,076.89
                </p>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-col">
                  <h3 className="text-lg text-gray-700 font-medium">
                    Taxes and Fees
                  </h3>
                </div>
                <p className="text-lg text-gray-700 font-medium">THB 190.61</p>
              </div>
              <div className="h-[1px] bg-gray-300 mt-3" />
              <div className="flex items-center justify-between mt-5">
                <div className="flex flex-col">
                  <h3 className="text-xl text-gray-700  font-bold">
                    Total Price
                  </h3>
                </div>
                <p className="text-xl text-orange-500 font-bold">THB 190.61</p>
              </div>

              <button className="w-full py-2 text-white text-lg font-bold rounded-md bg-orange-600 mt-5 cursor-pointer">
                Proceed Payment!
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col mt-5 md:mt-0 gap-3">
            <div className="bg-white px-4 py-6 rounded-md shadow-md flex flex-col">
              <div className="flex justify-between gap-5">
                <h3 className="text-md font-bold text-gray-900">
                  Livotel Hotel Kaset Nawamin Bangkok
                </h3>

                <div className="flex gap-2">
                  <p className="text-sm text-gray-900">Excellent</p>
                  <p className="w-fit h-fit bg-blue-900 p-1 rounded-md text-white text-xs font-medium">
                    9.5
                  </p>
                </div>
              </div>

              <div className="w-full h-40 mt-5">
                <img
                  src={room}
                  alt="room"
                  className="w-full h-40 object-contain"
                />
              </div>

              <div className="flex items-center mt-5 px-2">
                <div className="flex-2 flex flex-col p-2 rounded-md border-1 border-gray-300 gap-1">
                  <p className="text-xs text-gray-500">Check-in</p>
                  <p className="text-sm text-gray-900 font-bold">
                    Thu, 6 Mar 2025
                  </p>
                  <p className="text-xs text-gray-500">From 14:00</p>
                </div>
                <div className="flex-1 flex flex-col items-center px-2">
                  <p className="text-[12px] text-gray-400">1 night</p>
                  <div className="w-full h-[1px] bg-gray-300" />
                </div>
                <div className="flex-2 flex flex-col p-2 rounded-md border-1 border-gray-300 gap-1">
                  <p className="text-xs text-gray-500">Check-out</p>
                  <p className="text-sm text-gray-900 font-bold">
                    Fri, 7 Mar 2025
                  </p>
                  <p className="text-xs text-gray-500">Before 12:00</p>
                </div>
              </div>

              <h3 className="text-md font-bold text-gray-900 mt-3">
                (1x) Deluxe Double - Room Only
              </h3>
              <p className="text-xs font-bold text-red-600">1 room(s) left!</p>

              <div className="flex items-center gap-2 mt-3">
                <User className="size-5 text-gray-500" />
                <p className="text-xs font-bold text-gray-500">2 Guests</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <BedDouble className="size-5 text-gray-500" />
                <p className="text-xs font-bold text-gray-500">1 Double bed</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Coffee className="size-5 text-gray-500" />
                <p className="text-xs font-bold text-gray-500">
                  with breakfast
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Wifi className="size-5 text-gray-500" />
                <CigaretteOff className="size-5 text-gray-500" />
              </div>

              <div className="w-full h-[1px] bg-gray-300 my-3" />

              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h3 className="text-md text-gray-900 font-bold flex items-center gap-2">
                    <span>
                      <ScrollText className="size-5" />
                    </span>
                    Total Room Price
                  </h3>
                  <p className="text-xs text-gray-500 font-bold">
                    1 room(s), 1 night(s)
                  </p>
                </div>
                <p className="text-xl text-orange-600 font-bold">
                  THB 1,267.50
                </p>
              </div>
            </div>

            <div className="bg-white px-4 py-6 rounded-md shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <ClipboardList className="size-4" />
                <p className="text-sm font-bold text-gray-900">
                  Cancellation and Reschedule Policy
                </p>
              </div>

              <div className="w-full rounded-md bg-gray-100 p-2 mt-3">
                <p className="text-xs text-gray-600">
                  You got it all covered! You get the most flexibility for your
                  booking with this room option.
                </p>
              </div>

              <div className="flex items-center gap-2 mt-3">
                <BadgeCheck className="size-5 text-green-600" />
                <p className="text-sm text-green-600 font-bold">
                  Free Cancellation before 06 Mar 2025
                </p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <BadgeCheck className="size-5 text-green-600" />
                <p className="text-sm text-green-600 font-bold">
                  Reschedulable
                </p>
              </div>
            </div>

            <div className="bg-white px-4 py-6 rounded-md shadow-md flex flex-col">
              <div className="flex items-center gap-2">
                <TowerControl className="size-4" />
                <p className="text-sm font-bold text-gray-900">
                  Accommodation Policy
                </p>
              </div>

              <div className="flex flex-col mt-3">
                <div className="flex items-center gap-2">
                  <List className="size-4" />
                  <p className="text-sm font-bold text-gray-900">
                    Required Documents
                  </p>
                </div>
                <div className="px-5">
                  <p className="text-sm text-gray-500 font-medium">
                    Upon check-in, you are required to bring ID Card. The
                    required documents can be in the form of soft copy
                  </p>
                </div>
              </div>

              <div className="flex flex-col mt-3">
                <div className="flex items-center gap-2">
                  <PersonStanding className="size-4" />
                  <p className="text-sm font-bold text-gray-900">
                    Minimum Age Policy
                  </p>
                </div>
                <div className="px-5">
                  <p className="text-sm text-gray-500 font-medium">
                    Minimum age to check-in is 18. Minor guests must be
                    accompanied by adults upon check-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default PurchasePage;
