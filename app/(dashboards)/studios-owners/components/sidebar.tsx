"use client";
import React, { useState } from "react";
import {
  Home,
  Settings,
  Calendar,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Building,
  Users,
  CreditCard,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: "", label: "Dashboard", icon: Home },
    { id: "studio", label: "Studio Management", icon: Building },
    { id: "sessions", label: "Sessions Management", icon: Calendar },
    { id: "instructors", label: "Instructors", icon: Users },
    { id: "history", label: "Bookings History", icon: CreditCard },
    { id: "payments", label: "Payments & Transactions", icon: Wallet },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const toggleSidebar = () => setIsCollapsed((v) => !v);

  return (
    <div
      className={`bg-primary font-fredoka text-white h-full transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center">
            <Link
              href="/studios-owners"
              className="flex items-center font-sora"
            >
              <div className="text-2xl font-semibold text-[#E5E5E5]">
                MyFitHub
              </div>
              <sup className="text-xs text-[#E5E5E5] ml-1">Beta</sup>
            </Link>
          </div>
        )}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-lg hover:bg-primary/50 cursor-pointer transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2 py-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const href = item.id
              ? `/studios-owners/${item.id}`
              : "/studios-owners";

            const isActive =
              pathname === href ||
              pathname === `${href}/` ||
              pathname.startsWith(`${href}/`);

            return (
              <li key={href}>
                <Link
                  href={href}
                  title={isCollapsed ? item.label : ""}
                  className={`w-full whitespace-nowrap flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white/10 border border-white/30 text-white"
                      : "text-[#E5E5E5] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon size={20} className="flex-shrink-0" />
                  {!isCollapsed && (
                    <span className="ml-3 font-medium">{item.label}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-[#E5E5E5] p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-[#E5E5E5] to-[#234E49] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                John Doe
              </p>
              <p className="text-xs text-gray-400 truncate">john@example.com</p>
            </div>
          )}
          <div className="mt-4 space-y-2">
            <button className="w-full flex items-center px-3 py-2 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors">
              <LogOut size={20} className="flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
