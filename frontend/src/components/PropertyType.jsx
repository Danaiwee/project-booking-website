import { Link, useNavigate } from "react-router-dom";

import { useSearchStore } from "../store/useSearchStore.js";

const PropertyType = ({ property }) => {
  const { title, amount, image, src } = property;
  const { setSearchDetails } = useSearchStore();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    await setSearchDetails(null);

    navigate(`/search?type=${src}`);
  };
  return (
    <div className="card bg-base-100 w-60 shadow-lg">
      <figure>
        <img src={image} alt={title} className="w-full h-40" />
      </figure>
      <div className="card-body gap-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{amount} properties</p>
        <div className="card-actions">
          <button 
            className="btn btn-primary mt-5"
            onClick={handleClick}
          >
            Explore more
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
