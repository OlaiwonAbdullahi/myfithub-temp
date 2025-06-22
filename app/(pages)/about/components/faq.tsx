"use client";
import Heading from "@/app/ui/heading";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group mb-4 overflow-hidden">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-200">
        <div
          className="faq-question cursor-pointer px-4 py-3 md:px-6 md:py-4 flex justify-between items-center group-hover:bg-gray-50/50 transition-colors duration-300"
          onClick={toggleAccordion}
        >
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-8 h-8 bg-[#234E49] rounded-full flex items-center justify-center text-white text-sm font-bold">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-sm md:text-base font-semibold font-sora text-gray-900 pr-4">
              {question}
            </h3>
          </div>
          <div className="flex-shrink-0">
            <div
              className={`transform transition-all duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {isOpen ? (
                <CircleMinus className="h-6 w-6 text-[#234E49]" />
              ) : (
                <CirclePlus className="h-6 w-6 text-[#234E49] group-hover:text-[#234E49]" />
              )}
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-3 pb-4 md:px-4 md:pb-6">
            <div className="">
              <div className="bg-[#EEF7F6] rounded-xl p-3 md:p-4 ">
                <p className="text-gray-700 font-fredoka text-xs md:text-sm leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQAccordion = () => {
  const faqData = [
    {
      question: "What is MyFitHub?",
      answer:
        "MyFitHub is a flexible fitness membership that gives you access to multiple studios, gyms, pools, and wellness activities across your city — all under one subscription.",
    },
    {
      question: "How do your plans work?",
      answer:
        "We offer monthly plans with different tiers. Each plan gives you access to a set number of sessions and activity types (like gym, yoga, martial arts, swimming, etc.), depending on your tier. You can also purchase add-ons if you need extra sessions or want access to premium venues.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes. You can cancel your membership at any time and your access will continue until the end of your billing period. No hidden fees, no fuss.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely. You can switch between plans at any time from your account dashboard. Changes will take effect in your next billing cycle.",
    },
    {
      question: "How do I book a session?",
      answer:
        "Once you log in, go to the studio section. Select your preferred activity or studio and click open If you have visits available, you will be able to make a booking, If not, you'll be prompted to buy an add-on.",
    },
    {
      question: "What happens if I miss a class?",
      answer:
        "Just like a traditional membership, missed bookings still count toward your session allowance. This helps us support our studio partners fairly and avoid wasted spots.",
    },
    {
      question: "What if I run out of sessions?",
      answer:
        "You can always purchase add-on sessions at a fixed one-time fee. Add-ons let you keep attending your favorite classes without upgrading your entire plan",
    },
    {
      question: "Can I attend sessions outside my plan tier?",
      answer:
        "You'll see some sessions marked as Premium or higher-tier. If your plan doesn't cover them, you can unlock access through one-time add-ons or by upgrading your plan.",
    },
    {
      question: "Where is MyFitHub available?",
      answer:
        "We're currently live in London and Lagos, with select studios and fitness partners. New areas and providers are added regularly — stay tuned or join our waitlist if we're not in your area yet.",
    },
    {
      question:
        "Will I be able to use MyFitHub across different parts of the city?",
      answer:
        "Yes! We work hard to partner with studios and providers across multiple neighborhoods to give you flexible access wherever you are.",
    },
    {
      question: "What are add-ons and how do I use them?",
      answer:
        "Add-ons are one-time payments that allow you to attend sessions: Outside your tier After your monthly visits are used up They can be purchased directly through your dashboard.",
    },
    {
      question: "How do I pay for my membership?",
      answer:
        "Payments are securely processed via Stripe (in the UK) and Paystack(in Nigeria). All major cards are accepted.",
    },
    {
      question: "Are there family or group plans?",
      answer:
        "Yes, family and group plans are coming soon! If you're interested, reach out or join our waitlist to be notified when it's live.",
    },
    {
      question: "Partner Studios & Studios Signup",
      answer:
        "I'm a studio/gym owner — how can I partner with you? We'd love to hear from you! Please fill out this short form or email us at partners@myfithub.live, and we'll get back to you with next steps.",
    },
  ];

  return (
    <div className="faq-accordion w-full max-w-6xl mx-auto p-4 md:p-8">
      <div className="text-center mb-12 pt-10">
        <Heading
          title="Frequently Asked Questions"
          paragraph="Got a question? We've got answers. If you have some other questions, contact us using email."
        />
      </div>

      <div className="space-y-2 grid grid-cols-2 gap-4">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
