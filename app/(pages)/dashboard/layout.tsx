import React from "react";
import Navbar from "./components/navbar";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default Dashboard;
