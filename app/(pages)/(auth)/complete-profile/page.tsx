"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ProfileSetupStep } from "./components/profile-setup";
import { FitnessGoalsActivitiesStep } from "./components/fitness-goals-activities";
import { LocationScheduleStep } from "./components/location-schedule";
import { BudgetAdditionalStep } from "./components/budget-additional";

export interface FormData {
  profile: {
    first_name: string;
    last_name: string;
    date_of_birth: string;
    gender: string;
  };
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
    date_of_birth: "",
    gender: "",
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
const TOTAL_STEPS = 4;

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isComplete, setIsComplete] = useState(false);

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
      await updateUserProfile(formData);

      setIsComplete(true);
      localStorage.removeItem(STORAGE_KEY);
      console.log("Final form data:", formData);
    } catch (error) {
      console.error("Failed to save profile:", error);
      setIsComplete(true);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: // Profile setup
        return (
          formData.profile.first_name.trim() !== "" &&
          formData.profile.last_name.trim() !== ""
        );
      case 2: // Combined fitness goals and activity preferences
        return (
          formData.fitness_goals.length > 0 &&
          formData.activity_preferences.length > 0 &&
          formData.fitness_level !== ""
        );
      case 3: // Location and schedule preferences
        return (
          formData.location_preferences.primary_location !== null &&
          formData.preferred_times.length > 0 &&
          formData.schedule_flexibility !== ""
        );
      case 4: // Budget and additional preferences
        return formData.budget_tier !== "";
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
        return (
          <FitnessGoalsActivitiesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 3:
        return (
          <LocationScheduleStep data={formData} updateData={updateFormData} />
        );
      case 4:
        return (
          <BudgetAdditionalStep data={formData} updateData={updateFormData} />
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
        return "Fitness Goals & Activities";
      case 3:
        return "Location & Schedule";
      case 4:
        return "Budget & Preferences";
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
