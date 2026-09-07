import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Your Name — Portfolio",
    description: "Personal portfolio — frontend engineer & designer",
    openGraph: {
        title: "Your Name — Portfolio",
        description: "Personal portfolio — frontend engineer & designer",
        type: "website",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
