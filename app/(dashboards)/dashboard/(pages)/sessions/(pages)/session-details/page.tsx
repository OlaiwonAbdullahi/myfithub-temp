"use client";

import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Heart,
  Share2,
  Target,
  Zap,
  Info,
} from "lucide-react";
import React, { useState, useMemo } from "react";
import RelatedSessions from "./components/related-sessions";

// Placeholder for omitted types and constants
interface SessionDetailsProps {
  title: string;
  instructor: {
    name: string;
    avatar: string;
    specialties: string[];
  };
  schedule: {
    date: string;
    time: string;
    duration: number;
  };
  location: {
    studio: string;
    address: string;
    room?: string;
  };
  details: {
    category: string;
    level: string;
    maxCapacity: number;
    currentBookings: number;
    equipment: string[];
  };
  description: string;
  benefits: string[];
  imageUrl: string;
}

const FALLBACK_IMAGE = "/images/fallback.jpg"; // Placeholder fallback image URL

const sampleData: SessionDetailsProps = {
  title: "Sample Session",
  instructor: {
    name: "John Doe",
    avatar: "/images/instructor.jpg",
    specialties: ["Yoga", "Pilates"],
  },
  schedule: {
    date: "2025-09-10",
    time: "10:00 AM",
    duration: 60,
  },
  location: {
    studio: "Fitness Studio",
    address: "123 Main St, City",
    room: "Studio A",
  },
  details: {
    category: "Fitness",
    level: "Beginner",
    maxCapacity: 20,
    currentBookings: 15,
    equipment: ["Yoga Mat", "Water Bottle"],
  },
  description: "A beginner-friendly fitness session to improve flexibility and strength.",
  benefits: ["Improved flexibility", "Increased strength", "Better focus"],
  imageUrl: "/images/session.jpg",
};

