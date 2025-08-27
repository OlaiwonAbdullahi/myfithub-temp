import Heading from "@/app/ui/heading";
import React from "react";

const Testimonies = () => {
  const details = [
    {
      avatar: "https://tapback.co/api/avatar/kate.jpg",

      name: "Kate",
      description:
        "Submit your business details through our simple online application form.",
      company: "Head of Trainer, Gymcenter",
    },
    {
      avatar: "https://tapback.co/api/avatar/Joy.jpg",
      name: "Joy",
      description:
        "Our team reviews your application to ensure a perfect fit with MyFitHub's community.",
      company: "CEO Yogacenter",
    },
    {
      avatar: "https://tapback.co/api/avatar/Abdul.jpg",
      name: "Abdul",
      description:
        "Get set up with your MyFitHub profile, scheduling tools, and marketing resources.",
      company: "COO Gymcenter",
    },
    {
      avatar: "https://tapback.co/api/avatar/Tola.jpg",
      name: "Tola",
      description:
        "Start attracting new clients and watch your fitness community flourish.",
      company: "COO Yogacenter",
    },
  ];
  return (
    <div className=" flex flex-col justify-center">
      <Heading
        title="Hear From Our Partners"
        paragraph="Don't just take our word for it. See what real businesses are saying about partnering with MyFitHub."
      />
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 justify-around mx-auto items-center gap-6 ">
        {details.map((item, idx) => (
          <div
            key={idx}
            className="w-60 h-32 rounded-lg bg-white p-2.5 gap-1 flex flex-col items-start border border-[#c5c5c5] text-start justify-start"
          >
            <p className="text-sm font-fredoka italic mb-1.5">
              {item.description}
            </p>
            <div className=" flex flex-row items-center gap-1.5">
              <div className=" ">
                <img
                  src={item.avatar}
                  alt=""
                  className=" rounded-full h-10 w-10"
                />
              </div>
              <div className=" flex flex-col">
                <h2 className="text-sm  whitespace-normal font-medium font-sora text-[#234E49]">
                  {item.name}
                </h2>
                <span className=" text-xs font-fredoka">{item.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonies;
