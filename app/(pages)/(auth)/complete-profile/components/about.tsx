"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
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

      {/* Avatar Section */}
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24">
          <AvatarImage
            src={data.profile.avatar_url || "/placeholder.svg"}
            alt="Profile picture"
          />
          <AvatarFallback className="text-lg">
            {data.profile.first_name?.[0]}
            {data.profile.last_name?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="space-y-2 w-full max-w-sm">
          <Label htmlFor="avatar_url">Profile Picture URL (Optional)</Label>
          <div className="flex gap-2">
            <Input
              id="avatar_url"
              type="url"
              placeholder="https://example.com/avatar.jpg"
              value={data.profile.avatar_url}
              onChange={(e) =>
                handleProfileUpdate("avatar_url", e.target.value)
              }
            />
            <Button type="button" variant="outline" size="icon">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first_name">First Name *</Label>
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
          <Label htmlFor="last_name">Last Name *</Label>
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

      {/* Email */}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={data.profile.email}
          onChange={(e) => handleProfileUpdate("email", e.target.value)}
          required
        />
      </div>

      {/* Date of Birth and Gender */}
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
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="non-binary">Non-binary</SelectItem>
              <SelectItem value="prefer-not-to-say">
                Prefer not to say
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">Tell us about yourself (Optional)</Label>
        <Textarea
          id="bio"
          placeholder="Share your interests, hobbies, fitness goals, or anything you'd like us to know..."
          value={data.profile.bio}
          onChange={(e) => handleProfileUpdate("bio", e.target.value)}
          rows={4}
          className="resize-none"
        />
        <p className="text-sm text-muted-foreground">
          This helps us better understand your preferences and recommend
          suitable fitness options.
        </p>
      </div>
    </div>
  );
};
