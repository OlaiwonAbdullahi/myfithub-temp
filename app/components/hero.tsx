import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Heroo = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-8 bg-center relative overflow-hidden">
      <video
        src="https://res.cloudinary.com/du7ljfa63/video/upload/v1754921868/bg_edvzk6.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10" />

      <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg max-w-2xl z-20 relative">
        <div>
          <h1 className="text-5xl flex flex-col space-y-2.5 font-bold text-center mt-10 text-[#234E49] font-sora">
            <span>One subscription,</span>
            <span>Everything Fitness.</span>
          </h1>
          <p className="text-center mt-4 text-lg font-fredoka text-neutral-700 px-6">
            Access top gyms, studios, fitness and wellness centers in Lagos with
            just one subscription
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 my-8">
          <Link
            href="/signup"
            className="w-1/2 h-10 rounded-lg flex flex-row justify-center items-center font-fredoka bg-primary text-white hover:bg-[#1a3b36] transition-colors cursor-pointer duration-300"
          >
            <Button className="text-white bg-transparent hover:bg-transparent border-0 p-0 h-auto font-fredoka">
              Get Started
            </Button>
          </Link>

          <Link
            href="/login"
            className="w-1/2 h-10 border-2 flex justify-center items-center rounded-lg border-[#234E49] text-[#234E49] bg-white/10 backdrop-blur-sm hover:bg-white/20 cursor-pointer hover:border-[#1a3b36] transition-colors duration-300"
          >
            <Button className="text-[#234E49] bg-transparent hover:bg-transparent border-0 p-0 h-auto font-fredoka">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroo;
