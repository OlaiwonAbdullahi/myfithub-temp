import Hero from "@/app/ui/hero";
import React from "react";
import Form from "./components/form";

const Page = () => {
  return (
    <div>
      <Hero
        title="Contact Us"
        description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione temporibus dolore obcaecati, recusandae quis esse optio vero mollitia aliquam nihil voluptatibus. Eaque in sit iusto similique? Soluta, natus veniam."
        btnText=""
        more=""
      />
      <div className="">
        <Form />
      </div>
    </div>
  );
};

export default Page;
