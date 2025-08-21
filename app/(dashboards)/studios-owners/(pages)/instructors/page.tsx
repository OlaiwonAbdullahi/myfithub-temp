"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    price: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-medium text-foreground mb-2">
            Instructors Management
          </h1>
          <p className="text-muted-foreground font-fredoka">
            Manage your instructors and their schedules
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary cursor-pointer hover:bg-primary/90 gap-2">
              <Plus className="h-4 w-4" />
              Add New Instructor
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <form onSubmit={handleSubmit}>
              <DialogHeader>
                <DialogTitle className="text-xl font-sora  font-semibold text-primary">
                  Add New Instructor
                </DialogTitle>
                <DialogDescription className=" font-family-fredoka">
                  Create a new instructor for your studio.
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-4 py-4">
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
                <div className=" space-y-2">
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
                            ...formData,
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
    </div>
  );
};

export default Page;
