"use client";

import { useState, useMemo } from "react";
import { Calendar, TrendingUp, Users, Award } from "lucide-react";
import type { FitnessSession, SessionFilter } from "../../types/session";
import { SessionFilters } from "./components/session-filter";
import { SessionCard } from "./components/session-card";
import { SessionDetailsModal } from "./components/session-details-modal";
import Hero from "@/app/ui/hero";

// Sample data
const sampleSessions: FitnessSession[] = [
  {
    id: "1",
    title: "Morning Power Yoga",
    instructor: "Sarah Johnson",
    instructorImage: "/placeholder.svg?height=40&width=40&text=Sarah",
    type: "yoga",
    difficulty: "intermediate",
    duration: 60,
    capacity: 20,
    enrolled: 15,
    price: 25,
    date: "Today",
    time: "7:00 AM",
    description:
      "Start your day with an energizing power yoga session that combines strength, flexibility, and mindfulness. Perfect for building core strength and improving balance.",
    equipment: ["Yoga Mat", "Blocks", "Straps", "Bolsters"],
    benefits: [
      "Improved flexibility",
      "Core strength",
      "Stress relief",
      "Better posture",
      "Mental clarity",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Power+Yoga",
    featured: true,
  },
  {
    id: "2",
    title: "HIIT Cardio Blast",
    instructor: "Mike Chen",
    instructorImage: "/placeholder.svg?height=40&width=40&text=Mike",
    type: "hiit",
    difficulty: "advanced",
    duration: 45,
    capacity: 15,
    enrolled: 12,
    price: 30,
    date: "Today",
    time: "6:00 PM",
    description:
      "High-intensity interval training designed to maximize calorie burn and improve cardiovascular fitness. Get ready to sweat!",
    equipment: [
      "Kettlebells",
      "Battle Ropes",
      "Medicine Balls",
      "Resistance Bands",
    ],
    benefits: [
      "Fat burning",
      "Cardiovascular health",
      "Increased metabolism",
      "Time efficient",
      "Full body workout",
    ],
    image: "/placeholder.svg?height=200&width=400&text=HIIT+Training",
  },
  {
    id: "3",
    title: "Strength & Conditioning",
    instructor: "Alex Rodriguez",
    instructorImage: "/placeholder.svg?height=40&width=40&text=Alex",
    type: "strength",
    difficulty: "intermediate",
    duration: 75,
    capacity: 12,
    enrolled: 8,
    price: 35,
    date: "Tomorrow",
    time: "5:30 PM",
    description:
      "Build lean muscle and increase overall strength with this comprehensive strength training session focusing on compound movements.",
    equipment: ["Barbells", "Dumbbells", "Squat Rack", "Bench", "Plates"],
    benefits: [
      "Muscle building",
      "Bone density",
      "Functional strength",
      "Improved metabolism",
      "Better posture",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Strength+Training",
    featured: true,
  },
  {
    id: "4",
    title: "Beginner's Pilates",
    instructor: "Emma Wilson",
    instructorImage: "/placeholder.svg?height=40&width=40&text=Emma",
    type: "pilates",
    difficulty: "beginner",
    duration: 50,
    capacity: 18,
    enrolled: 10,
    price: 22,
    date: "Tomorrow",
    time: "10:00 AM",
    description:
      "Perfect introduction to Pilates focusing on core strength, flexibility, and body awareness. Suitable for all fitness levels.",
    equipment: [
      "Pilates Mat",
      "Resistance Bands",
      "Pilates Ball",
      "Magic Circle",
    ],
    benefits: [
      "Core strength",
      "Flexibility",
      "Body awareness",
      "Injury prevention",
      "Stress relief",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Pilates+Class",
  },
  {
    id: "5",
    title: "Dance Cardio Party",
    instructor: "Zoe Martinez",
    instructorImage: "/placeholder.svg?height=40&width=40&text=Zoe",
    type: "dance",
    difficulty: "beginner",
    duration: 55,
    capacity: 25,
    enrolled: 20,
    price: 20,
    date: "Friday",
    time: "7:00 PM",
    description:
      "Fun, high-energy dance workout that combines popular music with easy-to-follow choreography. No dance experience required!",
    equipment: ["Sound System", "Mirrors", "Water Bottles"],
    benefits: [
      "Cardiovascular fitness",
      "Coordination",
      "Mood boost",
      "Social interaction",
      "Fun workout",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Dance+Cardio",
  },
  {
    id: "6",
    title: "Cardio Kickboxing",
    instructor: "James Park",
    instructorImage: "/placeholder.svg?height=40&width=40&text=James",
    type: "cardio",
    difficulty: "intermediate",
    duration: 60,
    capacity: 16,
    enrolled: 14,
    price: 28,
    date: "Saturday",
    time: "9:00 AM",
    description:
      "High-energy kickboxing workout that combines martial arts techniques with cardio training for a full-body workout.",
    equipment: ["Boxing Gloves", "Heavy Bags", "Focus Mitts", "Hand Wraps"],
    benefits: [
      "Cardiovascular fitness",
      "Stress relief",
      "Self-defense skills",
      "Full body workout",
      "Confidence building",
    ],
    image: "/placeholder.svg?height=200&width=400&text=Kickboxing",
  },
];

export default function FitnessSessionsPage() {
  const [selectedSession, setSelectedSession] = useState<FitnessSession | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<SessionFilter>({});
  const [searchQuery, setSearchQuery] = useState("");

  // Filter sessions based on search and filters
  const filteredSessions = useMemo(() => {
    return sampleSessions.filter((session) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          session.title.toLowerCase().includes(query) ||
          session.instructor.toLowerCase().includes(query) ||
          session.type.toLowerCase().includes(query) ||
          session.description.toLowerCase().includes(query);

        if (!matchesSearch) return false;
      }

      // Type filter
      if (filters.type && session.type !== filters.type) return false;

      // Difficulty filter
      if (filters.difficulty && session.difficulty !== filters.difficulty)
        return false;

      // Time slot filter
      if (filters.timeSlot) {
        const hour = Number.parseInt(session.time.split(":")[0]);
        const isMorning = hour < 12;
        const isAfternoon = hour >= 12 && hour < 17;
        const isEvening = hour >= 17;

        if (filters.timeSlot === "morning" && !isMorning) return false;
        if (filters.timeSlot === "afternoon" && !isAfternoon) return false;
        if (filters.timeSlot === "evening" && !isEvening) return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const handleBookSession = (sessionId: string) => {
    // Handle booking logic here
    console.log("Booking session:", sessionId);
    alert("Session booked successfully!");
  };

  const handleViewDetails = (session: FitnessSession) => {
    setSelectedSession(session);
    setIsModalOpen(true);
  };

  const totalSessions = sampleSessions.length;
  const totalEnrolled = sampleSessions.reduce(
    (sum, session) => sum + session.enrolled,
    0
  );
  const avgPrice = Math.round(
    sampleSessions.reduce((sum, session) => sum + session.price, 0) /
      totalSessions
  );

 
  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <Hero
      title="Fitness Sessions"
      description="Join our expert-led fitness sessions designed to help you achieve your health and wellness goals"
      more=""
    />

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8 px-6 max-w-7xl mx-auto">
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <Calendar className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{totalSessions}</div>
          <div className="text-sm text-white/80">Sessions Available</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <Users className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">{totalEnrolled}</div>
          <div className="text-sm text-white/80">Members Enrolled</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <TrendingUp className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">${avgPrice}</div>
          <div className="text-sm text-white/80">Average Price</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
          <Award className="w-8 h-8 mx-auto mb-2" />
          <div className="text-2xl font-bold">4.9</div>
          <div className="text-sm text-white/80">Average Rating</div>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Filters */}
      <div className="mb-8 w-full">
        <SessionFilters
          filters={filters}
          onFiltersChange={setFilters}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-gray-600" role="status">
          Showing {filteredSessions.length} of {totalSessions} sessions
          {searchQuery && ` for "${searchQuery}"`}
        </p>
      </div>

      {/* Sessions grid */}
      {filteredSessions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onBookSession={handleBookSession}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Calendar className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No sessions found
          </h3>
          <p className="text-gray-600 mb-4">
            Try adjusting your search or filters to find more sessions.
          </p>
        </div>
      )}
    </div>

    {/* Session details modal */}
    <SessionDetailsModal
      session={selectedSession}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onBookSession={handleBookSession}
    />
  </div>
);
