"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

const LAGOS_AREAS = [
  "Victoria Island",
  "Lekki Phase 1",
  "Lekki Phase 2",
  "Ikoyi",
  "Ikeja",
  "Surulere",
  "Yaba",
  "Gbagada",
  "Ajah",
  "Magodo",
];

export function LocationPreferencesStep({ data, updateData }: Props) {
  const [addressInput, setAddressInput] = useState(
    data.location_preferences.primary_location?.address || ""
  );

  const handleAddressChange = (address: string) => {
    setAddressInput(address);
    // In a real app, you'd integrate with Google Places API here
    // For now, we'll simulate setting coordinates for Lagos
    if (address.trim()) {
      updateData({
        location_preferences: {
          ...data.location_preferences,
          primary_location: {
            lat: 6.4281,
            lng: 3.4219,
            address: address,
          },
        },
      });
    }
  };

  const handleDistanceChange = (distance: number[]) => {
    updateData({
      location_preferences: {
        ...data.location_preferences,
        max_travel_distance: distance[0],
      },
    });
  };

  const handleAreaChange = (areaId: string, checked: boolean) => {
    const updatedAreas = checked
      ? [...data.location_preferences.preferred_areas, areaId]
      : data.location_preferences.preferred_areas.filter((id) => id !== areaId);

    updateData({
      location_preferences: {
        ...data.location_preferences,
        preferred_areas: updatedAreas,
      },
    });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          updateData({
            location_preferences: {
              ...data.location_preferences,
              primary_location: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                address: "Current Location",
              },
            },
          });
          setAddressInput("Current Location");
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Where are you located and how far are you willing to travel?
        </h2>
        <p className="text-muted-foreground text-sm">
          Help us find fitness studios near you.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            Primary Location
          </Label>
          <div className="flex gap-2 mt-2">
            <Input
              id="address"
              placeholder="Enter your address or area"
              value={addressInput}
              onChange={(e) => setAddressInput(e.target.value)}
              onBlur={(e) => handleAddressChange(e.target.value)}
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={getCurrentLocation}
              title="Use current location"
            >
              <MapPin className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">
            Maximum Travel Distance:{" "}
            {data.location_preferences.max_travel_distance}km
          </Label>
          <div className="mt-2">
            <Slider
              value={[data.location_preferences.max_travel_distance]}
              onValueChange={handleDistanceChange}
              max={25}
              min={1}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>1km</span>
              <span>25km</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium mb-4 block">
          Preferred Areas in Lagos (Optional)
        </Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {LAGOS_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center space-x-2 p-2 rounded border hover:bg-accent/50 transition-colors"
            >
              <Checkbox
                id={area}
                checked={data.location_preferences.preferred_areas.includes(
                  area
                )}
                onCheckedChange={(checked) =>
                  handleAreaChange(area, checked as boolean)
                }
              />
              <label htmlFor={area} className="text-sm cursor-pointer flex-1">
                {area}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
