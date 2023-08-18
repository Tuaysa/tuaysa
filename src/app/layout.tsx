"use client";

import "@/styles/globals.css";
import NavBar from "@/components/navigation/navBar";
import AuthContextProvider from "@/contexts/authContext";
import { Inter } from "next/font/google";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
            <AuthContextProvider>
                <Head />
                <body>
                    <div className="h-64 w-full bg-gradient-to-b from-[var(--transBlue)] to-[var(--cream)] -z-50 "></div>
                    <div className="container mx-auto">
                        <NavBar />
                        {children}
                    </div>
                </body>
            </AuthContextProvider>
        </html>
    );
}
