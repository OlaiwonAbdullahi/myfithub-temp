import React from "react";
import Demo from "./demo";
import Heading from "../ui/heading";

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
          title=" How It Works"
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
      </div>
    </div>
  );
};

export default HowItWork;
