"use client";
import React, { useEffect, useState } from "react";
import {
  Fish,
  Flame,
  Ham,
  ScanSearch,
  Search,
  Utensils,
  X,
  AlertCircle,
} from "lucide-react";
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

interface NutritionResult {
  calories?: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  [key: string]: number | undefined;
}

const Page = () => {
  const [nutritionResult, setNutritionResult] = useState<NutritionResult>({
    calories: 0,
    protein: 0,
    carbohydrates: 0,
    fat: 0,
  });

  const [nigerianFoods, setNigerianFoods] = useState<NigerianFood[]>([]);
  const [openFindFood, setOpenFindFood] = useState(false);
  const [searchQueries, setSearchQueries] = useState<SearchQuery[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const [nutritionLoading, setNutritionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [nutritionError, setNutritionError] = useState<string | null>(null);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [portionSize, setPortionSize] = useState("");
  const [selectedFood, setSelectedFood] = useState<SearchQuery | null>(null);
  const [portionUnit, setPortionUnit] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  const nutritionData: NutritionData[] = [
    {
      icon: Flame,
      label: "Calories",
      value: nutritionResult.calories?.toFixed(0) || "0",

      unit: "Kcal",
      color: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Fish,
      label: "Protein",
      value: nutritionResult.protein?.toFixed(1) || "0",
      unit: "g",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Utensils,
      label: "Carbs",
      value: nutritionResult.carbohydrates?.toFixed(1) || "0",
      unit: "g",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Ham,
      label: "Fat",
      value: nutritionResult.fat?.toFixed(1) || "0",
      unit: "g",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
  ];

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://myfithub-nutrition-api.onrender.com/nutrition/nigerian-foods"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch Nigerian foods (${response.status})`);
      }

      const result = await response.json();
      console.log("API Response (Nigerian Foods):", result);

      if (result?.nigerian_foods && Array.isArray(result.nigerian_foods)) {
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
            query: query.trim(),
            limit: 10,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Search failed (${response.status})`);
      }

      const result: ApiResponse = await response.json();
      console.log("API Response (Search):", result);

      if (result?.results && Array.isArray(result.results)) {
        setSearchQueries(result.results);
        setApiMessage(result.message);
      } else {
        console.warn("Unexpected search response:", result);
        setSearchQueries([]);
        setApiMessage("No results found");
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
    if (searchInput.trim()) {
      fetchSearchQueries(searchInput.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleCheckNutrition = async () => {
    setNutritionError(null);

    if (!selectedFood) {
      setNutritionError("Please select a food item first.");
      return;
    }

    if (!portionSize || parseFloat(portionSize) <= 0) {
      setNutritionError("Please enter a valid portion size.");
      return;
    }

    if (!portionUnit) {
      setNutritionError("Please select a unit.");
      return;
    }

    try {
      setNutritionLoading(true);

      const response = await fetch(
        "https://myfithub-nutrition-api.onrender.com/nutrition/quick-log",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: selectedFood.fdc_id,
            quantity: parseFloat(portionSize),
            unit: portionUnit,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Nutrition calculation failed (${response.status})`);
      }

      const result = await response.json();
      console.log(
        "Nutrition calculation result:",
        result.search_result.nutrition_per_100g
      );

      if (result.search_result?.nutrition_per_100g) {
        setNutritionResult({
          calories: result.search_result.nutrition_per_100g.calories || 0,
          protein: result.search_result.nutrition_per_100g.protein || 0,
          carbohydrates: result.search_result.nutrition_per_100g.carbs || 0,
          fat: result.search_result.nutrition_per_100g.fat || 0,
        });
        setHasCalculated(true);
      }
    } catch (error) {
      console.error("Error calculating nutrition:", error);
      setNutritionError(
        error instanceof Error ? error.message : "Failed to calculate nutrition"
      );
    } finally {
      setNutritionLoading(false);
    }
  };

  const handleQuickAdd = (food: NigerianFood) => {
    const foodName =
      typeof food === "string"
        ? food
        : food.label || food.name || "Unknown Food";
    setSearchInput(foodName);
    setOpenFindFood(true);
    fetchSearchQueries(foodName);
  };

  const clearSelection = () => {
    setSelectedFood(null);
    setPortionSize("");
    setPortionUnit("");
    setNutritionError(null);
  };

  const resetNutrition = () => {
    setNutritionResult({
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
    });
    setHasCalculated(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center flex-col">
      <div className="max-w-4xl py-12 px-4 mx-auto h-fit rounded-b-4xl border-b border-[#234E49]/30 shadow-md bg-[#F5FAF7] sticky top-0 z-50 ">
        <div className="text-center mb-8">
          <h2 className="md:text-4xl text-2xl capitalize font-bold text-[#234E49] mb-2 font-sora">
            {hasCalculated && selectedFood
              ? `Nutrients in  ${selectedFood.name}`
              : "Nutrients in Your Meal"}
          </h2>
          {hasCalculated && selectedFood && (
            <p className="text-sm text-gray-600 font-fredoka ">
              {portionSize} {portionUnit} portion
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {nutritionData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="rounded-xl transition-all duration-300 p-6 mx-auto bg-white/20 backdrop-blur-sm border border-white/10 shadow-sm hover:shadow-md"
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

        {hasCalculated && (
          <div className="text-center mt-6">
            <Button
              onClick={resetNutrition}
              variant="outline"
              className="text-[#234E49] cursor-pointer border-[#234E49]/30 hover:bg-primary/5 font-fredoka"
            >
              Calculate New Food
            </Button>
          </div>
        )}
      </div>

      <section className="max-w-4xl py-10 px-4 mx-auto font-fredoka">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-[#234E49] mb-3 font-sora">
            Quick Add
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="flex cursor-pointer items-center gap-2 text-sm font-medium text-neutral-600 border-neutral-300 hover:bg-neutral-50"
            onClick={() => setOpenFindFood(!openFindFood)}
          >
            {openFindFood ? <X size={16} /> : <ScanSearch size={16} />}
            {openFindFood ? "Close" : "Find Food"}
          </Button>
        </div>

        {loading && (
          <div className="flex items-center justify-center py-8">
            <div className="text-gray-500">Loading Nigerian foods...</div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle size={16} />
              Error: {error}
            </div>
            <button
              onClick={() => {
                fetchData();
              }}
              className="mt-2 text-red-600 underline hover:text-red-800"
            >
              Retry
            </button>
          </div>
        )}

        {!loading && nigerianFoods.length > 0 && (
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {nigerianFoods.map((food, index) => (
              <button
                key={index}
                onClick={() => handleQuickAdd(food)}
                className="bg-white border border-gray-200 hover:border-[#234E49]/30 hover:bg-primary/5 text-gray-700 px-4 py-2 flex items-center justify-center rounded-md transition-all duration-200 whitespace-nowrap shadow-sm hover:shadow-md"
              >
                {typeof food === "string"
                  ? (food as string).charAt(0).toUpperCase() +
                    (food as string).slice(1)
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

      {openFindFood && (
        <section className=" w-4/6 py-5 px-4 mx-auto space-y-5">
          <div>
            <h2 className="text-lg font-semibold text-[#234E49] mb-3 font-sora">
              Find Food
            </h2>
            <div className="flex items-center justify-center relative">
              <input
                type="text"
                placeholder="Search for food (e.g., rice, chicken, beans)"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyPress={handleKeyPress}
                maxLength={50}
                className="w-full p-3 pr-12 border border-[#234E49]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#234E49] focus:border-transparent font-fredoka"
              />
              <button
                className="bg-primary hover:bg-primary/80 absolute right-1 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
                onClick={handleSearch}
                disabled={searchLoading || !searchInput.trim()}
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
                  <div className="flex items-center gap-2 text-red-700 text-sm">
                    <AlertCircle size={16} />
                    Search error: {searchError}
                  </div>
                  <button
                    onClick={() => fetchSearchQueries(searchInput)}
                    className="mt-2 text-red-600 underline hover:text-red-800 text-sm"
                  >
                    Retry Search
                  </button>
                </div>
              )}

              {!searchLoading && searchQueries.length > 0 && (
                <div className="space-y-2 font-fredoka">
                  <h3 className="text-sm font-medium text-gray-600">
                    Search Results:
                  </h3>
                  <div className="border border-[#234E49]/30 rounded-md bg-white shadow-md">
                    {apiMessage && (
                      <p className="p-3 text-sm text-gray-600 border-b border-gray-100">
                        {apiMessage}
                      </p>
                    )}
                    <div className="max-h-60 overflow-y-auto">
                      {searchQueries
                        .filter((query) => query.name)
                        .map((query, index) => {
                          const isSelected =
                            selectedFood?.fdc_id === query.fdc_id;
                          return (
                            <div
                              key={index}
                              className="px-3 py-2 border-b border-gray-100 last:border-b-0"
                            >
                              <button
                                onClick={() => {
                                  setSelectedFood(query);
                                  setSearchQueries([]);
                                }}
                                className={`w-full text-left px-3 py-3 rounded-md transition-all duration-200 text-sm ${
                                  isSelected
                                    ? "bg-primary text-white shadow-md"
                                    : "bg-gray-50 hover:bg-gray-100 text-gray-800 hover:shadow-sm"
                                }`}
                              >
                                <div>
                                  {query.brand && (
                                    <div
                                      className={`text-xs ${
                                        isSelected
                                          ? "text-green-200"
                                          : "text-gray-500"
                                      } mb-1`}
                                    >
                                      Brand: {query.brand}
                                    </div>
                                  )}
                                  <div className="font-medium">
                                    {query.name}
                                  </div>
                                </div>
                              </button>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {selectedFood && (
        <section className="w-4/6 py-5 px-4 mx-auto space-y-5">
          <div className="bg-white rounded-lg p-4 border border-[#234E49]/20 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[#234E49] font-sora">
                  Selected Food
                </h3>
                <p className="text-gray-600 font-fredoka">
                  {selectedFood.name}
                </p>
                {selectedFood.brand && (
                  <p className="text-sm text-gray-500 font-fredoka">
                    Brand: {selectedFood.brand}
                  </p>
                )}
              </div>
              <button
                onClick={clearSelection}
                className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div>
              <h4 className="text-md font-semibold text-[#234E49] mb-3 font-sora">
                Portion Size
              </h4>
              <div className="flex items-center gap-3">
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={portionSize}
                  onChange={(e) => setPortionSize(e.target.value)}
                  min="0"
                  step="0.1"
                  className="flex-1 p-3 border border-[#234E49]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#234E49] font-fredoka"
                />
                <Select
                  value={portionUnit}
                  onValueChange={(value: string) => setPortionUnit(value)}
                >
                  <SelectTrigger className="w-32 border border-[#234E49]/30 px-3 font-fredoka rounded-md py-3">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="grams" className="font-fredoka">
                        Grams
                      </SelectItem>
                      <SelectItem value="kg" className="font-fredoka">
                        kg
                      </SelectItem>
                      <SelectItem value="oz" className="font-fredoka">
                        oz
                      </SelectItem>
                      <SelectItem value="lb" className="font-fredoka">
                        lb
                      </SelectItem>
                      <SelectItem value="cup" className="font-fredoka">
                        cup
                      </SelectItem>
                      <SelectItem value="tablespoon" className="font-fredoka">
                        tablespoon
                      </SelectItem>
                      <SelectItem value="piece" className="font-fredoka">
                        piece
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {nutritionError && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-3">
                <div className="flex items-center gap-2 text-red-700 text-sm">
                  <AlertCircle size={16} />
                  {nutritionError}
                </div>
              </div>
            )}

            <div className="mt-6">
              <Button
                className="w-full bg-primary cursor-pointer hover:bg-primary/80 text-white px-4 py-3 font-sora rounded-md font-fredoka disabled:opacity-50"
                onClick={handleCheckNutrition}
                disabled={
                  nutritionLoading ||
                  !selectedFood ||
                  !portionSize ||
                  !portionUnit
                }
              >
                {nutritionLoading ? "Calculating..." : "Check Nutrition"}
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
