"use client";

import type React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { FormData } from "../page";

interface ProfileSetupStepProps {
  data: FormData;
  updateData: (updates: Partial<FormData>) => void;
}

export const ProfileSetupStep: React.FC<ProfileSetupStepProps> = ({
  data,
  updateData,
}) => {
  const handleProfileUpdate = (
    field: keyof FormData["profile"],
    value: string
  ) => {
    updateData({
      profile: {
        ...data.profile,
        [field]: value,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">
          Welcome to MyFitHub!
        </h2>
        <p className="text-muted-foreground">
          Let&apos;s start by setting up your profile. This helps us personalize
          your fitness journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first_name">First Name </Label>
          <Input
            id="first_name"
            type="text"
            placeholder="Enter your first name"
            value={data.profile.first_name}
            onChange={(e) => handleProfileUpdate("first_name", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last_name">Last Name </Label>
          <Input
            id="last_name"
            type="text"
            placeholder="Enter your last name"
            value={data.profile.last_name}
            onChange={(e) => handleProfileUpdate("last_name", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date_of_birth">Date of Birth</Label>
          <Input
            id="date_of_birth"
            type="date"
            value={data.profile.date_of_birth}
            onChange={(e) =>
              handleProfileUpdate("date_of_birth", e.target.value)
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select
            value={data.profile.gender}
            onValueChange={(value) => handleProfileUpdate("gender", value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
