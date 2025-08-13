"use client";
import React, { useEffect, useState } from "react";
import { Fish, Flame, Ham, ScanSearch, Search, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Type definitions
interface NutritionData {
  icon: React.ElementType;
  label: string;
  value: string;
  unit: string;
  color: string;
  bgColor: string;
}

interface NigerianFood {
  label?: string;
  name?: string;
}

interface SearchQuery {
  fdc_id: number;
  name: string;
  brand: string | null;
  data_type: string;
  nutrition_per_100g: Record<string, number> | null;
}

interface ApiResponse {
  success: boolean;
  query: string;
  results: SearchQuery[];
  total_found: number;
  message: string;
}

const Page = () => {
  const nutritionData: NutritionData[] = [
    {
      icon: Flame,
      label: "Calories",
      value: "200",
      unit: "Kcal",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Fish,
      label: "Protein",
      value: "25",
      unit: "g",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Utensils,
      label: "Carbs",
      value: "30",
      unit: "g",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Ham,
      label: "Fat",
      value: "8",
      unit: "g",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  const [nigerianFoods, setNigerianFoods] = useState<NigerianFood[]>([]);
  const [openFindFood, setOpenFindFood] = useState(false);
  const [searchQueries, setSearchQueries] = useState<SearchQuery[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [portionSize, setPortionSize] = useState("");
  interface PortionGuide {
    unit: string;
  }

  const [portionGuide, setPortionGuide] = useState<PortionGuide[]>([]);
  const [portionUnit, setPortionUnit] = useState("");

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://myfithub-nutrition-api.onrender.com/nutrition/nigerian-foods"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response (Nigerian Foods):", result);

      if (
        result &&
        result.nigerian_foods &&
        Array.isArray(result.nigerian_foods)
      ) {
        setNigerianFoods(result.nigerian_foods);
      } else {
        console.warn("Unexpected API response structure:", result);
        setNigerianFoods([]);
      }
    } catch (error) {
      console.error("Error fetching Nigerian foods:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Failed to fetch Nigerian foods"
      );
    } finally {
      setLoading(false);
    }
  };
  const fetchPortionGuide = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://myfithub-nutrition-api.onrender.com/nutrition/portion-guide"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response (Portion Guide):", result);

      // Ensure result.supported_units is an array
      if (Array.isArray(result.supported_units)) {
        setPortionGuide(result.supported_units);
      } else {
        throw new Error(
          "API response does not contain a valid supported_units array"
        );
      }
    } catch (error) {
      console.error("Error fetching Portion Guide:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch Portion Guide"
      );
    } finally {
      setLoading(false);
    }
  };
  const fetchSearchQueries = async (query: string): Promise<void> => {
    if (!query.trim()) return;
    try {
      setSearchLoading(true);
      setSearchError(null);

      const response = await fetch(
        "https://myfithub-nutrition-api.onrender.com/nutrition/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            limit: 10,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result: ApiResponse = await response.json();
      console.log("API Response (Search):", result);

      if (result && Array.isArray(result.results)) {
        setSearchQueries(result.results);
        setApiMessage(result.message);
      } else {
        console.warn("Unexpected API response structure:", result);
        setSearchQueries([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchError(
        error instanceof Error
          ? error.message
          : "Failed to fetch search results"
      );
    } finally {
      setSearchLoading(false);
    }
  };

  const handleSearch = (): void => {
    fetchSearchQueries(searchInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      fetchSearchQueries(searchInput);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPortionGuide();
  }, []);

  return (
    <div className="">
      <div className="max-w-4xl py-12 px-4 mx-auto h-fit rounded-b-4xl border-b border-[#234E49]/30 shadow-md bg-gradient-to-br from-green-50 to-blue-50">
        <div className="text-center mb-8">
          <h2 className="md:text-4xl text-2xl font-bold text-[#234E49] mb-2 font-sora">
            Nutrition in Your Meal
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {nutritionData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="rounded-xl transition-shadow duration-300 p-6 mx-auto"
              >
                <div className="flex flex-row items-center">
                  <div className="pr-2">
                    <IconComponent className="text-[#234E49] md:size-8 size-6" />
                  </div>
                  <div className="text-start">
                    <p className="md:text-sm text-xs font-medium text-gray-500 uppercase font-fredoka tracking-wide">
                      {item.label}
                    </p>
                    <p className="md:text-2xl text-xl font-bold text-[#234E49] font-sora">
                      {item.value}
                      <span className="md:text-lg text-sm font-normal text-gray-500 ml-1 font-fredoka">
                        {item.unit}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <section className="max-w-4xl py-10 px-4 mx-auto font-fredoka">
        <div className="flex justify-between mb-3">
          <h2 className="text-lg font-semibold text-[#234E49] mb-3 font-sora">
            Quick Add
          </h2>
          <div
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 cursor-pointer"
            onClick={() => setOpenFindFood(!openFindFood)}
          >
            <ScanSearch />
            Find Food
          </div>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="text-gray-500">Loading Nigerian foods...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <div className="text-red-700">Error: {error}</div>
            <button
              onClick={fetchData}
              className="mt-2 text-red-600 underline hover:text-red-800"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && nigerianFoods.length > 0 && (
          <div className="flex gap-3 overflow-x-auto scrollbar-hide">
            {nigerianFoods.map((food, index) => (
              <button
                key={index}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-black px-4 py-2 flex items-center justify-center rounded-md transition-colors duration-200 whitespace-nowrap"
              >
                {typeof food === "string"
                  ? typeof food === "string"
                    ? food.charAt(0).toUpperCase() + food.slice(1)
                    : food
                  : food.label || food.name || "Unknown Food"}
              </button>
            ))}
          </div>
        )}

        {!loading && !error && nigerianFoods.length === 0 && (
          <div className="text-gray-500 text-center py-8">
            No Nigerian foods found
          </div>
        )}
      </section>
      {/*
      {openAddCustomFood && (
        <section className="max-w-4xl py-5 px-4 mx-auto space-y-5">
          <h2 className="text-lg font-semibold text-[#234E49] mb-3 font-sora">
            Add Custom Food
          </h2>
          <div className="flex items-center justify-center relative">
            <input
              type="text"
              placeholder="Search for food"
              maxLength={50}
              className="w-full p-2 border border-[#234E49]/30 rounded-md focus:outline-none font-fredoka"
            />
            <Button className="bg-[#234E49] absolute right-1 text-white px-4 py-1.5 font-sora rounded-md font-fredoka">
              <Plus size={30} />
            </Button>
          </div>
        </section>
      )}*/}

      <section className="max-w-4xl py-5 px-4 mx-auto space-y-5">
        {openFindFood && (
          <div>
            <h2 className="text-lg font-semibold text-[#234E49] mb-3 font-sora">
              Find Food
            </h2>
            <div className="flex items-center justify-center relative">
              <input
                type="text"
                placeholder="Search for food"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                maxLength={50}
                className="w-full p-2 border border-[#234E49]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#234E49] font-fredoka"
              />
              <button
                className="bg-[#234E49] hover:bg-[#234E49]/80 absolute right-1 text-white px-4 py-1.5 rounded-md transition-colors"
                onClick={handleSearch}
                disabled={searchLoading}
              >
                <Search size={20} />
              </button>
            </div>

            <div className="mt-4">
              {searchLoading && (
                <div className="flex items-center justify-center py-4">
                  <div className="text-gray-500">Searching...</div>
                </div>
              )}

              {searchError && (
                <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
                  <div className="text-red-700 text-sm">
                    Search error: {searchError}
                  </div>
                  <button
                    onClick={() => fetchSearchQueries(searchInput || "rice")}
                    className="mt-2 text-red-600 underline hover:text-red-800 text-sm"
                  >
                    Retry Search
                  </button>
                </div>
              )}

              {!searchLoading && searchQueries.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-600">
                    Search Results:
                  </h3>
                  <div className="flex gap-2  flex-col border border-[#234E49]/30 pb-2 rounded-md bg-white shadow-md">
                    <p className=" p-2.5">{apiMessage}</p>
                    {searchQueries
                      .filter((query) => query.name)
                      .map((query, index) => (
                        <div key={index} className="px-3 py-2">
                          <button
                            key={index}
                            className="bg-gray-100 w-full text-start cursor-pointer hover:bg-gray-200 text-gray-800 px-3 py-2 flex items-center justify-start rounded-md transition-colors duration-200 whitespace-nowrap text-sm"
                          >
                            {query.name} {query.brand ? `(${query.brand})` : ""}
                            {query.nutrition_per_100g?.calories && (
                              <span className="ml-2 text-xs bg-blue-200 px-1 rounded">
                                {query.nutrition_per_100g.calories} cal
                              </span>
                            )}
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {!searchError && searchQueries.length === 0 && searchInput && (
                <div className="text-gray-500 text-center py-4 text-sm">
                  No results found for &quot;{searchInput}&quot;
                </div>
              )}
            </div>
          </div>
        )}
        <div className="py-3">
          <h2 className="text-lg font-semibold text-[#234E49] mb-2 font-sora">
            Portion Size
          </h2>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Enter portion size"
              value={portionSize}
              onChange={(e) => setPortionSize(e.target.value)}
              className="flex-1 p-2 py-3 border border-[#234E49]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#234E49] font-fredoka"
            />
            <Select
              value={portionUnit}
              onValueChange={(value: string) => setPortionUnit(value)}
            >
              <SelectTrigger className="w-32 border border-[#234E49]/30 px-3 font-fredoka rounded-md py-1.5 flex items-center justify-between">
                <SelectValue placeholder="Select Unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {portionGuide.map((item, index) => (
                    <SelectItem
                      key={`${item.unit}-${index}`}
                      value={item.unit}
                      className="font-fredoka"
                    >
                      {item.unit}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>{" "}
          </div>
        </div>

        <div>
          <Button className="w-full bg-[#234E49] hover:bg-[#234E49]/80 text-white px-4 py-1.5 font-sora rounded-md font-fredoka">
            Check Nutrition
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Page;
