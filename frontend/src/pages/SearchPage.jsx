import React, { useEffect, useState } from 'react'
import Filter from '../components/Filter'
import CardItem from '../components/CardItem'
import { useHotelStore } from '../store/useHotelStore'
import { useSearchParams } from 'react-router-dom'
import { useSearchStore } from '../store/useSearchStore'

const SearchPage = () => {
  const [searchParams ] = useSearchParams();

  const type = searchParams.get("type");
  const city = searchParams.get("city");

  const {getHotelByCity, getHotelByType, hotels} = useHotelStore();
  const {searchDetails} = useSearchStore();

  const [filteredHotel, setFilteredHotel] = useState(null);

  useEffect(() => {
    const fetchHotel = async (type, city) => {
      if(type){
       await getHotelByType(type)
      };

      if(city){
       await getHotelByCity(city);
      };
    }
    
    fetchHotel(type, city);
  },[type, city]);

  useEffect(() => {
    if (hotels && searchDetails) {
      const filterData = () => {
        return hotels.filter((hotel) =>  {
          if(searchDetails.minPrice && searchDetails.maxPrice){
            return hotel.minPrice > searchDetails.minPrice && hotel.minPrice < searchDetails.maxPrice

          } else if(searchDetails.minPrice) {
            return hotel.minPrice > searchDetails.minPrice

          } else {
            return hotel
          }
        })
      }

      const filtered = filterData();
      setFilteredHotel(filtered);
      console.log("hey I'm running", filteredHotel);
      console.log("here is my search Data: ", searchDetails);
      
    } else {
      setFilteredHotel(hotels);
    }
  }, [hotels, searchDetails]); // This will update filteredHotel whenever hotels change

  return (
    <section className='w-full h-full mt-5'>
        <div className='w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-2'>
            <div className='flex-1'>
                <Filter />
            </div>

            <div className='flex-3 flex flex-col gap-2'>
                {filteredHotel && filteredHotel.map((hotel) => (
                  <CardItem 
                    key={hotel._id}
                    hotel={hotel}
                  />
                ))}
                
            </div>
        </div>
    </section>
  )
}

export default SearchPage