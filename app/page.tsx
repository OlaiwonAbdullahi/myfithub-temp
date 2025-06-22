import React from "react";
import Hero from "./components/hero";
import TrustedPartners from "./components/trustedPartners";
import About from "./components/about";
import Feature from "./components/feature";
import HowItWork from "./components/howItWork";
//import Pricing from "./components/pricing";

const Page = () => {
  return (
    <div>
      <Hero />
      <TrustedPartners />
      <About />
      <Feature />
      <HowItWork />
      {/*
      <Pricing />
      */}
    </div>
  );
};

export default Page;
