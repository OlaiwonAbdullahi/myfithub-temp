"use client";

import { useEffect, useState } from "react";
import { AlertCircle, BadgeCheck, Loader } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function EmailVerification() {
  const [status, setStatus] = useState<"verifying" | "success" | "error">(
    "verifying"
  );
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Extract token from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (!token) {
      setStatus("error");
      setMessage("No verification token provided.");
      return;
    }

    // Send verification request to the endpoint
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user/verify-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Verification response:", data);
        if (data.success) {
          setStatus("success");
          setMessage("Email successfully verified!");

          // ✅ Redirect after 2 seconds
          setTimeout(() => {
            router.push("/complete-profile");
          }, 2000);
        } else {
          setStatus("error");
          setMessage(
            data.message ||
              "Verification failed. Please try again or contact support."
          );
        }
      })
      .catch((error) => {
        setStatus("error");
        setMessage("An error occurred. Please try again later.");
        console.error("Verification error:", error);
      });
  }, [router]);

  return (
    <div className="flex flex-col md:px-20 px-6 space-y-7 md:py-10 justify-center items-center min-h-screen bg-[#EEF7F6]/50 font-fredoka">
      <div className="self-start flex justify-start space-y-2">
        <div className="self-start flex justify-start">
          <Link href="/" className="flex items-center justify-center">
            <div className="text-xl text-[#234E49] font-semibold">MyFitHub</div>{" "}
            <sup>Beta</sup>
          </Link>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center mx-auto">
            {status === "verifying" && (
              <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center">
                <Loader size={40} className="animate-spin" />
              </div>
            )}
            {status === "success" && (
              <div className="bg-primary/20 text-[#234E49] w-20 h-20 rounded-full flex items-center justify-center">
                <BadgeCheck size={40} />
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-100 text-red-600 w-20 h-20 rounded-full flex items-center justify-center">
                <AlertCircle size={40} />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#234E49] font-sora">
              {status === "verifying" && "Verifying Email..."}
              {status === "success" && <p>{message}</p>}
              {status === "error" && "Verification Failed"}
            </h2>
            <p className="text-base text-gray-600 font-fredoka">
              {message ||
                (status === "verifying"
                  ? "Please wait while we verify your email address."
                  : "")}
            </p>
          </div>

          <div className="space-y-3">
            {status === "error" && (
              <Link href="/signup">
                <Button
                  variant="outline"
                  className="w-full border-[#234E49] text-[#234E49] hover:bg-[#234E49] hover:text-white"
                >
                  Back to Sign Up
                </Button>
              </Link>
            )}

            {status === "success" && (
              <Link href="/login">
                <Button
                  variant="outline"
                  className="w-full border-[#234E49] text-[#234E49] hover:bg-[#234E49] hover:text-white"
                >
                  Go to Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
