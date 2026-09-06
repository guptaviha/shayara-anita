import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anita Mittal Gupta - Marketer & Motivator",
  description: "Portfolio of Anita Mittal Gupta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans bg-[#FAF9F6] text-[#333333] antialiased min-h-screen flex flex-col`}
      >
        <header className="w-full px-6 md:px-16 lg:px-24 py-6 md:py-8 flex justify-center md:justify-end items-center z-10">
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm uppercase tracking-widest font-medium text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-gray-900 transition-colors">About Me</Link>
            <Link href="/portfolio" className="hover:text-gray-900 transition-colors">Portfolio</Link>
            <Link href="/shayari" className="hover:text-gray-900 transition-colors">Shayari</Link>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
