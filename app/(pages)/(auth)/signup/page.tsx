"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Page = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
    } else {
      // Final submit logic here
      console.log({
        firstName,
        lastName,
        email,
        username,
        phone,
        password,
        gender,
      });
    }
  };

  return (
    <div className="flex flex-col md:px-20 sm:px-8 px-6 space-y-7 py-10 justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 w-full max-w-md">
        <div className="text-center space-y-2">
          <Link href="/" className="flex items-center justify-center gap-1">
            <div className="text-xl text-[#234E49] font-semibold">MyFitHub</div>
            <sup>Beta</sup>
          </Link>
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Create Account
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            Join Us Today
          </span>
        </div>

        <Button
          variant="outline"
          className="w-full h-9 mb-4 border text-sm border-[#E5E5E5] flex gap-2 items-center justify-center"
        >
          <img src="/google.svg" alt="Google" className="h-5 w-5" />
          Continue With Google
        </Button>

        <hr className="border-t border-t-[#234E49]/20" />

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <div className="space-y-1">
                <Label
                  htmlFor="firstName"
                  className="text-[#234E49] font-medium"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Your First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="lastName"
                  className="text-[#234E49] font-medium"
                >
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Your Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>

              <div className="space-y-1">
                <Label htmlFor="email" className="text-[#234E49] font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="username"
                  className="text-[#234E49] font-medium"
                >
                  Username
                </Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Create a Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>
            </>
          ) : (
            <>
              <div className="space-y-1">
                <Label htmlFor="phone" className="text-[#234E49] font-medium">
                  Phone Number
                </Label>
                <PhoneInput
                  defaultCountry="NG"
                  value={phone}
                  onChange={setPhone}
                  placeholder="8012345678"
                  className="px-2 border border-[#E5E5E5] bg-[#E5E5E5] focus:outline-none rounded-lg text-sm"
                />
              </div>

              <div className="space-y-1">
                <Label
                  htmlFor="password"
                  className="text-[#234E49] font-medium"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-[#E5E5E5] border-[#E5E5E5]"
                />
              </div>

              <div className="space-y-1">
                <Label className="text-[#234E49] font-medium">Gender</Label>
                <RadioGroup
                  defaultValue="male"
                  className="flex gap-4"
                  onValueChange={(value) => setGender(value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            {step > 1 && (
              <Button
                type="button"
                variant="outline"
                className="text-[#234E49] border-[#234E49] hover:bg-[#234E49]/10 cursor-pointer"
                onClick={() => setStep(step - 1)}
              >
                Back
              </Button>
            )}
            <Button
              type="submit"
              className="ml-auto bg-[#234E49] text-white hover:bg-[#234E49]/90 cursor-pointer"
            >
              {step === 2 ? "Create Account" : "Next"}
            </Button>
          </div>
        </form>

        <span className="text-sm text-neutral-500">
          By signing up, you agree to our Terms and Conditions & Privacy Policy
        </span>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#234E49] font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
