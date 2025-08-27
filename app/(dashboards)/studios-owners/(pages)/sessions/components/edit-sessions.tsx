"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PenLine } from "lucide-react";
import { useState, useEffect } from "react";

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

interface EditSessionDialogProps {
  sessionData: SessionData;
  onEditSession: (
    id: number,
    updatedData: {
      title: string;
      instructor: string;
      duration: string;
      capacity: string;
      date: string;
      time: string;
      description: string;
      banner: string;
    }
  ) => void;
}

export const EditSessionDialog = ({
  sessionData,
  onEditSession,
}: EditSessionDialogProps) => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    capacity: "",
    date: "",
    time: "",
    description: "",
    banner: "",
  });

  useEffect(() => {
    setFormData({
      title: sessionData.title,
      instructor: sessionData.instructor,
      duration: sessionData.duration,
      capacity: sessionData.capacity.toString(),
      date: sessionData.date,
      time: sessionData.time,
      description: sessionData.description,
      banner: "",
    });
  }, [sessionData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEditSession(sessionData.id, formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
          <PenLine className="h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-sora font-semibold text-primary">
              Edit Session
            </DialogTitle>
            <DialogDescription className="font-family-fredoka">
              Update the session information and schedule.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-title"
                  className="text-sm font-medium font-family-sora"
                >
                  Class Title
                </Label>
                <Input
                  id="edit-title"
                  name="title"
                  placeholder="e.g., Morning Yoga Flow"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="edit-instructor"
                  className="text-sm font-medium font-family-sora"
                >
                  Instructor
                </Label>
                <Input
                  id="edit-instructor"
                  name="instructor"
                  placeholder="e.g., Sarah Johnson"
                  value={formData.instructor}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-duration"
                  className="text-sm font-medium font-family-sora"
                >
                  Duration (minutes)
                </Label>
                <Input
                  id="edit-duration"
                  name="duration"
                  type="number"
                  placeholder="60"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="edit-capacity"
                  className="text-sm font-medium font-family-sora"
                >
                  Max Capacity
                </Label>
                <Input
                  id="edit-capacity"
                  name="capacity"
                  type="number"
                  placeholder="20"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="edit-date"
                  className="text-sm font-medium font-family-sora"
                >
                  Date
                </Label>
                <Input
                  id="edit-date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full font-fredoka"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="edit-time"
                  className="text-sm font-medium font-family-sora"
                >
                  Time
                </Label>
                <Input
                  id="edit-time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="edit-description"
                className="text-sm font-medium font-family-sora"
              >
                Description
              </Label>
              <Textarea
                id="edit-description"
                name="description"
                placeholder="Describe the class, its benefits, and what participants can expect..."
                value={formData.description}
                onChange={handleInputChange}
                className="w-full min-h-[100px] font-family-fredoka"
              />
            </div>
          </div>

          <DialogFooter className="gap-2 font-fredoka">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Update Session
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
