"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookIcon,
  Dumbbell,
  LayoutGridIcon,
  LayoutList,
  Activity,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      id: "home",
      label: "Overview",
      icon: LayoutGridIcon,
      link: "/dashboard/#",
    },
    {
      id: "studios",
      label: "Studios",
      icon: Dumbbell,
      link: "/dashboard/studiolist",
    },
    {
      id: "sessions",
      label: "Sessions",
      icon: LayoutList,
      link: "/dashboard/sessions",
    },
    {
      id: "bookings",
      label: "Bookings",
      icon: BookIcon,
      link: "/dashboard/bookings",
    },
    {
      id: "calories",
      label: "Calories Tracker",
      icon: Activity,
      link: "/dashboard/calories-tracker",
    },
  ];

  return (
    <div className="font-fredoka">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Brand */}
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center font-sora">
              <div className="text-2xl font-semibold text-gray-900">
                MyFitHub
              </div>
              <sup className="text-xs text-gray-500 ml-1">Beta</sup>
            </Link>
          </div>

          {/* Nav items */}
          <div className="hidden md:block">
            <nav className="flex">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.link ||
                  pathname.startsWith(`${item.link}/`);

                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    className={`flex items-center px-6 py-2 whitespace-nowrap text-left border-b-2 transition-colors ${
                      isActive
                        ? "bg-primary/10 border-[#234E49] text-[#234E49] rounded-t-md"
                        : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 cursor-not-allowed hover:bg-gray-100 rounded-lg">
              <Heart className="h-5 w-5" />
            </button>
            <Link href="/dashboard/account">
              <Avatar className="h-10 w-10 rounded-full shadow-lg">
                <AvatarImage src="https://tapback.co/api/avatar/johndoe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
