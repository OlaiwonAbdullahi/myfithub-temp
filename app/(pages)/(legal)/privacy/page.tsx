"use client";
import { Plus, Minus } from "lucide-react";
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
      id: "introduction",
      title: "INTRODUCTION",
      subItems: [],
    },
    {
      id: "data-collection",
      title: "DATA COLLECTION",
      subItems: [
        { id: "personal-info", title: "Personal Information" },
        { id: "usage-data", title: "Usage Data" },
        { id: "fitness-data", title: "Health and Fitness Information" },
        { id: "communication-data", title: "Communication Information" },
      ],
    },
    {
      id: "data-usage",
      title: "HOW WE USE DATA",
      subItems: [
        { id: "service-provision", title: "Service Provision" },
        { id: "personalization", title: "Personalization" },
        { id: "business", title: "Business Operations" },
        { id: "marketing", title: "Marketing and Communication" },
      ],
    },
    {
      id: "data-sharing",
      title: "DATA SHARING",
      subItems: [
        { id: "partner-facilities", title: " Partner Facilities" },
        { id: "service-providers", title: "Service Providers" },
        { id: "corporate-partners", title: "Corporate Partners" },
        { id: "legal-requirements", title: "Legal Requirements" },
      ],
    },
    {
      id: "security",
      title: "SECURITY",
      subItems: [
        { id: "security-measures", title: "Security Measures" },
        { id: "data-retention", title: "Data Retention" },
      ],
    },
    {
      id: "rights",
      title: "YOUR PRIVACY RIGHTS",
      subItems: [
        { id: "access-rights", title: "Access and Control " },
        { id: "communication", title: "Communication Preferences" },
        { id: "data-portability", title: "Data Portability" },
      ],
    },
    {
      id: "cookies",
      title: "COOKIES AND TRACKING",
      subItems: [
        { id: "cookies", title: "Cookies" },
        { id: "analytics", title: " Analytics" },
        { id: "data-portability", title: "Data Portability" },
      ],
    },
    {
      id: "third-party",
      title: "THIRD-PARTY SERVICES",
      subItems: [
        { id: "integration-partners", title: "Integration Partners" },
        { id: "third-party-privacy", title: "Third-Party Privacy" },
      ],
    },
    {
      id: "children",
      title: "CHILDREN'S PRIVACY",
      subItems: [
        { id: "age-restrictions", title: "Age Restrictions" },
        { id: "family-plans", title: "Family Plans" },
      ],
    },
    {
      id: "international",
      title: "INTERNATIONAL TRANSFERS",
      subItems: [{ id: "data-processing", title: "Data Processing" }],
    },
    {
      id: "changes",
      title: " CHANGES TO PRIVACY POLICY",
      subItems: [{ id: "updates", title: "Updates" }],
    },
  ];

  return (
    <div className="flex flex-row min-h-screen bg-white">
      {/* Navigation Sidebar */}
      <div className="border-r border-gray-300 bg-white sticky top-5 h-fit max-h-screen  w-64 py-8 px-4  rounded-lg">
        <ul className="space-y-2 font-sora text-[#234E49]">
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
                  {item.subItems.map((subItem) => (
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: July 10, 2025</p>
          </div>
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-sora text-[#234E49] font-bold  mb-3 flex items-center gap-2">
              1. Introduction
            </h2>

            <div className="mb-8">
              <p>
                MyFitHub (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is
                committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our Platform.
              </p>
            </div>
          </section>

          {/* Data Collection Section */}
          <section id="data-collection" className="mb-12">
            <h2 className="text-2xl font-sora font-bold text-[#234E49]  mb-6 flex items-center gap-2">
              2. Data Collection
            </h2>

            <div id="personal-info" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2.1 Personal Information
              </h3>

              <ul className="text-black leading-relaxed space-y-2 ml-6">
                <li>
                  <b>Account Information:</b> Name, email address, phone number,
                  date of birth
                </li>
                <li>
                  <b>Payment Information:</b> Billing address, payment method
                  details (processed by third-party providers)
                </li>
                <li>
                  <b>Profile Information:</b> Fitness goals, preferences,
                  emergency contacts
                </li>
                <li>
                  <b>Family Information:</b> Details of family members included
                  in family plans
                </li>
              </ul>
            </div>

            <div id="usage-data" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2.2 Usage Information
              </h3>
              <ul className="text-black leading-relaxed space-y-2 ml-6">
                <li>
                  <b>Activities Data:</b> Session bookings, attendance, fitness
                  preferences
                </li>
                <li>
                  <b>Platform Usage:</b> Pages visited, features used, time
                  spent on Platform
                </li>
                <li>
                  <b>Device Information:</b> Device type, operating system,
                  browser information
                </li>
                <li>
                  <b>Location Data:</b>General location for facility
                  recommendations (with consent)
                </li>
              </ul>
            </div>

            <div id="fitness-data" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2.3 Health and Fitness Information
              </h3>
              <ul className="text-black leading-relaxed space-y-2 ml-6">
                <li>
                  <b>Fitness Data:</b> Workout history, progress tracking, goals
                </li>

                <li>
                  <b>Health Information:</b> Basic health metrics you choose to
                  share
                </li>
                <li>
                  <b>Wearable Data:</b>Information from connected fitness
                  devices (with consent)
                </li>
              </ul>
            </div>
            <div id="communication-data" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                2.4 Communication Information
              </h3>
              <ul className="text-black leading-relaxed space-y-2 ml-6">
                <li>
                  <b>Message:</b> Communications with customer support
                </li>

                <li>
                  <b>Social Feature:</b> Posts, comments, and interactions with
                  other users
                </li>
                <li>
                  <b>Marketing Communication:</b>Preferences and engagement data
                </li>
              </ul>
            </div>
          </section>

          {/* Data Usage Section */}
          <section id="data-usage" className="mb-12">
            <h2 className="text-2xl font-bold text-[#234E49] mb-6 flex items-center gap-2">
              3.How We Use Your Information
            </h2>

            <div id="service-provision" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.1 Service Provision
              </h3>
              <ul className=" list list-disc list-inside">
                <li>Create and manage your account</li>
                <li>Process payments and subscriptions</li>
                <li>Facilitate bookings at partner facilities</li>
                <li>Provide customer support</li>
                <li>Send service-related communications</li>
              </ul>
            </div>

            <div id="personalization" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.2 Personalization
              </h3>

              <ul className="list list-disc list-inside">
                <li>Provide AI-powered fitness recommendations</li>
                <li>Customize your Platform experience</li>
                <li>Suggest relevant facilities and activities</li>
                <li>Track your fitness progress</li>
              </ul>
            </div>

            <div id="business" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.3 Business Operations
              </h3>

              <ul className="list list-disc list-inside">
                <li>Analyze Platform usage and performance</li>
                <li>Improve our services and features</li>
                <li>Conduct research and development</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </div>
            <div id="marketing" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                3.4 Marketing and Communications
              </h3>

              <ul className="list list-disc list-inside">
                <li>Send promotional materials (with consent)</li>
                <li>Notify you about new features and services</li>
                <li>Provide personalized offers and recommendations</li>
                <li>Conduct surveys and collect feedback</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing Section */}
          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>

            <div id="partner-facilities" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.1 Partner Facilities
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  Share necessary booking information with gyms and studios
                </li>
                <li>Provide attendance data for session confirmation</li>
                <li>Provide attendance data for session confirmation</li>
              </ul>
            </div>

            <div id="service-providers" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.2 Service Providers
              </h3>
              <ul className="list list-disc list-inside">
                <li>Payment processors for transaction handling</li>
                <li>Cloud storage and hosting providers</li>
                <li>Analytics and marketing service providers</li>
                <li>Customer support and communication tools</li>
              </ul>
            </div>

            <div id="corporate-partners" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.3 Corporate Partners
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  Aggregate, anonymized data for corporate wellness programs
                </li>
                <li>
                  Usage statistics for employer reporting (no personal
                  identification)
                </li>
              </ul>
            </div>
            <div id="legal-requirements" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                4.4 Legal Requirements
              </h3>
              <ul className="list list-disc list-inside">
                <li>Comply with legal obligations and court orders</li>
                <li>Protect our rights and property</li>
                <li>Respond to government requests</li>
                <li>Ensure user safety and security</li>
              </ul>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              5. DATA SECURITY
            </h2>

            <div id="security-measures" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                5.1 Security Measures
              </h3>
              <ul className="list list-disc list-inside">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security audits and assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure payment processing through certified providers</li>
              </ul>
            </div>

            <div id="data-retention" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Breach Response
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  Personal information retained while your account is active
                </li>
                <li>
                  Some information may be retained for legal or business
                  purposes
                </li>
                <li>Access controls and authentication requirements</li>
                <li>You may request deletion of your personal information</li>
              </ul>
            </div>
          </section>

          {/* Rights Section */}
          <section id="rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              6. YOUR PRIVACY RIGHTS
            </h2>

            <div id="access-rights" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6.1 Access and Control
              </h3>
              <ul className="list list-disc list-inside">
                <li>Access your personal information </li>
                <li>Update or correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </div>

            <div id="communication" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6.2 Communication Preferences
              </h3>
              <ul className="list list-disc list-inside">
                <li>Opt out of marketing communications </li>
                <li>Control notification settings</li>
                <li>Choose what information to share publicly</li>
                <li>Manage connected device permissions</li>
              </ul>
            </div>

            <div id="data-portability" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                6.3 Data Portability
              </h3>
              <ul className="list list-disc list-inside">
                <li>Request a copy of your personal information</li>
                <li>Transfer data to another service provider</li>
                <li>Receive data in a structured, commonly-used format</li>
              </ul>
            </div>
          </section>
          <section id="cookies" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              7. COOKIES AND TRACKING
            </h2>

            <div id="cookies" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7.1 Cookies
              </h3>
              <ul className="list list-disc list-inside">
                <li>We use cookies to enhance your experience</li>
                <li>Essential cookies for Platform functionality</li>
                <li>Analytics cookies to understand usage patterns</li>
                <li>
                  Marketing cookies for personalized advertising (with consent)
                </li>
              </ul>
            </div>

            <div id="analytics" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                7.2 Analytics
              </h3>
              <ul className="list list-disc list-inside">
                <li>Google Analytics and similar services </li>
                <li>User behavior tracking for service improvement</li>
                <li>Aggregate usage statistics</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>
          </section>
          <section id="third-party" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              8. THIRD-PARTY SERVICES
            </h2>

            <div id="integration-partners" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                8.1 Integration Partners
              </h3>
              <ul className="list list-disc list-inside">
                <li>Fitness tracking apps and devices</li>
                <li>Social media platforms</li>
                <li>Payment processors</li>
                <li>Mapping and location services</li>
              </ul>
            </div>

            <div id="third-party-privacy" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                8.2 Third-Party Privacy
              </h3>
              <ul className="list list-disc list-inside">
                <li>Each service has its own privacy policy</li>
                <li>We are not responsible for third-party practices</li>
                <li>Review privacy policies of connected services</li>
              </ul>
            </div>
          </section>
          <section id="third-party" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              9. CHILDREN&apos;S PRIVACY
            </h2>

            <div id="integration-partners" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9.1 Age Restrictions
              </h3>
              <ul className="list list-disc list-inside">
                <li>
                  Our Platform is not intended for children or adult under 18
                </li>
                <li>Family accounts must be managed by adults</li>
                <li>Parental consent required for minors</li>
              </ul>
            </div>

            <div id="third-party-privacy" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                9.2 Family Plans
              </h3>
              <ul className="list list-disc list-inside">
                <li>Parents are responsible for family member information</li>
                <li>
                  Children&apos;s data is protected under parental account
                </li>
                <li>Review privacy policies of connected services</li>
              </ul>
            </div>
          </section>
          <section id="international" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              10. INTERNATIONAL TRANSFERS
            </h2>

            <div id="data-processing" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                10.1 Data Processing
              </h3>
              <ul className="list list-disc list-inside">
                <li>Your information may be processed outside Nigeria</li>
                <li>
                  We ensure adequate protection for international transfers
                </li>
                <li>Compliance with applicable data protection laws</li>
              </ul>
            </div>
          </section>
          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              11. CHANGES TO PRIVACY POLICY
            </h2>

            <div id="data-processing" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                11.1 Updates
              </h3>
              <ul className="list list-disc list-inside">
                <li>We may update this Privacy Policy periodically</li>
                <li>
                  Material changes will be communicated via email or Platform
                  notification
                </li>
                <li>Continued use constitutes acceptance of updated policy</li>
              </ul>
            </div>
          </section>
          <section id="changes" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              12. CONTACT INFORMATION
            </h2>
            <p>For privacy-related questions or requests, contact us at:</p>
            <div id="data-processing" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Privacy Officer
              </h3>
              <ul className="list list-disc list-inside">
                <li>Email: privacy@myfithub.live</li>
                <li>Phone: +234XXXXXXXXXXX</li>
              </ul>
            </div>
            <div id="data-processing" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Protection Rights
              </h3>
              <ul className="list list-disc list-inside">
                <li>Email: dataprotection@myfithub.live</li>
                <li>
                  Subject Line: <b>Privacy Rights Request</b>
                </li>
              </ul>
            </div>
          </section>
          <section id="nigeria" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              13. NIGERIAN DATA PROTECTION COMPLIANCE
            </h2>
            <p>
              MyFitHub complies with the Nigeria Data Protection Regulation
              (NDPR) and other applicable Nigerian privacy laws. You have the
              right to:
            </p>
            <div id="data-processing" className="mb-8">
              <ul className="list list-disc list-inside">
                <li>Know what personal data we collect and how we use it</li>
                <li>Access your personal data</li>
                <li>Correct inaccurate personal data</li>
                <li>Delete your personal data</li>
                <li>Restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Object to processing of your personal data</li>
                <li>
                  File complaints with the National Information Technology
                  Development Agency (NITDA)
                </li>
              </ul>
            </div>
          </section>
          <section id="nigeria" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              14. GDPR COMPLIANCE
            </h2>
            <p>
              For users in the European Union, MyFitHub complies with the
              General Data Protection Regulation (GDPR). Our legal basis for
              processing includes:
            </p>
            <div id="data-processing" className="mb-8">
              <ul className="list list-disc list-inside">
                <li>
                  Consent for marketing communications and optional features
                </li>
                <li>Contract performance for service provision</li>
                <li>
                  Legitimate interests for business operations and improvements
                </li>
                <li>Legal compliance for regulatory requirements</li>
              </ul>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              Effective Date: [DATE] MyFitHub - One Subscription, Every Activity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
