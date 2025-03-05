import { create } from "zustand";

export const useSearchStore = create((set, get) => ({
  searchDetails: JSON.parse(localStorage.getItem("searchDetails-1")) || null,
  isLoading: false,

  getSearchDetails: () => get().searchDetails,

  setSearchDetails: (searchDetails) => {
    set({ searchDetails });

    if (searchDetails === null) {
      localStorage.removeItem("searchDetails-1");
    } else {
      localStorage.setItem("searchDetails-1", JSON.stringify(searchDetails));
    }
  },
}));
