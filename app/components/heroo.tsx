import { Button } from "@/components/ui/button";
import React from "react";

const Heroo = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center   p-8 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
      <div className=" bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl ">
        <div className="">
          <h1 className="text-5xl flex flex-col space-y-2.5 font-bold text-center mt-10 text-[#234E49] font-sora">
            <span>One subscription,</span>
            <span>Everything Fitness.</span>
          </h1>
          <p className="text-center mt-4 text-lg font-fredoka text-neutral-700 px-6">
            Access top gyms, studios, fitness and wellness centers in Lagos and
            London with just one subscription
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center gap-4 my-8">
          <Button className=" w-1/2 h-10 font-fredoka bg-[#234E49] text-white hover:bg-[#1a3b36] transition-colors cursor-pointer duration-300">
            Get Started
          </Button>
          <Button className="  w-1/2 h-10 font-fredoka border border-[#234E49] text-[#234E49] bg-white/10 backdrop-blur-sm hover:bg-transparent cursor-pointer hover:border-[#1a3b36] transition-colors duration-300 ">
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Heroo;
