import { Link } from "react-router-dom";


const CardItem = ({hotel}) => {
  const {title, distance, rating, minPrice, profileImg} = hotel;

  const rate = rating<5 ? "Good" : rating<8 ? "Very good" : "Excellent"

  const description = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In nisiunde, ullam quos est qui vel assumenda magnam nesciunt, molestiae voluptatum nostrum eius nemo sit fugiat explicabo illo commodimodi?`;

  return (
    <div className="w-full border-1 border-gray-300 shadow-md rounded-sm px-6 py-6 flex flex-col md:flex-row gap-3">
      <div className="flex-2">
        <img src={profileImg} alt="room" className="w-full h-full rounded-md" />
      </div>

      <div className="flex-4 flex justify-between">
        <div className="flex-3 flex flex-col">
          <h3 className="text-xl font-bold text-blue-900">
            {title}
          </h3>

          <div className="flex flex-col gap-1">
            <p className="text-xs text-gray-900">{distance}m from center</p>
            <p className="w-fit bg-green-700 text-white text-sm rounded-sm p-1">
              Free airport taxi
            </p>
            <p className="font-bold text-sm text-gray-900">
              Experience World-class Service
            </p>
            <p className="max-w-md text-gray-900 text-sm">
              {description.slice(0, 120) + "..."}
            </p>
            <p className="text-green-700 font-medium text-sm">
              Free cancellation
            </p>
            <p className="text-green-700 text-sm">
              You can cancel later, so lock in this great price today!
            </p>
          </div>
        </div>
      </div>

      <div className="flex-2 flex flex-col justify-between items-end">
        <div className="flex items-center gap-2">
          <p className="text-lg text-gray-900">{rate}</p>
          <p className="bg-blue-900 p-1 rounded-md text-white text-sm font-medium">
            {rating.toFixed(1)}
          </p>
        </div>

        <div className="flex flex-col gap-1 items-end">
          <p className="text-3xl font-bold">฿{minPrice.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Include taxes and fees</p>
          <Link to={`/details/${hotel._id}`}>
            <button className="w-fit px-4 py-2 text-white font-medium bg-blue-900 rounded-md cursor-pointer">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
