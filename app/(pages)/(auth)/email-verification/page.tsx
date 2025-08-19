import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10  justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="bg-white md:p-8 p-5 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className=" ">
            <Link href="/" className="flex items-center  justify-center">
              <div className="text-xl text-[#234E49] font-semibold">
                MyFitHub
              </div>{" "}
              <sup>Beta</sup>
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Please Check Your Mail
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            We&apos;ve sent a code to Your Mail
          </span>
        </div>
        <div className=" flex justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} className=" border-[#c5c5c5] border" />
              <InputOTPSlot index={1} className=" border-[#c5c5c5] border" />
            </InputOTPGroup>
            <InputOTPSeparator className="text-gray-600" />
            <InputOTPGroup>
              <InputOTPSlot index={2} className=" border-[#c5c5c5] border" />
              <InputOTPSlot index={3} className=" border-[#c5c5c5] border" />
            </InputOTPGroup>
            <InputOTPSeparator className="text-gray-600" />
            <InputOTPGroup>
              <InputOTPSlot index={4} className=" border-[#c5c5c5] border" />
              <InputOTPSlot index={5} className=" border-[#c5c5c5] border" />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button className="bg-primary w-full hover:bg-primary/90 cursor-pointer">
          Verify
        </Button>
      </div>
    </div>
  );
};

export default Page;
