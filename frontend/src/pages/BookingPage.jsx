import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore.js";
import {useParams} from 'react-router-dom';
import {motion} from 'framer-motion';

import BookingCard from "../components/BookingCard.jsx";
import book from '../assets/book.png';

const BookingPage = () => {
  const {id} = useParams();
  const { getBookings, bookings } = useUserStore();

  useEffect(() => {
    getBookings(id);
  }, [getBookings]);

  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col py-10 px-10 gap-5">
        <h1 className="text-4xl font-bold mb-5">Your Bookings</h1>
        {bookings?.length === 0 && (
          <motion.div 
            className='mt-25 w-full flex flex-col justify-center items-center'
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
          >
            <img src={book} alt='book' className='w-xs' />
            <h1 className='text-4xl font-bold text-gray-500 mt-5'>No booking found</h1>
          </motion.div>
        )}
        {bookings && bookings?.map((booking) => <BookingCard key={booking._id} booking={booking} />)}
      </div>
    </section>
  );
};

export default BookingPage;
