import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader, SiteFooter } from "@/components/layout";
import { AnimatedBackground } from "@/components/ui";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "React Bits - Animated UI Components",
  description: "A collection of high quality, animated, interactive components for building stunning user interfaces",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full bg-background text-foreground`}
      >
        <div className="relative min-h-screen text-white">
          <AnimatedBackground />
          <SiteHeader />
          <main className="relative z-10">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
