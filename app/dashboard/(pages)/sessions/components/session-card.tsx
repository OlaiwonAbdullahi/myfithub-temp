import { Calendar, Clock, Users, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { FitnessSession } from "../../../types/session";

interface SessionCardProps {
  session: FitnessSession;
  onBookSession: (sessionId: string) => void;
  onViewDetails: (session: FitnessSession) => void;
}

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
  const spotsLeft = session.capacity - session.enrolled;

  return (
    <Card className="group pt-0 font-fredoka bg-green-50/60 backdrop-blur-2xl border border-green-50 relative overflow-hidden rounded-2xl  transition-all duration-500 hover:shadow-sm hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br  opacity-5`} />

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
          </div>
        </div>
      </div>

      <CardContent className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-bold text-xl font-sora text-gray-900 leading-tight group-hover:text-[#234E49] transition-colors duration-300">
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
            <Building className="w-4 h-4 text-[#234E49]" />
            <span className="capitalize">{session.studio}</span>
          </div>
        </div>

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

        <div className="flex items-center px-2 gap-2 justify-between pt-4 border-t border-gray-100">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onViewDetails(session)}
            className="border-[#234E49] w-1/2 cursor-pointer bg-transparent text-[#234E49] hover:bg-[#234E49] hover:text-white transition-all duration-300"
          >
            Details
          </Button>
          <Button
            onClick={() => onBookSession(session.id)}
            size="lg"
            disabled={spotsLeft === 0}
            className="bg-gradient-to-r w-1/2 cursor-pointer from-[#234E49] to-[#2d5f59] hover:from-[#1a3a36] hover:to-[#234E49] text-white border-0 transition-all duration-300 hover:shadow-lg disabled:opacity-50"
          >
            {spotsLeft === 0 ? "Full" : "Book Now"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
