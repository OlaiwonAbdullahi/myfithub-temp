import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-screen flex flex-col md:flex-row justify-between  bg-white text-[#234E49] p-6 w-full">
      <div className=" md:w-1/2 w-full">
        <h2 className=" text-3xl font-bold font-sora">
          Join MyFit Hub As a Partner
        </h2>
      </div>
      <div className=" md:w-1/2 w-full p-6 rounded-lg shadow-md ">
        <form action="" className="flex flex-col gap-6">
          <div className="grid w-full  items-center gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className=" h-10"
            />
          </div>
          <div className=" flex flex-col md:flex-row gap-4">
            <div className="grid md:w-1/2 w-full items-center gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="First Name"
                className=" h-10"
              />
            </div>
            <div className="grid md:w-1/2 w-full items-center gap-2">
              <Label htmlFor="lastName">Last Name </Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className=" h-10"
              />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-4">
            <div className="grid md:w-1/2 w-full items-center gap-2">
              <Label htmlFor="business">Business Name</Label>
              <Input
                type="text"
                id="business"
                placeholder="Business Name"
                className=" h-10"
              />
            </div>
            <div className="grid md:w-1/2 w-full items-center gap-2">
              <Label htmlFor="website">Website URL </Label>
              <Input
                type="url"
                id="website"
                placeholder="Enter Your Website URL"
                className=" h-10"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-3">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              type="tel"
              id="phone"
              placeholder="Phone Number"
              className=" h-10"
            />
          </div>
          <div className=" flex justify-center">
            <Button className=" bg-[#234E49] w-full mt-10 ">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
