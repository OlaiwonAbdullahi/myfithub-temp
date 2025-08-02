import React from "react";
import Welcome from "./components/welcome";
import QuickAction from "./components/quickAction";

const Page = () => {
  return (
    <div className="space-y-8 p-8">
      <Welcome />
      <QuickAction />
    </div>
  );
};

export default Page;