export default function Page() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  // Use fallback data directly
  const {
    title,
    instructor,
    schedule,
    location,
    details,
    description,
    benefits,
    imageUrl,
  } = sampleData;

  const spotsLeft = Math.max(0, details.maxCapacity - details.currentBookings);
  const isFullyBooked = spotsLeft <= 0;
  const isAlmostFull = spotsLeft <= 3 && spotsLeft > 0;

  const levelColor = useMemo(() => {
    switch (details.level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-blue-100 text-blue-800 border-blue-200";
    }
  }, [details.level]);

  const shortDate = useMemo(() => {
    const date = new Date(schedule.date);
    if (isNaN(date.getTime())) return "N/A";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }, [schedule.date]);

  const handleBooking = () => setIsBooked(!isBooked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);

  return (
    <div className="flex justify-center gap-6 mx-auto max-w-7xl py-10">
      <div className="w-4/6 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        {/* Image Header */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={imageUrl || FALLBACK_IMAGE}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== FALLBACK_IMAGE) {
                target.src = FALLBACK_IMAGE;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Bookmark and Share Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={handleBookmark}
              aria-pressed={isBookmarked}
              aria-label={isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"}
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
            >
              <Heart
                size={20}
                className={`${isBookmarked ? "text-red-500 fill-red-500" : "text-slate-600"}`}
              />
            </button>
            <button
              aria-label="Share session"
              className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-sm"
            >
              <Share2 size={20} className="text-slate-600" />
            </button>
          </div>
          {/* Category, Level, and Title */}
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 font-fredoka bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                {details.category}
              </span>
              <span
                className={`px-3 py-1 rounded-full font-fredoka text-sm font-medium border ${levelColor} bg-white text-slate-800`}
              >
                {details.level}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-1 font-sora">{title}</h1>
          </div>
        </div>
        {/* Main Content */}
        <div className="p-4 sm:p-8 font-fredoka">
          {/* Session Info Header */}
          <div className="flex justify-around flex-wrap gap-4 mb-8 p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-slate-600" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Date</p>
                <p className="text-sm font-medium text-slate-900">{shortDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-slate-600" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Time</p>
                <p className="text-sm font-medium text-slate-900">{schedule.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users size={18} className="text-slate-600" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Spots</p>
                <p className="text-sm font-medium text-slate-900">
                  {spotsLeft > 0 ? `${spotsLeft} left` : "Full"}
                </p>
              </div>
            </div>
          </div>
          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="md:col-span-2 space-y-6">
              {/* About This Session */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3 font-sora">
                  About This Session
                </h2>
                <p className="text-slate-700 leading-relaxed">{description}</p>
              </div>
              {/* Session Information */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-4 font-sora">
                  Session Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock size={16} className="text-slate-600" />
                      <span className="font-medium font-sora text-slate-900">Duration</span>
                    </div>
                    <p className="text-slate-700">{schedule.duration} minutes</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={16} className="text-slate-600" />
                      <span className="font-medium font-sora text-slate-900">Intensity</span>
                    </div>
                    <p className="text-slate-700">{details.level}</p>
                  </div>
                </div>
              </div>
              {/* Benefits */}
              <div>
                <h3 className="text-lg font-semibold font-sora text-slate-900 mb-4">
                  What You&apos;ll Get
                </h3>
                <div className="grid gap-3">
                  {benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 p-1 bg-green-100 rounded-full">
                        <Zap size={12} className="text-green-600" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Equipment Needed */}
              {details.equipment?.length ? (
                <div>
                  <h3 className="text-lg font-sora font-semibold text-slate-900 mb-3">
                    Equipment Needed
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {details.equipment.map((item, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Instructor Info */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 font-sora mb-4">Your Instructor</h3>
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={instructor.avatar || FALLBACK_IMAGE}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== FALLBACK_IMAGE) {
                        target.src = FALLBACK_IMAGE;
                      }
                    }}
                  />
                  <div>
                    <p className="font-medium text-sm whitespace-nowrap text-slate-900 font-sora">
                      {instructor.name}
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-700">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {instructor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white text-slate-600 rounded-full border border-slate-200"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Location */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4 font-sora">Location</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold font-sora text-slate-900">{location.studio}</p>
                      <p className="text-sm text-slate-600">{location.address}</p>
                      {location.room && (
                        <p className="text-sm text-slate-500">Room: {location.room}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {/* Availability */}
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-semibold font-sora text-slate-900 mb-4">Availability</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Capacity:</span>
                    <span className="font-semibold">
                      {details.currentBookings}/{details.maxCapacity}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isFullyBooked ? "bg-red-500" : isAlmostFull ? "bg-amber-500" : "bg-green-500"
                      }`}
                      style={{ width: `${(details.currentBookings / details.maxCapacity) * 100}%` }}
                    />
                  </div>
                  {isAlmostFull && !isFullyBooked && (
                    <div className="flex items-center gap-2 text-amber-600 text-sm">
                      <Info size={14} />
                      <span>Only {spotsLeft} spots remaining!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Buttons */}
        <div className="space-x-3 p-6 flex">
          <Button
            onClick={handleBooking}
            disabled={isFullyBooked}
            className={`w-1/2 py-3 font-fredoka font-semibold transition-all duration-200 ${
              isBooked ? "bg-green-600 hover:bg-green-700 text-white" : "bg-primary hover:[#234E49]/80 text-white"
            } ${isFullyBooked ? "opacity-50 cursor-not-allowed" : ""}`}
            aria-label={
              isFullyBooked ? "Session is fully booked" : isBooked ? "Cancel booking" : "Book session"
            }
          >
            {isFullyBooked ? "Session Full" : isBooked ? "Cancel Booking" : "Book Now"}
          </Button>
          {!isFullyBooked && (
            <Button variant="outline" className="w-1/2 font-fredoka" aria-label="Add to waitlist">
              Add to Wishlist
            </Button>
          )}
        </div>
      </div>
      {/* Related Sessions */}
      <div className="w-2/6 flex justify-center">
        <RelatedSessions />
      </div>
    </div>
  );
}
