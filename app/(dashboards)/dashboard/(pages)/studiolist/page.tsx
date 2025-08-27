"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/app/ui/loader";
import { SparklesIcon } from "lucide-react";
import PopularStudiosCard from "./components/popularStudio";
import AllStudiosCard from "./components/allstudio";

interface Studio {
  id?: string;
  _id?: string;
  name: string;
  location: string;
  description: string;
  image: string;
  rating: number;
  amenities: string[];
  priceRange: number;
}

const Page: React.FC = () => {
  const [popularstudios, setPopularStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPopularStudios = async () => {
    try {
      const response = await axios.get<Studio[]>(
        "http://localhost:3001/popular"
      );
      setPopularStudios(response.data);
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularStudios();
  }, []);

  if (loading)
    return (
      <div className="p-10 text-center">
        <Loader />
      </div>
    );
  if (error)
    return <p className="p-10 text-red-600 text-center">Error: {error}</p>;

  return (
    <div className=" p-6 px-6 md:px-13 py-10">
      <div className="space-y-16">
        <div className="">
          <div className=" flex items-center justify-between">
            <h2 className=" text-xl font-sora font-bold text-[#234E49]">
              <SparklesIcon className="inline-block w-6 h-6 mr-2 text-amber-500" />
              Recommended Studios{" "}
            </h2>
            <span className=" font-fredoka">View All</span>
          </div>
          <div className="w-full overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="flex gap-6 px-4 py-6 scroll-smooth scrollbar-hide">
              {popularstudios.map((studio) => (
                <PopularStudiosCard
                  key={studio.id || studio._id}
                  name={studio.name}
                  location={studio.location}
                  imageUrl={studio.image}
                  amenities={studio.amenities}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className=" flex items-center justify-between">
            <h2 className=" text-2xl font-sora font-bold text-[#234E49]">
              All Studios{" "}
            </h2>
            <span className=" font-fredoka">View All</span>
          </div>
          <div className="w-full ">
            <div className="grid grid-cols-4  gap-6 px-4 py-6 ">
              {popularstudios.map((studio) => (
                <AllStudiosCard
                  key={studio.id || studio._id}
                  name={studio.name}
                  location={studio.location}
                  imageUrl={studio.image}
                  amenities={studio.amenities}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
