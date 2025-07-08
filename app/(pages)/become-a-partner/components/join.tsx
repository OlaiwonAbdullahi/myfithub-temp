"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Join = () => {
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
    <section className="h-auto px-20 mt-20  md:h-screen flex flex-col md:flex-row justify-between bg-white text-[#234E49] p-6 w-full font-fredoka">
      {/* Left Content */}
      <div className="md:w-1/2 w-full flex flex-col items-start space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold font-sora leading-snug w-9/12">
          Ready to Boost Your Business?
        </h2>
        <p className=" text-sm font-fredoka w-3/5">
          Partnering with MyFitHub means gaining access to a vast network of
          fitness enthusiasts, state-of-the-art management tools, and
          unparalleled support to help your gym, studio, or wellness center
          thrive in the digital age.
        </p>
      </div>

      <div className="md:w-1/2 w-full bg-white p-6 rounded-lg border border-[#f5f5f5]  mt-8 md:mt-0">
        <div className=" py-4">
          <h2 className="text-lg md:text-xl font-bold font-sora leading-snug ">
            Join MyFitHub Today
          </h2>
          <p className=" text-sm font-fredoka w-4/5">
            Fill out the form below and our partnership team will get in touch
            to discuss how MyFitHub can help your business thrive.
          </p>
        </div>
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

export default Join;
