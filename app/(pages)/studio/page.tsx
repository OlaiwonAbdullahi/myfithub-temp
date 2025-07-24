"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "@/app/ui/hero";
import Header from "./components/header";
import StudioCard from "./components/studioCard";
import Loader from "@/app/ui/loader";

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
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudios = async () => {
    try {
      const response = await axios.get<Studio[]>(
        "http://localhost:3001/studios"
      );
      setStudios(response.data);
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudios();
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
    <div>
      <Hero
        title="Discover Your Perfect Workout Spot"
        description="Explore top-rated fitness studios and wellness centers near you. Find classes, book sessions, and start your journey to a healthier you."
        more=""
      />
      <div className="px-6 md:px-20 py-10">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {studios.map((studio) => (
            <StudioCard
              key={studio.id || studio._id}
              name={studio.name}
              location={studio.location}
              description={studio.description}
              imageUrl={studio.image}
              rating={studio.rating}
              amenities={studio.amenities}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
