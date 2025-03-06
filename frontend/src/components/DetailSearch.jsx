import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useState } from "react";
import { DateRange } from "react-date-range";
import { BedSingle } from "lucide-react";
import { CalendarDays } from "lucide-react";
import { User } from "lucide-react";
import { Minus } from "lucide-react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { useSearchStore } from "../store/useSearchStore.js";
import { formatDateRange, generateDateArray} from "../utils/date.js";

const DetailsSearch = () => {
  const { searchDetails, setSearchDetails } = useSearchStore();
  const [showCalendar, setShowCalendar] = useState(false);
  const [personInput, setPersonInput] = useState(false);
  const [searchData, setSearchData] = useState({
    place: searchDetails?.place || 'bangkok',
    dates: {
      startDate: searchDetails?.dates.startDate ||  new Date(),
      endDate: searchDetails?.dates.endDate || new Date(new Date().setDate(new Date().getDate() + 1)),
      key: "selection",
    },
    adult: searchDetails?.adult || 2,
    children: searchDetails?.children || 0,
    room: searchDetails?.room || 1,
    minPrice: searchDetails?.minPrice || null,
    maxPrice: searchDetails?.minPrice || null
  });

  const dateArray = generateDateArray(
      searchData?.dates?.startDate,
      searchData?.dates?.endDate
    );
    const startDate = formatDateRange(dateArray[0]);
    const endDate = formatDateRange(dateArray[dateArray.length - 1]);

  const handleDateChange = (item) => {
    // Update the dates in the searchData state correctly
    setSearchData((prevState) => ({
      ...prevState,
      dates: item.selection, // Correctly set the 'selection' object
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    await setSearchDetails(searchData);

    setPersonInput(false);
    setShowCalendar(false);
  };

  return (
    <section className="w-full max-w-7xl mx-auto relative -top-7 px-5">
      <div>
        <form className="flex flex-col lg:flex-row item-center bg-amber-500 rounded-md p-1 gap-1">
          <div className="relative flex-3 flex items-center rounded-md px-2 py-2 bg-white">
            <label>
              <CalendarDays className="text-gray-400 size-8" />
            </label>
            <div
              className="w-full text-gray-400 cursor-pointer px-2 text-sm"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <p>{startDate} - {endDate}</p>
            </div>

            {showCalendar && (
              <div className="absolute top-38 left-10 lg:top-13 lg:left-5 border-2 border-gray-200 w-fit z-50">
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateChange} // Use the handleDateChange function
                  moveRangeOnFirstSelection={false}
                  ranges={[searchData.dates]} // Wrap the dates object inside an array
                />
              </div>
            )}
          </div>

          <div className="relative flex-3 flex items-center rounded-md px-2 py-2 bg-white">
            <label>
              <User className="text-gray-400 size-8" />
            </label>
            <div
              className="w-full text-gray-400 cursor-pointer px-2 text-sm"
              onClick={() => setPersonInput(!personInput)}
            >
              <p>{searchData.adult} Adult · {searchData.children} Children · {searchData.room} Room</p>
            </div>
            {personInput && (
              <div className="absolute top-25 lg:top-13 lg:left-5 w-[320px] flex flex-col  border-2 border-gray-200 px-10 py-6 rounded-md gap-3 shadow-lg z-50 bg-gray-100">
                <div className="flex items-center justify-between">
                  <p>Adults</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          adult: prev.adult - 1,
                        }))
                      }
                      disabled={searchData.adult === 0}
                    >
                      <Minus />
                    </button>
                    <p className="w-3">{searchData.adult}</p>
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          adult: prev.adult + 1,
                        }))
                      }
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Childrens</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          children: prev.children - 1,
                        }))
                      }
                      disabled={searchData.children === 0}
                    >
                      <Minus />
                    </button>
                    <p className="w-3">{searchData.children}</p>
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          children: prev.children + 1,
                        }))
                      }
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Room</p>
                  <div className="flex items-center border-1 border-gray-500 rounded-md gap-3 p-2">
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          room: prev.room - 1,
                        }))
                      }
                      disabled={searchData.room === 0}
                    >
                      <Minus />
                    </button>
                    <p className="w-3">{searchData.room}</p>
                    <button
                      className="hover:bg-blue-100 cursor-pointer rounded-md"
                      type="button"
                      onClick={() =>
                        setSearchData((prev) => ({
                          ...prev,
                          room: prev.room + 1,
                        }))
                      }
                    >
                      <Plus />
                    </button>
                  </div>
                </div>

                <button
                  className="w-full py-2 rounded-md flex items-center justify-center bg-blue-900 hover:shadow-lg cursor-pointer text-white"
                  onClick={() => setPersonInput(false)}
                >
                  Done
                </button>
              </div>
            )}
          </div>
            <button
              className="flex-1 h-12 bg-blue-900 rounded-md flex items-center justify-center text-white font-medium text-xl cursor-pointer px-8 py-2"
              type="button"
              onClick={handleFormSubmit}
            >
              Search
            </button>
        </form>
      </div>
    </section>
  );
};

export default DetailsSearch;
