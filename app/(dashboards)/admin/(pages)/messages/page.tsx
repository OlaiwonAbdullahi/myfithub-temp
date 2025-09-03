"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface PartnerRequest {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Page = () => {
  const [contactMessages, setContactMessages] = useState<ContactMessage[]>([]);
  const [partnerRequests, setPartnerRequests] = useState<PartnerRequest[]>([]);

  // ✅ Contact Messages Fetcher
  const getContactMessages = async (): Promise<void> => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/contact",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData: { message?: string } = await response
          .json()
          .catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data: { data: ContactMessage[] } = await response.json();
      console.log("contact message response:", data.data);
      setContactMessages(data.data);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
    }
  };

  // ✅ Partner Requests Fetcher
  const getPartnerRequests = async (): Promise<void> => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/partnership",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData: { message?: string } = await response
          .json()
          .catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data: { data: PartnerRequest[] } = await response.json();
      console.log("partnership response:", data.data);
      setPartnerRequests(data.data);
    } catch (error) {
      console.error("Error fetching partner requests:", error);
    }
  };

  useEffect(() => {
    getContactMessages();
    getPartnerRequests();
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-family-sora text-primary font-semibold">
            Messages
          </h1>
          <p className="text-muted-foreground font-family-fredoka">
            Manage contact messages and partner requests
          </p>
        </div>

        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 h-13">
            <TabsTrigger
              value="contact"
              className="flex items-center cursor-pointer shadow-none h-10 gap-2 py-1 px-7 w-fit mx-auto text-base font-sora text-primary"
            >
              Contact Us Messages ({contactMessages.length})
            </TabsTrigger>
            <TabsTrigger
              value="partners"
              className="flex cursor-pointer items-center shadow-none h-10 gap-2 py-1 px-7 w-fit mx-auto text-base font-sora text-primary"
            >
              Partner Requests ({partnerRequests.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="contact" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMessages.map((message) => (
                <Card
                  key={message.id}
                  className="rounded-md px-1.5 border w-full border-gray-200 bg-white"
                >
                  <CardHeader className=" px-1.5">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-1.5">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="font-sora uppercase text-lg text-primary">
                            {message.name?.slice(0, 1) || "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base text-primary font-semibold font-sora">
                            {message.name || "Unknown"}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500 font-family-fredoka">
                            {message.email}
                          </CardDescription>
                        </div>
                      </div>

                      <span className="text-xs whitespace-nowrap text-gray-500 font-fredoka">
                        {message.created_at
                          ? message.created_at.slice(0, 10)
                          : "N/A"}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg font-family-fredoka">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerRequests.map((message) => (
                <Card
                  key={message.id}
                  className="rounded-md border border-gray-200 bg-white"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="font-sora text-lg">
                            {message.name.slice(0, 1) || "?"}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base font-semibold font-sora text-gray-900">
                            {message.name}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-sm text-gray-500 font-family-fredoka">
                            {message.email}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-lg font-family-fredoka">
                      {message.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
