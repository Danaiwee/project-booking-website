import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useState } from "react";
import { DateRange } from "react-date-range";
import { BedSingle } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { User } from "lucide-react";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";

const SearchBar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [personInput, setPersonInput] = useState(false);
  const [searchData, setSearchData] = useState({
    place: "",
    dates: {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
    adult: 2,
    children: 0,
    room: 1,
  });

  const handleDateChange = (item) => {
    // Update the dates in the searchData state correctly
    setSearchData((prevState) => ({
      ...prevState,
      dates: item.selection, // Correctly set the 'selection' object
    }));
  };

  const handleDataChange = (e) => {
    const { name, value } = e.target;

    setSearchData({
      ...searchData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(searchData);
  };

  return (
    <section className="w-full max-w-7xl mx-auto relative -top-7 px-5">
      <div>
        <form
          className="flex flex-col lg:flex-row item-center bg-amber-500 rounded-md p-1 gap-1"
        >
          <div className="flex-2 flex items-center rounded-md px-2 py-2 bg-white">
            <label>
              <BedSingle className="text-gray-400 size-8" />
            </label>
            <input
              type="text"
              id='place'
              name='place'
              placeholder="Where are you going?"
              className="w-full outline-none px-2"
              value={searchData.place}
              onChange={handleDataChange}
            />
          </div>

          <div className="relative flex-2 flex items-center rounded-md px-2 py-2 bg-white">
            <label>
              <CalendarDays className="text-gray-400 size-8" />
            </label>
            <div
              className="w-full text-gray-400 cursor-pointer px-2"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <p>Check-in date - check-out date</p>
            </div>

            {showCalendar && (
              <div className="absolute top-38 left-10 lg:top-13 lg:left-5 border-2 border-gray-200 w-fit">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange} // Use the handleDateChange function
                  moveRangeOnFirstSelection={false}
                  ranges={[searchData.dates]} // Wrap the dates object inside an array
                />
              </div>
            )}
          </div>

          <div className="relative flex-2 flex items-center rounded-md px-2 py-2 bg-white">
            <label>
              <User className="text-gray-400 size-8" />
            </label>
            <div
              className="w-full text-gray-400 cursor-pointer px-2"
              onClick={() => setPersonInput(!personInput)}
            >
              <p>2 Adult · 0 Children · 1 Room</p>
            </div>
            {personInput && (
              <div className="absolute top-25 lg:top-13 lg:left-5 w-[320px] flex flex-col  border-2 border-gray-200 px-10 py-6 rounded-md gap-3 shadow-lg">
                 <div className="flex items-center justify-between">
                  <p>Adults</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button 
                        className="hover:bg-blue-100 disabled:bg-white cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, adult: prev.adult - 1}))}
                        disabled={searchData.adult === 0}
                    >
                      <Minus />
                    </button>
                    <p>{searchData.adult}</p>
                    <button 
                        className="hover:bg-blue-100 cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, adult: prev.adult + 1}))}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>


                <div className="flex items-center justify-between">
                  <p>Childrens</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button 
                        className="hover:bg-blue-100 disabled:bg-white cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, children: prev.children - 1}))}
                        disabled={searchData.children === 0}
                    >
                      <Minus />
                    </button>
                    <p>{searchData.children}</p>
                    <button 
                        className="hover:bg-blue-100 cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, children: prev.children + 1}))}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Room</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button 
                        className="hover:bg-blue-100 disabled:bg-white cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, room: prev.room - 1}))}
                        disabled={searchData.room === 0}
                    >
                      <Minus />
                    </button>
                    <p>{searchData.room}</p>
                    <button 
                        className="hover:bg-blue-100 cursor-pointer rounded-md"
                        onClick={() => setSearchData((prev) => ({...prev, room: prev.room + 1}))}
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                <button 
                    className="w-full py-2 rounded-md flex items-center justify-center bg-gray-100 hover:shadow-lg cursor-pointer"
                    onClick={() => setPersonInput(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>

          <div 
            className="flex-1 h-12 bg-blue-900 rounded-md flex items-center justify-center text-white font-medium text-xl cursor-pointer py-2"
            onClick={handleFormSubmit}
        >
            Search
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchBar;
