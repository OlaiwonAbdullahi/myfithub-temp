"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SessionFilter } from "@/app/types/session";

interface SessionFiltersProps {
  filters: SessionFilter;
  onFiltersChange: (filters: SessionFilter) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const sessionTypes = [
  { value: "yoga", label: "Yoga" },
  { value: "hiit", label: "HIIT" },
  { value: "strength", label: "Strength" },
  { value: "cardio", label: "Cardio" },
  { value: "pilates", label: "Pilates" },
  { value: "dance", label: "Dance" },
];

const difficulties = ["beginner", "intermediate", "advanced"];
const timeSlots = ["morning", "afternoon", "evening"];

export function SessionFilters({
  filters,
  onFiltersChange,
  searchQuery,
  onSearchChange,
}: SessionFiltersProps) {
  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const clearFilters = () => {
    onFiltersChange({});
    onSearchChange("");
  };

  return (
    <div className="space-y-4 flex justify-between md:flex-row-reverse flex-col font-fredoka">
      {/* Search bar */}
      <div className="relative md:w-1/3 w-full flex items-center">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search sessions, instructors, or types..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#234E49] focus:ring-[#234E49]"
        />
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-3 md:w-2/3 w-full justify-center md:justify-start">
        {/* Session types */}
        <div className="flex flex-wrap gap-2">
          {sessionTypes.map((type) => (
            <Button
              key={type.value}
              variant={filters.type === type.value ? "default" : "outline"}
              size="sm"
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  type: filters.type === type.value ? undefined : type.value,
                })
              }
              className={`rounded-md transition-all duration-300 ${
                filters.type === type.value
                  ? "bg-primary hover:bg-[#1a3a36] text-white"
                  : "border-gray-200 hover:border-[#234E49] hover:text-[#234E49]"
              }`}
            >
              {type.label}
            </Button>
          ))}
        </div>

        {/* Difficulty */}
        <div className="flex gap-2">
          {difficulties.map((difficulty) => (
            <Button
              key={difficulty}
              variant={
                filters.difficulty === difficulty ? "default" : "outline"
              }
              size="sm"
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  difficulty:
                    filters.difficulty === difficulty ? undefined : difficulty,
                })
              }
              className={`rounded-md capitalize transition-all duration-300 ${
                filters.difficulty === difficulty
                  ? "bg-primary hover:bg-[#1a3a36] text-white"
                  : "border-gray-200 hover:border-[#234E49] hover:text-[#234E49]"
              }`}
            >
              {difficulty}
            </Button>
          ))}
        </div>

        {/* Time slots */}
        <div className="flex gap-2">
          {timeSlots.map((slot) => (
            <Button
              key={slot}
              variant={filters.timeSlot === slot ? "default" : "outline"}
              size="sm"
              onClick={() =>
                onFiltersChange({
                  ...filters,
                  timeSlot: filters.timeSlot === slot ? undefined : slot,
                })
              }
              className={`rounded-md: capitalize transition-all duration-300 ${
                filters.timeSlot === slot
                  ? "bg-primary hover:bg-[#1a3a36] text-white"
                  : "border-gray-200 hover:border-[#234E49] hover:text-[#234E49]"
              }`}
            >
              {slot}
            </Button>
          ))}
        </div>

        {/* Clear filters */}
        {(activeFiltersCount > 0 || searchQuery) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-gray-500 hover:text-gray-700 rounded-full"
          >
            Clear all ({activeFiltersCount + (searchQuery ? 1 : 0)})
          </Button>
        )}
      </div>
    </div>
  );
}
