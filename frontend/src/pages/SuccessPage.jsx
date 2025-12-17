// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Confetti from "react-confetti";

import { useUserStore } from "../store/useUserStore.js";
import { useSearchStore } from "../store/useSearchStore.js";

const SuccessPage = () => {
  const { id } = useParams();
  const { getBooking, booking } = useUserStore();
  const { setSearchDetails } = useSearchStore();

  const navigate = useNavigate();

  useEffect(() => {
    getBooking(id);
  }, [getBooking]);

  const handleBack = async (e) => {
    e.preventDefault();

    try {
      await setSearchDetails();
      navigate("/");
    } catch (error) {
      console.log("Error in successPage: ", error);
    }
    
  };

  return (
    <main className="w-full h-full overflow-hidden px-5 bg-gray-100">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.1}
        style={{ zIndex: 99 }}
        numberOfPieces={700}
        recycle={false}
      />
      <motion.div
        className="w-full h-[94vh] flex items-center justify-center mx-auto overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-md bg-white rounded-lg px-10 py-6 flex flex-col items-center gap-1 shadow-lg">
          <CheckCircle className="text-blue-900 size-14" />
          <h1 className="text-2xl font-bold text-blue-900">
            Purchase Successful!
          </h1>
          <p className="text-sm text-gray-900 text-center">
            Thank you for your order. We're processing it now.
          </p>
          <p className="text-xs text-emerald-500">
            Check your email for order details and update.
          </p>

          <div className="w-full max-w-[380px] rounded-md  bg-gray-600 flex flex-col px-5 py-2 mt-5 gap-1">
            <div className="flex items-center justify-between">
              <p className="text-xs sm:text-sm text-gray-200 ">
                Booking number:
              </p>
              <p className="text-xs sm:text text-emerald-500 font-medium">
                #{booking?._id?.slice(-15).toUpperCase()}
              </p>
            </div>
          </div>
          <Link to={`/bookings/${booking?.user}`}>
            <p className="text-xs text-emerald-500 underline font-medium">
              See your booking details
            </p>
          </Link>

          <motion.button
            className="w-full py-2 rounded-md bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center gap-2 mt-2 cursor-pointer mb-5 font-medium"
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
          >
            Back to home
            <ArrowRight className="size-4 text-white" />
          </motion.button>
        </div>
      </motion.div>
    </main>
  );  
};

export default SuccessPage;
