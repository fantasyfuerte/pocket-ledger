import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pocket Ledger",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} `}>
        <nav className="flex justify-between p-3 bg-backgroundPrimary">
          <Link href="/">
            <h1 className="text-lg text-primary font-extrabold active:text-primary/45">
              Pocket Ledger
            </h1>
          </Link>
          <button>
            <GiHamburgerMenu
              size={24}
              className="text-primary active:text-primary/45"
            />
          </button>
        </nav>
        {children}
      </body>
    </html>
  );
}
