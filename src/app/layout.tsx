import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Solpot: The #1 On-Chain Solana Betting Platform",
  description: "Open your Free Daily Solana Case on Solpot now. Solpot offers fair on-chain Solana gambling games. Coinflip, Jackpot, and unlimited Solana rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen antialiased")}>
        {children}
      </body>
    </html>
  );
}
