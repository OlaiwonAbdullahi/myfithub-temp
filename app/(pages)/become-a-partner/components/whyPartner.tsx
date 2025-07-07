import Heading from "@/app/ui/heading";
import { Users } from "lucide-react";
import React from "react";

const WhyPartner = () => {
  const details = [
    {
      icon: <Users />,
    },
  ];
  return (
    <div>
      <div className="">
        <Heading
          title="Why Partner With Us?"
          paragraph="Unlock new opportunities and elevate your business with our comprehensive platform."
        />
      </div>
      <div className=" w-72 border border-[#c5c5c5] rounded-lg bg-white  h- p-2.5 gap-3 flex flex-col items-center text-center justify-center ">
        <span className=" p-2  bg-[#234E49]/30 text-[#234E49] rounded-full ">
          {details[0].icon}
        </span>
        <h2 className=" text-2xl font-bold font-sora text-[#234E49]">
          Reach a Ready Audience
        </h2>
        <p className=" text-base font-fredoka">
          Our members are actively seeking new gyms, classes, and wellness
          services in their area. Get your business in front of highly targeted,
          health conscious individuals.
        </p>
      </div>
    </div>
  );
};

export default WhyPartner;
