import {create} from 'zustand';

export const useSearchStore = create((set,get) => ({
    searchDetails: null,
    isLoading: false,

    getSearchDetails: () => get().searchDetails,

    setSearchDetails: (searchDetails) => set({searchDetails}),
}));