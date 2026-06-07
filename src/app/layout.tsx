import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clean & Green Services — Window Cleaning & Lawn Care | Winnipeg",
  description:
    "Clean & Green Services offers professional window cleaning and lawn care in Winnipeg, MB. Locally owned by Idan & Tristin since 2023. Free estimates — call 204-899-3566.",
  keywords: [
    "window cleaning Winnipeg",
    "lawn care Winnipeg",
    "pressure washing",
    "spring cleanup Winnipeg",
    "Clean and Green Services",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Clean & Green Services — Winnipeg",
    description:
      "Windows clean and grass looking green. Window cleaning + lawn care in Winnipeg.",
    type: "website",
    locale: "en_CA",
    siteName: "Clean & Green Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clean & Green Services — Winnipeg",
    description:
      "Professional window cleaning and lawn care in Winnipeg. Free estimates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-charcoal text-cream"
        suppressHydrationWarning
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
