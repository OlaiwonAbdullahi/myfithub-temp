"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("");

  const filterOptions = ["All", "Yoga", "Pilates", "Pool", "Gym", "Spa"];

  return (
    <div className="flex flex-row justify-between border border-black/30 py-5 font-fredoka w-full rounded-md bg-white shadow-sm">
      <div className="px-3 w-1/2 flex justify-around gap-4">
        {filterOptions.map((option) => (
          <Button
            key={option}
            onClick={() => setActiveFilter(option)}
            className={`p-2 rounded-md w-1/6 flex items-center justify-center transition-all duration-200 ${
              activeFilter === option
                ? "bg-[#234E49] text-white hover:bg-[#234E49]/90"
                : "bg-white border border-[#234E49] text-[#234E49] hover:bg-[#234E49]/90 hover:text-white"
            }`}
            variant={activeFilter === option ? "default" : "outline"}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex flex-row items-center gap-2 w-1/4 justify-end px-3">
        <span className="text-neutral-600 text-sm font-medium">Sort By:</span>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-2/3 border-black/30">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lagos">Lagos</SelectItem>
            <SelectItem value="london">London</SelectItem>
            <SelectItem value="new-york">New York</SelectItem>
            <SelectItem value="dubai">Dubai</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Header;
