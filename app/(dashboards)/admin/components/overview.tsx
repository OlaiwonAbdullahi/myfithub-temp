import { DollarSign, TrendingUp, Users, BicepsFlexed } from "lucide-react";

const Overview = () => {
  const metrics = [
    {
      title: "Total Users",
      value: "15k",
      change: "-12% ",
      duration: "from last month",
      positive: false,
      icon: Users,
    },
    {
      title: "Total Revenue",
      value: "$1,500",
      change: "+8%",
      duration: "from last month",
      positive: true,
      icon: DollarSign,
    },
    {
      title: "Total Studios",
      value: "5k",
      change: "+8% ",
      duration: "from last month",
      positive: true,
      icon: BicepsFlexed,
    },
    {
      title: "Growth Rate",
      value: "24.5%",
      change: "-8% ",
      duration: "from last Week",
      positive: false,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="flex flex-row gap-10">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-rows-1 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div
              key={i}
              className="bg-white shadow-sm border border-[#234E49]/10 rounded-xl gap-y-4 p-3 flex flex-col justify-between transition hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-sora font-medium text-[#234E49]">
                  {metric.title}
                </h2>
                <div className="border border-[#234E49]/40 rounded-full p-2 h-10 w-10 flex items-center justify-center bg-primary/5">
                  <Icon className="text-[#234E49] h-5 w-5" />
                </div>
              </div>
              <div className="flex items-end justify-between gap-2">
                <p className="text-[#234E49] font-sora text-xl font-bold">
                  {metric.value}
                </p>
                <p
                  className={`text-sm font-fredoka  flex flex-col leading-2 text-right ${
                    metric.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {metric.change}
                  <span className=" text-xs whitespace-nowrap text-primary">
                    {metric.duration}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Overview;
