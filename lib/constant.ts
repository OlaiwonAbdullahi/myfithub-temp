// @/lib/constants.ts
import { UserCheck, CalendarCheck, QrCode, Star } from "lucide-react";
import React, { FC } from "react";

type PartnerDetail = {
  icon: FC<{ className?: string }>;
  title: string;
  description: string;
};

export const WHY_PARTNER_DETAILS: PartnerDetail[] = [
  {
    icon: UserCheck,
    title: "Reach a Ready Audience",
    description:
      "Our members are actively seeking new gyms, classes, and wellness services in their area. Get your business in front of highly targeted, health-conscious individuals.",
  },
  {
    icon: CalendarCheck,
    title: "Boost Your Bookings & Fill Empty Spots",
    description:
      "Maximize your facility’s capacity by welcoming new faces. Whether it's group classes or open gym access, we help fill those unused time slots.",
  },
  {
    icon: function NairaIcon({ className }) {
      return React.createElement(
        "div",
        {
          className:
            "text-xl text-[#234E49] font-fredoka w-6 h-6 flex items-center justify-center" +
            (className ? ` ${className}` : ""),
        },
        "₦"
      );
    },
    title: "No upfront cost",
    description:
      "We work on a subscription model for users, not high listing fees for you. Listing your business is free, and you benefit from increased traffic and brand exposure.",
  },
  {
    icon: QrCode,
    title: "Seamless Member Access",
    description:
      "Our integrated platform makes it easy for users to check in, book classes, and engage with your offerings without disrupting your current system.",
  },
  {
    icon: Star,
    title: "Build Brand Trust",
    description:
      "With detailed business profiles, customer reviews, photos, and class schedules, you can showcase what makes your studio stand out.",
  },
];
