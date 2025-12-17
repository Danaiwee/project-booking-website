import { useState } from "react";
import { DateRange } from "react-date-range";

import { formatDate } from "../utils/date.js";
import { useSearchStore } from "../store/useSearchStore.js";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const { searchDetails, setSearchDetails } = useSearchStore();

  const [searchData, setSearchData] = useState({
    place: searchDetails?.place || "",
    dates: {
      startDate: searchDetails?.dates.startDate || new Date(),
      endDate:
        searchDetails?.dates.endDate ||
        new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
    adult: searchDetails?.adult || 2,
    children: searchDetails?.children || 0,
    room: searchDetails?.room || 1,
    minPrice: searchDetails?.minPrice || "",
    maxPrice: searchDetails?.maxPrice || "",
  });
  const [showCalendar, setShowCalendar] = useState(false);

  const startDate = formatDate(searchData.dates.startDate);
  const endDate = formatDate(searchData.dates.endDate);

  const navigate = useNavigate();

  const handleDateChange = (item) => {
    // Update the dates in the searchData state correctly
    setSearchData((prevState) => ({
      ...prevState,
      dates: item.selection, // Correctly set the 'selection' object
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSearchData((prevState) => ({
      ...prevState,
      [name]: name === "place" ? value : value === "" ? 0 : Number(value),
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      await setSearchDetails(searchData);
      setShowCalendar(false);
      navigate(`/search?city=${searchData.place}`);
    } catch (error) {
      console.log("Error in filter: ", error);
    }
  };

  return (
    <div className='w-full bg-amber-500 px-4 py-6 rounded-lg flex flex-col'>
      <h1 className='text-gray-900 font-bold text-2xl'>Search</h1>

      <form className='flex flex-col'>
        <div className='mt-2 flex flex-col'>
          <label
            htmlFor='destination'
            className='text-gray-900 text-sm font-bold'
          >
            Destination
          </label>
          <input
            className='w-full bg-white rounded-sm h-8 px-2 text-sm'
            type='text'
            name='place'
            placeholder='Bangkok, pattaya...'
            value={searchData.place}
            onChange={handleInputChange}
          />
        </div>

        <div className='mt-2 flex flex-col'>
          <h3 className='text-gray-900 text-sm font-bold'>Check-in date</h3>
          <p
            className='w-full h-8 bg-white rounded-md flex items-center text-gray-900 px-2 text-sm cursor-pointer'
            onClick={() => setShowCalendar(!showCalendar)}
          >
            {startDate} - {endDate}
          </p>
          {showCalendar && (
            <div className='relative top-0.5 rounded-md overflow-hidden'>
              <DateRange
                editableDateInputs={true}
                onChange={handleDateChange} // Use the handleDateChange function
                moveRangeOnFirstSelection={false}
                ranges={[searchData.dates]} // Wrap the dates object inside an array
              />
            </div>
          )}
        </div>

        <div className='flex flex-col mt-2 gap-1.5'>
          <h3 className='text-gray-900 text-sm font-bold'>Options</h3>

          <div className='w-full flex items-center justify-between px-4'>
            <p className='text-sm'>Min price (pernight)</p>
            <input
              className='w-16 bg-white rounded-md text-center text-xs py-1.5 text-gray-500'
              type='number'
              name='minPrice'
              min='0'
              value={searchData.minPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className='w-full flex items-center justify-between px-4'>
            <p className='text-sm'>Max price (pernight)</p>
            <input
              className='w-16 bg-white rounded-md text-center text-xs py-1.5 text-gray-500'
              type='number'
              min='0'
              name='maxPrice'
              value={searchData.maxPrice}
              onChange={handleInputChange}
            />
          </div>

          <div className='w-full flex items-center justify-between px-4'>
            <p className='text-sm'>Adults</p>
            <input
              className='w-16 bg-white rounded-md text-center text-xs py-1.5 text-gray-500'
              type='number'
              min='1'
              name='adult'
              value={searchData.adult}
              onChange={handleInputChange}
            />
          </div>

          <div className='w-full flex items-center justify-between px-4'>
            <p className='text-sm'>Childrens</p>
            <input
              className='w-16 bg-white rounded-md text-center text-xs py-1.5 text-gray-500'
              type='number'
              min='0'
              name='children'
              value={searchData.children}
              onChange={handleInputChange}
            />
          </div>

          <div className='w-full flex items-center justify-between px-4'>
            <p className='text-sm'>Room</p>
            <input
              className='w-16 bg-white rounded-md text-center text-xs py-1.5 text-gray-500'
              type='number'
              min='1'
              name='room'
              value={searchData.room}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          className='w-full py-2 rounded-md bg-blue-500 active:scale-95 text-md font-bold text-white mt-5 cursor-pointer'
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filter;
