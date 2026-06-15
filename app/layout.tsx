import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Metallica — Fan Site",
    template: "%s | Metallica Fan Site",
  },
  description:
    "The definitive fan resource for Metallica — albums, band members, trivia, news, and the full history of one of metal's greatest bands.",
  keywords: ["Metallica", "thrash metal", "heavy metal", "James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Metallica Fan Site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-neutral-200">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
