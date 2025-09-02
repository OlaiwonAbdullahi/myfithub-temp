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
import React, { useState } from "react";
import { toast } from "sonner";

interface SessionFormData {
  title: string;
  description: string;
  instructor: string;
  image_url: string;
  category: string;
  start_date: string;
  start_time: string;
  end_time: string;
  location: string;
  price: string;
  tier: string;
  available_slots: string;
}

interface SessionPayload {
  title: string;
  description: string;
  instructor: string;
  location: string;
  price: number;
  available_slots: number;
  start_time: string; // ISO format
  end_time: string;   // ISO format
  image_url?: string;
  category?: string;
  tier?: string;
}

interface AddSessionDialogProps {
  onSessionCreated?: () => void;
}

export const AddSessionDialog: React.FC<AddSessionDialogProps> = ({
  onSessionCreated,
}) => {
  const [formData, setFormData] = useState<SessionFormData>({
    title: "",
    description: "",
    instructor: "",
    image_url: "",
    category: "",
    start_date: "",
    start_time: "",
    end_time: "",
    location: "",
    price: "",
    tier: "",
    available_slots: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async (file: File): Promise<string> => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      throw new Error("No authentication token found");
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

      const response = await fetch(`${apiBaseUrl}/upload/image`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const result = await response.json();
      return result.url || result.imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const createSession = async (data: SessionFormData) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      throw new Error("No authentication token found");
    }

    const startDateTime = new Date(`${data.start_date}T${data.start_time}`);
    const endDateTime = new Date(`${data.start_date}T${data.end_time}`);

    const sessionData: SessionPayload = {
      title: data.title,
      description: data.description,
      instructor: data.instructor,
      location: data.location,
      price: parseFloat(data.price),
      available_slots: parseInt(data.available_slots, 10),
      start_time: startDateTime.toISOString(),
      end_time: endDateTime.toISOString(),
    };

    if (data.image_url) sessionData.image_url = data.image_url;
    if (data.category) sessionData.category = data.category;
    if (data.tier) sessionData.tier = data.tier;

    try {
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api";

      const response = await fetch(`${apiBaseUrl}/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sessionData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating session:", error);
      throw error;
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      instructor: "",
      image_url: "",
      category: "",
      start_date: "",
      start_time: "",
      end_time: "",
      location: "",
      price: "",
      tier: "",
      available_slots: "",
    });
    setSelectedFile(null);
    setImagePreview("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (
        !formData.title ||
        !formData.instructor ||
        !formData.start_date ||
        !formData.start_time ||
        !formData.end_time ||
        !formData.description ||
        !formData.location ||
        !formData.price ||
        !formData.available_slots
      ) {
        throw new Error("Please fill in all required fields");
      }

      let imageUrl = "";
      if (selectedFile) {
        imageUrl = await uploadImage(selectedFile);
      }

      const sessionDataWithImage = {
        ...formData,
        image_url: imageUrl,
      };

      await createSession(sessionDataWithImage);

      resetForm();
      setIsOpen(false);
      toast.success("Session created successfully!");

      onSessionCreated?.();
    } catch (error) {
      console.error("Session creation error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create session";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }

      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }

      setSelectedFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.onerror = () => {
        toast.error("Failed to read file");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary cursor-pointer hover:bg-primary/90 gap-2">
          <Plus className="h-4 w-4" />
          Add New Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto scrollbar-hide font-fredoka">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-primary">
              Add New Session
            </DialogTitle>
            <DialogDescription>
              Create a new class session for your studio schedule.
            </DialogDescription>
          </DialogHeader>

         <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">
                  Session Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="e.g., Morning Yoga Session"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instructor">
                  Instructor <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="instructor"
                  name="instructor"
                  placeholder="e.g., Sarah Johnson"
                  value={formData.instructor}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  name="category"
                  placeholder="e.g., Yoga"
                  value={formData.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">
                  Location <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="location"
                  name="location"
                  placeholder="e.g., Studio A - Main Hall"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="start_date">
                  Date <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="start_date"
                  name="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="start_time">
                  Start Time <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="start_time"
                  name="start_time"
                  type="time"
                  value={formData.start_time}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="end_time">
                  End Time <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="end_time"
                  name="end_time"
                  type="time"
                  value={formData.end_time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price">
                  Price <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="25.00"
                  value={formData.price}
                  onChange={handleInputChange}
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="available_slots">
                  Available Slots <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="available_slots"
                  name="available_slots"
                  type="number"
                  placeholder="20"
                  value={formData.available_slots}
                  onChange={handleInputChange}
                  min="1"
                  max="200"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tier">Tier</Label>
              <select
                id="tier"
                name="tier"
                value={formData.tier}
                onChange={handleInputChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select tier</option>
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="vip">VIP</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Session Image</Label>
              <Input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <p className="text-sm text-muted-foreground">
                Optional. Max size: 5MB. Supported formats: JPG, PNG, WebP
              </p>
              {imagePreview && (
                <div className="mt-2">
                  <img
                    src={imagePreview}
                    alt="Session preview"
                    className="w-full h-32 object-cover rounded-md border"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => {
                      setSelectedFile(null);
                      setImagePreview("");
                      const fileInput = document.getElementById(
                        "image"
                      ) as HTMLInputElement;
                      if (fileInput) fileInput.value = "";
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">
                Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="description"
                name="description"
                placeholder="A relaxing morning yoga session..."
                value={formData.description}
                onChange={handleInputChange}
                className="min-h-[100px]"
                required
              />
            </div>
          </div>


          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" type="button" disabled={isLoading}>
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="submit"
              className="bg-primary cursor-pointer hover:bg-primary/90"
              disabled={isLoading}
            >
              {isLoading ? "Creating..." : "Create Session"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
