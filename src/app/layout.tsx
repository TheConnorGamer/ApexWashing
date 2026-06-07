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
  title: "Apex Exterior Co. — Premium Pressure Washing",
  description:
    "Apex Exterior Co. delivers concierge-level exterior cleaning for the city's finest homes and properties. Fully insured, owner-operated, and obsessed with visible results.",
  openGraph: {
    title: "Apex Exterior Co. — Premium Pressure Washing",
    description:
      "Concierge-level exterior cleaning for the city's finest properties.",
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
