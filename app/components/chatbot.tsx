"use client";
import { Send, X } from "lucide-react";
import { useEffect, useState } from "react";

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

  const fetchchat = async (prompt: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://myfithub-ai-api.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }
      );
      const data = await response.json();
      console.log(data);

      /* setMessages((prev) => [
        ...prev,
        {
          text: data.reply || "Sorry, I couldn't understand that.",
          sender: "bot",
        },
      ]
        );*/
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
    if (!input.trim()) return;

    // Append user message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    const userInput = input;
    setInput("");

    // Call API
    fetchchat(userInput);
  };

  // Optional: greet on first render
  useEffect(() => {
    fetchchat("Hello");
  }, []);

  if (!open) return null;

  return (
    <div className="fixed bottom-10 right-4 w-80 bg-white rounded-md border border-[#234E49]/50 shadow-lg transition-all duration-300 z-50">
      {/* Header */}
      <div className="bg-[#234E49] text-white px-4 py-2 flex justify-between items-center rounded-t-md">
        <span className="font-semibold font-Sora">MyFitHub Chatbot</span>
        <button onClick={onClose} className="p-1 cursor-pointer">
          <X className="size-5" />
        </button>
      </div>

      {/* Messages */}
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
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-md text-sm bg-gray-100 text-gray-500">
              Typing...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t flex items-center p-2 bg-gray-50 rounded-b-xl font-fredoka">
        <input
          type="text"
          className="flex-1 border rounded-md px-3 py-2 focus:outline-none text-sm"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="ml-2 bg-[#234E49] text-white p-2 rounded-md disabled:opacity-50"
          onClick={handleSendMessage}
          disabled={loading}
        >
          <Send className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
