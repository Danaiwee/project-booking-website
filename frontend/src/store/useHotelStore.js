import {create} from 'zustand';

import axios from '../libs/axios.js';

export const useHotelStore = create((set, get) => ({
    hotelType: null,
    isLoading: false,
    hotels: null,

    getType: async() => {
        set({isLoading: false});
        try {
            const res = await axios.get("/hotels/count");
            const data = await res.data;

            set({hotelType: data})
        } catch (error) {
            console.log("Error in getType useHotelStore: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false})
        }
    },

    getFeatured: async () => {
        set({isLoading: true});
        try {
            const res = await axios.get("/hotels/featured");
            const data = await res.data;

            set({hotels: data});
        } catch (error) {
            console.log("Error in getFeaturedHotel: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false})
        }
    },

    getHotelByType: async(type) => {
        set({isLoading: true, hotels: []});
        try {
            const res = await axios.get(`/hotels/type/${type}`);
            const data = await res.data;

            set({hotels: data});
        } catch (error) {
            console.log("Error in getHotelBytype: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false});
        }
    },

    getHotelByCity: async(city) => {
        set({isLoading: true, hotels: []});
        try {
            const res = await axios.get(`/hotels/city/${city}`);
            const data = await res.data;

            set({hotels: data});
        } catch (error) {
            console.log("Error in getHotelBytype: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false});
        }
    },
}))