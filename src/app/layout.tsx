"use client"
import NavBar from "@/components/navigation/navBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import AuthContextProvider, { AuthContext } from "@/contexts/authContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Tuaysa",
//   description:
//     "Sri Lankan online marketplace, where people can come together to buy and sell unique handmade creations in a warm and welcoming community",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <div className="h-60 w-full bg-gradient-to-b from-[var(--transBlue)] to-[var(--cream)] -z-50 "></div>
          <NavBar />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
