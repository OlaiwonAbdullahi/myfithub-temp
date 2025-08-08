"use client";

import React from "react";
import Button from "./button";

interface HeroProps {
  title: string;
  description: string;
  more: string;
  btnText?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, btnText, more }) => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/about.png')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/70 to-black/80" />
      <div className="relative z-10 min-h-[60vh] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-sora leading-tight">
            {title}
          </h1>
          <div className="">
            <p className="text-base sm:text-lg text-gray-200 font-light font-fredoka max-w-2xl mx-auto mb-2 leading-relaxed">
              {description}
            </p>
            <p className="text-base sm:text-lg text-gray-200 font-light font-fredoka max-w-2xl mx-auto mb-8 leading-relaxed">
              {more}
            </p>
          </div>
          {btnText && (
            <div className="flex justify-center">
              <Button variant="primary" className="font-sora">
                {btnText}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white from-10% via-white/70 via-60% to-black/5 to-30%" />
    </section>
  );
};

export default Hero;
