"use client";

import { useState, useMemo } from "react";
import { Calendar } from "lucide-react";
import type { FitnessSession, SessionFilter } from "../../../types/session";
import { SessionFilters } from "./components/session-filter";
import { SessionCard } from "./components/session-card";

const sampleSessions: FitnessSession[] = [
  {
    id: "1",
    title: "Morning Power Yoga",
    instructor: "Sarah Johnson",
    instructorImage: "https://tapback.co/api/avatar/Sarah",
    studio: "i-fitness",
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
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop&crop=center",
    featured: true,
  },
  {
    id: "2",
    title: "HIIT Cardio Blast",
    instructor: "Mike Chen",
    instructorImage: "https://tapback.co/api/avatar/mike",
    studio: "Zen Studio",
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
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "3",
    title: "Strength & Conditioning",
    instructor: "Alex Rodriguez",
    instructorImage: "https://tapback.co/api/avatar/alex",
    studio: "Iron Forge",
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
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=300&fit=crop&crop=center",
    featured: true,
  },
  {
    id: "4",
    title: "Beginner's Pilates",
    instructor: "Emma Wilson",
    instructorImage: "https://tapback.co/api/avatar/emma",
    studio: "pilates",
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
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "5",
    title: "Dance Cardio Party",
    instructor: "Zoe Martinez",
    instructorImage: "https://tapback.co/api/avatar/zoe",
    studio: "dance",
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
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop&crop=center",
  },
  {
    id: "6",
    title: "Cardio Kickboxing",
    instructor: "James Park",
    instructorImage: "https://tapback.co/api/avatar/james",
    studio: "cardio",
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
    image:
      "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=300&fit=crop&crop=center",
  },
];

export default function FitnessSessionsPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedSession, setSelectedSession] = useState<FitnessSession | null>(
    null
  );
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
          session.studio.toLowerCase().includes(query) ||
          session.description.toLowerCase().includes(query);

        if (!matchesSearch) return false;
      }

      if (filters.type && session.studio !== filters.type) return false;

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
    //TODO:Handle booking logic here
    console.log("Booking session:", sessionId);
    alert("Session booked successfully!");
  };

  const handleViewDetails = (session: FitnessSession) => {
    setSelectedSession(session);
  };

  return (
    <div className="min-h-screen p-6">
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
          <div className="text-center py-12 font-fredoka">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2 font-sora">
              No sessions found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find more sessions.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
