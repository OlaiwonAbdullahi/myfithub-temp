"use client";
import { useState, useEffect } from "react";
import { Clock, MapPin, Calendar } from "lucide-react";

const Bookings = () => {
  interface Booking {
    id: string;
    className: string;
    studio: string;
    date: string;
    time: string;
    location: string;
    status: string;
  }

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading] = useState(true);
  const [error] = useState(null);

  const fetchBookingHistory = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      throw new Error("No authentication token found");
    }
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setBookings(data.data);
      console.log("User Bookings Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchBookingHistory();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm m-6">
        <div className="animate-pulse">
          <div className=" flex flex-row justify-between">
            <div className="h-[20px] bg-gray-200 rounded w-1/5 mb-4"></div>
            <div className=" bg-gray-200 rounded w-[100px] h-[20px] mb-4"></div>
          </div>
          <div className="space-y-3">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchBookingHistory}
            className="bg-[#234E49] text-white px-4 py-2 rounded-lg hover:bg-[#1a3b36] transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sora text-xl font-semibold text-gray-900">
          Recent Bookings
        </h2>
        <button className="text-[#234E49] text-sm font-medium hover:underline font-fredoka">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {bookings.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No recent bookings found
          </p>
        ) : (
          bookings.map((booking) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Bookings;
