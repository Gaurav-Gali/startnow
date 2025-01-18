import type { Metadata } from "next";
import "./globals.css";

import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "StartNow",
    description: "A platform to explore startups and new business ideas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${workSans.className}`}>{children}</body>
        </html>
    );
}
