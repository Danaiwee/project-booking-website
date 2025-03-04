import { Link } from "react-router-dom";

const PropertyType = ({ property }) => {
  const { title, amount, image, src } = property;
  return (
    <div className="card bg-base-100 w-60 shadow-lg">
      <figure>
        <img src={image} alt={title} className="w-full h-40" />
      </figure>
      <div className="card-body gap-0">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{amount} properties</p>
        <div className="card-actions">
          <Link to={`/search?type=${src}`}>
            <button className="btn btn-primary mt-5">Explore more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyType;
