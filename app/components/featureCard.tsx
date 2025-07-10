"use client";
import { Button } from "@/components/ui/button";
import { CornerDownRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`h-[400px] w-[485px] relative flex flex-col items-start justify-between p-6 rounded-lg transition-all duration-300 border group ${
        isHovered ? "bg-[#234E49] shadow-xl transform scale-105" : "bg-white "
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-3.5 relative z-10">
        <h2
          className={`text-4xl font-sora font-bold transition-colors duration-300 ${
            isHovered ? "text-white" : "text-[#234E49]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-lg font-fredoka transition-colors duration-300 w-4/5 ${
            isHovered ? "text-white/90" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Image container with smooth transition */}
      <div
        className={`absolute bottom-3 right-6 w-[220px] h-[220px] flex items-center justify-center transition-all duration-500 ${
          isHovered
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-4"
        }`}
      >
        {image && (
          <Image
            src={image}
            alt={title}
            width={220}
            height={220}
            className="object-contain transition-transform duration-300 hover:scale-110"
          />
        )}
      </div>

      {/* Button with enhanced hover states */}
      <div className="relative z-10 w-fit">
        <Link href={"/signup"}>
          <Button
            className={`w-full border-none h-10 flex flex-row items-center justify-center gap-2 font-fredoka shadow-none transition-all duration-300 ${
              isHovered
                ? "text-[#234E49] bg-white hover:bg-gray-100 border-2 border-white"
                : "text-[#234E49] bg-white hover:bg-gray-50 border-2 border-gray-200"
            }`}
          >
            <CornerDownRight
              size={20}
              className={`transition-transform duration-300 ${
                isHovered ? "transform rotate-12" : ""
              }`}
            />
            Get Started
          </Button>
        </Link>
      </div>

      {/* Optional: Add a subtle background pattern or gradient on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#234E49] to-[#1a3d37] rounded-lg opacity-95 -z-10" />
      )}
    </div>
  );
};

export default FeatureCard;
