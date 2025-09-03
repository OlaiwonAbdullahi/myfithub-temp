"use client";
import Button from "@/app/ui/button";
import Heading from "@/app/ui/heading";
import {
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Send,
  TwitterIcon,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    if (!name.trim()) {
      setErrorMessage("Please enter your full name");
      return false;
    }
    if (!email.trim()) {
      setErrorMessage("Please enter your email address");
      return false;
    }
    if (!message.trim()) {
      setErrorMessage("Please enter a message");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const sendMessage = async () => {
    try {
      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.trim(),
            name: name.trim(),
            message: message.trim(),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Send message response:", data);

      setEmail("");
      setName("");
      setMessage("");
      setSubmitStatus("success");
      setErrorMessage("");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);

      return data;
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later."
      );
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitStatus("idle");
    setErrorMessage("");

    if (!validateForm()) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      await sendMessage();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="md:max-w-2xl mx-auto px-4 md:py-12 py-7">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="px-8 pt-8">
          <Heading
            title="Get In Touch"
            paragraph="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </div>

        <div className="px-8 py-8 font-fredoka">
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-green-800 font-medium">
                Message sent successfully! We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === "error" && errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-800 font-medium">{errorMessage}</p>
            </div>
          )}

          <form className="space-y-6 font-fredoka" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#234E49] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#234E49] focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
              >
                Message *
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#234E49] focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                value={message}
                rows={6}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                icon={Send}
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary hover:bg-[#1a3a36] text-white"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>

        <div className="bg-[#EEF7F6]/50 px-8 py-8 border-t border-gray-100">
          <div className="text-center">
            <h3 className="font-semibold font-sora text-gray-800 mb-6 text-lg">
              Connect With Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-fredoka">
              <a
                href="mailto:partnership@myfithub.live"
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-[#234E49] group"
                aria-label="Send us an email"
              >
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-[#234E49] group"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon
                  size={20}
                  strokeWidth={1.5}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">Instagram</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-[#234E49] group"
                aria-label="Follow us on Twitter"
              >
                <TwitterIcon
                  size={20}
                  strokeWidth={1.5}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">Twitter</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-gray-700 hover:text-[#234E49] group"
                aria-label="Connect with us on LinkedIn"
              >
                <LinkedinIcon
                  strokeWidth={1.5}
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
