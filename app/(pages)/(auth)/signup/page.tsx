"use client";
import Button from "@/app/ui/button";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col px-20 space-y-7 py-10 justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className=" self-start">
        <Link href="/" className="flex items-center">
          <div className="text-xl font-semibold">MyFitHub</div> <sup>Beta</sup>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Create Account
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            Join Us Today
          </span>
        </div>
        <div>
          <Button
            variant="outline"
            className="w-full h-9 mb-4 border text-sm border-[#E5E5E5] flex "
          >
            <img src={"./google.svg"} alt="" className=" z-20 h-5 w-5" />
            Continue With Google
          </Button>
        </div>
        <hr className="border-t border-t-[#234E49]/20" />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="Email" className="mb-1 font-medium text-[#234E49]">
              Email
            </label>
            <input
              id="Email"
              type="email"
              placeholder="Enter your Email"
              className="border border-[#E5E5E5] bg-[#E5E5E5] rounded px-3 py-2  focus:outline-none "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="Password"
              className="mb-1 font-medium text-[#234E49]"
            >
              Password
            </label>
            <input
              id="Password"
              type="password"
              placeholder="Enter your Password"
              className="border rounded  border-[#E5E5E5] bg-[#E5E5E5] px-3 py-2 focus:outline-none "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
        <span className=" text-sm text-neutral-500">
          By signing up, you agree to our Terms and Conditions & Privacy Policy
        </span>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-[#234E49] font-medium">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
