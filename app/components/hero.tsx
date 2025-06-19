import React from "react";
import { ArrowRight, LogIn } from "lucide-react";

import EventAnimation from "./anihero";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className=" font-fredoka flex md:flex-row flex-col items-center md:h-screen h-fit md:p-20 p-10 gap-10 bg-[#EEF7F6] rounded-b-[80px]">
      <div className=" md:w-1/2 w-full  md:space-y-8 space-y-6">
        <div className=" space-y-5">
          <h2 className=" md:text-6xl sm:text-5xl flex flex-col text-3xl text-center md:text-start md:leading-20 leading-13 font-semibold text-[#234E49] font-sora">
            <span className=" whitespace-nowrap">One subscription, </span>
            <span className=" whitespace-nowrap"> Everything Fitness.</span>
          </h2>
          <p className=" text-center md:text-start mx-auto md:mx-0 md:w-9/12 w-full text-neutral-700 text-base">
            Access top gyms, studios, fitness and wellness centers in Lagos and
            London with just one subscription
          </p>
        </div>
        <div className=" flex flex-row gap-5 justify-center md:justify-start">
          <Button
            icon={LogIn}
            iconSize={25}
            className="w-40  bg-white/20 backdrop-blur-sm"
            variant="outline"
          >
            Login
          </Button>
          <Button icon={ArrowRight} iconSize={25} className="w-40">
            Get Started
          </Button>
        </div>
        <div className=" flex md:flex-row flex-col space-y-3.5  mt-7 w-full items-center ">
          <div className=" justify-center md:justify-start  flex flex-row  items-center gap-4 md:border-r border-none md:border-[#234E49]/60 md:pr-4 ">
            <div className=" flex  -space-x-3.5 ">
              <img
                src="https://tapback.co/api/avatar/johndoe"
                alt=""
                className="rounded-full border-2 border-[#234E49]/40 backdrop-blur-sm md:w-12 md:h-12 w-10 h-10"
              />
              <img
                src="https://tapback.co/api/avatar/abdullahi"
                alt=""
                className="rounded-full  border-2 border-[#234E49]/40 backdrop-blur-sm md:w-12 md:h-12 w-10 h-10"
              />
              <img
                src="https://tapback.co/api/avatar/joy"
                alt=""
                className="rounded-full  border-2 border-[#234E49]/40 backdrop-blur-sm md:w-12 md:h-12 w-10 h-10"
              />
            </div>
            <div className=" flex flex-col  items-start justify-start">
              <span className=" md:text-3xl text-2xl font-semibold font-sora">
                10k+
              </span>
              <span className="text-sm  font-fredoka">Happy Users </span>
            </div>
          </div>
          <div className=" flex items-center p-4 md:gap-2.5 gap-1 cursor-pointer">
            <img src="./play.svg" alt="" className=" md:w-10 md:h-10 w-9 h-9" />
            <span className="md:text-base text-sm whitespace-nowrap md:whitespace-normal ">
              Download on Playstore
            </span>
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
