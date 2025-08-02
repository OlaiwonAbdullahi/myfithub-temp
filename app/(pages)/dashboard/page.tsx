import React from "react";
import Welcome from "./components/welcome";
import QuickAction from "./components/quickAction";
import RecentBookings from "./components/recentBookings";

const Page = () => {
  return (
    <div className="space-y-8 p-8">
      <Welcome />
      <QuickAction />
      <RecentBookings />
    </div>
  );
};

export default Page;
