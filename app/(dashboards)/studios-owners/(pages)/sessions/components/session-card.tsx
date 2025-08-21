"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, User, BookOpen, Trash2 } from "lucide-react";
import Image from "next/image";
import { EditSessionDialog } from "./edit-sessions";

interface SessionData {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  capacity: number;
  enrolled: number;
  date: string;
  time: string;
  description: string;
}

interface SessionCardProps {
  sessionData: SessionData;
  onEditSession: (id: number, updatedData: Partial<SessionData>) => void;
  onDeleteSession: (id: number) => void;
}

export const SessionCard = ({
  sessionData,
  onEditSession,
  onDeleteSession,
}: SessionCardProps) => {
  return (
    <Card className="hover:shadow-lg pt-0 rounded-t-lg transition-shadow font-fredoka">
      <Image
        src="/about.png"
        alt={sessionData.title}
        width={400}
        height={160}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold font-sora">
            {sessionData.title}
          </CardTitle>
          <Badge
            variant={
              sessionData.enrolled >= sessionData.capacity
                ? "destructive"
                : "secondary"
            }
          >
            {sessionData.enrolled >= sessionData.capacity
              ? "Full"
              : "Available"}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1 text-sm">
          <User className="h-3 w-3" />
          {sessionData.instructor}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {sessionData.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{new Date(sessionData.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{sessionData.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{sessionData.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>
              {sessionData.enrolled}/{sessionData.capacity}
            </span>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <EditSessionDialog
            sessionData={sessionData}
            onEditSession={onEditSession}
          />
          <Button
            variant="destructive"
            size="sm"
            className="flex-1"
            onClick={() => onDeleteSession(sessionData.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span>Delete</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
