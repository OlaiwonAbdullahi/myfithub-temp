"use client";
import Loader from "@/app/ui/loader";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "./components/hero";
import Details from "./components/details";
import Classes from "./components/classes";

// Define the interface for studio details
interface StudioDetails {
  name: string;
  description: string;
  location: string;
  image: string;
  rating: number;
  reviewCount: number;
  type: string;
  whatToBring: string;
  email: string;
  phone: string;
  amenities: string[]; // Added amenities property
}

const Page: React.FC = () => {
  const [studioDetails, setStudioDetails] = useState<StudioDetails | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStudioDetails = async () => {
    try {
      const response = await axios.get<StudioDetails>(
        "http://localhost:3001/detail/"
      );
      setStudioDetails(response.data);
      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudioDetails();
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
      {studioDetails && (
        <div className="">
          <Hero
            name={studioDetails.name}
            description={studioDetails.description}
            location={studioDetails.location}
            image={studioDetails.image}
            rating={studioDetails.rating}
            reviewCount={studioDetails.reviewCount}
            type={studioDetails.type}
          />
          <div className="px-20 py-10 space-y-12">
            <Details
              whatToBring={studioDetails.whatToBring}
              location={studioDetails.location}
              email={studioDetails.email}
              image={studioDetails.image}
              phone={studioDetails.phone}
              amenities={studioDetails.amenities}
            />
            <Classes />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
