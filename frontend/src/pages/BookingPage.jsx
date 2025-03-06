import { useEffect } from "react";
import { useUserStore } from "../store/useUserStore.js";

import room1 from "/room/room-1.jpg";
import BookingCard from "../components/BookingCard.jsx";

const BookingPage = () => {
  const { getBookings, bookings } = useUserStore();

  useEffect(() => {
    getBookings();
  }, [getBookings]);

  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl mx-auto flex flex-col py-10 px-10 gap-5">
        <h1 className="text-4xl font-bold mb-5">Your Bookings</h1>
        {bookings && bookings?.map((booking) => <BookingCard key={booking._id} booking={booking} />)}
      </div>
    </section>
  );
};

export default BookingPage;
