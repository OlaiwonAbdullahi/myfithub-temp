"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

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
  { id: "", label: "No preference" },
  { id: "female_only", label: "Female-only classes preferred" },
  { id: "mixed", label: "Mixed classes preferred" },
];

export function AdditionalPreferencesStep({ data, updateData }: Props) {
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

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          Any other preferences we should know about?
        </h2>
        <p className="text-muted-foreground text-sm">
          These preferences are optional but help us find the perfect match for
          you.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Class Preferences
        </h3>
        <RadioGroup
          value={data.additional_preferences.gender_preference}
          onValueChange={handleGenderPreferenceChange}
        >
          <div className="space-y-3">
            {GENDER_PREFERENCES.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <RadioGroupItem value={option.id} id={`gender-${option.id}`} />
                <Label
                  htmlFor={`gender-${option.id}`}
                  className="text-sm cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          Required Amenities
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
          Special Requirements
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
