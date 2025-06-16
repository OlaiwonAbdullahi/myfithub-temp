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
    <div className="px-20 py-15 space-y-8 bg-white">
      <h2 className="text-4xl font-bold  font-sora text-[#234E49] text-center">
        Our Features
      </h2>
      <p className="text-base text-center font-fredoka">
        Explore our App Features
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-3 mx-auto">
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
