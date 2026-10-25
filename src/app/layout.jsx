/* eslint-disable @next/next/no-page-custom-font -- Shared fonts live in the App Router root layout. */
import "./globals.css";

const title = "Ariefin Nur Hidayat — UI/UX Designer & Front-End Developer";

export const metadata = {
  metadataBase: new URL("https://ariefinnh.pages.dev"),
  title,
  description:
    "Portfolio of Ariefin Nur Hidayat, UI/UX Designer and Front-End Developer based in Surakarta, Central Java, Indonesia.",
  openGraph: {
    title,
    description:
      "Designing interfaces people enjoy, then building them in clean, responsive code.",
    url: "https://ariefinnh.pages.dev",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export const viewport = { themeColor: "#121212" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Retain the original variable fonts without a network dependency at build time. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,62..125,100..900;1,62..125,100..900&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body id="top">{children}</body>
    </html>
  );
}
