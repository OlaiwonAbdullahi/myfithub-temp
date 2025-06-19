import React from "react";
import FeatureCard from "./featureCard";
import { BoxIcon } from "lucide-react";

const Feature = () => {
  const featureData = [
    {
      id: "01",
      icon: <BoxIcon size={30} />,
      title: "Multiple Users1",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti quibusdam voluptates magnam, illo natus modi corporis minima",
    },
    {
      id: "02",
      icon: <BoxIcon size={30} />,
      title: "Multiple Users2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti quibusdam voluptates magnam, illo natus modi corporis minima",
    },
    {
      id: "03",
      icon: <BoxIcon size={30} />,
      title: "Multiple Users3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi corrupti quibusdam voluptates magnam, illo natus modi corporis minima",
    },
  ];

  return (
    <div className="px-4 sm:px-8  md:px-20 py-8 sm:py-10 md:py-25 lg:py-28 space-y-8 bg-white">
      <div className=" mb-20  space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-sora text-[#234E49] text-center">
          Our Features
        </h2>
        <p className="text-sm sm:text-base text-center font-fredoka px-4">
          Explore our App Features
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-12 max-w-7xl mx-auto mt-6">
        {featureData.map((feature) => (
          <FeatureCard
            key={feature.id}
            num={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;
