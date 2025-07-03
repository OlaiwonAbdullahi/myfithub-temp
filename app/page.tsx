import React from "react";
import TrustedPartners from "./components/trustedPartners";

import Feature from "./components/feature";
import HowItWork from "./components/howItWork";
import Heroo from "./components/heroo";
//import Pricing from "./components/pricing";

const Page = () => {
  return (
    <div>
      <Heroo />
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
