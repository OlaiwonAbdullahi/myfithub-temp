"use client";
import React, { useEffect } from "react";
import Overview from "./components/overview";
import RecentUsers from "./components/recentUsers";

const Page = () => {
  interface UserData {
    name: string;
    // Add other properties of userData here
  }

  const [userData, setUserData] = React.useState<UserData | null>(null);
  const fetchUserData = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      throw new Error("No authentication token found");
    }
    try {
      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/auth/studio/studio",
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
      setUserData(data.data);
      console.log("User Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className=" space-y-6">
      {userData && (
        <>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 mb-1 font-sora">
              Welcome Back {userData.name}!
            </h1>
            <div className="text-sm font-medium text-gray-500 mb-1 font-fredoka">
              Welcome to MyFitHub Dashboard
            </div>
          </div>
          <div className="">
            <Overview />
          </div>
          <div className="">
            <RecentUsers />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
