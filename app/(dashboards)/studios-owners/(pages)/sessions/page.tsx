"use client";

import { useState } from "react";
import { AddSessionDialog } from "./components/add-sessions";
import { SessionCard } from "./components/session-card";

const SessionManagement = () => {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Morning Yoga Flow",
      instructor: "Sarah Johnson",
      duration: "60 minutes",
      capacity: 20,
      enrolled: 15,
      date: "2024-01-15",
      time: "09:00",
      description:
        "A gentle flow to start your day with mindfulness and movement.",
    },
    {
      id: 2,
      title: "HIIT Training",
      instructor: "Mike Chen",
      duration: "45 minutes",
      capacity: 15,
      enrolled: 12,
      date: "2024-01-15",
      time: "18:00",
      description: "High-intensity interval training for maximum results.",
    },
  ]);

  const handleAddSession = (sessionData: {
    title: string;
    instructor: string;
    duration: string;
    capacity: string;
    date: string;
    time: string;
    description: string;
  }) => {
    const newSession = {
      id: sessions.length + 1,
      ...sessionData,
      capacity: Number.parseInt(sessionData.capacity),
      enrolled: 0,
    };
    setSessions([...sessions, newSession]);
  };

  const handleEditSession = (
    id: number,
    updatedData: {
      title: string;
      instructor: string;
      duration: string;
      capacity: string;
      date: string;
      time: string;
      description: string;
    }
  ) => {
    setSessions(
      sessions.map((s) =>
        s.id === id
          ? {
              ...s,
              ...updatedData,
              capacity: Number.parseInt(updatedData.capacity),
            }
          : s
      )
    );
  };

  const handleDeleteSession = (id: number) => {
    setSessions(sessions.filter((s) => s.id !== id));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-medium text-foreground mb-2">
            Session Management
          </h1>
          <p className="text-muted-foreground font-fredoka">
            Manage your studio sessions and schedules
          </p>
        </div>

        <AddSessionDialog onAddSession={handleAddSession} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            sessionData={session}
            onEditSession={handleEditSession}
            onDeleteSession={handleDeleteSession}
          />
        ))}
      </div>
    </div>
  );
};

export default SessionManagement;
