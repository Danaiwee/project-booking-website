import { Check, User } from "lucide-react";
import { PersonStanding } from "lucide-react";

import room1 from "/room/room-7.jpg";
import ruler from "../assets/ruler.png";
import nonSmoking from "../assets/smoking.png";
import bathtub from "../assets/bathtub.png";
import shower from "../assets/shower.png";
import refrige from "../assets/refige.png";
import air from "../assets/air.png";
import bed from "../assets/bed.png";

const RoomTypes = () => {
  return (
    <div className="w-full border-1 border-gray-300 rounded-md shadow-md px-2 py-4 mt-3">
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex-1 max-w-[240px] flex flex-col">
          <h1 className="text-xl font-bold text-gray-900">Deluxe</h1>
          <img src={room1} className="w-full h-35 rounded-md" />

          <div className="flex justify-between mt-3">
            <div className="flex-1 flex items-center gap-2">
              <img src={ruler} className="size-6" />
              <span className="text-sm">28.8 sq.m</span>
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
                    <p className="text-xs text-gray-500">Premier Room</p>
                    <p className="text-md font-bold text-gray-900">
                      Without breakfast
                    </p>
                    <div className="flex gap-1 items-center">
                      <img src={bed} className="size-3" />
                      <span className="text-sm">1 double bed</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Check className="size-3" />
                      <span className="text-sm font-bold">Non refunable</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <User />
                      <User />
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col'>
                      <h1 className='text-orange-600 text-xl font-bold'>$150</h1>
                      <p className='text-md text-gray-500'>Exclude taxes & fees</p>
                    </div>
                  </td>
                  <td>
                    <button className='bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer'>
                      Choose
                    </button> 
                  </td>
                </tr>

                <tr>
                  <td className="flex flex-col">
                    <p className="text-xs text-gray-500">Premier Room</p>
                    <p className="text-md font-bold text-gray-900">
                      With breakfast
                    </p>
                    <div className="flex gap-1 items-center">
                      <img src={bed} className="size-3" />
                      <span className="text-sm">1 double bed</span>
                    </div>

                    <div className="flex gap-1 items-center">
                      <Check className="size-3" />
                      <span className="text-sm font-bold">Non refunable</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-1">
                      <User />
                      <User />
                    </div>
                  </td>
                  <td>
                    <div className='flex flex-col'>
                      <h1 className='text-orange-600 text-xl font-bold'>$165</h1>
                      <p className='text-md text-gray-500'>Exclude taxes & fees</p>
                    </div>
                  </td>
                  <td>
                    <button className='bg-blue-900 p-2 rounded-md text-white font-bold active:scale-95 cursor-pointer'>
                      Choose
                    </button> 
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
