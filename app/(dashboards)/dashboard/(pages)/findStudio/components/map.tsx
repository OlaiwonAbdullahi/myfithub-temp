"use client";

import { useState } from "react";
import { Maximize2, Plus, Minus } from "lucide-react";

interface MapMarker {
  id: number;
  price: number;
  lat: number;
  lng: number;
  name: string;
}

interface FitnessMapProps {
  markers: MapMarker[];
  onMarkerClick?: (markerId: number) => void;
}

const FitnessMap = ({ markers, onMarkerClick }: FitnessMapProps) => {
  const [selectedMarker, setSelectedMarker] = useState<number | null>(null);

  const handleMarkerClick = (markerId: number) => {
    setSelectedMarker(markerId);
    onMarkerClick?.(markerId);
  };

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      {/* Map placeholder with markers */}
      <div className="relative w-full h-full bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
        {/* Simulated map background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="text-gray-300">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Price markers */}
        {markers.map((marker) => (
          <button
            key={marker.id}
            onClick={() => handleMarkerClick(marker.id)}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full text-sm font-semibold shadow-lg transition-all duration-200 hover:scale-110 ${
              selectedMarker === marker.id
                ? "bg-gray-900 text-white scale-110"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            style={{
              left: `${marker.lng}%`,
              top: `${marker.lat}%`,
            }}
          >
            ${marker.price}
          </button>
        ))}

        {/* Location labels */}
        <div className="absolute top-20 left-20 text-gray-600 font-medium text-sm">
          Downtown
        </div>
        <div className="absolute top-40 right-32 text-gray-600 font-medium text-sm">
          Midtown
        </div>
        <div className="absolute bottom-32 left-32 text-gray-600 font-medium text-sm">
          Westside
        </div>
        <div className="absolute bottom-20 right-20 text-gray-600 font-medium text-sm">
          Eastside
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <button className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
          <Maximize2 className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col space-y-1">
        <button className="p-2 bg-white rounded-t-lg shadow-md hover:bg-gray-50 transition-colors border-b border-gray-200">
          <Plus className="w-4 h-4 text-gray-700" />
        </button>
        <button className="p-2 bg-white rounded-b-lg shadow-md hover:bg-gray-50 transition-colors">
          <Minus className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      {/* Map attribution */}
      <div className="absolute bottom-2 left-2 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
        Map Data ©2024 MyFitHub
      </div>
    </div>
  );
};

export default FitnessMap;
