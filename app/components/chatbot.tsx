"use client";
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

  const handleSendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "I'm still learning! But I'll try my best to help.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-10 right-4 w-80 bg-white   rounded-md border border-[#234E49]/50 transition-all duration-300 z-50">
      <div className="bg-[#234E49] text-white px-4 py-2 flex justify-between items-center rounded-t-md">
        <span className="font-semibold font-Sora">MyFitHub Chatbot</span>
        <button onClick={onClose} className="p-1 cursor-pointer">
          <X className="size-5" />
        </button>
      </div>

      <div className="p-3 h-64 overflow-y-auto flex flex-col gap-2 font-fredoka scrollbar-hide">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-md text-sm max-w-[75%] ${
                msg.sender === "user"
                  ? "bg-[#234E49] text-white self-end"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t flex items-center p-2  bg-gray-50 rounded-b-xl font-fredoka">
        <input
          type="text"
          className="flex-1 border rounded-md px-3 py-2 focus:outline-none text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="ml-2 bg-[#234E49] text-white p-2 rounded-md"
          onClick={handleSendMessage}
        >
          <Send className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
