"use client";
import React, { useState } from "react";
import TrustedPartners from "./components/trustedPartners";

import Feature from "./components/feature";
import HowItWork from "./components/howItWork";
import Hero from "./components/hero";
import Chatbot from "./components/chatbot";
import { MessageSquare } from "lucide-react";
//import Pricing from "./components/pricing";

const Page = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Hero />
      <TrustedPartners />

      <Feature />
      <HowItWork />
      {/*
      <Pricing />
      */}
      <button
        className="fixed bottom-10 cursor-pointer right-4 bg-primary text-white p-3 rounded-full shadow-lg"
        onClick={() => setOpen(true)}
      >
        <MessageSquare size={30} className=" cursor-pointer" />
      </button>
      {open && <Chatbot open={open} onClose={onClose} />}
    </div>
  );
};

export default Page;
