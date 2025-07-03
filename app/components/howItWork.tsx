import React from "react";
import Demo from "./demo";
import Heading from "../ui/heading";
//import Image from "next/image";

const HowItWork = () => {
  const steps = [
    {
      id: 1,
      icon: <span className="text-3xl font-bold font-sora">1</span>,
      title: "Get Started",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore enim expedita quas quisquam explicabo voluptate praesentium fugiat, dolorum labore ratione incidunt sint, sit voluptatum perferendis ad aliquam provident earum!",
    },
    {
      id: 2,
      icon: <span className="text-3xl font-bold font-sora">2</span>,
      title: "Choose Your Plan",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore enim expedita quas quisquam explicabo voluptate praesentium fugiat, dolorum labore ratione incidunt sint, sit voluptatum perferendis ad aliquam provident earum!",
    },
    {
      id: 3,
      icon: <span className="text-3xl font-bold font-sora">3</span>,
      title: "How it works 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore enim expedita quas quisquam explicabo voluptate praesentium fugiat, dolorum labore ratione incidunt sint, sit voluptatum perferendis ad aliquam provident earum!",
    },
    {
      id: 4,
      icon: <span className="text-3xl font-bold font-sora">4</span>,
      title: "How it works 4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, inventore enim expedita quas quisquam explicabo voluptate praesentium fugiat, dolorum labore ratione incidunt sint, sit voluptatum perferendis ad aliquam provident earum!",
    },
  ];

  return (
    <div>
      <div className="px-4 sm:px-8 md:px-20 py-8 sm:py-10 md:py-12 lg:py-15 space-y-8 bg-[#EEF7F6]/50">
        <Heading
          title=" Users Persona Flow"
          paragraph="Follow these simple steps to get started"
        />

        <div className="grid grid-cols-1 md:grid-cols-2  grid-rows-2 gap-6 w-full">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative p-6 space-y-4 border border-[#234E49]/20 rounded-2xl hover:border-[#234E49]/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#234E49]/10 rounded-xl flex items-center justify-center text-[#234E49] group-hover:bg-[#234E49] group-hover:text-white transition-all duration-300">
                {step.icon}
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#234E49] font-sora group-hover:text-[#234E49] transition-colors duration-300">
                {step.title}
              </h2>
              <p className="font-fredoka text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <Demo />

        <div className="">
          <div className="max-w-sm p-4 rounded-xl bg-white border text-gray-800 space-y-4">
            {/* User Info */}
            <div className="flex items-center space-x-4">
              <img
                src="https://tapback.co/api/avatar/kate.jpg"
                alt="Kate"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-sora font-bold">25-credit plan</h2>
                <p className="text-lg font-fredoka">
                  <span className="font-semibold">Kate</span> · Amsterdam
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm font-fredoka">
              Kate recently found out she’s pregnant and uses Myfithub once or
              twice a week to stay active.
            </p>

            <hr />

            {/* Classes */}
            <div className="space-y-3 text-sm font-fredoka">
              <div className="flex justify-between items-start border-b pb-2">
                <div>
                  <p className="font-semibold">
                    Prenatal Yoga{" "}
                    <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                      x2
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">4 credits each</p>
                </div>
                <p className="font-semibold">8 credits</p>
              </div>

              <div className="flex justify-between border-b py-2 pb-3">
                <p>Full Body Pilates</p>
                <p className="font-semibold">10 credits</p>
              </div>

              <div className="flex justify-between border-b py-2 pb-3">
                <p>Meditation</p>
                <p className="font-semibold">4 credits</p>
              </div>

              <div className="flex justify-between border-b py-2 pb-3">
                <p>Barre</p>
                <p className="font-semibold">3 credits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
