"use client";

import { useState } from "react";
import { Calendar, Clock, Users, Star, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { FitnessSession } from "../../../types/session";

interface SessionCardProps {
  session: FitnessSession;
  onBookSession: (sessionId: string) => void;
  onViewDetails: (session: FitnessSession) => void;
}

const typeColors = {
  yoga: "from-green-400 to-emerald-500",
  hiit: "from-red-400 to-orange-500",
  strength: "from-blue-400 to-indigo-500",
  cardio: "from-pink-400 to-rose-500",
  pilates: "from-purple-400 to-violet-500",
  dance: "from-yellow-400 to-amber-500",
};

const typeIcons = {
  yoga: "🧘‍♀️",
  hiit: "🔥",
  strength: "💪",
  cardio: "❤️",
  pilates: "🤸‍♀️",
  dance: "💃",
};

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

export function SessionCard({
  session,
  onBookSession,
  onViewDetails,
}: SessionCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const enrollmentPercentage = (session.enrolled / session.capacity) * 100;
  const spotsLeft = session.capacity - session.enrolled;

  return (
    <Card
      className="group relative overflow-hidden rounded-2xl border-0 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          typeColors[session.type]
        } opacity-5`}
      />

      {/* Featured badge */}
      {session.featured && (
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-gradient-to-r from-[#234E49] to-[#2d5f59] text-white border-0 shadow-lg">
            Featured
          </Badge>
        </div>
      )}

      {/* Spots indicator */}
      <div className="absolute top-4 right-4 z-20">
        <div
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            spotsLeft <= 3
              ? "bg-red-100 text-red-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {spotsLeft} spots left
        </div>
      </div>

      {/* Session image and instructor */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={
            session.image ||
            "/placeholder.svg?height=200&width=400&text=Fitness+Session"
          }
          alt={session.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Instructor overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <img
            src={
              session.instructorImage ||
              "/placeholder.svg?height=40&width=40&text=Instructor"
            }
            alt={session.instructor}
            className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
          />
          <div className="text-white">
            <p className="font-medium text-sm">{session.instructor}</p>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs">4.9</span>
            </div>
          </div>
        </div>

        {/* Type icon */}
        <div className="absolute top-4 left-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl shadow-lg">
            {typeIcons[session.type]}
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-xl text-gray-900 leading-tight group-hover:text-[#234E49] transition-colors duration-300">
              {session.title}
            </h3>
            <Badge
              className={`${
                difficultyColors[session.difficulty]
              } border-0 capitalize`}
            >
              {session.difficulty}
            </Badge>
          </div>

          <p className="text-gray-600 text-sm line-clamp-2">
            {session.description}
          </p>
        </div>

        {/* Session details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4 text-[#234E49]" />
            <span>{session.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4 text-[#234E49]" />
            <span>
              {session.time} ({session.duration}min)
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4 text-[#234E49]" />
            <span>
              {session.enrolled}/{session.capacity}
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Target className="w-4 h-4 text-[#234E49]" />
            <span className="capitalize">{session.type}</span>
          </div>
        </div>

        {/* Enrollment progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Enrollment</span>
            <span className="font-medium text-gray-900">
              {Math.round(enrollmentPercentage)}%
            </span>
          </div>
          <Progress value={enrollmentPercentage} className="h-2" />
        </div>

        {/* Equipment tags */}
        <div className="flex flex-wrap gap-2">
          {session.equipment.slice(0, 3).map((item) => (
            <div
              key={item}
              className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200"
            >
              {item}
            </div>
          ))}
          {session.equipment.length > 3 && (
            <div className="bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-700">
              +{session.equipment.length - 3}
            </div>
          )}
        </div>

        {/* Price and actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="space-y-1">
            <div className="text-2xl font-bold text-[#234E49]">
              ${session.price}
            </div>
            <div className="text-xs text-gray-500">per session</div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onViewDetails(session)}
              className="border-[#234E49] text-[#234E49] hover:bg-[#234E49] hover:text-white transition-all duration-300"
            >
              Details
            </Button>
            <Button
              onClick={() => onBookSession(session.id)}
              disabled={spotsLeft === 0}
              className="bg-gradient-to-r from-[#234E49] to-[#2d5f59] hover:from-[#1a3a36] hover:to-[#234E49] text-white border-0 transition-all duration-300 hover:shadow-lg disabled:opacity-50"
            >
              {spotsLeft === 0 ? "Full" : "Book Now"}
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Hover effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[1px] transition-opacity duration-500 pointer-events-none ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </Card>
  );
}
