import Heading from "@/app/ui/heading";
import { WHY_PARTNER_DETAILS } from "@/lib/constant";
import React from "react";

const WhyPartner = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4">
      <Heading
        title="Why Partner With Us?"
        paragraph="Unlock new opportunities and elevate your business with our comprehensive platform."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-10 justify-items-center">
        {WHY_PARTNER_DETAILS.map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-60 border border-[#c5c5c5] rounded-lg bg-white p-2.5 gap-1 flex flex-col items-center text-center justify-start"
          >
            <span className="p-2 bg-[#234E49]/30 text-[#234E49] rounded-full">
              <item.icon />
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
