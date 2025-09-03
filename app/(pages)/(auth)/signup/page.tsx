"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";

const Page = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch(
        "https://myfithub-backend.onrender.com/api/v1/auth/user/sign-up",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const responseText = await res.text();

      if (!res.ok) {
        let errorMessage = `HTTP ${res.status}`;
        try {
          const errorData = JSON.parse(responseText);
          errorMessage =
            errorData.message ||
            errorData.error ||
            errorData.details ||
            errorMessage;
          toast.error(errorMessage);
        } catch {
          errorMessage = responseText || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = JSON.parse(responseText);
      console.log("Signup success:", data);
      toast.success("Account created successfully!");

      setShowModal(true);
    } catch (error) {
      console.error("Signup failed:", error);
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:px-20 sm:px-8 px-6 space-y-7 py-10 justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 w-full max-w-md">
        <div className="text-center space-y-2">
          <Link href="/" className="flex items-center justify-center gap-1">
            <div className="text-xl text-[#234E49] font-semibold">MyFitHub</div>
            <sup>Beta</sup>
          </Link>
          <h2 className="text-2xl font-bold text-[#234E49] font-sora">
            Create Account
          </h2>
          <span className="text-base text-gray-600 font-fredoka">
            Join Us Today
          </span>
        </div>

        <Button
          variant="outline"
          className="w-full h-9 mb-4 border text-sm border-[#E5E5E5] flex"
          type="button"
        >
          <Image
            src="/google.svg"
            alt="Google"
            width={20}
            height={20}
            className="z-20 h-5 w-5 mr-2"
          />
          Continue With Google
        </Button>

        <hr className="border-t border-t-[#234E49]/20" />

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-[#234E49] font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="bg-[#E5E5E5] border-[#E5E5E5]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="username" className="text-[#234E49] font-medium">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Create a Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              required
              className="bg-[#E5E5E5] border-[#E5E5E5]"
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="text-[#234E49] font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
              className="bg-[#E5E5E5] border-[#E5E5E5]"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading}
              className="ml-auto w-full bg-primary text-white hover:bg-primary/90 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
          </div>
        </form>

        <span className="text-sm text-neutral-500">
          By signing up, you agree to our Terms and Conditions & Privacy Policy
        </span>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-[#234E49] font-medium">
            Login
          </Link>
        </div>
      </div>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#234E49]">
              Verify Your Email
            </DialogTitle>
            <DialogDescription className="text-gray-600 font-family-fredoka">
              We’ve sent a verification link to <b>{form.email}</b>. Please
              check your inbox (and spam folder) to verify your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              onClick={() => setShowModal(false)}
              className="bg-primary font-family-fredoka cursor-pointer"
            >
              Okay, Got It
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Page;
