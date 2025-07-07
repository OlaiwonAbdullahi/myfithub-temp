"use client";

import React from "react";

const CreditFlow = () => {
  const tiers = [
    {
      tier: "Tier 1",
      name: "Ozichi",
      location: "Nigeria",
      points: 80,
      avatar: "https://tapback.co/api/avatar/kate.jpg",
      description:
        "Ozichi works hybrid and uses MyFitHub to build and maintain a consistent fitness routine using a mix of different services.",
      activities: [
        { name: "Gym", count: 12, pointsEach: 2, totalPoints: 24 },
        { name: "Swimming", count: 4, pointsEach: 3, totalPoints: 12 },
        { name: "Pilates", count: 3, pointsEach: 10, totalPoints: 30 },
        { name: "Tennis", count: 3, pointsEach: 4, totalPoints: 12 },
      ],
    },
    {
      tier: "Tier 2",
      name: "Efua",
      location: "Nigeria",
      points: 40,
      avatar: "https://tapback.co/api/avatar/joy.jpg",
      description:
        "Efua is recently trying to live healthier and uses MyFitHub to customize a basic fitness routine.",
      activities: [
        { name: "Gym", count: 8, pointsEach: 2, totalPoints: 16 },
        { name: "Swimming", count: 4, pointsEach: 3, totalPoints: 12 },
        { name: "Tennis", count: 3, pointsEach: 4, totalPoints: 12 },
        { name: "Running", count: 4, pointsEach: 0, totalPoints: 0 },
      ],
    },
    {
      tier: "Tier 3",
      name: "Denise",
      location: "UK",
      points: 20,
      avatar: "https://tapback.co/api/avatar/efua.jpg",
      description:
        "Denise is a student seeking a cost-effective and affordable way to build a rounded fitness experience without breaking the bank. She’s experimental and tries different experiences each month.",
      activities: [
        { name: "Gym", count: 6, pointsEach: 2, totalPoints: 12 },
        { name: "Running", count: null, pointsEach: 0, totalPoints: 0 },
        { name: "Yoga", count: 1, pointsEach: 10, totalPoints: 10 },
      ],
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12 lg:px-20 lg:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl p-4 pt-8 text-gray-800 space-y-4"
              aria-labelledby={`tier-${tier.tier
                .replace(" ", "-")
                .toLowerCase()}`}
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#234E49] text-white font-fredoka text-sm px-3 py-1 rounded-full z-10">
                {tier.tier}
              </div>
              <div className="flex items-center space-x-4">
                <img
                  src={tier.avatar}
                  alt={`${tier.name}'s avatar`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                />
                <div>
                  <h2 className="text-xl sm:text-2xl font-sora font-bold text-[#234E49]">
                    {tier.points} points
                  </h2>
                  <p className="text-base sm:text-lg font-fredoka">
                    <span className="font-semibold">{tier.name}</span> ·{" "}
                    {tier.location}
                  </p>
                </div>
              </div>
              <p className="text-sm font-fredoka text-gray-600">
                {tier.description}
              </p>
              <hr className="border-gray-200" />
              <div className="space-y-3 text-sm font-fredoka">
                {tier.activities.map((activity, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-start border-b border-gray-200 py-2"
                  >
                    <div>
                      <p className="font-semibold">
                        {activity.name}
                        {activity.count && (
                          <span className="ml-2 text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                            x{activity.count}
                          </span>
                        )}
                      </p>
                      {activity.pointsEach > 0 && (
                        <p className="text-xs text-gray-500">
                          {activity.pointsEach} Points each
                        </p>
                      )}
                    </div>
                    <p className="font-semibold">
                      {activity.totalPoints} Points
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditFlow;
