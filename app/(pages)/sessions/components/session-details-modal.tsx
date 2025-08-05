"use client";

import {
  X,
  Calendar,
  Clock,
  Users,
  Target,
  Zap,
  Heart,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { FitnessSession } from "../../../types/session";

interface SessionDetailsModalProps {
  session: FitnessSession | null;
  isOpen: boolean;
  onClose: () => void;
  onBookSession: (sessionId: string) => void;
}

const difficultyColors = {
  beginner: "bg-green-100 text-green-800",
  intermediate: "bg-yellow-100 text-yellow-800",
  advanced: "bg-red-100 text-red-800",
};

export function SessionDetailsModal({
  session,
  isOpen,
  onClose,
  onBookSession,
}: SessionDetailsModalProps) {
  if (!isOpen || !session) return null;

  const enrollmentPercentage = (session.enrolled / session.capacity) * 100;
  const spotsLeft = session.capacity - session.enrolled;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={
              session.image ||
              "/placeholder.svg?height=300&width=600&text=Fitness+Session"
            }
            alt={session.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-2"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold mb-2">{session.title}</h2>
            <div className="flex items-center gap-4">
              <Badge
                className={`${
                  difficultyColors[session.difficulty]
                } border-0 capitalize`}
              >
                {session.difficulty}
              </Badge>
              <div className="flex items-center gap-2">
                <img
                  src={
                    session.instructorImage ||
                    "/placeholder.svg?height=32&width=32&text=Instructor"
                  }
                  alt={session.instructor}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <span className="font-medium">{session.instructor}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Calendar className="w-6 h-6 text-[#234E49] mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{session.date}</div>
              <div className="text-sm text-gray-600">Date</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Clock className="w-6 h-6 text-[#234E49] mx-auto mb-2" />
              <div className="font-semibold text-gray-900">{session.time}</div>
              <div className="text-sm text-gray-600">
                {session.duration} min
              </div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Users className="w-6 h-6 text-[#234E49] mx-auto mb-2" />
              <div className="font-semibold text-gray-900">
                {session.enrolled}/{session.capacity}
              </div>
              <div className="text-sm text-gray-600">Enrolled</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <Target className="w-6 h-6 text-[#234E49] mx-auto mb-2" />
              <div className="font-semibold text-gray-900 capitalize">
                {session.type}
              </div>
              <div className="text-sm text-gray-600">Type</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              About This Session
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {session.description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {session.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <Zap className="w-4 h-4 text-[#234E49]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#234E49]" />
              Equipment Provided
            </h3>
            <div className="flex flex-wrap gap-2">
              {session.equipment.map((item, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-[#234E49]/10 text-[#234E49] hover:bg-[#234E49]/20"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          {/* Enrollment progress */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900">Class Capacity</span>
              <span className="text-sm text-gray-600">
                {session.enrolled} of {session.capacity} enrolled
              </span>
            </div>
            <Progress value={enrollmentPercentage} className="h-3" />
            <div className="text-sm text-gray-600 mt-1">
              {spotsLeft > 0 ? `${spotsLeft} spots remaining` : "Class is full"}
            </div>
          </div>

          {/* Booking section */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#234E49]/5 to-[#234E49]/10 rounded-xl">
            <div>
              <div className="text-2xl font-bold text-[#234E49]">
                ${session.price}
              </div>
              <div className="text-sm text-gray-600">per session</div>
            </div>
            <Button
              onClick={() => onBookSession(session.id)}
              disabled={spotsLeft === 0}
              className="bg-gradient-to-r from-[#234E49] to-[#2d5f59] hover:from-[#1a3a36] hover:to-[#234E49] text-white border-0 px-8 py-3 text-lg font-medium transition-all duration-300 hover:shadow-lg disabled:opacity-50"
            >
              {spotsLeft === 0 ? "Class Full" : "Book This Session"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
