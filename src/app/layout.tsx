import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onchain Gaming | @samdevrel",
  description: "Play-to-Earn games with real crypto rewards. Splinterlands, Axie, Gods Unchained, and more.",
  keywords: ["onchain gaming", "play-to-earn", "P2E", "NFT games", "crypto gaming", "blockchain games"],
  authors: [{ name: "Sam", url: "https://x.com/samdevrel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
