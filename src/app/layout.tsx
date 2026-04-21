import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { NextAuthProvider } from "@/components/providers/NextAuthProvider";
import { WalletProvider } from "@/components/providers/WalletProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BlankWork — Work to Earn",
  description:
    "Create tasks, pay for results, and earn rewards. A decentralized work-to-earn platform with manual review for quality assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <NextAuthProvider>
          <WalletProvider>{children}</WalletProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
