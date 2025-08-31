"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { LocateFixed, MapPin } from "lucide-react";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

const TIME_PREFERENCES = [
  { id: "morning", label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening", label: "Evening" },
  { id: "late_night", label: "Late Night" },
];

const FLEXIBILITY_OPTIONS = [
  { id: "high", label: "Very Flexible", description: "Can workout anytime" },
  {
    id: "medium",
    label: "Somewhat Flexible",
    description: "Prefer certain times but can adjust",
  },
  { id: "low", label: "Not Flexible", description: "Only specific times work" },
];

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

export function LocationScheduleStep({ data, updateData }: Props) {
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

  const handleTimeChange = (timeId: string) => {
    updateData({ preferred_times: [timeId] });
  };

  const handleDistanceChange = (distance: number[]) => {
    updateData({
      location_preferences: {
        ...data.location_preferences,
        max_travel_distance: distance[0],
      },
    });
  };

  const handleAreaChange = (area: string) => {
    updateData({
      location_preferences: {
        ...data.location_preferences,
        preferred_areas: [area],
      },
    });
  };

  const handleFlexibilityChange = (flexibility: string) => {
    updateData({ schedule_flexibility: flexibility });
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
          Where are you located and when do you prefer to work out?
        </h2>
        <p className="text-muted-foreground text-sm">
          Help us find fitness studios near you at your preferred times.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <Label htmlFor="address" className="text-sm font-medium">
            Primary Location
          </Label>
          <div className="flex gap-2 mt-2 items-center">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <Input
                id="address"
                placeholder="Enter your address or area"
                value={addressInput}
                onChange={(e) => setAddressInput(e.target.value)}
                onBlur={(e) => handleAddressChange(e.target.value)}
                className="pl-10 w-full"
              />
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={getCurrentLocation}
              title="Use current location"
            >
              <LocateFixed className="w-4 h-4" />
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

        <div>
          <Label className="text-sm font-medium mb-2 block">
            Preferred Area in Lagos (Optional)
          </Label>
          <Select
            value={data.location_preferences.preferred_areas?.[0] || ""}
            onValueChange={handleAreaChange}
          >
            <SelectTrigger className="w-full py-6">
              <SelectValue placeholder="Select your preferred area" />
            </SelectTrigger>
            <SelectContent>
              {LAGOS_AREAS.map((area) => (
                <SelectItem key={area} value={area} className="font-fredoka">
                  {area}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Schedule Preferences
        </h3>

        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Preferred Workout Time
            </Label>
            <Select
              value={data.preferred_times[0] || ""}
              onValueChange={handleTimeChange}
            >
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="Select your preferred workout time" />
              </SelectTrigger>
              <SelectContent>
                {TIME_PREFERENCES.map((time) => (
                  <SelectItem
                    key={time.id}
                    value={time.id}
                    className="font-fredoka"
                  >
                    {time.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">
              How flexible is your schedule?
            </Label>
            <Select
              value={data.schedule_flexibility}
              onValueChange={handleFlexibilityChange}
            >
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="Select your schedule flexibility" />
              </SelectTrigger>
              <SelectContent>
                {FLEXIBILITY_OPTIONS.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className="font-fredoka"
                  >
                    <div className="flex flex-col text-start">
                      <span className="font-medium">{option.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {option.description}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
