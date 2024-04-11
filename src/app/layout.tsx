import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Kumar",
  description: "A Portfolio website of Aditya Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
