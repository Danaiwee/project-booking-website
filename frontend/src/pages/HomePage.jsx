import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import no_result_img from "../assets/no-results.png";
import { DESTINATIONS1, DESTINATIONS2 } from "../constants";
import { useHotelStore } from "../store/useHotelStore.js";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Features from "../components/Features";
import Destination from "../components/Destination";
import Subscribe from "../components/Subscribe";
import PropertyTypes from "../components/PropertyTypes.jsx";

const HomePage = () => {
  const [type, setType] = useState(null);
  const [features, setFeatures] = useState(null);
  const { getType, hotelType, hotels, getFeatured, isLoading } =
    useHotelStore();

  useEffect(() => {
    getType();
    getFeatured();
  }, [getType, getFeatured]);

  useEffect(() => {
    setType(hotelType);
    setFeatures(hotels);
  }, [hotelType, hotels]);

  if (isLoading) {
    return <div className="skeleton h-screen w-full"/>;
  }


  return (
    <div className="flex flex-col relative mb-10">
      <Hero />
      <SearchBar />

      <motion.div
        className="w-full max-w-7xl mx-auto px-5 mt-2 flex flex-col gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
            Browse by property type
          </h1>
          {!type && (
            <div className="w-full h-60 flex flex-col items-center justify-center">
              <img src={no_result_img} alt="no_results" className="size-25" />
              <p className="text-xl text-gray-500 font-medium">
                No property exists
              </p>
            </div>
          )}

          {type && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 mt-3">
              {<PropertyTypes type={type} />}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
            Property you might like
          </h1>

          {!features && (
            <div className="w-full h-80 flex flex-col items-center justify-center">
              <img src={no_result_img} alt="no_results" className="size-25" />
              <p className="text-xl text-gray-500 font-medium">
                No property exists
              </p>
            </div>
          )}

          {features && (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
              {features.map((hotel) => (
                <Features key={hotel._id} hotel={hotel} />
              ))}
            </div>
          )}
        </div>

        <div className="w-full flex flex-col">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
            Popular destinations
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3 ">
            {DESTINATIONS1.map((data) => (
              <Destination key={data.id} data={data} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
            {DESTINATIONS2.map((data) => (
              <Destination key={data.id} data={data} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="w-full bg-blue-900 mt-15 mx-auto">
        <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
