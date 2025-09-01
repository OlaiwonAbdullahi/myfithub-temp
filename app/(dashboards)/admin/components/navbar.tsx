import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" p-5 border-b border-b-[#E5E5E5] px-10 font-fredoka text-[#234E49] flex items-center justify-between">
      <div className=""> </div>
      <div className="flex items-center space-x-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search users, classes..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg   w-64"
          />
        </div>

        <button className="relative p-2 hover:bg-gray-100 rounded-lg">
          <Bell className="h-5 w-5" />
        </button>
        <Link href="/dashboard/account">
          <Avatar className="h-10 w-10 rounded-full  shadow-lg ">
            <AvatarImage src="https://tapback.co/api/avatar/johndoe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
