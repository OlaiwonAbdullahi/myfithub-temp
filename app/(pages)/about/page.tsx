import Hero from "@/app/ui/hero";
import React from "react";
import Intro from "./components/intro";
import Team from "./components/team";

const Page = () => {
  return (
    <div>
      <Hero
        title="About Us"
        description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione temporibus dolore obcaecati, recusandae quis esse optio vero mollitia aliquam nihil voluptatibus. Eaque in sit iusto similique? Soluta, natus veniam."
        btnText="Our Service"
      />
      <Intro />
      <Team />
    </div>
  );
};

export default Page;
