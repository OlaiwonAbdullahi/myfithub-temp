"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [activity, setActivity] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Send this data to your backend
    console.log({
      firstName,
      dob,
      height,
      weight,
      gender,
      goal,
      activity,
    });

    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#EEF7F6]/50 font-fredoka px-6">
      <Card className="w-full max-w-lg shadow-md rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-[#234E49] text-2xl font-sora">
            Complete Your Profile
          </CardTitle>
          <p className="text-center text-gray-600 text-sm">
            Tell us a bit more about you to personalize your fitness journey
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className=" flex flex-row gap-4 items-center justify-between">
              <div className="space-y-1 w-1/2">
                <Label
                  htmlFor="firstName"
                  className="text-[#234E49] font-medium"
                >
                  First Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your first name"
                  value={lastName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
              <div className="w-1/2 space-y-1">
                <Label
                  htmlFor="lastName"
                  className="text-[#234E49] font-medium"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
            </div>
            <div className=" flex flex-row gap-4 items-center justify-between w-full">
              <div className="space-y-1 w-1/2">
                <Label htmlFor="dob" className="text-[#234E49] font-medium">
                  Date of Birth
                </Label>
                <Input
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
              <div className="space-y-1 w-1/2">
                <Label className="text-[#234E49] font-medium">Gender</Label>
                <Select onValueChange={setGender}>
                  <SelectTrigger className="bg-[#E5E5E5] w-full border-[#E5E5E5]">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Label htmlFor="height" className="text-[#234E49] font-medium">
                  Height (cm)
                </Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="170"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="weight" className="text-[#234E49] font-medium">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="65"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
            </div>
            <div className=" flex flex-row gap-4 items-center justify-between w-full">
              <div className="space-y-1 w-1/2">
                <Label className="text-[#234E49] font-medium">
                  Fitness Goal
                </Label>
                <Select onValueChange={setGoal}>
                  <SelectTrigger className="bg-[#E5E5E5] border-[#E5E5E5] w-full">
                    <SelectValue placeholder="Select goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weight_loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle_gain">Muscle Gain</SelectItem>
                    <SelectItem value="endurance">Endurance</SelectItem>
                    <SelectItem value="general_fitness">
                      General Fitness
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1 w-1/2">
                <Label className="text-[#234E49] font-medium">
                  Fitness Level
                </Label>
                <Select onValueChange={setActivity}>
                  <SelectTrigger className="bg-[#E5E5E5] border-[#E5E5E5] w-full">
                    <SelectValue placeholder="Select Fitness Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Beginner</SelectItem>
                    <SelectItem value="lightly_active">Intermediate</SelectItem>
                    <SelectItem value="active">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" flex flex-row gap-4 items-center justify-between w-full">
              <div className="space-y-1 w-1/2">
                <Label className="text-[#234E49] font-medium">
                  Activity Preferences
                </Label>
                <Select onValueChange={setActivity}>
                  <SelectTrigger className="bg-[#E5E5E5] border-[#E5E5E5] w-full">
                    <SelectValue placeholder="Select Activity Preferences" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Yoga</SelectItem>
                    <SelectItem value="lightly_active">Hiit</SelectItem>
                    <SelectItem value="active">Dance</SelectItem>
                    <SelectItem value="very_active">Strength</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1 w-1/2">
                <Label className="text-[#234E49] font-medium">
                  Preferred Times
                </Label>
                <Select onValueChange={setActivity}>
                  <SelectTrigger className="bg-[#E5E5E5] border-[#E5E5E5] w-full">
                    <SelectValue placeholder="Select Preferred Times" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedentary">Morning</SelectItem>
                    <SelectItem value="lightly_active">Afternoon</SelectItem>
                    <SelectItem value="active">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-1 w-full">
              <Label className="text-[#234E49] font-medium">
                Preferred Areas
              </Label>
              <Select onValueChange={setActivity}>
                <SelectTrigger className="bg-[#E5E5E5] border-[#E5E5E5] w-full">
                  <SelectValue placeholder="Select Preferred Areas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedentary">MainLand</SelectItem>
                  <SelectItem value="lightly_active">Island</SelectItem>
                  <SelectItem value="active">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=" flex flex-row justify-between space-y-4">
              <Link href="/dashboard">
                <Button
                  type="submit"
                  variant={"outline"}
                  className="w-full cursor-pointer shadow-none text-primary "
                >
                  Skip for Now
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  type="submit"
                  className="w-fit cursor-pointer bg-primary text-white hover:bg-primary/90"
                >
                  Save & Continue
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
