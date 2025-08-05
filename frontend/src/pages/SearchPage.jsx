// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Filter from "../components/Filter";
import CardItem from "../components/CardItem";
import hotelImg from "../assets/hotel.png";
import { useHotelStore } from "../store/useHotelStore";
import { useSearchParams } from "react-router-dom";
import { useSearchStore } from "../store/useSearchStore";

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const city = searchParams.get("city");

  const { getHotelByCity, getHotelByType, hotels, isLoading } = useHotelStore();
  const { searchDetails } = useSearchStore();

  const [filteredHotel, setFilteredHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async (type, city) => {
      if (type) {
        await getHotelByType(type);
      }

      if (city) {
        await getHotelByCity(city);
      }
    };

    fetchHotel(type, city);
  }, [type, city]);

  useEffect(() => {
    if (hotels && searchDetails) {
      const filterData = () => {
        return hotels.filter((hotel) => {
          if (searchDetails.minPrice && searchDetails.maxPrice) {
            return (
              hotel.minPrice >= searchDetails.minPrice &&
              hotel.minPrice <= searchDetails.maxPrice
            );
          } else if (searchDetails.minPrice) {
            return hotel.minPrice >= searchDetails.minPrice;
          } else if (searchDetails.maxPrice) {
            return hotel.minPrice <= searchDetails.maxPrice;
          } else {
            return hotel;
          }
        });
      };

      const filtered = filterData();
      setFilteredHotel(filtered);
    } else {
      setFilteredHotel(hotels);
    }
  }, [hotels, searchDetails]); // This will update filteredHotel whenever hotels change

  return (
    <section className='w-full h-full mt-5'>
      <div className='w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-2'>
        <motion.div
          className='flex-1'
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Filter />
        </motion.div>

        <motion.div
          className='flex-3 flex flex-col gap-2'
          initial={{ x: 20 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {filteredHotel &&
            filteredHotel.map((hotel) => (
              <CardItem key={hotel._id} hotel={hotel} />
            ))}

          {!isLoading && filteredHotel?.length === 0 && (
            <div className='w-full h-full flex flex-col justify-center items-center mt-20'>
              <img src={hotelImg} alt='hotel icon' className='w-70' />
              <h1 className='text-2xl text-gray-600 font-medium mt-10'>
                Hotel not found
              </h1>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SearchPage;
