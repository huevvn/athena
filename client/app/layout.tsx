import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Google font: Inter
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Welcome To Athena",
    description: "Your Ultimate Productivity System",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased`}>{children}</body>
        </html>
    );
}
