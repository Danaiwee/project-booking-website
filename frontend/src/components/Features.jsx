import { Link, useNavigate } from "react-router-dom";
import { useSearchStore } from "../store/useSearchStore.js";

const Features = ({hotel}) => {
  const {title, rating, type, minPrice, images } = hotel;
  const rate = rating<5 ? "Good" : rating<8 ? "Very good" : "Excellent"

  const {setSearchDetails} = useSearchStore();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await setSearchDetails();
      navigate(`/details/${hotel?._id}`);

    } catch (error) {
      console.log("Error in Features: ", error);
    }
  };
  
  return (
    <div className="card bg-base-100 w-75 shadow-lg overflow-hidden">
      <button className='cursor-pointer' onClick={handleClick}>
        <figure>
          <img
            src={images[0]}
            alt='hotel'
            className="w-full h-60"
          />
        </figure>
        <div className="card-body gap-0 flex flex-col items-start">
          <p className="text-xs text-gray-500">{type}</p>
          <h2 className="card-title h-15">
            {title}
          </h2>

          <div className="w-fit flex items-center gap-3">
            <p className="bg-blue-900 p-1.5 rounded-md text-white text-xs ">{rating.toFixed(1)}</p>
            <p className='text-xs text-gray-500'>{rate}</p> 
          </div>

          <div className='w-fit flex items-center gap-3 mt-2'>
            <p className='text-gray-500 text-xs'>Starting from</p>
            <p className='text-lg font-extrabold text-gray-900'>THB {minPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
          </div>
        </div>  
      </button>
    </div>
  );
};

export default Features;
