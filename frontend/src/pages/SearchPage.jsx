import React, { useEffect } from 'react'
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

  useEffect(() => {
    const fetchHotel = (type, city) => {
      if(type){
        getHotelByType(type)
      };

      if(city){
        getHotelByCity(city);
      };
    }
    
    fetchHotel(type, city)
  },[type, city]);


  console.log(hotels);
  return (
    <section className='w-full h-full mt-5'>
        <div className='w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-2'>
            <div className='flex-1'>
                <Filter searchDetails={searchDetails} />
            </div>

            <div className='flex-3 flex flex-col gap-2'>
                {hotels && hotels.map((hotel) => (
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