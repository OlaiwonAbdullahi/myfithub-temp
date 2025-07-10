"use client";
import {
  Plus,
  Minus,
  Shield,
  Eye,
  Lock,
  Users,
  Database,
  Settings,
} from "lucide-react";
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
        { id: "cookies", title: "Cookies & Tracking" },
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
        { id: "data-portability", title: "Data Portability" },
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
    <div className="flex flex-row min-h-screen bg-gray-50">
      {/* Navigation Sidebar */}
      <div className="border border-gray-300 bg-white my-5 sticky top-5 h-fit max-h-screen  w-64 py-8 px-4  rounded-lg">
        <ul className="space-y-2 font-sora">
          {navigationItems.map((item) => (
            <div key={item.id} className="flex flex-col">
              <li className="text-sm font-semibold text-gray-700 flex items-center justify-between hover:bg-gray-100 p-2 rounded cursor-pointer transition-colors">
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: July 10, 2025</p>
          </div>

          {/* Introduction Section */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-600" />
              Introduction
            </h2>

            <div id="overview" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </div>

            <div id="scope" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Scope of Policy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This policy applies to all information collected through our
                website, mobile applications, and any related services, sales,
                marketing, or events.
              </p>
            </div>

            <div id="contact" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us at privacy@company.com
              </p>
            </div>
          </section>

          {/* Data Collection Section */}
          <section id="data-collection" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-600" />
              Data Collection
            </h2>

            <div id="personal-info" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Personal Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you provide directly to
                us, including:
              </p>
              <ul className="text-gray-700 leading-relaxed space-y-2 ml-6">
                <li>• Name and contact information</li>
                <li>• Account credentials</li>
                <li>• Payment information</li>
                <li>• Communication preferences</li>
              </ul>
            </div>

            <div id="usage-data" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Usage Data
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We automatically collect information about how you use our
                services, including IP addresses, browser types, pages visited,
                and interaction patterns.
              </p>
            </div>

            <div id="cookies" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Cookies & Tracking
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your
                experience and analyze usage patterns.
              </p>
            </div>
          </section>

          {/* Data Usage Section */}
          <section id="data-usage" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Settings className="w-6 h-6 text-blue-600" />
              How We Use Data
            </h2>

            <div id="service-provision" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Service Provision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We use your information to provide, maintain, and improve our
                services, process transactions, and deliver customer support.
              </p>
            </div>

            <div id="communication" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Communication
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may use your contact information to send you updates,
                security alerts, and administrative messages.
              </p>
            </div>

            <div id="improvement" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Service Improvement
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We analyze usage patterns to understand user behavior and
                improve our services.
              </p>
            </div>
          </section>

          {/* Data Sharing Section */}
          <section id="data-sharing" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Data Sharing
            </h2>

            <div id="third-parties" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Third Parties
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information. We may share
                information with trusted partners who assist us in operating our
                services.
              </p>
            </div>

            <div id="legal-requirements" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Legal Requirements
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We may disclose your information if required by law or to
                protect our rights and safety.
              </p>
            </div>

            <div id="business-transfers" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Business Transfers
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a merger or acquisition, your information may be
                transferred as part of the transaction.
              </p>
            </div>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-blue-600" />
              Security
            </h2>

            <div id="protection-measures" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Protection Measures
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div id="data-breach" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Data Breach Response
              </h3>
              <p className="text-gray-700 leading-relaxed">
                In the event of a data breach, we will notify affected users and
                relevant authorities as required by law.
              </p>
            </div>

            <div id="user-responsibility" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                User Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for maintaining the security of your account
                credentials and notifying us of any unauthorized access.
              </p>
            </div>
          </section>

          {/* Rights Section */}
          <section id="rights" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Eye className="w-6 h-6 text-blue-600" />
              Your Rights
            </h2>

            <div id="access-rights" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Access Rights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You have the right to access, update, or delete your personal
                information. Contact us to exercise these rights.
              </p>
            </div>

            <div id="correction" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Correction
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may request corrections to inaccurate or incomplete personal
                information.
              </p>
            </div>

            <div id="deletion" className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Deletion
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You may request deletion of your personal information, subject
                to certain legal requirements.
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <p className="text-sm text-gray-600">
              This Privacy Policy is effective as of July 10, 2025. We reserve
              the right to update this policy at any time. We will notify you of
              any changes by posting the new policy on this page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
