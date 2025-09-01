"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Crown, PenLine, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Page = () => {
  interface UserData {
    first_name?: string;
    last_name?: string;
    email?: string;
    country?: string;
    avatar?: string;
    role?: string;
    location_preferences?: string;
    phoneNumber?: string;
    sessionTier?: string;
  }

  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCompleteProfileAlert, setShowCompleteProfileAlert] =
    useState(false);
  const router = useRouter();

  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError(null);

      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }

      const data = await response.json();
      console.log("User data:", data.data.user);
      setUserData(data.data.user);

      // Check if profile is incomplete
      const user = data.data.user;
      const isProfileIncomplete =
        !user.first_name || !user.last_name || !user.email || !user.country;
      setShowCompleteProfileAlert(isProfileIncomplete);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchUserData();
  };

  const handleEditProfile = () => {
    // Navigate to edit profile page or open edit modal

    router.push("/complete-profile");
  };

  const handleUpgradeSubscription = () => {
    // Navigate to subscription upgrade page
    console.log("Navigate to upgrade subscription");
  };

  const handleCancelSubscription = () => {
    // Handle subscription cancellation
    console.log("Handle subscription cancellation");
  };

  const handleAvatarChange = () => {
    // Handle avatar upload
    console.log("Handle avatar upload");
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (showCompleteProfileAlert) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white-50/20 backdrop-blur-2xl">
        <div className="bg-white p-8 rounded-lg shadow-md border border-yellow-200 max-w-md mx-4">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 font-sora">
            Complete Your Profile
          </h2>
          <p className="mb-6 text-yellow-700 font-family-fredoka">
            Please complete your profile to access all features. Some required
            information is missing.
          </p>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowCompleteProfileAlert(false)}
              className="flex-1"
            >
              Continue Anyway
            </Button>
            <Button
              onClick={handleEditProfile}
              className="bg-primary text-white hover:bg-primary/90 flex-1"
            >
              Complete Profile
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <div className="text-lg font-medium text-gray-600">
            Loading profile...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md mx-4">
          <div className="text-lg font-medium text-red-600 mb-4">
            Error: {error}
          </div>
          <Button
            onClick={handleRetry}
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 px-6 py-10 md:px-13 max-w-6xl mx-auto">
      <div className="flex w-full items-center gap-2">
        <span className="whitespace-nowrap text-lg font-medium text-[#234E49] font-sora">
          My Profile
        </span>
        <span className="h-[1px] w-full bg-[#cccccc]"></span>
      </div>

      <div className="bg-white font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-20 w-20 rounded-full object-cover">
                <AvatarImage
                  src={
                    userData?.avatar || "https://tapback.co/api/avatar/johndoe"
                  }
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <button
                onClick={handleAvatarChange}
                className="absolute -bottom-1 bg-white -right-1 h-6 w-6 rounded-full border-2 border-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Camera color="#234E49" size={16} strokeWidth={2} />
              </button>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 mb-1 font-sora">
                {userData?.first_name && userData?.last_name
                  ? `${userData.first_name} ${userData.last_name}`
                  : userData?.first_name || "User"}
              </h1>
              {userData?.role && (
                <div className="text-sm font-medium text-gray-500 mb-1 font-fredoka">
                  {userData.role}
                </div>
              )}
              {userData?.location_preferences && (
                <div className="text-base font-medium text-gray-500 mb-1 font-fredoka">
                  {userData.location_preferences}
                </div>
              )}
            </div>
          </div>
          <Button
            onClick={handleEditProfile}
            variant="outline"
            className="sm:self-start cursor-pointer"
          >
            <PenLine className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <div className="text-xl font-semibold text-gray-900 font-sora">
            Personal Information
          </div>
          <Button variant="outline" onClick={handleEditProfile}>
            <PenLine className="w-4 h-4 mr-2" />
            Edit
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-6">
          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              First Name
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.first_name || "Not provided"}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Last Name
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.last_name || "Not provided"}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Country
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.country || "Not specified"}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Email Address
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.email || "Not provided"}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              Phone Number
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.phoneNumber || "Not provided"}
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <div className="text-sm font-medium text-gray-500 font-sora">
              User Role
            </div>
            <div className="text-lg font-medium text-gray-900">
              {userData?.role || "User"}
            </div>
          </div>

          {userData?.sessionTier && (
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium text-gray-500 font-sora">
                Session Tier
              </div>
              <div className="text-lg font-medium text-gray-900">
                {userData.sessionTier}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Management */}
      <div className="bg-white space-y-4 font-fredoka rounded-2xl p-8 shadow-sm border border-gray-100/50">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <div className="text-xl font-semibold text-gray-900 font-sora">
            Account Management
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            onClick={handleUpgradeSubscription}
            className="bg-primary text-white hover:bg-primary/90"
          >
            Upgrade Subscription
          </Button>
          <Button
            onClick={handleCancelSubscription}
            className="border-red-500 text-red-500 hover:bg-red-50"
            variant="outline"
          >
            Cancel Subscription
          </Button>
        </div>

        {(userData?.sessionTier === "Premium" ||
          userData?.role === "Admin") && (
          <div className="mt-6 p-4 w-full md:w-2/3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Crown
                className="text-amber-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="font-semibold text-amber-800 font-sora">
                  {userData?.sessionTier === "Premium"
                    ? "Premium Membership Active"
                    : "Admin Account"}
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  {userData?.sessionTier === "Premium"
                    ? "Your premium subscription includes all advanced features and priority support."
                    : "You have administrative privileges with full access to all features."}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
