import Link from "next/link";
import React from "react";
import Button from "./button";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className=" font-fredoka p-7 bg-[#D6EDE9] ">
      <div className=" flex py-4 md:flex-row flex-col gap-4 justify-around items-center">
        <div className="">
          {" "}
          <Link href="/" className="flex items-center">
            <div className="text-xl font-semibold">MyFitHub</div>{" "}
            <sup>Beta</sup>
          </Link>
        </div>
        <div className=" space-y-2 text-center">
          <ul className=" text-center flex space-x-3">
            <Link href={"/"}>
              <li className=" cursor-pointer">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className=" cursor-pointer">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className=" cursor-pointer">Contact</li>
            </Link>
            <Link href={"/pricing"}>
              <li className=" cursor-pointer">Pricing</li>
            </Link>
          </ul>
        </div>
        <div className="space-y-2 flex items-center gap-2">
          <div className=" flex items-center -space-x-7">
            <Mail size={20} className=" mt-2 text-[#234E49]" strokeWidth={1} />
            <input
              type="text"
              placeholder="Subscribe to our NewsLetter"
              className=" border pl-8 w-50 text-xs border-[#234E49] p-3.5 mt-2 rounded-lg focus:outline-none"
            />
          </div>
          <Button variant="primary" className="  text-sm ">
            Subscribe
          </Button>
        </div>
      </div>
      <hr className=" border-t border-[#234E49]" />
      <div className=" flex flex-wrap items-center gap-2.5 text-center justify-center p-4 text-neutral-700">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="/" className="flex items-center">
          <div className="text-xl font-semibold">MyFitHub</div> <sup>Beta</sup>
        </Link>
        <span>All right Reserved</span>
      </div>
      <ul className=" text-center text-sm flex gap-2 justify-center">
        <li className=" cursor-pointer">Terms & Conditions</li>
        <li className=" cursor-pointer">Privacy</li>
      </ul>
    </div>
  );
};

export default Footer;
