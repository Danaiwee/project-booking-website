import {create} from 'zustand';
import axios from '../libs/axios.js';
import toast from 'react-hot-toast';

export const useUserStore = create((set, get) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    isLoading: false,
    isCheckingAuth: false,
    booking: JSON.parse(localStorage.getItem('user-booking')) || null,
    bookings: JSON.parse(localStorage.getItem("user-bookings")) || null,

    signup: async({name, username, email, password, confirmPassword}) => {
        set({isLoading: true});
        try {
            if(!name || !email || !username || !password || !confirmPassword){
                toast.error("All fields are required");
                set({isLoading: false});

                return
            };

            if(password !== confirmPassword){
                toast.error("Passwords must be matched");
                set({isLoading: false});

                return;
            };

            const res = await axios.post("/auth/signup", {name, email, username, password, confirmPassword});
            const data = await res.data;

            set({user: data});
            localStorage.setItem('user', JSON.stringify(data));
            toast.success(`Welcome ${data.name}`);
        } catch (error) {
            console.log("Error in signup useUserStore: ", error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false})
        }
    },

    login: async({email, password}) => {
        set({isLoading: true});
        try {
            if(!email || !password){
                toast.error("Invalid username or password");
                return;
            };

            const res = await axios.post("/auth/login", {email, password});
            const data = await res.data;

            set({user: data});
            localStorage.setItem('user', JSON.stringify(data));
            toast.success(`Welcome ${data.name}`)

        } catch (error) {
            console.log("Error in login useUserStore: ", error.message);
            toast.error(error.message);
            throw new Error(error.message);

        } finally {
            set({isLoading: false});
        }
    },

    logout: async() => {
        set({isLoading: false})
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('user-booking');
            localStorage.removeItem('user-bookings');

            await axios.post("/auth/logout");
            toast.success("Logged out successfully");

            set({user: null});
            
        } catch (error) {
            console.log("Error in logout useUserStore: ", error.message);
            throw new Error(error.message);
        } finally {
            set({isLoading: false})
        }
    },

    checkAuth: async() => {
        set({isChekingAuth: true})
        try {
            const res = await axios.get("/auth/getme");
            set({user: res.data, isCheckingAuth: false});
            localStorage.setItem('user', JSON.stringify(res.data));
        } catch (error) {
            console.log("Error in checkAuth: ", error.message);
            throw new Error(error.message);
        } finally {
            set({isCheckingAuth: false})
        }
    },

    getBooking: async(userId) => {
        set({isLoading: true});
        try {
            const res = await axios.get(`/booking/${userId}`);
            const data = await res.data;

            set({booking: data});
            localStorage.setItem("user-booking", JSON.stringify(data));
        } catch (error) {
            console.log("Error in getBooking: ", error.message);
            throw new Error(error.message);
        }
    },

    getBookings: async(userId) => {
        set({isLoading: true});
        try {
            const res = await axios.get(`/booking/all/${userId}`);
            const data = await res.data;

            set({bookings: data});
            localStorage.setItem("user-bookings", JSON.stringify(data));
        } catch (error) {
            console.log("Error in getBooking: ", error.message);
            throw new Error(error.message);
        }
    },

    cancelBooking: async(bookingId) => {
        set({isLoading: false});
        try {
            await axios.delete(`/booking/${bookingId}`);
            
            set((state) => {
                const updatedBookings = state.bookings.filter((booking) => booking._id !== bookingId);
                localStorage.setItem("user-booking", JSON.stringify(updatedBookings));

                toast.success("Cancel Booking successfully");
                return {bookings: updatedBookings}
            })
        } catch (error) {
            console.log("Error in createPurchase", error.message);
            throw new Error(error.message);
        } finally {
            set({isLoading: false})
        }
    },
}));