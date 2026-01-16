import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LoadingProvider } from "@/components/LoadingProvider";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AD & Sons Traders",
  description: "Your trusted agriculture commission shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Suspense fallback={null}>
          <LoadingProvider>
            {children}
            <WhatsAppButton />
          </LoadingProvider>
        </Suspense>
      </body>
    </html>
  );
}
