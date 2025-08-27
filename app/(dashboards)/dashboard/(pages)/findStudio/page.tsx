"use client";

import FitnessFacilityCard from "./components/studioResult";
import FitnessMap from "./components/map";
import { Heart } from "lucide-react";

export default function MyFitHubListings() {
  const facilities = [
    {
      id: 1,
      name: "Elite Fitness Center",
      type: "Gym",
      location: "Downtown",
      rating: 4.85,
      reviews: 33,
      price: 89,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=Modern+Gym",
      amenities: ["WiFi", "Parking", "Equipment", "24/7"],
      description: "Premium gym with state-of-the-art equipment",
      verified: ["Verified fast wifi"],
      isGuestFavorite: true,
    },
    {
      id: 2,
      name: "CrossFit Box",
      type: "CrossFit",
      location: "Midtown",
      rating: 4.93,
      reviews: 59,
      price: 56,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=CrossFit+Box",
      amenities: ["Equipment", "Parking", "Coaching"],
      description: "High-intensity functional fitness training",
      verified: ["Professional coaching"],
      isGuestFavorite: true,
    },
    {
      id: 3,
      name: "Yoga Studio",
      type: "Studio",
      location: "Westside",
      rating: 4.91,
      reviews: 23,
      price: 67,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=Yoga+Studio",
      amenities: ["WiFi", "Equipment", "Meditation"],
      description: "Peaceful yoga and meditation space",
      verified: ["Certified instructors"],
      isGuestFavorite: true,
    },
    {
      id: 4,
      name: "Boxing Gym",
      type: "Boxing",
      location: "Eastside",
      rating: 4.76,
      reviews: 41,
      price: 78,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=Boxing+Gym",
      amenities: ["Equipment", "Training", "Lockers"],
      description: "Professional boxing training facility",
      verified: ["Pro trainers available"],
      isGuestFavorite: true,
    },
    {
      id: 5,
      name: "Pilates Studio",
      type: "Pilates",
      location: "Uptown",
      rating: 4.88,
      reviews: 67,
      price: 92,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=Pilates+Studio",
      amenities: ["Equipment", "Small Groups", "WiFi"],
      description: "Boutique pilates with reformer machines",
      verified: ["Small class sizes"],
      isSuperhost: true,
    },
    {
      id: 6,
      name: "Swimming Pool",
      type: "Aquatic",
      location: "Southside",
      rating: 4.72,
      reviews: 28,
      price: 45,
      period: "monthly",
      image: "/placeholder.svg?height=240&width=320&text=Swimming+Pool",
      amenities: ["Pool", "Lockers", "Parking"],
      description: "Olympic-size swimming pool facility",
      verified: ["Lifeguard on duty"],
      isGuestFavorite: true,
    },
  ];

  const mapMarkers = [
    { id: 1, price: 89, lat: 25, lng: 30, name: "Elite Fitness Center" },
    { id: 2, price: 56, lat: 45, lng: 60, name: "CrossFit Box" },
    { id: 3, price: 67, lat: 70, lng: 25, name: "Yoga Studio" },
    { id: 4, price: 78, lat: 60, lng: 80, name: "Boxing Gym" },
    { id: 5, price: 92, lat: 20, lng: 70, name: "Pilates Studio" },
    { id: 6, price: 45, lat: 80, lng: 50, name: "Swimming Pool" },
    { id: 7, price: 134, lat: 35, lng: 45, name: "Premium Fitness" },
    { id: 8, price: 156, lat: 55, lng: 35, name: "Luxury Spa Gym" },
  ];

  const handleFavorite = (facilityId: number) => {
    console.log(`Toggled favorite for facility ${facilityId}`);
  };

  const handleMarkerClick = (markerId: number) => {
    console.log(`Clicked marker ${markerId}`);
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Header */}
      <div className="border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-lg font-semibold text-gray-900">
              Over 1,000 fitness facilities
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-pink-500 fill-current" />
            <span className="text-sm text-gray-700">
              Prices include all fees
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex h-screen">
        {/* Listings */}
        <div className="w-1/2 overflow-y-auto">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {facilities.map((facility) => (
                <FitnessFacilityCard
                  key={facility.id}
                  facility={facility}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Map - Always visible on the right */}
        <div className="w-1/2 h-full">
          <FitnessMap markers={mapMarkers} onMarkerClick={handleMarkerClick} />
        </div>
      </div>
    </div>
  );
}
