"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { FitnessGoalsStep } from "./components/fitness-goal-step";
import { ActivityPreferencesStep } from "./components/activity-prefrence";
import { FitnessLevelStep } from "./components/fitness-level-step";
import { SchedulePreferencesStep } from "./components/schedule-preference-step";
import { LocationPreferencesStep } from "./components/location-preference-step";
import { BudgetPreferencesStep } from "./components/budget-prefrence-step";
import { AdditionalPreferencesStep } from "./components/additional-prefrence";
import Link from "next/link";

export interface FormData {
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

  const nextStep = () => {
    if (currentStep < 7) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
    localStorage.removeItem(STORAGE_KEY);
    console.log("Final form data:", formData);
  };

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.fitness_goals.length > 0;
      case 2:
        return formData.activity_preferences.length > 0;
      case 3:
        return formData.fitness_level !== "";
      case 4:
        return (
          formData.preferred_times.length > 0 &&
          formData.schedule_flexibility !== ""
        );
      case 5:
        return formData.location_preferences.primary_location !== null;
      case 6:
        return formData.budget_tier !== "";
      case 7:
        return true; // Optional step
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
                Thank You!
              </h2>
              <p className="text-muted-foreground w-1/2 text-center mx-auto">
                Thank you for completing the fitness questionnaire. We&apos;ll
                use your preferences to find the perfect fitness matches for
                you.
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
        return <FitnessGoalsStep data={formData} updateData={updateFormData} />;
      case 2:
        return (
          <ActivityPreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 3:
        return <FitnessLevelStep data={formData} updateData={updateFormData} />;
      case 4:
        return (
          <SchedulePreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 5:
        return (
          <LocationPreferencesStep
            data={formData}
            updateData={updateFormData}
          />
        );
      case 6:
        return (
          <BudgetPreferencesStep data={formData} updateData={updateFormData} />
        );
      case 7:
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
            <CardTitle>Step {currentStep} of 7</CardTitle>
            <div className="text-sm text-muted-foreground">
              {Math.round((currentStep / 7) * 100)}% Completed
            </div>
          </div>
          <Progress
            value={(currentStep / 7) * 100}
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

            {currentStep === 7 ? (
              <Button
                onClick={handleComplete}
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
