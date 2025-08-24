import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AllStudiosCardProps {
  name: string;
  location: string;
  imageUrl: string;
  amenities?: string[];
}

const AllStudiosCard: React.FC<AllStudiosCardProps> = ({
  name,
  location,
  imageUrl,
  amenities = [],
}) => {
  return (
    <Link href={"/studioDetails"}>
      <div className="w-full h-72 bg-white border border-[#234E49]/40 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="relative">
          <img
            src={imageUrl}
            alt={name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/fallback.jpg";
            }}
            className="w-full h-30 object-cover rounded-t-md"
          />
        </div>

        <div className="p-4 flex flex-col gap-3">
          <div className="space-y-2">
            <h3 className="text-lg font-sora text-[#234E49] font-bold leading-tight">
              {name}
            </h3>
            <div className="flex items-center gap-1 text-sm text-gray-600 font-fredoka">
              <MapPin size={16} className="text-[#234E49] flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>
          </div>

          <div className="flex items-end justify-between pt-2 border-t border-gray-100">
            {amenities.length > 0 && (
              <div className="text-sm text-gray-600 font-fredoka mt-2">
                <ul className="flex flex-wrap gap-1.5 mt-1">
                  {amenities.slice(0, 2).map((item, index) => (
                    <li
                      key={index}
                      className="text-[#234E49] text-[10px] border bg-primary/20 backdrop-blur-2xl border-[#234E49]/50 px-2 py-0.5 rounded-full"
                    >
                      {item}
                    </li>
                  ))}

                  {amenities.length > 3 && (
                    <li className="text-[#234E49] text-[10px] border bg-primary/10 border-[#234E49]/50 px-2 py-0.5 rounded-full">
                      +{amenities.length - 3}
                    </li>
                  )}
                </ul>
              </div>
            )}

            <Button
              variant="default"
              size="sm"
              className="bg-primary cursor-pointer text-white font-fredoka hover:bg-primary/90 hover:text-white transition-colors duration-200"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllStudiosCard;
