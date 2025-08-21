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
import { Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";

interface AddSessionDialogProps {
  onAddSession: (sessionData: {
    title: string;
    instructor: string;
    duration: string;
    capacity: string;
    date: string;
    time: string;
    description: string;
    banner: string;
  }) => void;
}

export const AddSessionDialog = ({ onAddSession }: AddSessionDialogProps) => {
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddSession(formData);
    // Reset form
    setFormData({
      title: "",
      instructor: "",
      duration: "",
      capacity: "",
      date: "",
      time: "",
      description: "",
      banner: "",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary cursor-pointer hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          Add New Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-sora font-semibold text-primary">
              Add New Session
            </DialogTitle>
            <DialogDescription className="font-family-fredoka">
              Create a new class session for your studio schedule.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="title"
                  className="text-sm font-medium font-family-sora"
                >
                  Session Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Morning Yoga Flow"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full font-family-fredoka"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="instructor"
                  className="text-sm font-medium font-family-sora"
                >
                  Instructor
                </Label>
                <Input
                  id="instructor"
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
                  htmlFor="duration"
                  className="text-sm font-medium font-family-sora"
                >
                  Duration (minutes)
                </Label>
                <Input
                  id="duration"
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
                  htmlFor="capacity"
                  className="text-sm font-medium font-family-sora"
                >
                  Max Capacity
                </Label>
                <Input
                  id="capacity"
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
                  htmlFor="date"
                  className="text-sm font-medium font-family-sora"
                >
                  Date
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full font-fredoka"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="time"
                  className="text-sm font-medium font-family-sora"
                >
                  Time
                </Label>
                <Input
                  id="time"
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
                htmlFor="banner"
                className="text-sm font-medium font-family-sora"
              >
                Upload Banner
              </Label>
              <Input
                id="banner"
                name="banner"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                      setFormData({
                        ...formData,
                        banner: reader.result as string,
                      });
                    };
                  }
                }}
                className="w-full font-family-fredoka"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-sm font-medium font-family-sora"
              >
                Description
              </Label>
              <Textarea
                id="description"
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
              Create Class
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
