import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { DollarSign, TrendingUp, Calendar, Users } from "lucide-react";
import OverviewChart from "./chart";

const Overview = () => {
  const metrics = [
    {
      title: "Total Bookings",
      value: "15k",
      change: "-12% from last month",
      positive: false,
      icon: Calendar,
    },
    {
      title: "Revenue",
      value: "$1,500",
      change: "+8% from last month",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "Total Members",
      value: "5k",
      change: "+8% from last month",
      positive: true,
      icon: Users,
    },
    {
      title: "Growth Rate",
      value: "24.5%",
      change: "-8% from last month",
      positive: false,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-row gap-10">
      {/* Stats Cards */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-sm border border-[#234E49]/10 rounded-xl p-5 flex flex-col justify-between transition hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-sora font-medium text-[#234E49]">
                  {metric.title}
                </h2>
                <div className="border border-[#234E49]/40 rounded-full p-2 h-10 w-10 flex items-center justify-center bg-[#234E49]/5">
                  <Icon className="text-[#234E49] h-5 w-5" />
                </div>
              </div>
              <div>
                <p className="text-[#234E49] font-sora text-3xl font-bold">
                  {metric.value}
                </p>
                <p
                  className={`text-sm font-fredoka ${
                    metric.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-1/2 h-[21.5rem] bg-white border border-[#234E49]/10 rounded-xl shadow-sm py-4 px-6 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-[#234E49] font-sora font-semibold">
            Analytics Overview
          </h3>

          <Select>
            <SelectTrigger className="w-[140px] font-fredoka focus:ring-0 text-[#234E49] border border-[#234E49]/10 cursor-pointer rounded-lg">
              <SelectValue placeholder="Last 7 days" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="font-fredoka text-gray-600 text-sm">
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1  rounded-lg ">
          <OverviewChart />
        </div>
      </div>
    </div>
  );
};

export default Overview;
