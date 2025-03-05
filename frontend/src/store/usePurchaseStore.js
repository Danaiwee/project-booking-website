import {create} from 'zustand';

import axios from '../libs/axios.js';

export const usePurchaseStore = create((set, get) => ({
    bookings: null,
    isLoading: false,
    booking: JSON.parse(localStorage.getItem('booking')) || null,

    createPurchase: async(purchaseData) => {
        set({isLoading: true})
        try {
            const res = await axios.post('/booking/create', purchaseData);
            const data = await res.data;

            set({booking: data});
            localStorage.setItem("booking", JSON.stringify(data));
        } catch (error) {
            console.log("Error in createPurchase", error.message);
            throw new Error(error.message);
        } finally {
            set({isLoading: false})
        }
    },
}))