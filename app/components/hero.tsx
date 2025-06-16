import React from "react";
import { ArrowRight, LogIn } from "lucide-react";

import EventAnimation from "./anihero";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className=" font-fredoka flex md:flex-row flex-col items-center h-screen md:p-20 p-10 gap-10 bg-[#EEF7F6] rounded-b-[80px]">
      <div className=" md:w-1/2 w-full  space-y-8">
        <div className=" space-y-5">
          <h2 className=" md:text-6xl text-5xl text-center md:text-start leading-20 font-semibold text-[#234E49] font-sora">
            One subscription. Everything Fitness
          </h2>
          <p className=" text-center md:text-start mx-auto md:mx-0 w-9/12 text-neutral-700 text-base">
            Access top gyms, studios, fitness and wellness centers in Lagos and
            London with just one subscription
          </p>
        </div>
        <div className=" flex flex-row  gap-5 justify-center md:justify-start">
          <Button
            icon={LogIn}
            iconSize={25}
            className="w-40 bg-white/20 backdrop-blur-sm"
            variant="outline"
          >
            Login
          </Button>
          <Button icon={ArrowRight} iconSize={25} className="w-40">
            Get Started
          </Button>
        </div>
        <div className=" flex items-center mt-7 ">
          <div className=" justify-center md:justify-start flex flex-row items-center gap-4 border-r border-[#234E49]/60 pr-4 ">
            <div className=" flex  -space-x-3.5">
              <img
                src="https://tapback.co/api/avatar/johndoe"
                alt=""
                className="rounded-full border-2 border-[#234E49]/40 backdrop-blur-sm w-12 h-12"
              />
              <img
                src="https://tapback.co/api/avatar/abdullahi"
                alt=""
                className="rounded-full  border-2 border-[#234E49]/40 backdrop-blur-sm w-12 h-12"
              />
              <img
                src="https://tapback.co/api/avatar/joy"
                alt=""
                className="rounded-full  border-2 border-[#234E49]/40 backdrop-blur-sm w-12 h-12"
              />
            </div>
            <div className=" flex flex-col  items-start justify-start">
              <span className=" text-3xl font-semibold font-sora">10k</span>
              <span className=" text-sm font-fredoka">Happy Users </span>
            </div>
          </div>
          <div className=" flex items-center p-4  gap-2.5 cursor-pointer">
            <img src="./play.svg" alt="" className=" h-10 w-10" />
            <span>Download on Playstore</span>
            <sup className="bg-green-500 text-white border border-green-700 rounded-xl h-5 w-22 flex items-center mb-4 justify-center">
              Coming Soon
            </sup>
          </div>
        </div>
      </div>
      {/* <div className=" w-1/2  rounded-full flex flex-col justify-center items-center object-contain ">
        <Image
          src={circle}
          width={500}
          height={500}
          alt="Fithub Hero"
          className=" w-130 h-130  rounded-full absolute"
        />
        <Image
          src="/fithubhero.jpeg"
          width={500}
          height={500}
          alt="Fithub Hero"
          className=" w-100 h-100  rounded-full"
        />
      </div>*/}
      <div className="md:w-1/2 w-full h-full bg-primary flex flex-col gap-3 justify-center items-end">
        <div className="relative w-full aspect-auto">
          <EventAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
