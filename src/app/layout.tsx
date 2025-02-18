import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import DropDownButton from "@/components/dropdown-button";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pocket Ledger",
  description: "This is a accounting app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} select-none`}>
        <nav className="flex justify-between p-3 bg-backgroundPrimary">
          <Link href="/">
            <h1 className="text-lg text-primary font-extrabold active:text-primary/45">
              Pocket Ledger
            </h1>
          </Link>
          <DropDownButton />
        </nav>
        {children}
      </body>
    </html>
  );
}
