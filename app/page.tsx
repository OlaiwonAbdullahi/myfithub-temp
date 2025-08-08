import React from "react";
import TrustedPartners from "./components/trustedPartners";

import Feature from "./components/feature";
import HowItWork from "./components/howItWork";
import Hero from "./components/hero";
//import Pricing from "./components/pricing";

const Page = () => {
  return (
    <div>
      <Hero />
      <TrustedPartners />

      <Feature />
      <HowItWork />
      {/*
      <Pricing />
      */}
    </div>
  );
};

export default Page;
