import { useNavigate } from "react-router-dom";

import flag from "../assets/flag.png";
import { useSearchStore } from "../store/useSearchStore.js";

const Destination = ({ data }) => {
  const { setSearchDetails } = useSearchStore();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setSearchDetails();
      navigate(`/search?city=${data?.src}`);

    } catch (error) {
      console.log("Error in Destination: ", error);
    }
  };
  return (
    <button
      className="w-full h-60 rounded-xl overflow-hidden cursor-pointer"
      style={{
        backgroundImage: `url(${data?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleClick}
    >
      <div className="relative w-full h-full bg-black/30 backdrop-blur-none flex px-5 sm:px-0">
        <div className="absolute left-3 top-3 flex items-center gap-3">
          <h3 className="text-3xl font-bold text-white">{data?.title}</h3>
          <img className="size-6" src={flag} alt="flagThai" />
        </div>
      </div>
    </button>
  );
};

export default Destination;
