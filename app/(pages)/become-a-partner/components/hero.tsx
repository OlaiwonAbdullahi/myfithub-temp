"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Hero = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    business: "",
    website: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // TODO: Integrate with backend or API here
  };

  return (
    <section className="h-auto md:h-screen flex flex-col md:flex-row justify-between bg-white text-[#234E49] p-6 w-full font-fredoka">
      {/* Left Content */}
      <div className="md:w-1/2 w-full flex items-center">
        <h2 className="text-3xl md:text-4xl font-bold font-sora leading-snug">
          Join <span className="text-[#234E49]">MyFit Hub</span> As a Partner
        </h2>
      </div>

      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg border border-[#f5f5f5]  mt-8 md:mt-0">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="h-10"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full md:w-1/2 items-center gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="h-10"
                required
              />
            </div>
            <div className="grid w-full md:w-1/2 items-center gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="h-10"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full md:w-1/2 items-center gap-2">
              <Label htmlFor="business">Business Name</Label>
              <Input
                type="text"
                id="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Business Name"
                className="h-10"
              />
            </div>
            <div className="grid w-full md:w-1/2 items-center gap-2">
              <Label htmlFor="website">Website URL</Label>
              <Input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className="h-10"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone" className="text-[#234E49] font-medium">
              Phone Number
            </Label>
            <PhoneInput
              defaultCountry="NG"
              value={formData.phone}
              onChange={handleChange}
              placeholder="8012345678"
              className="px-2 py-1 border border-[#E5E5E5] shadow focus:outline-none rounded-lg text-sm"
            />
          </div>
          <div className=" space-y-1 flex flex-col">
            <Label htmlFor="phone" className="text-[#234E49] font-medium">
              Service Type
            </Label>
            <select className=" border  p-2 w-1/2 rounded-lg shadow">
              <option value="gym" className=" bg-[#e5e5e5]">
                Gym
              </option>
              <option value="spa">Spa</option>
              <option value="beauty_salon">Beauty Salon</option>
            </select>
          </div>

          <Button
            type="submit"
            className="bg-[#234E49] text-white mt-6 w-full hover:bg-[#1d3f3d] transition"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
