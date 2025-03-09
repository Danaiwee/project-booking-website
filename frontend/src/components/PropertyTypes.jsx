import hotelImg from "/propertyTypes/hotels.jpg";
import apartmentImg from "/propertyTypes/apartments.jpg";
import resortImg from "/propertyTypes/resorts.jpg";
import villaImg from "/propertyTypes/villas.jpg";
import cabinImg from "/propertyTypes/cabins.jpg";
import PropertyType from "./PropertyType";

const PropertyTypes = ({ type }) => {
  const properties = [
    {
      id: 1,
      title: "Hotels",
      amount: type[0]?.count || 0,
      image: hotelImg,
      src: type[0]?.type || "hotel",
    },
    {
      id: 2,
      title: "Apartments",
      amount: type[1]?.count || 0,
      image: apartmentImg,
      src: type[1]?.type || "apartment",
    },
    {
      id: 3,
      title: "Resorts",
      amount: type[2]?.count || 0,
      image: resortImg,
      src: type[2]?.type || "resort",
    },
    {
      id: 4,
      title: "Villas",
      amount: type[3]?.count || 0,
      image: villaImg,
      src: type[3]?.type || "villa",
    },
    {
      id: 5,
      title: "House",
      amount: type[4]?.count || 0,
      image: cabinImg,
      src: type[4]?.type || "house",
    },
  ];

  return (
    <>
      {properties.map((property) => (
        <PropertyType key={property.id} property={property} />
      ))}
    </>
  );
};

export default PropertyTypes;
