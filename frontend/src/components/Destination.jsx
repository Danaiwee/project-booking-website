import { Link } from "react-router-dom";

import flag from "../assets/flag.png";

const Destination = ({data}) => {
 
  return (
    <Link
      to="/567"
      className="w-full h-60 rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative w-full h-full bg-black/30 backdrop-blur-none flex px-5 sm:px-0">
        <div className="absolute left-3 top-3 flex items-center gap-3">
          <h3 className="text-3xl font-bold text-white">{data?.title}</h3>
          <img className="size-6" src={flag} alt="flagThai" />
        </div>
      </div>
    </Link>
  );
};

export default Destination;
