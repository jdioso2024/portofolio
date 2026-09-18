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
    title: "Ariefin Nur Hidayat — UI/UX Designer & Frontend Engineer",
    description: "Portfolio of Ariefin Nur Hidayat — UI/UX designer and frontend engineer specializing in Figma prototyping, React, Next.js, and crafting clean digital experiences.",
    openGraph: {
        title: "Ariefin Nur Hidayat — UI/UX Designer & Frontend Engineer",
        description: "Portfolio of Ariefin Nur Hidayat — UI/UX designer and frontend engineer specializing in Figma prototyping, React, Next.js, and crafting clean digital experiences.",
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
