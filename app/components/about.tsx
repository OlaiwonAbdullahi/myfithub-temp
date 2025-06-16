import React from "react";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="relative min-h-screen  mx-20 my-10   ">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-[50px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/70 shadow-2xl rounded-[50px]" />

      <div className="relative z-10 md:p-20 p-10 flex flex-col justify-start items-start min-h-screen space-y-4 font-fredoka">
        <div className="text-left space-y-4 max-w-4xl">
          <h2 className="text-4xl text-white font-bold font-sora drop-shadow-2xl">
            About Fithub
          </h2>
        </div>

        <div className="max-w-lg">
          <p className="text-left text-base font-light  leading-8 text-gray-100 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eos
            alias nesciunt ratione, possimus reiciendis qui placeat. Commodi
            aliquam debitis officia inventore, molestias aut, nulla, corporis
            veniam optio earum laborum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Numquam nemo esse fugiat optio amet hic ullam
            quaerat reiciendis excepturi explicabo, voluptatum vel asperiores
            ipsum non necessitatibus quos dolore error fuga!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          {/* <Button
            icon={LogIn}
            iconSize={20}
            className="w-48 h-12 text-lg font-medium backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300"
            variant="outline"
          >
            Learn More
          </Button>*/}
          <Button icon={ArrowRight} iconSize={20}>
            Get Started
          </Button>
        </div>
        {/*

        <div className="pt-8 max-w-5xl mx-auto">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
              alt="People exercising in a modern gym with various fitness equipment"
              className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-white/20 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500"
              />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
            */}

        {/* Stats or Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2 font-sora">
              10K+
            </div>
            <div className="text-gray-200">Users</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2 font-sora">
              24
            </div>
            <div className="text-gray-200">Fitness Studios</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2 font-sora">
              500+
            </div>
            <div className="text-gray-200">Workout Programs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
