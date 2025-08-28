"use client";
import { useEffect, useState } from "react";
import { AddSessionDialog } from "./components/add-sessions";
import { SessionCard } from "./components/session-card";

// Define the session type for better type safety
interface Session {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  capacity: number;
  date: string;
  time: string;
  description: string;
  enrolled: number;
}

const SessionManagement = () => {
  // Initialize as empty array instead of undefined
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSessions = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/sessions/studio/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch sessions: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      console.log("Sessions Data:", data);

      //setSessions(data.sessions || data || []);
    } catch (error) {
      console.error("Error fetching sessions:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch sessions"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleAddSession = (sessionData: {
    title: string;
    instructor: string;
    duration: string;
    capacity: string;
    date: string;
    time: string;
    description: string;
  }) => {
    const newSession: Session = {
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

      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="text-muted-foreground">Loading sessions...</div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="text-red-800">Error: {error}</div>
          <button
            onClick={fetchSessions}
            className="mt-2 text-red-600 underline hover:no-underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Sessions grid - only show when not loading and no error */}
      {!loading && !error && (
        <>
          {sessions.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-muted-foreground">No sessions found</div>
            </div>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
};

export default SessionManagement;
