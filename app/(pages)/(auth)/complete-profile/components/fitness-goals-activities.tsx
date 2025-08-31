"use client";

import { Checkbox } from "@/components/ui/checkbox";
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

const FITNESS_GOALS = [
  { id: "weight_loss", label: "Weight Loss" },
  { id: "muscle_gain", label: "Muscle Gain" },
  { id: "flexibility", label: "Flexibility & Mobility" },
  { id: "cardiovascular", label: "Cardiovascular Health" },
  { id: "stress_relief", label: "Stress Relief & Mental Wellness" },
  { id: "general_fitness", label: "General Fitness & Health" },
  { id: "athletic_performance", label: "Athletic Performance" },
  { id: "injury_recovery", label: "Injury Recovery/Prevention" },
];

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
];

const FITNESS_LEVELS = [
  {
    id: "beginner",
    label: "Beginner",
    description: "New to regular exercise or returning after a long break",
  },
  {
    id: "intermediate",
    label: "Intermediate",
    description:
      "Exercise regularly (2-4 times per week) and comfortable with basic movements",
  },
  {
    id: "advanced",
    label: "Advanced",
    description:
      "Very active (5+ times per week) and experienced with complex movements",
  },
];

export function FitnessGoalsActivitiesStep({ data, updateData }: Props) {
  const handleGoalChange = (goalId: string, checked: boolean) => {
    const updatedGoals = checked
      ? [...data.fitness_goals, goalId]
      : data.fitness_goals.filter((id) => id !== goalId);

    updateData({ fitness_goals: updatedGoals });
  };

  const handleActivityChange = (activityId: string) => {
    updateData({ activity_preferences: [activityId] });
  };

  const handleLevelChange = (level: string) => {
    updateData({ fitness_level: level });
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          What are your main fitness goals?
        </h2>
        <p className="text-muted-foreground text-sm">
          Select all that apply to help us understand what you want to achieve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FITNESS_GOALS.map((goal) => (
          <div
            key={goal.id}
            className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
          >
            <Checkbox
              id={goal.id}
              checked={data.fitness_goals.includes(goal.id)}
              onCheckedChange={(checked) =>
                handleGoalChange(goal.id, checked as boolean)
              }
            />
            <label
              htmlFor={goal.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1"
            >
              {goal.label}
            </label>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium text-foreground ">
          What types of workouts do you enjoy or want to try?
        </h2>

        <div className="space-y-2">
          <Select
            value={data.activity_preferences[0] || ""}
            onValueChange={handleActivityChange}
          >
            <SelectTrigger className="w-full py-6">
              <SelectValue placeholder="Select your preferred workout type" />
            </SelectTrigger>
            <SelectContent>
              {ACTIVITIES.map((activity) => (
                <SelectItem
                  key={activity.id}
                  value={activity.id}
                  className="font-fredoka"
                >
                  <span className="font-medium">{activity.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium text-foreground ">
          What&apos;s your current fitness level?
        </h2>

        <div className="space-y-2">
          <Select value={data.fitness_level} onValueChange={handleLevelChange}>
            <SelectTrigger className="w-full py-8">
              <SelectValue placeholder="Select your fitness level" />
            </SelectTrigger>
            <SelectContent>
              {FITNESS_LEVELS.map((level) => (
                <SelectItem
                  key={level.id}
                  value={level.id}
                  className="font-fredoka"
                >
                  <div className="flex flex-col text-start">
                    <span className="font-medium">{level.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {level.description}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
