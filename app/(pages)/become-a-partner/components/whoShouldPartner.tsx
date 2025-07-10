import Heading from "@/app/ui/heading";
import { Dumbbell, Flower, Droplets, Music2, Bike, Trophy } from "lucide-react";
import React from "react";

const whoShouldList = [
  {
    label: "Gyms & Fitness Centers",
    icon: Dumbbell,
  },
  {
    label: "Yoga & Pilates Studios",
    icon: Flower,
  },
  {
    label: "Sport Centers",
    icon: Trophy,
  },
  {
    label: "Pools",
    icon: Droplets,
  },
  {
    label: "Dance & Aerobic Studios",
    icon: Music2,
  },
  {
    label: "Running & Cycling Clubs",
    icon: Bike,
  },
];

const WhoShouldPartner = () => {
  return (
    <div className="py-10 px-4 md:px-20">
      <Heading title="Who Should List" paragraph="" />
      <p className="text-lg font-fredoka mb-6">
        We welcome all wellness and fitness service providers, including:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10">
        {whoShouldList.map((item, index) => {
          const Icon = item.icon;
          return (
            <li
              key={index}
              className="flex flex-col items-center gap-2 text-center font-fredoka"
            >
              <Icon color="#234E49" size={32} strokeWidth={2} />
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhoShouldPartner;
