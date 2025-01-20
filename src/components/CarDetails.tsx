import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Hero from "@/components/Hero"; // Import Hero component
import PickUpDropOff from "@/components/PickUpDropOff";

interface simplifiedCar {
  id: string;
  name: string;
  type: string;
  image: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  slug: string;
}

async function getData() {
  const query = `*[_type == "car"]{
  id,
  name,
  type,
  image{
    asset->{url}
  },
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  "slug": slug.current
}`;
  
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    // Log the error and return an empty array if the fetch fails
    console.error("Error fetching car data:", error);
    return [];
  }
}

export default async function Home() {
  let data: simplifiedCar[] = [];
  
  // Fetch data and handle errors
  try {
    data = await getData();
  } catch (error) {
    console.error("Failed to load car data:", error);
    // Optionally set a state or variable to show a user-friendly error message
  }

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      
      {/* Replace Sections with Hero Component */}
      <Hero />
      <PickUpDropOff />

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {data.length > 0 ? (
            data.map((product) => (
              <div
                key={product.id}
                className="w-full max-w-[304px] mx-auto h-[360px] flex flex-col justify-between hover:scale-105 transition-all duration-300"
              >
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="w-full flex items-center justify-between">
                      {product.name}{" "}
                      <Image src={"/heart.png"} alt="Heart" width={20} height={20} />
                    </CardTitle>
                    <CardDescription>{product.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={220}
                      height={68}
                      className="transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="flex items-center justify-between gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/gas-station.png"}
                          alt="Gas Station"
                          width={26}
                          height={24}
                        />
                        <h1>{product.fuelCapacity}</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/Caricon.png"}
                          alt="Car Icon"
                          width={26}
                          height={24}
                        />
                        <h1>{product.transmission}</h1>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/profile-2user.png"}
                          alt="Seating Capacity"
                          width={26}
                          height={24}
                        />
                        <h1>{product.seatingCapacity}</h1>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="w-full flex items-center justify-between">
                    <p>
                      {product.pricePerDay}/
                      <span className="text-gray-500">day</span>
                    </p>
                    <Link href={`/categories/${product.slug}`}>
                      <button className="bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#1e50c2] transition-all">
                        Rent Now
                      </button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))
          ) : (
            <div className="w-full text-center text-red-500">
              <h2>Oops! Something went wrong while fetching car data. Please try again later.</h2>
            </div>
          )}
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5 hover:bg-[#1e50c2] transition-all">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
