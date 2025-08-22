import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10  justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="bg-white md:p-8 p-5 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className=" flex items-center justify-center bg-primary/20 text-[#234E49] w-26 h-26 rounded-full mx-auto">
            <BadgeCheck size={50} />
          </div>
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Verified
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            Your Email has been verified
          </span>
        </div>

        <Link href={"/complete-profile"}>
          <Button className="bg-primary w-full hover:bg-primary/90 cursor-pointer">
            Complete your Profile
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
