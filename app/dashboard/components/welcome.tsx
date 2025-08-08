import { Calendar, Clock, Star, TrendingUp } from "lucide-react";

const Welcome = () => {
  return (
    <div className="bg-gradient-to-br font-fredoka from-white to-gray-50/50 rounded-2xl p-8 shadow-sm border border-gray-100/50">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src="https://tapback.co/api/avatar/johndoe"
              alt="User Avatar"
              className="h-20 w-20 rounded-full border-2 border-[#234E49]/40 shadow-lg "
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 h-6 w-6 rounded-full border-3 border-white flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-500 mb-1 font-fredoka">
              Welcome back,
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-1 font-sora">
              Abdullahi
            </h1>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span>+2 classes from last month</span>
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <div className="px-4 py-2 bg-[#234E49]/10 text-[#234E49] rounded-xl text-sm font-medium">
            Premium Member
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Calendar className="h-6 w-6 text-[#234E49]" />
            </div>
            <div className="text-xs text-green-600  font-semibold bg-green-50 px-2 py-1 rounded-full">
              +20%
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1 font-sora">
            12
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Classes This Month
          </div>
          <div className="mt-3 w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-[#234E49] h-2 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Star className="h-6 w-6 text-[#234E49]" />
            </div>
            <div className="text-xs text-gray-500 font-medium">Active</div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1 font-sora">
            3
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Favorite Studios
          </div>
          <div className="mt-3 flex -space-x-2">
            <div className="w-6 h-6 bg-purple-200 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-blue-200 rounded-full border-2 border-white"></div>
            <div className="w-6 h-6 bg-green-200 rounded-full border-2 border-white"></div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 rounded-xl">
              <Clock className="h-6 w-6 text-[#234E49]" />
            </div>
            <div className="text-xs text-orange-600 font-semibold bg-orange-50 px-2 py-1 rounded-full">
              Soon
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1 font-sora">
            2
          </div>
          <div className="text-sm text-gray-600 font-medium">
            Upcoming Sessions
          </div>
          <div className="mt-3 text-xs text-gray-500">
            Next: Tomorrow at 9:00 AM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
