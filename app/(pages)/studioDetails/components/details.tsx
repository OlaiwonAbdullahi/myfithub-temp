import { MapPin, Sparkle, Phone, Mail, Package } from "lucide-react";
import React from "react";

interface DetailsProps {
  whatToBring: string;
  location: string;
  email: string;
  phone: string;
  amenities: string[];
  image: string;
}

const Details: React.FC<DetailsProps> = ({
  whatToBring,
  location,
  email,
  phone,
  amenities = [],
  image,
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Sparkle className="text-[#234E49]" size={24} />
            <h2 className="text-xl font-bold font-sora text-[#234E49]">
              Studio Overview
            </h2>
          </div>
          <div className="">
            <img src={image} alt="" className=" h-auto w-full rounded-md" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="text-[#234E49]" size={24} />

            <h2 className="text-xl font-bold font-sora text-[#234E49]">
              Location & Facilities
            </h2>
          </div>

          <div className="bg-gray-50 p-4 rounded-md space-y-2">
            <p className="text-gray-700 font-fredoka leading-relaxed">
              {location}
            </p>
            <div className="space-y-2 flex font-fredoka flex-row items-center gap-2.5">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span className="text-sm">{phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span className="text-sm">{email}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md font-fredoka">
            <h3 className="font-semibold text-gray-800 mb-2">Amenities</h3>
            <div className="flex flex-wrap gap-2 list-none">
              {amenities.map((amenity, index) => (
                <li
                  key={index}
                  className="text-[#234E49]  text-xs border bg-primary/20 backdrop-blur-2xl border-[#234E49]/50 px-2 py-0.5 rounded-full"
                >
                  {amenity}
                </li>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Package className="text-[#234E49]" size={24} />
            <h2 className="text-xl font-bold font-sora text-[#234E49]">
              What to Bring
            </h2>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-md">
            <p className="font-fredoka text-gray-700 leading-relaxed">
              {whatToBring}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
