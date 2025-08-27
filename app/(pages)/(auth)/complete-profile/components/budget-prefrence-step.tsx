"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  {
    id: "packages",
    label: "Package Deals",
    description: "I prefer memberships/packages",
    range: "Monthly or yearly membership options",
  },
];

export function BudgetPreferencesStep({ data, updateData }: Props) {
  const handleBudgetChange = (budget: string) => {
    updateData({
      budget_tier: budget,
      payment_preference: budget === "packages" ? "membership" : "per_class",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-2">
          What&apos;s your budget range for fitness classes?
        </h2>
        <p className="text-muted-foreground text-sm">
          Choose the option that best fits your budget preferences.
        </p>
      </div>

      <RadioGroup value={data.budget_tier} onValueChange={handleBudgetChange}>
        <div className="space-y-4">
          {BUDGET_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="flex items-start space-x-3 p-4 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <RadioGroupItem value={tier.id} id={tier.id} className="mt-1" />
              <div className="flex-1">
                <Label
                  htmlFor={tier.id}
                  className="text-base font-medium cursor-pointer"
                >
                  {tier.label}
                </Label>
                <p className="text-sm font-medium text-primary mt-1">
                  {tier.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {tier.range}
                </p>
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
