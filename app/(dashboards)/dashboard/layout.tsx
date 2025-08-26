import type React from "react";
import Navbar from "./components/navbar";

interface DashboardProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1  bg-gray-50 overflow-auto">{children}</main>
    </div>
  );
};

export default DashboardLayout;
