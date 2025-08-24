"use client";

import Loader from "@/app/ui/loader";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Calendar, Clock10, ClockFading } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Classes = () => {
  const [activeFilter, setActiveFilter] = useState("All Days");

  interface Studio {
    id: number;
    name: string;
    day: string | string[];
    time: string;
    instructor: string;
    duration: string;
    image: string;
  }

  const [studiosClasses, setStudiosClasses] = useState<Studio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const filterOptions = [
    "All Days",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const fetchStudiosClasses = async () => {
    try {
      const response = await axios.get<Studio[]>(
        "http://localhost:3001/classes"
      );
      setStudiosClasses(response.data);
      console.log("Fetched classes:", response.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.message || "Something went wrong");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudiosClasses();
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
    <div className="space-y-7">
      <h2 className="font-sora font-bold text-2xl text-[#234E49]">
        Classes & Schedule
      </h2>

      <div className="flex flex-row justify-between font-fredoka w-full bg-white">
        <div className=" w-full flex flex-wrap gap-4">
          {filterOptions.map((option) => (
            <Button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`p-2 rounded-md min-w-[100px] flex items-center justify-center transition-all duration-200 ${
                activeFilter === option
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-white border border-[#234E49] text-[#234E49] hover:bg-primary/90 hover:text-white"
              }`}
              variant={activeFilter === option ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {studiosClasses
          .filter((studio) => {
            if (activeFilter === "All Days") return true;

            const filter = activeFilter.toLowerCase();

            if (Array.isArray(studio.day)) {
              return studio.day.some((d) => d.toLowerCase().trim() === filter);
            } else if (typeof studio.day === "string") {
              return studio.day
                .toLowerCase()
                .split(",")
                .map((d) => d.trim())
                .includes(filter);
            }

            return false;
          })
          .map((studio) => (
            <Link key={studio.id} href={"/sessions/session-details"}>
              <div className=" bg-white rounded-lg shadow-md mb-4">
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={studio.image}
                  alt=""
                  className=" h-40 w-full rounded-t-md"
                />
                <div className=" p-4 space-y-1 ">
                  <h3 className="text-base font-sora text-[#234E49] font-semibold">
                    {studio.name}
                  </h3>
                  <h2 className=" text-neutral-700 font-fredoka text-xs">
                    {studio.instructor}
                  </h2>
                  <div className="text-sm text-gray-600 flex justify-between font-fredoka">
                    <span className="flex flex-row items-center gap-1">
                      <Calendar size={13} />
                      {Array.isArray(studio.day)
                        ? studio.day.join(", ")
                        : studio.day}
                    </span>
                    <span className="flex flex-row items-center gap-1">
                      <Clock10 size={13} />
                      {studio.time}
                    </span>
                    <span className="flex flex-row items-center gap-1">
                      <ClockFading size={13} />
                      {studio.duration} Min
                    </span>
                  </div>
                  <div className=" mt-3.5 flex justify-end ">
                    <Button className=" bg-primary text-white">Book Now</Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Classes;
