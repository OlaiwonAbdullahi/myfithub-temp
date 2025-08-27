"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import {
  BicepsFlexed,
  BoxIcon,
  Dumbbell,
  Flame,
  HeartPulse,
  Users,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(MotionPathPlugin);
}

export default function EventAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const centerElement = centerRef.current;
    const descriptionElement = descriptionRef.current;
    const logos = [
      "#ticket-icon",
      "#users-icon",
      "#analytics-icon",
      "#payment-icon",
      "#message-icon",
      "#calendar-icon",
    ];

    const spacing = 360 / logos.length;

    const initialTimeline = gsap.timeline();
    initialTimeline.to(centerElement, {
      autoAlpha: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });

    gsap.set(logos, { autoAlpha: 0, scale: 0.8 });

    gsap.to(logos, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.5,
      stagger: 0.2,
      delay: 1,
      ease: "back.out(1.4)",
    });

    logos.forEach((logo, index) => {
      gsap.to(logo, {
        rotate: 360,
        motionPath: {
          path: "#outer-circle",
          align: "#outer-circle",
          alignOrigin: [0.5, 0.5],
          start: (index * spacing) / 360,
          end: (index * spacing + 360) / 360,
        },
        duration: 25,
        repeat: -1,
        ease: "none",
        delay: 1,
      });
    });

    const featureInterval = setInterval(() => {
      if (descriptionElement) {
        gsap.to(descriptionElement, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          onComplete: () => {
            gsap.to(descriptionElement, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.1,
            });
          },
        });
      } else {
      }
    }, 5000);

    if (centerElement) {
      gsap.to(centerElement, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }

    return () => {
      initialTimeline.kill();
      clearInterval(featureInterval);
      gsap.killTweensOf(logos);
      if (centerElement) gsap.killTweensOf(centerElement);
      if (descriptionElement) gsap.killTweensOf(descriptionElement);
    };
  }, []);

  const greenColor = "#234E49";
  const iconSize = "h-10 w-10";

  const icons = [
    { id: "calendar-icon", Icon: BicepsFlexed, top: "50px", left: "200px" },
    { id: "ticket-icon", Icon: Flame, top: "100px", left: "330px" },
    { id: "users-icon", Icon: Users, top: "300px", left: "330px" },
    { id: "analytics-icon", Icon: Dumbbell, top: "350px", left: "200px" },
    { id: "payment-icon", Icon: BoxIcon, top: "300px", left: "70px" },
    { id: "message-icon", Icon: HeartPulse, top: "100px", left: "70px" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full max-w-[600px] aspect-square mx-auto lg:-mt-10"
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
        >
          <path
            id="outer-circle"
            d="M200,50 A150,150 0 1,1 199.9,50 Z"
            stroke={greenColor}
            strokeWidth="2"
            strokeDasharray="5,5"
            fill="none"
            opacity="0.6"
          />
          <circle
            cx="200"
            cy="200"
            r="60"
            stroke={greenColor}
            strokeWidth="1"
            opacity="0.3"
            fill="none"
          />
        </svg>

        {icons.map(({ id, Icon, top, left }) => (
          <div
            key={id}
            id={id}
            className="absolute w-16 h-16 -mt-8 -ml-8 bg-[#EEF7F6]/70 rounded-full border-2 flex items-center justify-center shadow-md"
            style={{ borderColor: greenColor, top, left }}
          >
            <Icon className={`${iconSize} text-primary`} />
          </div>
        ))}

        <div
          ref={centerRef}
          className="absolute opacity-0 w-78 h-78 rounded-full flex flex-col items-center justify-center shadow-lg border-2"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            borderColor: greenColor,
          }}
        >
          <img
            src="/fithubhero.jpeg"
            alt="event"
            className="h-78 w-78 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
