import React from "react";
import Overview from "./components/overview";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 font-sora">
          Welcome Back
        </h1>
        <div className="text-sm font-medium text-gray-500 mb-1 font-fredoka">
          Welcome to MyFitHub Dashboard
        </div>
      </div>
      <div className="">
        <Overview />
      </div>
    </div>
  );
};

export default Page;
