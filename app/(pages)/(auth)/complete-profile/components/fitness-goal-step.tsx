"use client";

import { Checkbox } from "@/components/ui/checkbox";
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

export function FitnessGoalsStep({ data, updateData }: Props) {
  const handleGoalChange = (goalId: string, checked: boolean) => {
    const updatedGoals = checked
      ? [...data.fitness_goals, goalId]
      : data.fitness_goals.filter((id) => id !== goalId);

    updateData({ fitness_goals: updatedGoals });
  };

  return (
    <div className="space-y-6">
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
    </div>
  );
}
