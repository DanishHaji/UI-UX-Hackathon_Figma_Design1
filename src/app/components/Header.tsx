"use client";
import React, { useEffect, useState } from "react";
import { FaHeart, FaBell, FaSearch, FaCog } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";

interface simplifiedCar {
  _id: string;
  name: string;
  type: string;
  slug: {
    current: string;
  };
  image: { asset: { url: string } };
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
}

async function getData() {
  const query = `*[_type == "car"]{
    _id,
    name,
    type,
    slug,
    image{
      asset->{url}
    },
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay
  }`;
  const data = await client.fetch(query);
  return data;
}

const Header = () => {
  const [data, setData] = useState<simplifiedCar[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<simplifiedCar[]>([]);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
      setFilteredResults(fetchedData); // Default results
    };

    fetchData();
  }, []);

  // Filter results when the search query changes
  useEffect(() => {
    const results = data.filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(results);
  }, [searchQuery, data]);

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md flex flex-wrap items-center justify-between">
      {/* Logo and Search Bar Container */}
      <div className="flex flex-row items-center justify-between w-full sm:w-auto space-x-4 lg:space-x-20">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl md:text-2xl font-sans font-bold text-[32px] text-blue-600">
            MORENT
          </div>
        </Link>

        {/* Search Bar */}
        <div className="relative w-full sm:w-[492px] h-[44px] mt-2 sm:mt-0">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search something here"
            className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FaSearch />
          </div>
          <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            <VscSettings />
          </div>

          {/* Search Results Dropdown */}
          {searchQuery && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-10">
              {filteredResults.length > 0 ? (
                filteredResults.map((car) => (
                  <Link key={car._id} href={`/car/${car.slug.current}`}>
                    <div className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-4">
                      <Image
                        src={car.image.asset.url}
                        alt={car.name}
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <span>{car.name}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Icons Container */}
      <div className="flex flex-row items-center space-x-4 mt-2 sm:mt-0">
        <Link href="/categories">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaHeart className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>
        <Link href="/payments">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaBell className="text-lg md:text-xl text-gray-600 cursor-pointer" />
            <span className="absolute top-1 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
        </Link>
        <Link href="/details">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center">
            <FaCog className="text-lg md:text-xl text-gray-600 cursor-pointer" />
          </div>
        </Link>

        {/* Profile Picture */}
        <Link href="/admin">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
            <Image src="/profile.png" alt="Profile" width={40} height={40} />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
