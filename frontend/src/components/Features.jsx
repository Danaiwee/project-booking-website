import { Link } from "react-router-dom";

import hotelImg from '/propertyTypes/hotels.jpg';

const Features = () => {
  return (
    <div className="card bg-base-100 w-75 shadow-lg overflow-hidden">
      <Link to="/details/123">
        <figure>
          <img
            src={hotelImg}
            alt='hotel'
            className="w-full h-60"
          />
        </figure>
        <div className="card-body gap-0">
          <p className="text-xs text-gray-500">Hotels</p>
          <h2 className="card-title">
            Manhattan Pattaya Hotel - SHA Extra Plus
          </h2>

          <div className="w-fit flex items-center gap-3 mt-2">
            <p className="bg-blue-900 p-1.5 rounded-md text-white text-xs ">9.5</p>
            <p className='text-xs text-gray-500'>Very Good · 679 reviews</p> 
          </div>

          <div className='w-fit flex items-center gap-3 mt-2'>
            <p className='text-gray-500 text-xs'>Starting from</p>
            <p className='text-lg font-extrabold text-gray-900'>THB 15,785</p>
          </div>
        </div>  
      </Link>
    </div>
  );
};

export default Features;
