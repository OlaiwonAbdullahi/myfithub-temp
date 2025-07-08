import Hero from "@/app/ui/hero";
import React from "react";
import WhyPartner from "./components/whyPartner";
import Procedure from "./components/procedure";
import Testimonies from "./components/testimonies";
import Join from "./components/join";
import WhoShouldPartner from "./components/whoShouldPartner";

const Page = () => {
  return (
    <div className=" ">
      <Hero
        title="List With Us"
        description="Are you a gym, yoga/pilates studio, pool, sporting center or wellness provider looking to increase your visibility and attract more members? "
        more="Join MyFitHub and become part of a growing community that connects individuals with the best fitness and wellness experiences."
      />
      <div className="">
        <WhyPartner />
      </div>
      <div className="">
        <WhoShouldPartner />
      </div>
      <div className="">
        <Procedure />
      </div>
      <div className="">
        <Testimonies />
      </div>
      <div className="">
        <Join />
      </div>
    </div>
  );
};

export default Page;
