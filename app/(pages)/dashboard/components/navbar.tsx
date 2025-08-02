"use client";
import { Bell, BookIcon, Dumbbell, HomeIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { id: "home", label: "Home", icon: HomeIcon },
    { id: "studios", label: "Studios", icon: Dumbbell },
    { id: "bookings", label: "Bookings", icon: BookIcon },
  ];

  return (
    <div className="font-fredoka">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center font-sora">
              <div className="text-2xl font-semibold text-gray-900">
                MyFitHub
              </div>
              <sup className="text-xs text-gray-500 ml-1">Beta</sup>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav className="flex">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center px-6 py-3 text-left hover:bg-gray-50 border-b-2 transition-colors ${
                      activeTab === item.id
                        ? "bg-[#234E49]/10 border-[#234E49] text-[#234E49]"
                        : "border-transparent text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search gyms, classes..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#234E49] focus:border-transparent w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="h-8 w-8 bg-[#234E49] rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
