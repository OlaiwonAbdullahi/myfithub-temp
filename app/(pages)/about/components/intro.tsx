import Button from "@/app/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <div className=" p-15 ">
      <h2 className="text-4xl text-center font-bold text-[#234E49] mb-6 font-sora leading-tight">
        Who We Are
      </h2>
      <p className="text-base sm:text-lg text-black font-light font-fredoka max-w-xl text-center mx-auto mb-8 leading-relaxed">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id dolore
        explicabo laudantium eum. Quos eveniet recusandae, pariatur harum
        aliquam accusantium consequatur reprehenderit velit doloribus ipsa
        aspernatur quisquam animi consectetur repellendus.
      </p>
      <div className=" flex justify-center">
        <Link href={"/signup"}>
          <Button variant="primary" className=" font-sora" icon={ArrowRight}>
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Intro;
