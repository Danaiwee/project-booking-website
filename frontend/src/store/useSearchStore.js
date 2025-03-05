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
  minPrice: '',
  maxPrice: '',
};

export const useSearchStore = create((set, get) => ({
  searchDetails: JSON.parse(localStorage.getItem("searchDetails-1")) || null,
  isLoading: false,

  getSearchDetails: () => get().searchDetails,

  setSearchDetails: (searchDetails = defaultSearchDetails) => {
    set({ searchDetails });

    localStorage.setItem("searchDetails-1", JSON.stringify(searchDetails));
  },
}));
