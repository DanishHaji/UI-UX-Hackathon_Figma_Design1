import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { RiArrowUpDownLine } from "react-icons/ri";

const PickDropSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:space-x-8 mt-10 overflow-x-auto">
      {/* Pick-Up Container */}
      <div className="flex flex-col bg-[#FFFFFF] p-6 shadow-md rounded-lg space-y-4 w-full lg:w-[582px] h-[auto] mb-4 lg:mb-0">
        {/* Heading with a checkbox on the left */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="pickup"
            className="w-4 h-4"
            title="Pick-Up option"
          />
          <label htmlFor="pickup" className="font-semibold text-lg text-gray-800">
            Pick-Up
          </label>
        </div>

        {/* Container for Location, Date, Time fields */}
        <div className="flex justify-between items-center space-x-4">
          {/* Fields Container */}
          <div className="flex space-x-4 w-full">
            {/* Location Field */}
            <div className="flex flex-col space-y-2 w-1/3 border-r border-gray-300">
              <label htmlFor="pickup-location" className="text-black ml-2"><b>Location</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your city</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Date Field */}
            <div className="flex flex-col space-y-2 w-1/3 border-r border-gray-300">
              <label htmlFor="pickup-date" className="text-black ml-2"><b>Date</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your date</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Time Field */}
            <div className="flex flex-col space-y-2 w-1/3">
              <label htmlFor="pickup-time" className="text-black ml-2"><b>Time</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your time</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex items-center justify-center mt-5 mb-4 lg:mb-0">
            <button 
                aria-label="Switch Pick-Up and Drop-Off" 
                className="px-3 py-0 text-4xl bg-blue-500 text-white rounded shadow hover:bg-blue-600 w-[60px] h-[60px]"
            >
                <RiArrowUpDownLine />
            </button>
        </div>

      {/* Drop-Off Container */}
      <div className="flex flex-col bg-[#FFFFFF] p-6 shadow-md rounded-lg space-y-4 w-full lg:w-[582px] h-[auto]">
        {/* Heading with a checkbox on the left */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="dropoff"
            className="w-4 h-4"
            title="Drop-Off option"
          />
          <label htmlFor="dropoff" className="font-semibold text-lg text-gray-800">
            Drop-Off
          </label>
        </div>

        {/* Container for Location, Date, Time fields */}
        <div className="flex justify-between items-center space-x-4">
          {/* Fields Container */}
          <div className="flex space-x-4 w-full">
            {/* Location Field */}
            <div className="flex flex-col space-y-2 w-1/3 border-r border-gray-300">
              <label htmlFor="dropoff-location" className="text-black ml-2"><b>Location</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your city</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Date Field */}
            <div className="flex flex-col space-y-2 w-1/3 border-r border-gray-300">
              <label htmlFor="dropoff-date" className="text-black ml-2"><b>Date</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your date</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>

            {/* Time Field */}
            <div className="flex flex-col space-y-2 w-1/3">
              <label htmlFor="dropoff-time" className="text-black ml-2"><b>Time</b></label>
              <div className="p-2 flex justify-between items-center">
                <span className='text-[#90A3BF] text-[12px]'>Select your time</span>
                <FaChevronDown className="text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickDropSection;
