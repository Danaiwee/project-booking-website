import { Mail } from "lucide-react";
import {Link} from 'react-router-dom';

const Subscribe = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-5">
      <div className="flex flex-col items-center justify-center gap-1">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Subscribe to save more!
        </h1>
        <p className="text-md md:text-lg text-white">
          Signup and we'll send you the best deal
        </p>

        <Link className="bg-gray-200 flex items-center gap-2 rounded-md mt-5 px-4 py-2 cursor-pointer active:scale-95">
          <Mail className="size-8 text-gray-500" />
          <p>Signup</p>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
