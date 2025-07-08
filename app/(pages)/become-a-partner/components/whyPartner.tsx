import Heading from "@/app/ui/heading";
import {
  CalendarCheck,
  DollarSign,
  QrCode,
  Star,
  UserCheck,
} from "lucide-react";
import React from "react";

const WhyPartner = () => {
  const details = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#234E49]" />,
      title: "Reach a Ready Audience",
      description:
        "Our members are actively seeking new gyms, classes, and wellness services in their area. Get your business in front of highly targeted, health-conscious individuals.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#234E49]" />,
      title: "Boost Your Bookings & Fill Empty Spots",
      description:
        "Maximize your facility’s capacity by welcoming new faces. Whether it's group classes or open gym access, we help fill those unused time slots.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-[#234E49]" />,
      title: "No upfront cost",
      description:
        "We work on a subscription model for users, not high listing fees for you. Listing your business is free, and you benefit from increased traffic and brand exposure.",
    },
    {
      icon: <QrCode className="w-6 h-6 text-[#234E49]" />,
      title: "Seamless Member Access",
      description:
        "Our integrated platform makes it easy for users to check in, book classes, and engage with your offerings without disrupting your current system.",
    },
    {
      icon: <Star className="w-6 h-6 text-[#234E49]" />,
      title: "Build Brand Trust",
      description:
        "With detailed business profiles, customer reviews, photos, and class schedules, you can showcase what makes your studio stand out.",
    },
  ];
  return (
    <div className=" flex justify-center flex-col my-10">
      <div className="">
        <Heading
          title="Why Partner With Us?"
          paragraph="Unlock new opportunities and elevate your business with our comprehensive platform."
        />
      </div>
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 justify-around mx-auto items-center gap-6 ">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-60 border border-[#c5c5c5] rounded-lg bg-white p-2.5 gap-1 flex flex-col items-center text-center justify-start"
          >
            <span className="p-2 bg-[#234E49]/30 text-[#234E49] rounded-full">
              {item.icon}
            </span>
            <h2 className="text-xl font-bold font-sora text-[#234E49]">
              {item.title}
            </h2>
            <p className="text-sm font-fredoka">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
