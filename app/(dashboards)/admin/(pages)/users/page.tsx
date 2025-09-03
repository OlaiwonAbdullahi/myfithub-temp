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

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  status: string;
}

interface ApiResponse {
  users: User[];
}

const Page: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllUsers = async () => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (!token) {
      setError("No authentication token found");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/auth/user/users",
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
      console.log("Fetched users:", data.users);
      setUsers(data.users || []);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-[#234E49]/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-sora text-xl font-semibold text-gray-900">
          All Users
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
        <p className="text-gray-500 text-sm font-fredoka">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-sm font-fredoka">{error}</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="font-sora text-sm text-[#234E49]">
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Registered On</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => {
                const createdAt = new Date(user.createdAt);
                const formattedDate = isNaN(createdAt.getTime())
                  ? "Invalid date"
                  : createdAt.toLocaleDateString();

                return (
                  <TableRow
                    key={user.id}
                    className="font-fredoka text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <TableCell>{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{formattedDate}</TableCell>
                    <TableCell
                      className={
                        user.status === "Active"
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      {user.status}
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
                  No users found
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
