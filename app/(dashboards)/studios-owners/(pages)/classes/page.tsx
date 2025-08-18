import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <div>
      {" "}
      <div className=" flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium text-gray-900 mb-1 font-sora">
          Class Management
        </h1>
        <div className="">
          <Button className=" bg-[#234E49] font-fredoka cursor-pointer hover:bg-[#234E49]/80">
            Add New Class
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
