import Hero from "@/app/ui/hero";
import React from "react";
import WhyPartner from "./components/whyPartner";

const Page = () => {
  return (
    <div>
      <Hero
        title="List With Us"
        description="Are you a gym, yoga/pilates studio, pool, sporting center or wellness provider looking to increase your visibility and attract more members? "
        more="Join MyFitHub and become part of a growing community that connects individuals with the best fitness and wellness experiences."
      />
      <div className="">
        <WhyPartner />
      </div>
    </div>
  );
};

export default Page;
