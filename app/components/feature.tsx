import React from "react";
import FeatureCard from "./featureCard";
import { BrainCog, Layers3, Users2, UsersRound } from "lucide-react";
import Heading from "../ui/heading";

const Feature = () => {
  const featureData = [
    {
      id: "01",
      icon: <Layers3 size={30} />,
      title: "All-in-One",
      description: "Gyms, wellness, sports, niche activities.",
    },
    {
      id: "02",
      icon: <BrainCog size={30} />,
      title: "AI Personalized",
      description:
        "Smart class suggestions based on mood, habits, and energy, Goal-based virtual coaching, Food integration + wearable sync.",
    },
    {
      id: "03",
      icon: <Users2 size={30} />,
      title: "Gamification & Community",
      description: "Leaderboards, challenges, teams, Accountability buddies.",
    },
    {
      id: "04",
      icon: <UsersRound size={30} />,
      title: "Family Plans",
      description: "Share sessions across family members.",
    },
  ];
  return (
    <div className="px-4 sm:px-8  md:px-20 py-8 sm:py-10 md:py-25 lg:py-28 space-y-8 bg-white">
      <Heading title="Our Feature" paragraph=" Explore our App Features" />
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
