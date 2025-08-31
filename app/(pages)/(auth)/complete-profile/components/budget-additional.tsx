"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

const BUDGET_TIERS = [
  {
    id: "basic",
    label: "Basic",
    description: "₦2,000 - ₦5,000 per class",
    range: "Affordable options with quality instruction",
  },
  {
    id: "standard",
    label: "Standard",
    description: "₦5,000 - ₦10,000 per class",
    range: "Mid-range studios with good facilities",
  },
  {
    id: "premium",
    label: "Premium",
    description: "₦10,000+ per class",
    range: "High-end studios with luxury amenities",
  },
];

const AMENITIES = [
  { id: "parking", label: "Parking availability" },
  { id: "showers", label: "Shower facilities" },
  { id: "equipment_provided", label: "Equipment provided" },
  { id: "childcare", label: "Childcare services nearby" },
];

const SPECIAL_NEEDS = [
  { id: "beginner_friendly", label: "Beginner-friendly instructors" },
  { id: "small_classes", label: "Smaller class sizes (under 15 people)" },
  { id: "outdoor_classes", label: "Morning/evening outdoor classes" },
];

const GENDER_PREFERENCES = [
  { id: "no_preference", label: "No preference" },
  { id: "female_only", label: "Female-only classes preferred" },
  { id: "mixed", label: "Mixed classes preferred" },
];

const CLASS_SIZE_OPTIONS = [
  {
    id: "small",
    label: "Small (5-10 people)",
    description: "Intimate, personalized attention",
  },
  {
    id: "medium",
    label: "Medium (10-20 people)",
    description: "Balanced energy and instruction",
  },
  {
    id: "large",
    label: "Large (20+ people)",
    description: "High energy, community feel",
  },
  {
    id: "no_preference",
    label: "No preference",
    description: "Any class size works for me",
  },
];

export function BudgetAdditionalStep({ data, updateData }: Props) {
  const handleBudgetChange = (budget: string) => {
    updateData({
      budget_tier: budget,
      payment_preference: budget === "packages" ? "membership" : "per_class",
    });
  };

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    const updatedAmenities = checked
      ? [...data.additional_preferences.required_amenities, amenityId]
      : data.additional_preferences.required_amenities.filter(
          (id) => id !== amenityId
        );

    updateData({
      additional_preferences: {
        ...data.additional_preferences,
        required_amenities: updatedAmenities,
      },
    });
  };

  const handleSpecialNeedChange = (needId: string, checked: boolean) => {
    const updatedNeeds = checked
      ? [...data.additional_preferences.special_needs, needId]
      : data.additional_preferences.special_needs.filter((id) => id !== needId);

    updateData({
      additional_preferences: {
        ...data.additional_preferences,
        special_needs: updatedNeeds,
      },
    });
  };

  const handleGenderPreferenceChange = (preference: string) => {
    updateData({
      additional_preferences: {
        ...data.additional_preferences,
        gender_preference: preference,
      },
    });
  };

  const handleClassSizeChange = (size: string) => {
    updateData({
      additional_preferences: {
        ...data.additional_preferences,
        class_size_preference: size,
      },
    });
  };

  return (
    <div className="space-y-6 ">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          What&apos;s your budget range and additional preferences?
        </h2>
        <p className="text-muted-foreground text-sm">
          Choose your budget and any additional preferences to help us find the
          perfect match.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Budget Range
        </h3>
        <Select
          value={data.budget_tier ?? undefined}
          onValueChange={handleBudgetChange}
        >
          <SelectTrigger className="w-full py-8">
            <SelectValue placeholder="Select your budget range" />
          </SelectTrigger>
          <SelectContent>
            {BUDGET_TIERS.map((tier) => (
              <SelectItem
                key={tier.id}
                value={tier.id}
                className="font-fredoka"
              >
                <div className="flex flex-col text-start">
                  <span className="font-medium">{tier.label}</span>
                  <span className="text-sm text-primary">
                    {tier.description}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {tier.range}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Class Preferences
        </h3>
        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium mb-2 block">
              Gender Preference
            </Label>
            <Select
              value={data.additional_preferences.gender_preference}
              onValueChange={handleGenderPreferenceChange}
            >
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="Select your gender preference" />
              </SelectTrigger>
              <SelectContent>
                {GENDER_PREFERENCES.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className="font-fredoka"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">
              Preferred Class Size
            </Label>
            <Select
              value={data.additional_preferences.class_size_preference}
              onValueChange={handleClassSizeChange}
            >
              <SelectTrigger className="w-full py-6">
                <SelectValue placeholder="Select your preferred class size" />
              </SelectTrigger>
              <SelectContent>
                {CLASS_SIZE_OPTIONS.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id}
                    className=" font-fredoka"
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

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Required Amenities (Optional)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <Checkbox
                id={amenity.id}
                checked={data.additional_preferences.required_amenities.includes(
                  amenity.id
                )}
                onCheckedChange={(checked) =>
                  handleAmenityChange(amenity.id, checked as boolean)
                }
              />
              <label
                htmlFor={amenity.id}
                className="text-sm cursor-pointer flex-1"
              >
                {amenity.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Special Requirements (Optional)
        </h3>
        <div className="space-y-3">
          {SPECIAL_NEEDS.map((need) => (
            <div
              key={need.id}
              className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <Checkbox
                id={need.id}
                checked={data.additional_preferences.special_needs.includes(
                  need.id
                )}
                onCheckedChange={(checked) =>
                  handleSpecialNeedChange(need.id, checked as boolean)
                }
              />
              <label
                htmlFor={need.id}
                className="text-sm cursor-pointer flex-1"
              >
                {need.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
