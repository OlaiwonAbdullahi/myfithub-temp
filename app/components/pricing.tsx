"use client";
import React, { useState } from "react";
import Heading from "../ui/heading";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  price: {
    lagos: string;
    london: string;
  };
  features: string[];
  popular?: boolean;
}

interface PricingProps {
  className?: string;
}

const Pricing: React.FC<PricingProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"lagos" | "london">("lagos");

  const pricingPlans: PricingPlan[] = [
    {
      name: "Basic",
      price: {
        lagos: "₦18,000",
        london: "£65",
      },
      features: [
        "Basic Studios Access",
        "1 Project",
        "Community Support",
        "Basic Templates",
      ],
    },
    {
      name: "Standard",
      price: {
        lagos: "₦36,000",
        london: "£110",
      },
      features: [
        "Unlimited Studios Access",
        "10 Projects",
        "Priority Support",
        "Premium Templates",
        "Advanced Analytics",
        "Custom Branding",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: {
        lagos: "₦100,000",
        london: "£220",
      },
      features: [
        "Everything in Professional",
        "Unlimited Projects",
        "24/7 Dedicated Support",
        "Custom Integrations",
        "Advanced Security",
        "Team Management",
        "API Access",
      ],
    },
  ];

  return (
    <div className={`max-w-7xl mx-auto px-4 py-16 ${className}`}>
      {/* Header */}
      <div className="text-center mb-12">
        <Heading
          title="Our Pricing"
          paragraph="Choose the perfect plan for your needs"
        />
      </div>

      {/* Location Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-[#D6EDE9] p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("lagos")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === "lagos"
                ? "bg-white text-[#234E49] shadow-sm"
                : "text-gray-900 hover:text-gray-900"
            }`}
          >
            Lagos
          </button>
          <button
            onClick={() => setActiveTab("london")}
            className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
              activeTab === "london"
                ? "bg-white text-[#234E49] shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            London
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular
                ? "border-[#234E49] ring-2 ring-[#234E49] ring-opacity-20 scale-105"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Plan Name */}
              <h3 className="text-2xl font-bold font-sora text-gray-900 mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-sora font-bold text-gray-900">
                  {plan.price[activeTab]}
                </span>
                <span className="text-gray-500 ml-2 font-fredoka">/month</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 font-fredoka">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#234E49] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary shadow-md hover:shadow-lg"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
