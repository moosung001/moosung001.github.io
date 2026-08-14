import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Moosung Kim — Power Systems Researcher",
  description:
    "Moosung Kim studies power-grid frequency dynamics, nonlinear synchronization, complex networks, and model hierarchy validation at KENTECH.",
  openGraph: {
    title: "Moosung Kim — Power Systems Researcher",
    description:
      "Finding what survives across power-system models, from oscillator networks to engineering-grade simulation.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Moosung Kim, power systems and nonlinear dynamics researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
