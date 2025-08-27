import { Clock, MapPin, Calendar } from "lucide-react";

const RecentBookings = () => {
  const bookings = [
    {
      id: 1,
      className: "HIIT Training",
      studio: "FitZone Studio",
      date: "Today",
      time: "6:00 PM",
      status: "confirmed",
      location: "Downtown",
    },
    {
      id: 2,
      className: "Yoga Flow",
      studio: "Zen Wellness",
      date: "Tomorrow",
      time: "8:00 AM",
      status: "confirmed",
      location: "Midtown",
    },
    {
      id: 3,
      className: "Strength Training",
      studio: "Iron Gym",
      date: "Jan 15",
      time: "7:00 PM",
      status: "pending",
      location: "Uptown",
    },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sora text-xl font-semibold text-gray-900">
          Recent Bookings
        </h2>
        <button className="text-[#234E49] text-sm font-medium hover:underline font-fredoka">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition-shadow font-fredoka"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-sora font-medium text-gray-900 mb-1">
                  {booking.className}
                </h3>
                <p className="text-sm text-gray-600 mb-2 font-fredoka">
                  {booking.studio}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {booking.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {booking.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {booking.location}
                  </div>
                </div>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  booking.status === "confirmed"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBookings;
