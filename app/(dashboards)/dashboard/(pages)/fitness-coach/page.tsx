"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, Bot, User, History } from "lucide-react";
import Markdown from "react-markdown";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

export default function AIChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string>("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (conversations.length === 0) {
      const first: Conversation = {
        id: Date.now().toString(),
        title: "New Chat",
        messages: [
          {
            id: "welcome",
            role: "assistant",
            content:
              "Hi! I'm your AI fitness coach. I'm here to help you with workout planning, nutrition advice, form tips, and motivation. What would you like to work on today?",
          },
        ],
      };
      setConversations([first]);
      setActiveConversationId(first.id);
    }
  }, [conversations]);

  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  const setMessages = (msgs: Message[]) => {
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeConversationId ? { ...c, messages: msgs } : c
      )
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !activeConversation) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages([...activeConversation.messages, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const requestBody = {
        user_id: "1",
        message: input,
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
          previous_tickets: "0",
          account_status: "guest",
          urgency_level: "low",
        },
      };

      const res = await fetch("https://myfithub-ai-api.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      });

      const data = await res.json();
      console.log(data);
      const reply = data.response || "Sorry, I didn't understand that.";
      const aiMessage: Message = {
        id: Date.now().toString() + "-ai",
        role: "assistant",
        content: reply,
      };

      setMessages([...activeConversation.messages, userMessage, aiMessage]);

      // update conversation title (first user question)
      if (activeConversation.title === "New Chat") {
        setConversations((prev) =>
          prev.map((c) =>
            c.id === activeConversationId
              ? { ...c, title: userMessage.content.slice(0, 20) + "..." }
              : c
          )
        );
      }
    } catch (err) {
      console.error("Error fetching AI response:", err);
      const errorMsg: Message = {
        id: Date.now().toString() + "-err",
        role: "assistant",
        content: "⚠️ Something went wrong. Please try again.",
      };
      setMessages([...activeConversation.messages, userMessage, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const startNewConversation = () => {
    const newConv: Conversation = {
      id: Date.now().toString(),
      title: "New Chat",
      messages: [
        {
          id: "welcome-" + Date.now(),
          role: "assistant",
          content:
            "Hi! I'm your AI fitness coach. Let's start a new conversation.",
        },
      ],
    };
    setConversations((prev) => [...prev, newConv]);
    setActiveConversationId(newConv.id);
  };

  return (
    <div className="min-h-screen font-family-fredoka bg-background flex flex-col justify-center items-center">
      <main className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="h-[560px] flex flex-col ">
              <CardHeader className="border-b py-0">
                <CardTitle className="flex items-center gap-x-2 text-lg font-sora ">
                  <History className="w-4 h-4" />
                  History
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 overflow-hidden p-2">
                <ScrollArea className="h-full">
                  <div className="space-y-2 pr-2">
                    {conversations.map((conv) => (
                      <Button
                        key={conv.id}
                        variant={
                          conv.id === activeConversationId
                            ? "default"
                            : "outline"
                        }
                        className="w-full justify-start text-left"
                        onClick={() => setActiveConversationId(conv.id)}
                      >
                        <span className="truncate">{conv.title}</span>
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
                <div className="pt-2 border-t mt-2 fixed">
                  <Button
                    onClick={startNewConversation}
                    className="w-full"
                    variant="secondary"
                  >
                    + New Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card className="h-[560px] flex flex-col">
              <CardHeader className="flex-shrink-0 border-b ">
                <CardTitle className=" font-family-sora flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat with Your AI Coach
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
                <div className="flex-1 overflow-hidden">
                  <ScrollArea className="h-full font-fredoka">
                    <div className="space-y-4 px-4">
                      {activeConversation?.messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${
                            message.role === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          {message.role === "assistant" && (
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                              <Bot className="w-4 h-4 text-primary-foreground" />
                            </div>
                          )}

                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              message.role === "user"
                                ? "bg-primary text-primary-foreground ml-auto"
                                : "bg-muted"
                            }`}
                          >
                            <div className="prose prose-sm max-w-none dark:prose-invert">
                              <Markdown>{message.content}</Markdown>
                            </div>
                          </div>

                          {message.role === "user" && (
                            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-secondary-foreground" />
                            </div>
                          )}
                        </div>
                      ))}

                      {isLoading && (
                        <div className="flex gap-3 justify-start">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                            <Bot className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <div className="bg-muted rounded-lg p-3">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>

                <div className="border-t border-border p-4 ">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={handleInputChange}
                      placeholder="Ask me anything about fitness, nutrition, or workouts..."
                      className="flex-1"
                      disabled={isLoading}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit(e);
                        }
                      }}
                    />
                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading || !input.trim()}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
