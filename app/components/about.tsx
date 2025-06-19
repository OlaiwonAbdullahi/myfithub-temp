import React from "react";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen mx-4 md:mx-20 my-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-3xl md:rounded-[50px]"
        style={{ backgroundImage: `url('/about.png')` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/70 shadow-2xl rounded-3xl md:rounded-[50px]" />

      {/* Content */}
      <div className="relative z-10 px-4 pt-10 pb-16 md:px-20 flex flex-col justify-start items-start space-y-6 font-fredoka">
        {/* Heading */}
        <div className="text-left space-y-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-white font-bold font-sora drop-shadow-2xl">
            About Fithub
          </h2>
        </div>

        {/* Description */}
        <div className="w-full md:max-w-lg">
          <p className="text-base text-gray-100 text-justify leading-7 md:leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
            alias nesciunt ratione, possimus reiciendis qui placeat. Commodi
            aliquam debitis officia inventore, molestias aut, nulla, corporis
            veniam optio earum laborum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Numquam nemo esse fugiat optio amet hic ullam
            quaerat reiciendis excepturi explicabo, voluptatum vel asperiores
            ipsum non necessitatibus quos dolore error fuga!
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button icon={ArrowRight} iconSize={20}>
            Get Started
          </Button>
        </div>

        {/* Stats Section (Unified for all screen sizes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-10 justify-center items-center self-center">
          {[
            { value: "10K+", label: "Users" },
            { value: "24", label: "Fitness Studios" },
            { value: "500+", label: "Workout Programs" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2 font-sora">
                {item.value}
              </div>
              <div className="text-gray-200">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
