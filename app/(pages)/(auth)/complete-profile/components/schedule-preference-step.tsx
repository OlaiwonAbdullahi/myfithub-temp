"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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

export function SchedulePreferencesStep({ data, updateData }: Props) {
  const handleTimeChange = (timeId: string, checked: boolean) => {
    const updatedTimes = checked
      ? [...data.preferred_times, timeId]
      : data.preferred_times.filter((id) => id !== timeId);

    updateData({ preferred_times: updatedTimes });
  };

  const handleFlexibilityChange = (flexibility: string) => {
    updateData({ schedule_flexibility: flexibility });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          When do you prefer to work out?
        </h2>
        <p className="text-muted-foreground text-sm">
          Select your preferred workout times.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TIME_PREFERENCES.map((time) => (
          <div
            key={time.id}
            className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
          >
            <Checkbox
              id={time.id}
              checked={data.preferred_times.includes(time.id)}
              onCheckedChange={(checked) =>
                handleTimeChange(time.id, checked as boolean)
              }
            />
            <label
              htmlFor={time.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
            >
              {time.label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">
          How flexible is your schedule?
        </h3>

        <RadioGroup
          value={data.schedule_flexibility}
          onValueChange={handleFlexibilityChange}
        >
          <div className="space-y-3">
            {FLEXIBILITY_OPTIONS.map((option) => (
              <div
                key={option.id}
                className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor={option.id}
                    className="text-sm font-medium cursor-pointer"
                  >
                    {option.label}
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
