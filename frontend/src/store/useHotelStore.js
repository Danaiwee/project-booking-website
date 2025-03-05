import {create} from 'zustand';

import axios from '../libs/axios.js';

export const useHotelStore = create((set) => ({
    hotelType: null,
    isLoading: false,
    hotels: null,
    hotel: JSON.parse(localStorage.getItem('hotel')) || null,
    breakfast: JSON.parse(localStorage.getItem("breakfast")) || false,
    room: JSON.parse(localStorage.getItem("room")) || null,

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

    getHotel: async(id) => {
        set({isLoading: true});
        try {
            const res = await axios.get(`/hotels/${id}`);
            const data = await res.data;

            set({hotel: data});
        } catch (error) {
            console.log("Error in getHotel useHotelStore: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false});
        }
    },

    getHotelRooms: async(hotelId) => {
        set({isLoading: false})
        try {
            const res = await axios.get(`/hotels/rooms/${hotelId}`);
            const data = await res.data;

            set({hotel: data});
            localStorage.setItem("hotel", JSON.stringify(data));
        } catch (error) {
            console.log("Error in getHotelRoom useHotelStore: ", error.message);
            throw new Error(error.message);

        } finally{
            set({isLoading: false})
        }
    },

    setBookingType: (type) => {
        try {
            set({breakfast: type});
            localStorage.setItem("breakfast", JSON.stringify(type));
        } catch (error) {
            console.log("Erro in setBookingType: ", error.message);
            throw new Error(error.message);
        }
    },

     setBookingRoom: async (roomId) => {
        set({isLoading: true});
        try {
            const res = await axios.get(`/rooms/${roomId}`);
            const data = res.data;

            set({room: data});
            localStorage.setItem("room", JSON.stringify(data));
        } catch (error) {
            console.log("Error in setBookingRoom: ", error.message);
            throw new Error(error.message);
        }
     }

}))