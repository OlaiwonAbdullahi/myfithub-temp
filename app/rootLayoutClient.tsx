"use client";

import { usePathname } from "next/navigation";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";
import { ReactNode } from "react";

export default function RootLayoutClient({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();

  const hidePaths = [
    "/login",
    "/signup",
    "/email-verification",
    "/complete-profile",
    "/verify-email",
  ];
  const hidePrefixes = ["/dashboard", "/studios-owners"];

  const hideNavbar =
    hidePaths.includes(pathname) ||
    hidePrefixes.some((prefix) => pathname.startsWith(prefix));

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}
