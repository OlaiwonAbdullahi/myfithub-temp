import type { Metadata } from "next";
import { Courier_Prime, Fredoka, Sora } from "next/font/google";
import "./globals.css";
//import Navbar from "./ui/navbar";
//import Footer from "./ui/footer";

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My FitHub",
  description:
    "Empowering you to achieve your fitness goals with personalized training and community support.",
  authors: [
    { name: "Abdullahi Olaiwon", url: "https://abdullahiolaiwon.netlify.app/" },
  ],
  keywords: ["fitness", "health", "workout", "personal training"],
  openGraph: {
    title: "My FitHub",
    description: "Achieve your fitness goals with My FitHub.",
    url: "https://myfithub.live",
    siteName: "My FitHub",
    images: [
      {
        url: "https://myfithub.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "My FitHub Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My FitHub",
    description: "Achieve your fitness goals with My FitHub.",
    creator: "@myfithub",
    images: ["https://myfithub.live/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${courierPrime.variable} ${fredoka.variable} ${sora.variable} antialiased`}
      >
        {/*<Navbar />*/}
        {children}
        {/*<Footer />*/}
      </body>
    </html>
  );
}
