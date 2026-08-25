import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moosung Kim",
  description:
    "Moosung Kim is an integrated Master's and Doctoral student in the Grid Complexity Lab at KENTECH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
