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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, User, BookOpen, Plus } from "lucide-react";
import type React from "react";
import { useState } from "react";

const ClassManagement = () => {
  const [classes] = useState([
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

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    capacity: "",
    date: "",
    time: "",
    description: "",
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
    // Add new class logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-medium text-foreground mb-2">
            Class Management
          </h1>
          <p className="text-muted-foreground font-fredoka">
            Manage your studio classes and schedules
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90 gap-2">
              <Plus className="h-4 w-4" />
              Add New Class
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold text-primary">
                  Add New Class
                </DialogTitle>
                <DialogDescription className=" font-family-fredoka">
                  Create a new class session for your studio schedule.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="title"
                      className="text-sm font-medium font-family-sora"
                    >
                      Class Title
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

              <DialogFooter className="gap-2">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                >
                  Create Class
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card
            key={classItem.id}
            className="hover:shadow-lg transition-shadow  font-fredoka"
          >
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold font-sora">
                  {classItem.title}
                </CardTitle>
                <Badge
                  variant={
                    classItem.enrolled >= classItem.capacity
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {classItem.enrolled >= classItem.capacity
                    ? "Full"
                    : "Available"}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-1 text-sm">
                <User className="h-3 w-3" />
                {classItem.instructor}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                {classItem.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{new Date(classItem.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{classItem.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {classItem.enrolled}/{classItem.capacity}
                  </span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                >
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassManagement;
