import type { Metadata } from "next";
import { Outfit, Raleway } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Founders Fest Awards",
  description: "Let's be honest: building a business is lonely work. You have the vision, but you also have the late nights, the doubts, and the grind. Founders' Fest isn't just another conference with people in suits talking to you. It's a gathering of the people who are actually in the arena.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${raleway.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
