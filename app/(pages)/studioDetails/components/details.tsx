import { MapPin, Sparkle, Volleyball } from "lucide-react";
import React from "react";

// Define the props interface
interface DetailsProps {
  whatToBring: string;
}

const Details: React.FC<DetailsProps> = ({ whatToBring }) => {
  return (
    <div className="flex justify-between ">
      {/* Studio Overview */}
      <div className="w-full md:w-1/3">
        <div className="flex gap-1 items-center">
          <Sparkle color="#234E49" size={30} />
          <h2 className="text-2xl font-bold font-sora text-[#234E49]">
            Studio Overview
          </h2>
        </div>
      </div>

      {/* Location & Facilities */}
      <div className="w-full md:w-1/3">
        <div className="flex gap-1 items-center">
          <MapPin color="#234E49" size={30} />
          <h2 className="text-2xl font-bold font-sora text-[#234E49]">
            Location & Facilities
          </h2>
        </div>
      </div>

      {/* What to Bring */}
      <div className="w-full md:w-1/3">
        <div className="flex gap-1 items-center">
          <Volleyball color="#234E49" size={30} />
          <h2 className="text-2xl font-bold font-sora text-[#234E49]">
            What to Bring
          </h2>
        </div>
        <p className="font-fredoka text-sm p-2 w-11/12">{whatToBring}</p>
      </div>
    </div>
  );
};

export default Details;
