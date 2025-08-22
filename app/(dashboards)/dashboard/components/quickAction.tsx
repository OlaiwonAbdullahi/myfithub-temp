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
    },
    {
      id: "find-studios",
      title: "Find Studios",
      description: "Discover gyms near you",
      icon: MapPin,
      link: "/dashboard/studiolist",
    },
    {
      id: "calories-tracker",
      title: "Calories Tracker",
      description: "Track your calories in Real-time",
      icon: Activity,
      link: "/dashboard/calories-tracker",
    },
    {
      id: "my-favorites",
      title: "My Favorites",
      description: "Quick access to saved studios",
      icon: Star,
      link: "/dashboard/studiolist",
    },
    {
      id: "schedule",
      title: "My Schedule",
      description: "View upcoming sessions",
      icon: Clock,
      link: "/dashboard/studiolist",
    },
    {
      id: "ai-fitness-coach",
      title: "AI Fitness Coach",
      description: "Talk to MyFithub Coach",
      icon: BotMessageSquare,
      link: "/dashboard/fitness-coach",
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
          return (
            <Link
              href={action.link || "#"}
              key={action.id}
              className="group flex flex-col items-center p-4 rounded-lg hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-gray-200"
            >
              <button key={action.id} className="flex flex-col items-center">
                <div
                  className={
                    "bg-blue-50 border border-green-200 text-[#234E49] p-3 w-fit justify-center rounded-md mb-3 group-hover:scale-110 transition-transform"
                  }
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-sora font-medium text-lg text-[#234E49] text-center mb-1">
                  {action.title}
                </h3>
                <p className="text-xs text-gray-500 font-fredoka text-center leading-tight">
                  {action.description}
                </p>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickAction;
