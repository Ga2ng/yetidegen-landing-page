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
  title: "$YETI - The Fastest Growing Degen Blogger on Solana",
  description: "Join thousands of traders and investors who trust YETI for cutting-edge insights, alpha calls, and the most authentic takes in DeFi.",
  icons: {
    icon: [
      {
        url: '/assets/images/icon.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/images/icon.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/assets/images/icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/assets/images/icon.png" />
        <link rel="apple-touch-icon" href="/assets/images/icon.png" />
        <script src="https://terminal.jup.ag/main-v4.js" async></script>
        {/* Fix for RPC error */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.JUPITER_RPC_ENDPOINT = "https://mainnet.helius-rpc.com/?api-key=1d6210c8-1d4d-4c0c-9c0c-1d4d4c0c9c0c";
            window.JUPITER_QUOTE_API = "https://quote-api.jup.ag/v6";
            window.JUPITER_SWAP_API = "https://quote-api.jup.ag/v6";
          `
        }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
