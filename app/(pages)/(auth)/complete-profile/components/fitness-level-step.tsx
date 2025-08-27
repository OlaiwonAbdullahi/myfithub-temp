"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import type { FormData } from "../page";

interface Props {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

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

export function FitnessLevelStep({ data, updateData }: Props) {
  const handleLevelChange = (level: string) => {
    updateData({ fitness_level: level });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          What&apos;s your current fitness level?
        </h2>
        <p className="text-muted-foreground text-sm">
          This helps us recommend appropriate classes and instructors.
        </p>
      </div>

      <RadioGroup value={data.fitness_level} onValueChange={handleLevelChange}>
        <div className="space-y-4">
          {FITNESS_LEVELS.map((level) => (
            <div
              key={level.id}
              className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <RadioGroupItem value={level.id} id={level.id} className="mt-1" />
              <div className="flex-1">
                <Label
                  htmlFor={level.id}
                  className="text-base font-medium cursor-pointer"
                >
                  {level.label}
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
