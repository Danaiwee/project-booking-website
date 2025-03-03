import { Mail } from "lucide-react";

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

        <div className="join mt-5">
          <div>
            <label className="input validator join-item">
              <Mail className='size-8 text-gray-500' />
              <input type="email" placeholder="youremail@email.com" required className='p-2 text-md ' />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-soft join-item text-md">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
