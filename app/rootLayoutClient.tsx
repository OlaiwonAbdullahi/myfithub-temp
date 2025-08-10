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
  const hideNavbar = [
    "/login",
    "/signup",
    "/email-verification",
    "/dashboard",
    "/dashboard/bookings",
    "/dashboard/studiolist",
    "/dashboard/findStudio",
    "/dashboard/account",
    "/dashboard/sessions",
    "/dashboard/sessions/session-details",
  ].includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}
