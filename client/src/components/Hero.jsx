import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
    ({});
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-blue-500 via-indigo-800 to-purple-900 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
          Get Your Dream Job Right Here
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Find the Best Job Opportunities According to Your Skill and Talent and
          Create a Better Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-700 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt=""></img>
            <input
              type="text"
              placeholder="Search for Jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={titleRef}
            />
          </div>
          <p>| </p>
          <div className="flex items-center">
            <img className="h-4 sm:h-5" src={assets.location_icon} alt=""></img>
            <input
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              ref={locationRef}
            />
          </div>
          <button
            onClick={onSearch}
            className="bg-blue-600 px-6 py-2 rounded text-white m-1"
          >
            Search
          </button>
        </div>
      </div>
      <div className="border bg-gray-200 shadow-md mx-2 mt-5 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-16 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
