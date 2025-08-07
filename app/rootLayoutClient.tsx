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
  ].includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
      {!hideNavbar && <Footer />}
    </>
  );
}
