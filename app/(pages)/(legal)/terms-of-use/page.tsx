"use client";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [openSubTopics, setOpenSubTopics] = useState<OpenSubTopics>({});
  type OpenSubTopics = Record<string, boolean>;

  const toggleSubTopic = (topic: string) => {
    setOpenSubTopics((prev: OpenSubTopics) => ({
      ...prev,
      [topic]: !prev[topic],
    }));
  };

  interface ScrollToSection {
    (sectionId: string): void;
  }

  const scrollToSection: ScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigationItems = [
    {
      id: "acceptance",
      title: "1. ACCEPTANCE OF TERMS",
      subItems: [],
    },
    {
      id: "description",
      title: "2. DESCRIPTION OF SERVICE ",
      subItems: [],
    },
    {
      id: "user-Account",
      title: "3. USER ACCOUNTS AND REGISTRATION",
      subItems: [
        { id: "account-creation", title: "3.1 Account Creation" },
        { id: "responsibility", title: "3.2 Account Responsibility" },
      ],
    },
    {
      id: "subscription",
      title: "4. SUBSCRIPTION AND PAYMENT TERMS",
      subItems: [
        { id: "subscription-plans", title: " 4.1 Subscription Plans" },
        { id: "payment", title: "4.2 Payment" },
        { id: "cancellation", title: "4.3 Cancellation" },
      ],
    },
    {
      id: "platform",
      title: "5. USE OF PLATFORM",
      subItems: [
        { id: "permitted", title: "5.1 Permitted Use" },
        { id: "permitted-use", title: "5.2 Permitted Use" },
      ],
    },
    {
      id: "partner",
      title: "6. PARTNER FACILITIES",
      subItems: [
        { id: "third-party", title: "6.1 Third-Party Services" },
        { id: "booking", title: "6.2 Booking and Attendance" },
      ],
    },
    {
      id: "intelectual",
      title: "7. INTELLECTUAL PROPERTY",
      subItems: [
        { id: "property", title: "7.1 MyFithub Property" },
        { id: "user-content", title: "7.2 User Content" },
      ],
    },
    {
      id: "privacy",
      title: "8. PRIVACY AND DATA PROTECTION",
      subItems: [],
    },
    {
      id: "health",
      title: "9. HEALTH AND SAFETY",
      subItems: [
        { id: "medical-disclaimer", title: "9.1 Medical Disclaimer" },
        { id: "assumption-of-risk", title: "9.2 Assumption of Risk" },
      ],
    },
    {
      id: "disclaimers",
      title: "10. DISCLAIMERS AND LIMITATIONS",
      subItems: [
        { id: "availability", title: "10.1 Service Availability" },
        { id: "liability", title: "10.2 Limitation of Liability" },
      ],
    },
    {
      id: "idemification",
      title: "11. INDEMNIFICATION",
    },
    {
      id: "governing",
      title: " 12. GOVERNING LAW",
    },
    {
      id: "modifications",
      title: " 13. MODIFICATIONS",
    },
    {
      id: "contact",
      title: " 14. CONTACT INFORMATION",
    },
  ];

  return (
    <div className="flex flex-row min-h-screen bg-white">
      {/* Navigation Sidebar */}
      <div className="border-r border-gray-300 bg-white overflow-y-auto sticky top-5 h-fit max-h-screen  w-64 py-8 px-4  rounded-lg">
        <ul className="space-y-2 font-sora text-[#234E49] overflow-y-auto">
          {navigationItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <li className="text-sm font-semibold text-[#234E49] flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
                <div
                  className="flex items-center gap-2 flex-1"
                  onClick={() => scrollToSection(item.id)}
                >
                  <span>{item.title}</span>
                </div>
                <button
                  onClick={() => toggleSubTopic(item.id)}
                  className="hover:bg-gray-200 p-1 rounded"
                >
                  {openSubTopics[item.id] ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
              </li>

              {openSubTopics[item.id] && (
                <div className="ml-6 mt-2 space-y-1">
                  {item.subItems?.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="text-xs text-gray-600 hover:text-gray-800 cursor-pointer py-1 hover:bg-gray-50 px-2 rounded transition-colors"
                      onClick={() => scrollToSection(subItem.id)}
                    >
                      {subItem.title}
                    </li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-8 py-6 font-fredoka">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-[#234E49] font-sora mb-4">
              Terms of Use and Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: July 10, 2025</p>
          </div>
          <section id="acceptance" className="mb-12">
            <h2 className="text-2xl font-sora text-[#234E49] font-bold  mb-3 flex items-center gap-2">
              1. ACCEPTANCE OF TERMS
            </h2>

            <div className="mb-8">
              <p>
                By accessing or using MyFitHub&apos;s services, mobile
                application, or website (&quot;Platform&quot;), you agree to be
                bound by these Terms of Use (&quot;Terms&quot;). If you do not
                agree to these Terms, you may not use our Platform. MyFitHub is
                operated by My FitHub Limited, a company registered in Nigeria
                (&quot;MyFitHub&quot;, &quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;).
              </p>
            </div>
          </section>

          <section id="description" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49]  mb-6 flex items-center gap-2">
              2. DESCRIPTION OF SERVICE
            </h2>

            <div id="personal-info" className="mb-8">
              <p>MyFitHub provides a digital platform that allows users to:</p>

              <ul className="text-black leading-relaxed space-y-2 ml-6">
                <li>
                  Access multiple fitness facilities and wellness studios
                  through a single subscription
                </li>
                <li>Book fitness sessions and classes</li>
                <li>Receive AI-powered fitness recommendations</li>
                <li>Track fitness activities and progress</li>
                <li>Connect with other fitness enthusiasts</li>
                <li>Access family-friendly fitness options</li>
              </ul>
            </div>
          </section>

          {/* Data Usage Section */}
          <section id="user-account" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              3. USER ACCOUNTS AND REGISTRATION
            </h2>

            <div id="account-creation" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.1 Account Creation
              </h3>
              <ul className=" list list-disc list-inside">
                <li>You must be at least 18 years old to create an account</li>
                <li>
                  For users under 18, a parent or guardian must create and
                  manage the account
                </li>
                <li>
                  You must provide accurate and complete information during
                  registration
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials
                </li>
              </ul>
            </div>

            <div id="responsibility" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.2 Account Responsibility
              </h3>

              <ul className="list list-disc list-inside">
                <li>
                  You are responsible for all activities that occur under your
                  account
                </li>
                <li>
                  You must notify us immediately of any unauthorized use of your
                  account
                </li>
                <li>
                  We reserve the right to suspend or terminate accounts that
                  violate these Terms
                </li>
              </ul>
            </div>
          </section>

          <section id="subscription" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              4. SUBSCRIPTION AND PAYMENT TERMS
            </h2>

            <div id="subscription-plans" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.1 Subscription Plans
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  MyFitHub offers various subscription tiers with different
                  session allowances
                </li>
                <li>
                  Family plans allow multiple family members to use the service
                  under one account
                </li>
                <li>Corporate plans are available for businesses</li>
              </ul>
            </div>

            <div id="payment" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.2 Payment
              </h3>
              <ul className="list list-disc list-inside">
                <li>Subscription fees are billed monthly in advance</li>
                <li>
                  Payment is processed through secure third-party payment
                  processors
                </li>
                <li>All fees are non-refundable except as required by law</li>
                <li>
                  We reserve the right to change subscription pricing with 30
                  days&apos; notice
                </li>
              </ul>
            </div>

            <div id="cancellation" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.3 Cancellation
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  You may cancel your subscription at any time through your
                  account settings
                </li>
                <li>
                  Cancellation takes effect at the end of your current billing
                  cycle
                </li>
                <li>
                  No refunds will be provided for unused sessions or partial
                  billing periods
                </li>
              </ul>
            </div>
          </section>

          {/* Security Section */}
          <section id="platform" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              5. USE OF PLATFORM
            </h2>

            <div id="permitted" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5.1 Permitted Use
              </h3>
              <ul className="list list-disc list-inside">
                <li>Use the Platform for personal, non-commercial purposes</li>
                <li>Book sessions at partner facilities</li>
                <li>Access fitness content and recommendations</li>
                <li>Participate in community features</li>
              </ul>
            </div>

            <div id="prohibited" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5.2 Prohibited Use
              </h3>
              <p>You may not</p>
              <ul className="list list-disc list-inside">
                <li>
                  Use the Platform for any illegal or unauthorized purpose
                </li>
                <li>Impersonate another person or entity</li>
                <li>Interfere with or disrupt the Platform&apos;s operation</li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  Platform
                </li>
                <li>
                  Share your account credentials with others (except authorized
                  family members)
                </li>
                <li>Use automated systems to access the Platform</li>
                <li>Post inappropriate, offensive, or harmful content</li>
              </ul>
            </div>
          </section>

          {/* Rights Section */}
          <section id="partner" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              6. PARTNER FACILITIES
            </h2>

            <div id="third-party" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6.1 Third-Party Services
              </h3>
              <ul className="list list-disc list-inside">
                <li>Partner gyms and studios are independent third parties </li>
                <li>
                  MyFitHub is not responsible for the quality, safety, or
                  availability of partner services
                </li>
                <li>
                  You must comply with each partner facility&aposs;s rules and
                  policies
                </li>
                <li>
                  Some facilities may require additional waivers or agreements
                </li>
              </ul>
            </div>

            <div id="booking" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6.2 Booking and Attendance
              </h3>
              <ul className="list list-disc list-inside">
                <li>Session bookings are subject to availability </li>
                <li>Cancellation policies vary by partner facility</li>
                <li>
                  No-shows may result in session deductions or account penalties
                </li>
                <li>
                  We reserve the right to modify partner relationships at any
                  time
                </li>
              </ul>
            </div>
          </section>
          <section id="intelectual" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              7. INTELLECTUAL PROPERTY
            </h2>

            <div id="property" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7.1 MyFitHub Property
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  All content, features, and functionality are owned by MyFitHub
                </li>
                <li>
                  Our trademarks, logos, and brand elements are protected
                  intellectual property
                </li>
                <li>
                  You may not reproduce, distribute, or create derivative works
                  without permission
                </li>
              </ul>
            </div>

            <div id="user-content" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7.2 User Content
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  You retain ownership of content you submit to the Platform{" "}
                </li>
                <li>
                  You grant MyFitHub a license to use, display, and distribute
                  your content
                </li>
                <li>
                  You represent that you have the right to submit any content
                  you post
                </li>
              </ul>
            </div>
          </section>
          <section id="privacy" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              8. PRIVACY AND DATA PROTECTION
            </h2>

            <p>
              Your privacy is important to us. Please review our{" "}
              <u>
                <Link href={"privacy"}>Privacy Policy,</Link>
              </u>
              which describes how we collect, use, and protect your information.
            </p>
          </section>
          <section id="health" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              9. HEALTH AND SAFETY
            </h2>

            <div id="medical-disclaimer" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9.1 Medical Disclaimer
              </h3>
              <ul className="list list-disc list-inside">
                <li>MyFitHub does not provide medical advice</li>
                <li>
                  Consult with healthcare professionals before beginning any
                  fitness program
                </li>
                <li>You participate in fitness activities at your own risk</li>
                <li>
                  We are not responsible for injuries or health issues related
                  to fitness activities
                </li>
              </ul>
            </div>

            <div id="assumption-of-risk" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9.2 Assumption of Risk
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  You acknowledge that fitness activities involve inherent risks
                </li>
                <li>
                  You voluntarily assume all risks associated with using partner
                  facilities
                </li>
                <li>
                  You agree to follow all safety guidelines and instructions
                </li>
              </ul>
            </div>
          </section>
          <section id="disclaimer" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              10. DISCLAIMERS AND LIMITATIONS
            </h2>

            <div id="availability" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                10.1 Service Availability
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  We strive to maintain Platform availability but cannot
                  guarantee uninterrupted service
                </li>
                <li>Partner facility availability may vary</li>
                <li>
                  We reserve the right to modify or discontinue services at any
                  time
                </li>
              </ul>
            </div>
            <div id="liability" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                10.2 Limitation of Liability
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  MyFitHub&apos;s liability is limited to the amount paid for
                  services
                </li>
                <li>
                  We are not liable for indirect, incidental, or consequential
                  damages
                </li>
                <li>
                  Some jurisdictions do not allow limitations of liability
                </li>
              </ul>
            </div>
          </section>
          <section id="indemification" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              11. INDEMNIFICATION
            </h2>

            <p>
              You agree to indemnify and hold MyFitHub harmless from any claims,
              damages, or expenses arising from your use of the Platform or
              violation of these Terms.
            </p>
          </section>
          <section id="governing" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              12. GOVERNING LAW
            </h2>
            <p>
              These Terms are governed by the laws of Nigeria. Any disputes will
              be resolved in the courts of Lagos State, Nigeria.
            </p>
          </section>
          <section id="modification" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49] mb-6 flex items-center gap-2">
              13. MODIFICATIONS
            </h2>
            <p>
              We may modify these Terms at any time by posting updated Terms on
              our Platform. Your continued use constitutes acceptance of the
              modified Terms.
            </p>
          </section>
          <section id="contact" className="mb-12">
            <h2 className="text-2xl font-sora text-[#234E49] font-bold  mb-6 flex items-center gap-2">
              14. CONTACT INFORMATION
            </h2>
            <p>For questions about these Terms, contact us at:</p>
            <div id="data-processing" className="mb-8">
              <ul className="list list-disc list-inside">
                <li>Email: legal@myfithub.live </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
