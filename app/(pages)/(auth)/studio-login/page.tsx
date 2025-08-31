"use client";
import Button from "@/app/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Ensure component is mounted before accessing localStorage
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/studio/login-studio`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        // Handle different error scenarios
        const errorMessage =
          data?.message || data?.error || `Login failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const token =
        data?.token ||
        data?.accessToken ||
        data?.access_token ||
        data?.data?.token ||
        data?.data?.accessToken;

      if (!token) {
        console.error("No token found in response:", data);
        throw new Error("Authentication token not received from server");
      }

      console.log("Token received:", token);

      // Store token safely
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("authToken", token);

          const storedToken = localStorage.getItem("authToken");
          if (storedToken !== token) {
            throw new Error("Failed to store authentication token");
          }

          console.log("Token stored successfully");
        } catch (storageError) {
          console.error("LocalStorage error:", storageError);
          throw new Error("Failed to save login session. Please try again.");
        }
      }

      if (data?.user && typeof window !== "undefined") {
        try {
          localStorage.setItem("userData", JSON.stringify(data.user));
        } catch (userDataError) {
          console.warn("Failed to store user data:", userDataError);
        }
      }

      toast.success("Logged in successfully!");

      router.push("/studios-owners");
    } catch (err: unknown) {
      console.error("Login error:", err);
      let errorMessage = "Something went wrong. Please try again.";

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10 justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="bg-white md:p-8 p-5 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div>
            <Link href="/" className="flex items-center justify-center">
              <div className="text-xl text-[#234E49] font-semibold">
                MyFitHub
              </div>
              <sup>Beta</sup>
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Log In as a Studio Owner
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            Welcome Back
          </span>
        </div>

        <div>
          <Button
            variant="outline"
            className="w-full h-9 mb-4 border text-sm border-[#E5E5E5] flex"
            type="button"
          >
            <img src="/google.svg" alt="Google" className="z-20 h-5 w-5 mr-2" />
            Continue With Google
          </Button>
        </div>

        <hr className="border-t border-t-[#234E49]/20" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <Label htmlFor="email" className="mb-1 font-medium text-[#234E49]">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="border border-[#E5E5E5] bg-[#E5E5E5] rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#234E49]/20 focus:border-[#234E49]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              disabled={loading}
            />
          </div>

          <div className="flex flex-col">
            <Label
              htmlFor="password"
              className="mb-1 font-medium text-[#234E49]"
            >
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your Password"
              className="border rounded border-[#E5E5E5] bg-[#E5E5E5] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#234E49]/20 focus:border-[#234E49]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={loading || !email || !password}
          >
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>

        <div className="text-center">
          <Link
            href="/forgot-password"
            className="text-sm text-[#234E49] hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="text-[#234E49] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
