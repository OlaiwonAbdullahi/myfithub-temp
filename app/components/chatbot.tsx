"use client";
import { Input } from "@/components/ui/input";
import { Send, X } from "lucide-react";
import { useState } from "react";

interface PageProps {
  open: boolean;
  onClose: () => void;
}

interface Message {
  text: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC<PageProps> = ({ open, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const fetchchat = async (userMessage: string) => {
    try {
      setLoading(true);

      const requestBody = {
        user_id: "1",
        message: userMessage,
        user_context: {
          fitness_goals: ["general_fitness"],
          fitness_level: "beginner",
          subscription_tier: "basic",
          recent_bookings: "No recent bookings",
          preferred_times: "flexible",
          preferred_areas: ["lagos"],
          last_interaction: "first interaction",
          weekly_streak: 0,
        },
        support_context: {
          issue_type: "general_inquiry",
          previous_tickets: 0,
          account_status: "guest",
          urgency_level: "low",
        },
      };

      const response = await fetch(
        "https://myfithub-ai-api.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      setMessages((prev) => [
        ...prev,
        {
          text: data.response || "Sorry, I couldn't understand that.",
          sender: "bot",
        },
      ]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Oops! Something went wrong. Please try again.",
          sender: "bot",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (!input.trim() || loading) return;

    const userInput = input.trim();

    // Append user message
    setMessages((prev) => [...prev, { text: userInput, sender: "user" }]);
    setInput("");

    // Call API with the user input
    fetchchat(userInput);
  };

  // Remove the initial fetch on component mount since we already have a greeting
  // useEffect(() => {
  //   fetchchat("Hello");
  // }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-10 font-fredoka right-4 w-80 bg-white rounded-md border border-gray-300 shadow-lg transition-all duration-300 z-50">
      {/* Header */}
      <div className="bg-primary text-white px-4 py-3 flex justify-between items-center rounded-t-md">
        <span className="font-semibold font-family-sora">
          MyFitHub Customer Support
        </span>
        <button
          onClick={onClose}
          className="p-1 cursor-pointer hover:bg-primary rounded"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="p-3 h-64 overflow-y-auto flex flex-col gap-2 scrollbar-hide bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-lg text-sm max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-primary text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg text-sm bg-gray-200 text-gray-600 animate-pulse">
              Typing...
            </div>
          </div>
        )}
      </div>

      <div className="border-t flex items-center p-3 bg-white rounded-b-md">
        <Input
          type="text"
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          disabled={loading}
        />
        <button
          className="ml-2 bg-primary hover:bg-primary text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          onClick={handleSendMessage}
          disabled={loading || !input.trim()}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
