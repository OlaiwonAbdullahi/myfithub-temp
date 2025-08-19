"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Clock, Upload, Building2, Plus, X } from "lucide-react";

const StudioForm = () => {
  const [formData, setFormData] = useState({
    studioName: "",
    studioDescription: "",
    studioLocation: "",
    studioContact: "",
    studioWebsite: "",
    studioSocialMedia: "",
    studioType: "",
    studioCapacity: "",
    studioHours: "",
  });

  const [amenities, setAmenities] = useState<string[]>([]);
  const [newAmenity, setNewAmenity] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (amenityToRemove: string) => {
    setAmenities(amenities.filter((amenity) => amenity !== amenityToRemove));
  };

  const handleAmenityKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAmenity();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, amenities });
    //TODO: Handle form submission logic here
  };

  return (
    <div className=" mx-auto p-6 space-y-3  font-family-fredoka">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-[#234E49] gap-2 font-sora">
              <Building2 className="h-5 w-5" />
              Basic Information
            </CardTitle>
            <CardDescription>
              Tell us about your studio and what makes it special
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioName">Studio Name *</Label>
                <Input
                  id="studioName"
                  name="studioName"
                  value={formData.studioName}
                  onChange={(e) =>
                    handleInputChange("studioName", e.target.value)
                  }
                  placeholder="Enter your studio name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studioType">Studio Type *</Label>
                <Select
                  value={formData.studioType}
                  onValueChange={(value) =>
                    handleInputChange("studioType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select studio type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yoga">
                      <div className="flex items-center gap-2">Yoga Studio</div>
                    </SelectItem>
                    <SelectItem value="dance">
                      <div className="flex items-center gap-2">
                        Dance Studio
                      </div>
                    </SelectItem>
                    <SelectItem value="fitness">
                      <div className="flex items-center gap-2">
                        Fitness Studio
                      </div>
                    </SelectItem>
                    <SelectItem value="pilates">
                      <div className="flex items-center gap-2">
                        Pilates Studio
                      </div>
                    </SelectItem>
                    <SelectItem value="martial-arts">
                      <div className="flex items-center gap-2">
                        Martial Arts
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studioDescription">Studio Description</Label>
              <Textarea
                id="studioDescription"
                name="studioDescription"
                value={formData.studioDescription}
                onChange={(e) =>
                  handleInputChange("studioDescription", e.target.value)
                }
                placeholder="Describe your studio, its mission, and what makes it unique..."
                rows={4}
                className="resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex text-[#234E49] items-center gap-2 font-family-sora">
              <MapPin className="h-5 w-5" />
              Location & Contact
            </CardTitle>
            <CardDescription>
              Help people find and connect with your studio
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioLocation">Studio Address *</Label>
                <Input
                  id="studioLocation"
                  name="studioLocation"
                  value={formData.studioLocation}
                  onChange={(e) =>
                    handleInputChange("studioLocation", e.target.value)
                  }
                  placeholder="123 Main St, City, State 12345"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studioContact">Contact Information *</Label>
                <Input
                  id="studioContact"
                  name="studioContact"
                  value={formData.studioContact}
                  onChange={(e) =>
                    handleInputChange("studioContact", e.target.value)
                  }
                  placeholder="Phone number or email"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioWebsite">Website URL</Label>
                <Input
                  id="studioWebsite"
                  name="studioWebsite"
                  type="url"
                  value={formData.studioWebsite}
                  onChange={(e) =>
                    handleInputChange("studioWebsite", e.target.value)
                  }
                  placeholder="https://yourstudio.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studioSocialMedia">Social Media</Label>
                <Input
                  id="studioSocialMedia"
                  name="studioSocialMedia"
                  value={formData.studioSocialMedia}
                  onChange={(e) =>
                    handleInputChange("studioSocialMedia", e.target.value)
                  }
                  placeholder="@yourstudio or social media links"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex text-[#234E49] items-center gap-2 font-family-sora">
              <Users className="h-5 w-5" />
              Studio Details
            </CardTitle>
            <CardDescription>
              Provide details about your studio&apos;s capacity and amenities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="studioCapacity">
                  <Users className="h-4 w-4 inline mr-1" />
                  Studio Capacity
                </Label>
                <Input
                  id="studioCapacity"
                  name="studioCapacity"
                  type="number"
                  value={formData.studioCapacity}
                  onChange={(e) =>
                    handleInputChange("studioCapacity", e.target.value)
                  }
                  placeholder="Maximum occupancy"
                  min="1"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studioHours">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Operating Hours
                </Label>
                <Input
                  id="studioHours"
                  name="studioHours"
                  value={formData.studioHours}
                  onChange={(e) =>
                    handleInputChange("studioHours", e.target.value)
                  }
                  placeholder="Mon-Fri: 6AM-10PM"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="studioLogo">
                  <Upload className="h-4 w-4 inline mr-1" />
                  Studio Logo
                </Label>
                <Input
                  id="studioLogo"
                  name="studioLogo"
                  type="file"
                  accept="image/*"
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label>Amenities & Features</Label>
              <div className="flex gap-2">
                <Input
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  onKeyPress={handleAmenityKeyPress}
                  placeholder="Add an amenity (e.g., Free Wi-Fi, Parking, Showers...)"
                  className="flex-1"
                />
                <Button
                  type="button"
                  onClick={addAmenity}
                  disabled={!newAmenity.trim()}
                  size="sm"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>

              {amenities.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {amenities.map((amenity, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {amenity}
                      <button
                        type="button"
                        onClick={() => removeAmenity(amenity)}
                        className="ml-1 hover:bg-destructive hover:text-destructive-foreground rounded-full p-0.5"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              <div className="text-sm text-muted-foreground">
                <p className="mb-2">Popular amenities:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Free Wi-Fi",
                    "Parking Available",
                    "Changing Rooms",
                    "Equipment Provided",
                    "Air Conditioning",
                    "Showers",
                  ].map((example) => (
                    <Badge
                      key={example}
                      variant="outline"
                      className="cursor-pointer hover:bg-secondary"
                      onClick={() => {
                        if (!amenities.includes(example)) {
                          setAmenities([...amenities, example]);
                        }
                      }}
                    >
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center pt-3">
          <Button
            type="submit"
            size="lg"
            className="px-8 bg-primary hover:bg-primary/90 text-white font-sora font-medium"
          >
            Create Studio Profile
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StudioForm;
