import { create } from "zustand";

const defaultSearchDetails = {
  place: "",
  dates: {
    startDate: new Date(),
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    key: "selection",
  },
  adult: 2,
  children: 0,
  room: 1,
  minPrice: "",
  maxPrice: "",
};

export const useSearchStore = create((set) => ({
  searchDetails: (() => {
    const savedSearchDetails =
      localStorage.getItem("searchDetails-1") || defaultSearchDetails;

    const parsedDetails = JSON.parse(JSON.stringify(savedSearchDetails));

    // Convert date strings back to Date objects
    return {
      ...parsedDetails,
      dates: {
        ...parsedDetails.dates,
        startDate: new Date(parsedDetails.dates?.startDate),
        endDate: new Date(parsedDetails.dates?.endDate),
      },
    };
  })(),

  isLoading: false,

  setSearchDetails: (searchDetails = defaultSearchDetails) => {
    // Ensure startDate and endDate are Date objects
    const formattedSearchDetails = {
      ...searchDetails,
      dates: {
        ...searchDetails.dates,
        startDate: new Date(searchDetails.dates.startDate),
        endDate: new Date(searchDetails.dates.endDate),
      },
    };

    set({ searchDetails: formattedSearchDetails });
    localStorage.setItem(
      "searchDetails-1",
      JSON.stringify(formattedSearchDetails)
    );
  },
}));
