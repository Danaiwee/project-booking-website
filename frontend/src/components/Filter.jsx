import { useState } from "react";
import { DateRange } from "react-date-range";

const Filter = () => {
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
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateChange = (item) => {
    // Update the dates in the searchData state correctly
    setSearchData((prevState) => ({
      ...prevState,
      dates: item.selection, // Correctly set the 'selection' object
    }));
  };
  return (
    <div className="w-full bg-amber-500 px-4 py-6 rounded-lg flex flex-col">
      <h1 className="text-gray-900 font-bold text-2xl">Search</h1>

      <form className="flex flex-col">
        <div className="mt-2 flex flex-col">
          <label
            htmlFor="destination"
            className="text-gray-900 text-sm font-bold"
          >
            Destination
          </label>
          <input
            className="w-full bg-white rounded-sm h-8 px-2 text-sm"
            type="text"
            placeholder="Bangkok, pattaya..."
          />
        </div>

        <div className="mt-2 flex flex-col">
          <h3 className="text-gray-900 text-sm font-bold">Check-in date</h3>
          <p
            className="w-full h-8 bg-white rounded-md flex items-center text-gray-400 px-2 text-sm cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            13 Mar - 24 Mar
          </p>
          {showCalendar && (
            <div className="relative top-0.5 rounded-md overflow-hidden">
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange} // Use the handleDateChange function
                moveRangeOnFirstSelection={false}
                ranges={[searchData.dates]} // Wrap the dates object inside an array
              />
            </div>
          )}
        </div>

        <div className="flex flex-col mt-2 gap-1.5">
          <h3 className="text-gray-900 text-sm font-bold">Options</h3>

          <div className="w-full flex items-center justify-between px-4">
            <p className="text-sm">Min price (pernight)</p>
            <input
              className="w-12 bg-white rounded-md text-center text-sm py-1"
              type="number"
              min="0"
            />
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <p className="text-sm">Max price (pernight)</p>
            <input
              className="w-12 bg-white rounded-md text-center text-sm py-1"
              type="number"
              min="0"
            />
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <p className="text-sm">Adults</p>
            <input
              className="w-12 bg-white rounded-md text-center text-sm py-1"
              type="number"
              min="1"
            />
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <p className="text-sm">Childrens</p>
            <input
              className="w-12 bg-white rounded-md text-center text-sm py-1"
              type="number"
              min="0"
            />
          </div>

          <div className="w-full flex items-center justify-between px-4">
            <p className="text-sm">Room</p>
            <input
              className="w-12 bg-white rounded-md text-center text-sm py-1"
              type="number"
              min="1"
            />
          </div>
        </div>

        <button 
            className="w-full py-2 rounded-md bg-blue-500 active:scale-95 text-md font-bold text-white mt-5 cursor-pointer"
            
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
