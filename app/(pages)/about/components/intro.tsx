import Button from "@/app/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className=" md:p-20 p-6  bg-white ">
      <div className="flex md:flex-row flex-col justify-between w-full items-center">
        <div className="w-1/2">
          <img src="https://placehold.co/600x400" alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl text-center md:text-start font-bold text-[#234E49] mb-6 font-sora leading-tight">
            A Short Story
          </h2>
          <p className="text-base sm:text-lg text-black font-light md:w-9/12  font-fredoka   text-center md:text-justify  mb-8 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolore
            explicabo laudantium eum. Quos eveniet recusandae, pariatur harum
            aliquam accusantium consequatur reprehenderit velit doloribus ipsa
            aspernatur quisquam animi consectetur repellendus. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Id dolore explicabo
            laudantium eum. Quos eveniet recusandae, pariatur harum aliquam
            accusantium consequatur reprehenderit velit doloribus ipsa
            aspernatur quisquam animi consectetur repellendus. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Id dolore explicabo
            laudantium eum. Quos eveniet recusandae, pariatur harum aliquam
            accusantium consequatur reprehenderit velit doloribus ipsa
            aspernatur quisquam animi consectetur repellendus.
          </p>
          <div className=" flex justify-center md:justify-start">
            <Link href={"/signup"}>
              <Button
                variant="primary"
                className=" font-sora"
                icon={ArrowRight}
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-10 justify-center items-center self-center mx-auto mt-10">
        {[
          { value: "10K+", label: "Users" },
          { value: "24", label: "Fitness Studios" },
          { value: "500+", label: "Workout Programs" },
        ].map((item, i) => (
          <div
            key={i}
            className="text-center backdrop-blur-sm bg-white rounded-xl p-6 border border-[#234E49]/20"
          >
            <div className="text-2xl md:text-3xl font-sora font-bold text-[#234E49] mb-2 font-sora">
              {item.value}
            </div>
            <div className="text-gray-600 font-fredoka">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Intro;
