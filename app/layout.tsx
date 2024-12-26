import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StartBackground from "@/components/main/StartBackground";
import Navbar from "@/components/main/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boda Santhosh",
  description: "Portfolio of Boda Santhosh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StartBackground /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
