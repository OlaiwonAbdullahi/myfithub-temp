"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://myfithub-backend.onrender.com/api/v1/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            username,
            password,
            confirmPassword,
          }),
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Signup success:", data);

      // Redirect to login after signup
      router.push("/login");
    } catch (error) {
      console.error("Signup failed:", error);
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
            <Label htmlFor="username" className="text-[#234E49] font-medium">
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

          <div className="space-y-1">
            <Label htmlFor="password" className="text-[#234E49] font-medium">
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
            <Label
              htmlFor="confirmPassword"
              className="text-[#234E49] font-medium"
            >
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-[#E5E5E5] border-[#E5E5E5]"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/email-verification">
              <Button
                type="submit"
                className="ml-auto bg-primary text-white hover:bg-primary/90 cursor-pointer"
              >
                Create Account
              </Button>
            </Link>
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
