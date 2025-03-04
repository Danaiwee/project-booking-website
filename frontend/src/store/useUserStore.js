import {create} from 'zustand';
import axios from '../libs/axios.js';
import toast from 'react-hot-toast';

export const useUserStore = create((set, get) => ({
    user: null,
    isLoading: false,
    isCheckingAuth: false,

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
            await axios.post("/auth/logout");
            toast.success("Logged out successfully");
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
        } catch (error) {
            console.log("Error in checkAuth: ", error.message);
            throw new Error(error.message);
        } finally {
            set({isCheckingAuth: false})
        }
    },
}));