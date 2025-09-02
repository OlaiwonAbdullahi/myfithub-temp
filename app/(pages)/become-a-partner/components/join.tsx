"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "sonner";

const Join = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    const sendMessage = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/partnership`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `HTTP error! status: ${response.status}`
          );
        }

        const data = await response.json();
        toast.success("Partnership form submitted successfully");

        return data;
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Error sending message:");

        return null;
      }
    };
    sendMessage();
  };

  return (
    <section
      id="join"
      className="h-auto px-20 mt-20  md:h-screen flex flex-col md:flex-row justify-between bg-white text-[#234E49] p-6 w-full font-fredoka"
    >
      <div className="md:w-1/2 w-full flex flex-col items-start space-y-5">
        <h2 className="text-3xl md:text-4xl font-bold font-sora leading-snug md:w-9/12 w-full text-center md:text-start">
          Ready to Boost Your Business?
        </h2>
        <p className=" text-sm font-fredoka w-3/5 text-center md:text-start mx-auto md:mx-0">
          Partnering with MyFitHub means gaining access to a vast network of
          fitness enthusiasts, state-of-the-art management tools, and
          unparalleled support to help your gym, studio, or wellness center
          thrive in the digital age.
        </p>
      </div>

      <div className="md:w-1/2 w-full bg-white h-fit p-6 rounded-lg border border-[#f5f5f5]  mt-8 md:mt-0">
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
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value || "" })
              }
              placeholder="Enter your email"
              className="h-10"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full  items-center gap-2">
              <Label htmlFor="studio">Studio Name</Label>
              <Input
                type="text"
                id="studio"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value || "" })
                }
                placeholder="Studio Name"
                className="h-10"
              />
            </div>
            {/*<div className="grid w-full md:w-1/2 items-center gap-2">
              <Label htmlFor="website">
                Website URL <span className=" text-xs">(Optional)</span>
              </Label>
              <Input
                type="url"
                id="website"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value || "" })
                }
                placeholder="Enter website URL"
                className="h-10"
              />
            </div>*/}
          </div>
          {/*
          <div className="space-y-1">
            <Label htmlFor="phone" className="text-[#234E49] font-medium">
              Phone Number
            </Label>
            <PhoneInput
              defaultCountry="NG"
              value={formData.phone}
              onChange={(value) =>
                setFormData({ ...formData, phone: value || "" })
              }
              placeholder="8012345678"
              className="px-2 py-1 border border-[#E5E5E5] shadow focus:outline-none rounded-lg text-sm"
            />
          </div>
          <div className=" space-y-1 flex flex-col">
            <Label htmlFor="phone" className="text-[#234E49] font-medium">
              Service Type
            </Label>
            <Select>
              <SelectTrigger className="w-full border border-[#E5E5E5] h-10 rounded-lg text-sm text-left px-2 py-1 shadow focus:outline-none">
                <SelectValue
                  placeholder="Select service type"
                  className="text-gray-300 placeholder:text-gray-300"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectArrow />
                  <SelectItem value="gym" className=" bg-[#e5e5e5]">
                    Gym
                  </SelectItem>
                  <SelectItem value="spa">Spa</SelectItem>
                  <SelectItem value="beauty_salon">Beauty Salon</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>*/}
          <div className="flex flex-col space-y-2">
            <Label htmlFor="message" className="text-[#234E49] font-medium">
              Message *
            </Label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#234E49] focus:border-transparent transition-all duration-200  resize-none"
              value={formData.message}
              rows={6}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value || "" })
              }
              required
              //disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            className="bg-primary cursor-pointer text-white w-full hover:bg-[#1d3f3d] transition"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Join;
