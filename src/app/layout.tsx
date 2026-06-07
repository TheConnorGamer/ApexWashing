import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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
  openGraph: {
    title: "Clean & Green Services — Winnipeg",
    description:
      "Windows clean and grass looking green. Window cleaning + lawn care in Winnipeg.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
