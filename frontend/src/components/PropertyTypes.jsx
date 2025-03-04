import hotelImg from '/propertyTypes/hotels.jpg';
import apartmentImg from '/propertyTypes/apartments.jpg';
import resortImg from '/propertyTypes/resorts.jpg';
import villaImg from '/propertyTypes/villas.jpg';
import cabinImg from '/propertyTypes/cabins.jpg';
import PropertyType from './PropertyType';

const PropertyTypes = ({ type }) => {
  const properties = [
    { id: 1, title: "Hotels", amount: type[0]?.count, image: hotelImg, src:type[0]?.type },
    { id: 2, title: "Apartments", amount: type[1]?.count, image: apartmentImg, src:type[1]?.type },
    { id: 3, title: "Resorts", amount: type[2]?.count, image: resortImg, src:type[2]?.type },
    { id: 4, title: "Villas", amount: type[3]?.count, image: villaImg, src:type[3]?.type },
    { id: 5, title: "House", amount: type[4]?.count, image: cabinImg, src:type[4]?.type },
  ];

  return (
    <>
    {properties.map((property) => (
        <PropertyType 
            key={property.id}
            property={property}
        />
    ) )}
    </>
  );
};

export default PropertyTypes;
