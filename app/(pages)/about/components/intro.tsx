"use client";

import Button from "@/app/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Intro = () => {
  const stats = [
    { value: "10K+", label: "Users" },
    { value: "24", label: "Fitness Studios" },
    { value: "500+", label: "Workout Programs" },
  ];

  return (
    <section className="bg-white px-6 py-12 md:px-20 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/about.png"
              alt="MyFitHub Fitness"
              width={600}
              height={400}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#234E49] mb-6 font-sora leading-tight text-center md:text-left">
              A Short Story
            </h2>
            <div className="text-base sm:text-lg text-black font-light font-fredoka text-center md:text-left mb-8 space-y-4">
              <p>
                At MyFitHub, we believe that fitness should be simple,
                affordable, and accessible to everyone.
              </p>
              <p>
                We started with a clear vision: to eliminate the hassle of
                managing multiple gym or wellness memberships by creating a
                single subscription that connects you to a variety of fitness
                and wellness centers across Nigeria. Whether you&apos;re into
                gymming, yoga, swimming, boxing, Pilates, sports, or spa
                treatments—MyFitHub brings it all together in one place.
              </p>
              <p>
                Our journey has been fueled by the incredible people who have
                chosen us to be part of their fitness story. To our growing
                community, thank you for your trust and commitment—you inspire
                us daily.
              </p>
              <p>
                To those still considering the leap, we&apos;re here whenever
                you&apos;re ready. With MyFitHub, you don&apos;t need multiple
                subscriptions to access the wellness services you love.
                We&apos;ve made it easy—One subscription. Everything fitness.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link href="/signup" passHref>
                <Button
                  variant="primary"
                  className="font-sora flex items-center gap-2"
                  icon={ArrowRight}
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center backdrop-blur-sm bg-white rounded-xl p-6 border border-[#234E49]/20"
              aria-label={`${item.value} ${item.label}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-[#234E49] mb-2 font-sora">
                {item.value}
              </div>
              <div className="text-gray-600 font-fredoka">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
