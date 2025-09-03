"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Studio {
  id: string;
  name: string;
  location: string;
  createdAt: string;
  status: string;
}

interface ApiResponse {
  studios: Studio[];
}

const Page: React.FC = () => {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllStudios = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/auth/studio/studios",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `HTTP error! status: ${response.status}`
        );
      }

      const data: ApiResponse = await response.json();
      console.log("Fetched studios:", data.studios);
      setStudios(data.studios || []);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllStudios();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#234E49]/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sora text-xl font-semibold text-gray-900">
          Studio Management
        </h2>
        <Button
          variant="ghost"
          size="sm"
          disabled={loading}
          className="text-[#234E49] text-sm font-medium hover:bg-[#234E49]/10 font-fredoka"
        >
          <Filter size={16} className="inline mr-2" />
          Filter
        </Button>
      </div>

      {loading ? (
        <p className="text-gray-500 text-sm font-fredoka">Loading studios...</p>
      ) : error ? (
        <p className="text-red-500 text-sm font-fredoka">{error}</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="font-sora text-sm text-[#234E49]">
              <TableHead>ID</TableHead>
              <TableHead>Studio Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Created On</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studios.length > 0 ? (
              studios.map((studio) => {
                const createdAt = new Date(studio.createdAt);
                const formattedDate = isNaN(createdAt.getTime())
                  ? "Invalid date"
                  : createdAt.toLocaleDateString();

                return (
                  <TableRow
                    key={studio.id}
                    className="font-fredoka text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <TableCell>{studio.id}</TableCell>
                    <TableCell>{studio.name}</TableCell>
                    <TableCell>{studio.location}</TableCell>
                    <TableCell>{formattedDate}</TableCell>
                    <TableCell
                      className={
                        studio.status === "Active"
                          ? "text-green-600"
                          : studio.status === "Under Maintenance"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }
                    >
                      {studio.status}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-gray-500 font-fredoka"
                >
                  No studios found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default Page;
