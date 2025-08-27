"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { ProfileSetupStep } from "./components/about";
import { FitnessGoalsStep } from "./components/fitness-goal-step";
import { ActivityPreferencesStep } from "./components/activity-prefrence";
import { FitnessLevelStep } from "./components/fitness-level-step";
import { SchedulePreferencesStep } from "./components/schedule-preference-step";
import { LocationPreferencesStep } from "./components/location-preference-step";
import { BudgetPreferencesStep } from "./components/budget-prefrence-step";
import { AdditionalPreferencesStep } from "./components/additional-prefrence";
import Link from "next/link";

export interface FormData {
  // New profile data fields
  profile: {
    first_name: string;
    last_name: string;
    email: string;
    avatar_url: string;
    date_of_birth: string;
    gender: string;
    bio: string;
  };
  // Existing fitness questionnaire fields
  fitness_goals: string[];
  activity_preferences: string[];
  fitness_level: string;
  preferred_times: string[];
  schedule_flexibility: string;
  location_preferences: {
    primary_location: {
      lat: number;
      lng: number;
      address: string;
    } | null;
    max_travel_distance: number;
    preferred_areas: string[];
    travel_flexibility: string;
  };
  budget_tier: string;
  payment_preference: string;
  additional_preferences: {
    gender_preference: string;
    required_amenities: string[];
    class_size_preference: string;
    special_needs: string[];
  };
}

const INITIAL_DATA: FormData = {
  profile: {
    first_name: "",
    last_name: "",
    email: "",
    avatar_url: "",
    date_of_birth: "",
    gender: "",
    bio: "",
  },
  fitness_goals: [],
  activity_preferences: [],
  fitness_level: "",
  preferred_times: [],
  schedule_flexibility: "",
  location_preferences: {
    primary_location: null,
    max_travel_distance: 10,
    preferred_areas: [],
    travel_flexibility: "medium",
  },
  budget_tier: "",
  payment_preference: "per_class",
  additional_preferences: {
    gender_preference: "",
    required_amenities: [],
    class_size_preference: "",
    special_needs: [],
  },
};

const STORAGE_KEY = "fitness-questionnaire-progress";
const TOTAL_STEPS = 8;

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isComplete, setIsComplete] = useState(false);

  // Load saved progress on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const { step, data } = JSON.parse(saved);
        setCurrentStep(step);
        setFormData(data);
      } catch (error) {
        console.error("Failed to load saved progress:", error);
      }
    }
  }, []);

  // Save progress whenever data changes
  useEffect(() => {
    if (!isComplete) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          step: currentStep,
          data: formData,
        })
      );
    }
  }, [currentStep, formData, isComplete]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const updateUserProfile = async (updates: Partial<FormData>) => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (!token) {
        throw new Error("No authentication token found");
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user/me`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updates),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const data = await response.json();
      console.log("Profile updated successfully:", data);
      return data;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = async () => {
    try {
      // Update user profile with final data before completing
      await updateUserProfile(formData);

      setIsComplete(true);
      localStorage.removeItem(STORAGE_KEY);
      console.log("Final form data:", formData);
    } catch (error) {
      console.error("Failed to save profile:", error);
      // Optionally show an error message to the user
      // For now, we'll still mark as complete
      setIsComplete(true);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // New profile setup step
        return (
          formData.profile.first_name.trim() !== "" &&
          formData.profile.last_name.trim() !== "" &&
          formData.profile.email.trim() !== ""
        );
      case 2: // Fitness goals (previously step 1)
        return formData.fitness_goals.length > 0;
      case 3: // Activity preferences (previously step 2)
        return formData.activity_preferences.length > 0;
      case 4: // Fitness level (previously step 3)
        return formData.fitness_level !== "";
      case 5: // Schedule preferences (previously step 4)
        return (
          formData.preferred_times.length > 0 &&
          formData.schedule_flexibility !== ""
        );
      case 6: // Location preferences (previously step 5)
        return formData.location_preferences.primary_location !== null;
      case 7: // Budget preferences (previously step 6)
        return formData.budget_tier !== "";
      case 8: // Additional preferences (previously step 7)
        return true;
      default:
        return false;
    }
  };

  const canProceed = isStepValid(currentStep);

  if (isComplete) {
    return (
      <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10  justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
        <div className="text-start flex justify-start  self-start space-y-2">
          <div className=" ">
            <Link href="/" className="flex items-center  justify-center">
              <div className="text-xl text-[#234E49] font-semibold">
                MyFitHub
              </div>{" "}
              <sup>Beta</sup>
            </Link>
          </div>
        </div>
        <Card>
          <CardContent className="p-8 text-center">
            <div className="mb-6 space-y-2.5">
              <div className=" flex items-center justify-center bg-primary/20 text-[#234E49] w-26 h-26 rounded-full mx-auto">
                <BadgeCheck size={50} />
              </div>{" "}
              <h2 className="text-2xl font-bold text-primary mb-2">
                Welcome to MyFitHub!
              </h2>
              <p className="text-muted-foreground w-1/2 text-center mx-auto">
                Thank you for completing your profile and fitness questionnaire.
                We&apos;ll use your preferences to find the perfect fitness
                matches for you.
              </p>
            </div>
            <Link href={"/dashboard"}>
              <Button className=" cursor-pointer ">
                Continue to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProfileSetupStep data={formData} updateData={updateFormData} />;
      case 2:
        return <FitnessGoalsStep data={formData} updateData={updateFormData} />;
      case 3:
        return (
          <ActivityPreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 4:
        return <FitnessLevelStep data={formData} updateData={updateFormData} />;
      case 5:
        return (
          <SchedulePreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 6:
        return (
          <LocationPreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 7:
        return (
          <BudgetPreferencesStep data={formData} updateData={updateFormData} />
        );
      case 8:
        return (
          <AdditionalPreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Profile Setup";
      case 2:
        return "Fitness Goals";
      case 3:
        return "Activity Preferences";
      case 4:
        return "Fitness Level";
      case 5:
        return "Schedule Preferences";
      case 6:
        return "Location Preferences";
      case 7:
        return "Budget Preferences";
      case 8:
        return "Additional Preferences";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10  justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="text-start flex justify-start  self-start space-y-2">
        <div className=" ">
          <Link href="/" className="flex items-center  justify-center">
            <div className="text-xl text-[#234E49] font-semibold">MyFitHub</div>{" "}
            <sup>Beta</sup>
          </Link>
        </div>
      </div>

      <Card className=" max-w-4xl mx-auto ">
        <CardHeader className="">
          <div className="flex items-center justify-between mb-4">
            <CardTitle>
              Step {currentStep} of {TOTAL_STEPS}: {getStepTitle()}
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              {Math.round((currentStep / TOTAL_STEPS) * 100)}% Completed
            </div>
          </div>
          <Progress
            value={(currentStep / TOTAL_STEPS) * 100}
            className="w-full pb-0 mb-0"
          />
        </CardHeader>

        <CardContent className="px-6 pb-6">
          {renderStep()}

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            {currentStep === TOTAL_STEPS ? (
              <Button
                onClick={handleComplete}
                disabled={!canProceed}
                className="flex items-center cursor-pointer gap-2"
              >
                Complete
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!canProceed}
                className="flex items-center cursor-pointer gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
