import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

// Space Grotesk untuk heading - font yang modern dan unik dengan karakter crypto-friendly
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Outfit untuk body text - font yang clean dan modern dengan readability tinggi
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "$YETI - The Fastest Growing Degen Blogger",
  description: "Join the most powerful crypto community on Solana. $YETI - where memes meet momentum.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
