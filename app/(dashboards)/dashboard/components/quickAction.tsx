import {
  Calendar,
  MapPin,
  Star,
  Clock,
  Activity,
  BotMessageSquare,
} from "lucide-react";
import Link from "next/link";

const QuickAction = () => {
  const actions = [
    {
      id: "book-session",
      title: "Book a Session",
      description: "Explore and book your next workout",
      icon: Calendar,
      link: "/dashboard/sessions",
      status: "active",
    },
    {
      id: "find-studios",
      title: "Find Studios",
      description: "Discover gyms near you",
      icon: MapPin,
      link: "/dashboard/studiolist",
      status: "active",
    },
    {
      id: "calories-tracker",
      title: "Calories Tracker",
      description: "Track your calories in Real-time",
      icon: Activity,
      link: "/dashboard/calories-tracker",
      status: "active",
    },
    {
      id: "ai-fitness-coach",
      title: "AI Fitness Coach",
      description: "Talk to MyFithub Coach",
      icon: BotMessageSquare,
      link: "/dashboard/fitness-coach",
      status: "active",
    },
    {
      id: "my-favorites",
      title: "My Favorites",
      description: "Quick access to saved studios",
      icon: Star,
      link: "/dashboard/studiolist",
      status: "disable",
    },
    {
      id: "schedule",
      title: "My Schedule",
      description: "View upcoming sessions",
      icon: Clock,
      link: "/dashboard/studiolist",
      status: "disable",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="font-sora text-xl font-semibold text-[#234E49] mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          const isActive = action.status === "active";

          const ActionCard = (
            <div className="flex flex-col items-center">
              <div
                className={`p-3 w-fit justify-center rounded-md mb-3 border transition-transform ${
                  isActive
                    ? "bg-blue-50 border-green-200 text-[#234E49] group-hover:scale-110"
                    : "bg-gray-100 border-gray-200 text-gray-400"
                }`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3
                className={`font-sora font-medium text-lg text-center mb-1 ${
                  isActive ? "text-[#234E49]" : "text-gray-400"
                }`}
              >
                {action.title}
              </h3>
              <p
                className={`text-xs font-fredoka text-center leading-tight ${
                  isActive ? "text-gray-500" : "text-gray-400"
                }`}
              >
                {action.description}
              </p>
            </div>
          );

          return isActive ? (
            <Link
              href={action.link}
              key={action.id}
              className="group flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200 cursor-pointer"
            >
              {ActionCard}
            </Link>
          ) : (
            <div
              key={action.id}
              className="group flex flex-col items-center p-4 rounded-lg border border-gray-100 bg-gray-50 opacity-60 cursor-not-allowed"
            >
              {ActionCard}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAction;
