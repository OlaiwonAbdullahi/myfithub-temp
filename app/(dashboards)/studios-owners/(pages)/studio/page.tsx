import React from "react";
import StudioForm from "./components/studioForm";

const Page = () => {
  return (
    <div>
      <div className=" mb-4">
        <h1 className="text-2xl font-medium text-gray-900 mb-1 font-sora">
          Studio Management
        </h1>
      </div>
      <div className=" h-screen overflow-y-auto scrollbar-hide  ">
        <StudioForm />
      </div>
    </div>
  );
};

export default Page;
