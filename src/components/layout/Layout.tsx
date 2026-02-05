import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lina Motor Assessors & Valuers - Professional Motor Assessment Services",
  description: "Professional motor service provider in the Insurance risk management and financial sector within the Kenyan business landscape. Established 2006.",
  keywords: "motor assessment, vehicle valuation, insurance claims, Kenya, motor assessors, vehicle inspection",
  authors: [{ name: "Lina Motors" }],
  openGraph: {
    title: "Lina Motor Assessors & Valuers",
    description: "Professional motor assessment services in Kenya since 2006",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}