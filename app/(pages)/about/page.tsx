"use client";
import Hero from "@/app/ui/hero";
import React, { useState } from "react";
import Intro from "./components/intro";
import Faq from "./components/faq";
import Chatbot from "@/app/components/chatbot";
import { MessageSquare } from "lucide-react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Hero
        title="About Us"
        description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione temporibus dolore obcaecati, recusandae quis esse optio vero mollitia aliquam nihil voluptatibus. Eaque in sit iusto similique? Soluta, natus veniam."
        more=""
      />
      <Intro />
      <Faq />
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
