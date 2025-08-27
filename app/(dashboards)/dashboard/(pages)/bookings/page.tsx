"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { Calendar as CalendarIcon } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [bookingForm, setBookingForm] = useState({
    clientName: "",
    clientEmail: "",
    sessionType: "",
    date: null,
    time: "",
    notes: "",
  });

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const sessionTypes = [
    { value: "consultation", label: "Consultation (60 min)", duration: 60 },
    { value: "therapy", label: "Therapy Session (90 min)", duration: 90 },
    { value: "workshop", label: "Workshop (120 min)", duration: 120 },
    { value: "follow-up", label: "Follow-up (30 min)", duration: 30 },
  ];

  const handleSubmit = () => {
    console.log("Booking form submitted:", bookingForm);
    // Here you would typically send the data to your backend
    alert("Session booked successfully!");
  };

  const handleInputChange = (field, value) => {
    setBookingForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="">
      <Card className="w-9/12 mx-auto my-10">
        <CardHeader>
          <CardTitle className="flex text-3xl font-sora text-primary items-center gap-2">
            Selected Session Details
          </CardTitle>
          <CardDescription className=" text-xl font-family-fredoka">
            Checkout you selected Session
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clientName">Client Name *</Label>
                <Input
                  id="clientName"
                  placeholder="Enter client name"
                  value={bookingForm.clientName}
                  onChange={(e) =>
                    handleInputChange("clientName", e.target.value)
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="clientEmail">Client Email *</Label>
                <Input
                  id="clientEmail"
                  type="email"
                  placeholder="Enter client email"
                  value={bookingForm.clientEmail}
                  onChange={(e) =>
                    handleInputChange("clientEmail", e.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sessionType">Session Type *</Label>
              <Select
                value={bookingForm.sessionType}
                onValueChange={(value) =>
                  handleInputChange("sessionType", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select session type" />
                </SelectTrigger>
                <SelectContent>
                  {sessionTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Select Date *</Label>
                <Calendar
                  mode="single"
                  selected={bookingForm.date}
                  onSelect={(date) => handleInputChange("date", date)}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time">Select Time *</Label>
                <Select
                  value={bookingForm.time}
                  onValueChange={(value) => handleInputChange("time", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any special requirements or notes..."
                rows={3}
                value={bookingForm.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
              />
            </div>

            <Button type="button" className="w-full" onClick={handleSubmit}>
              Book Session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
