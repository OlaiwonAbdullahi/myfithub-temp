"use client";
import Button from "@/app/ui/button";
import Heading from "@/app/ui/heading";
import {
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Send,
  TwitterIcon,
} from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, name, message }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log("Send message response:", data);

      // Reset form after success
      setEmail("");
      setName("");
      setMessage("");

      return data;
    } catch (error) {
      console.error("Error sending message:", error);
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent page reload
    await sendMessage();
  };

  return (
    <div className="md:max-w-2xl mx-auto px-4 md:py-12 py-7">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className=" px-8 pt-8 ">
          <Heading
            title="Get In Touch"
            paragraph="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          />
        </div>

        <div className="px-8 py-8">
          <form className="space-y-6 font-fredoka" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none transition-all duration-200 placeholder-gray-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none transition-all duration-200 placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-semibold text-gray-700 text-sm uppercase tracking-wide"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="border border-gray-300 bg-white rounded-lg px-4 py-3 focus:outline-none transition-all duration-200 placeholder-gray-400 resize-none"
                value={message}
                rows={6}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button
                icon={Send}
                type="submit"
                className="bg-primary hover:bg-[#1a3a36] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Send Message
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
