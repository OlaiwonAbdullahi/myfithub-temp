import Heading from "@/app/ui/heading";
import { CheckCircle } from "lucide-react";
import React from "react";

const WhoShouldPartner = () => {
  return (
    <div>
      <Heading title="Who Should List?" paragraph="" />
      <div className=" px-20">
        <p className=" text-lg font-fredoka">
          We welcome all wellness and fitness service providers, including:
        </p>
        <ul>
          <li className=" flex items-center space-x-1.5">
            <CheckCircle color="#234E49" size={20} /> Gym
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default WhoShouldPartner;
