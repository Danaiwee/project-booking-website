import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { LogOutIcon } from "lucide-react";

import userProfile from "../assets/user_profile.jpg";
import { useUserStore } from "../store/useUserStore";

const Navbar = () => {
  const { user, logout } = useUserStore();

  const isAdmin = user?.isAdmin || false;

  console.log("Navbar", user);

  return (
    <nav className="w-full bg-blue-900 relative top-0">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 py-2 text-white">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-bold">Booking.com</h1>
        </Link>

        <div className="flex items-center gap-2">
        {isAdmin && (
            <Link to="/admin">
              <div className="w-fit overflow-hidden">
                <button className="btn  text-sm sm:text-md">
                  <Lock className="size-4 text-gray-700" />
                  Admin
                </button>
              </div>
            </Link>
          )}
          {user && (
            <>
              <Link to="/profile">
                <div className="w-fit rounded-full overflow-hidden">
                  <img src={userProfile} alt="Profile" className="size-10" />
                </div>
              </Link>
              <LogOutIcon
                className="size-5 text-gray-300 cursor-pointer"
                onClick={() => logout()}
              />
            </>
          )}
          {!user && (
            <Link to="/login">
              <button className="btn btn-soft text-sm sm:text-md">Login</button>
            </Link>
          )}

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
