import Heading from "@/app/ui/heading";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, Handshake, Rocket } from "lucide-react";
import React from "react";

const Procedure = () => {
  const details = [
    {
      icon: (
        <span className="p-3 bg-red-700/30 text-red-700 rounded-full">
          <FileText className="w-6 h-6 text-red-700" />
        </span>
      ),

      title: "Apply Online",
      description:
        "Submit your business details through our simple online application form.",
    },
    {
      icon: (
        <span className="p-3 bg-green-700/30 text-green-700 rounded-full">
          <CheckCircle className="w-6 h-6 text-green-700" />
        </span>
      ),
      title: "Review & Approval",
      description:
        "Our team reviews your application to ensure a perfect fit with MyFitHub's community.",
    },
    {
      icon: (
        <span className="p-3 bg-violet-700/30 text-violet-700 rounded-full">
          <Handshake className="w-6 h-6 text-violet-700" />
        </span>
      ),
      title: "Seamless Onboarding",
      description:
        "Get set up with your MyFitHub profile, scheduling tools, and marketing resources.",
    },
    {
      icon: (
        <span className="p-3 bg-blue-700/30 text-blue-700 rounded-full">
          <Rocket className="w-6 h-6 text-blue-700" />
        </span>
      ),
      title: "Grow Your Business",
      description:
        "Start attracting new clients and watch your fitness community flourish.",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col my-10">
      <Heading
        title="Our Simple Partnership Process"
        paragraph="Joining MyFitHub is straightforward. Follow these steps to become a valued partner."
      />

      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 justify-around mx-auto items-center gap-6 ">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-60 rounded-lg bg-white p-2.5 gap-1 flex flex-col items-center text-center justify-start"
          >
            <div className=" flex flex-row relative">
              {item.icon}

              <span className="bg-primary text-white rounded-full w-4 h-4 text-xs -right-1 absolute font-fredoka flex justify-center items-center ">
                {idx + 1}
              </span>
            </div>
            <h2 className="text-lg  whitespace-normal font-bold font-sora text-[#234E49]">
              {item.title}
            </h2>
            <p className="text-sm font-fredoka">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="">
        <Button className="bg-primary text-white font-fredoka h-10 w-20">
          Join Us
        </Button>
      </div>
    </div>
  );
};

export default Procedure;
