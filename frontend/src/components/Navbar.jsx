import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-900 relative top-0">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-5 py-2 text-white">
        <Link to="/">
          <h1 className="text-2xl sm:text-3xl font-bold">Booking.com</h1>
        </Link>

        <div className="flex items-center gap-2">
          <Link to="/login">
            <button className="btn btn-soft text-sm sm:text-md">Login</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
