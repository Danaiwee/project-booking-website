import React from "react";

import { DESTINATIONS1, DESTINATIONS2, PROPERTY_TYPES } from "../constants";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PropertyType from "../components/PropertyType";
import Features from "../components/Features";
import DetailsPage from "./DetailsPage";
import Destination from "../components/Destination";
import Subscribe from "../components/Subscribe";

const HomePage = () => {
  return (
    <div className="flex flex-col relative mb-10">
      <Hero />
      <SearchBar />

      <div className="w-full max-w-7xl mx-auto px-5 mt-2 flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
            Browse by property type
          </h1>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 mt-3">
            {PROPERTY_TYPES.map((property) => (
              <PropertyType key={property.id} property={property} />
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-gray-900 text-xl md:text-2xl font-bold">
            Property you might like
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3">
            <Features />
            <Features />
            <Features />
            <Features />
          </div>
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
      </div>

      <div className='w-full bg-blue-900 mt-15'>
          <Subscribe />
      </div>
    </div>
  );
};

export default HomePage;
