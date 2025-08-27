"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

const ACTIVITIES = [
  { id: "yoga", label: "Yoga" },
  { id: "hiit", label: "HIIT" },
  { id: "dance", label: "Dance Fitness" },
  { id: "strength_training", label: "Strength Training" },
  { id: "pilates", label: "Pilates" },
  { id: "cardio", label: "Cardio" },
  { id: "martial_arts", label: "Martial Arts" },
  { id: "swimming", label: "Swimming & Aqua Fitness" },
  { id: "group_fitness", label: "Group Fitness Classes" },
  { id: "functional_training", label: "Functional Training" },
];

export function ActivityPreferencesStep({ data, updateData }: Props) {
  const handleActivityChange = (activityId: string, checked: boolean) => {
    const updatedActivities = checked
      ? [...data.activity_preferences, activityId]
      : data.activity_preferences.filter((id) => id !== activityId);

    updateData({ activity_preferences: updatedActivities });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          What types of workouts do you enjoy or want to try?
        </h2>
        <p className="text-muted-foreground text-sm">
          Select at least one activity that interests you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
          >
            <Checkbox
              id={activity.id}
              checked={data.activity_preferences.includes(activity.id)}
              onCheckedChange={(checked) =>
                handleActivityChange(activity.id, checked as boolean)
              }
            />
            <label
              htmlFor={activity.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
            >
              {activity.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
