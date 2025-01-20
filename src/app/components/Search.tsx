import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client'; // Sanity client
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

// Define the Car interface
interface Car {
  id: string;
  name: string;
  category: {
    name: string;
  };
  slug: string;
  image: {
    asset: {
      url: string;
    };
  };
}

const Search = () => {
  const [cars, setCars] = useState<Car[]>([]); // Explicitly type the state
  const [filteredCars, setFilteredCars] = useState<Car[]>([]); // Explicitly type the filtered state
  const router = useRouter();
  const { query } = router.query;

  useEffect(() => {
    const fetchCars = async () => {
      const carQuery = `*[_type == "car"]{id, name, category-> {name}, "slug": slug.current, image {asset->{url}}}`;
      const data: Car[] = await client.fetch(carQuery); // Type the fetched data as Car[]
      setCars(data);
    };
    fetchCars();
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = cars.filter((car) => car.name.toLowerCase().includes(query.toString().toLowerCase()));
      setFilteredCars(filtered);
    } else {
      setFilteredCars(cars);
    }
  }, [query, cars]);

  return (
    <div>
      <h1>Search Results</h1>
      {filteredCars.length > 0 ? (
        filteredCars.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
            <Image src={urlFor(car.image).url()} alt={car.name} width={100} height={100} />
            <Link href={`/cars/${car.slug}`}>
              <a>View Car</a>
            </Link>
          </div>
        ))
      ) : (
        <p>No cars found for the search query.</p>
      )}
    </div>
  );
};

export default Search;
