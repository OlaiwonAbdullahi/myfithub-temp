"use client";

import { useState } from "react";
import { Heart, Star, Wifi, Car, Users, Dumbbell, Clock } from "lucide-react";

interface FitnessFacility {
  id: number;
  name: string;
  type: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  period: string;
  image: string;
  amenities: string[];
  description: string;
  isGuestFavorite?: boolean;
  isSuperhost?: boolean;
  verified?: string[];
}

interface FitnessFacilityCardProps {
  facility: FitnessFacility;
  onFavorite?: (facilityId: number) => void;
}

const FitnessFacilityCard = ({
  facility,
  onFavorite,
}: FitnessFacilityCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorited(!isFavorited);
    onFavorite?.(facility.id);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="w-3 h-3" />;
      case "parking":
        return <Car className="w-3 h-3" />;
      case "equipment":
        return <Dumbbell className="w-3 h-3" />;
      case "24/7":
        return <Clock className="w-3 h-3" />;
      default:
        return <Users className="w-3 h-3" />;
    }
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-xl overflow-hidden mb-3">
        {/* Image */}
        <div className="aspect-[4/3] relative">
          <img
            src={facility.image || "/placeholder.svg"}
            alt={facility.name}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <Dumbbell className="w-8 h-8 text-gray-400" />
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {facility.isGuestFavorite && (
            <div className="bg-white rounded-full px-3 py-1 shadow-md">
              <span className="text-xs font-semibold text-gray-800">
                Guest favorite
              </span>
            </div>
          )}
          {facility.isSuperhost && (
            <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full px-3 py-1 shadow-md">
              <span className="text-xs font-semibold">Superhost</span>
            </div>
          )}
        </div>

        {/* Favorite button */}
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-200 ${
              isFavorited
                ? "fill-red-500 text-red-500"
                : "text-white hover:text-red-500"
            }`}
          />
        </button>

        {/* Image dots indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        {/* Title and Rating */}
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight flex-1 mr-2">
            {facility.type} in {facility.location}
          </h3>
          <div className="flex items-center space-x-1 flex-shrink-0">
            <Star className="w-3 h-3 fill-current text-black" />
            <span className="text-xs font-medium">
              {facility.rating} ({facility.reviews})
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-tight">
          {facility.description}
        </p>

        {/* Verified features */}
        {facility.verified && facility.verified.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {facility.verified.map((item, index) => (
              <span key={index} className="text-xs text-gray-600">
                {item}
              </span>
            ))}
          </div>
        )}

        {/* Price */}
        <div className="pt-1">
          <span className="font-semibold text-gray-900">${facility.price}</span>
          <span className="text-gray-600 text-sm"> {facility.period}</span>
        </div>
      </div>
    </div>
  );
};

export default FitnessFacilityCard;
