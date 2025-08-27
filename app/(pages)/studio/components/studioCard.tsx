import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import React from "react";

interface StudioCardProps {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  amenities?: string[];
}

const StudioCard: React.FC<StudioCardProps> = ({
  name,
  location,
  description,
  imageUrl,
  amenities = [],
}) => {
  return (
    <div className="w-full bg-white border border-[#234E49]/40 rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/fallback.jpg";
          }}
          className="w-full h-48 object-cover rounded-t-md"
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

        <p className="text-sm text-gray-600 font-fredoka leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-end justify-between pt-2 border-t border-gray-100">
          {amenities.length > 0 && (
            <div className="text-sm text-gray-600 font-fredoka mt-2">
              <ul className="flex flex-wrap gap-1.5 mt-1">
                {amenities.slice(0, 3).map((item, index) => (
                  <li
                    key={index}
                    className="text-[#234E49] text-xs border bg-primary/20 backdrop-blur-2xl border-[#234E49]/50 px-2 py-0.5 rounded-full"
                  >
                    {item}
                  </li>
                ))}

                {amenities.length > 3 && (
                  <li className="text-[#234E49] text-xs border bg-primary/10 border-[#234E49]/50 px-2 py-0.5 rounded-full">
                    +{amenities.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          )}

          <Button
            variant="outline"
            size="sm"
            className="border-[#234E49] text-[#234E49] font-fredoka hover:bg-primary hover:text-white transition-colors duration-200"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudioCard;
