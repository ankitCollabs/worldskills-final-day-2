import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Public_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({})

const public_sans = Public_Sans({})

export const metadata: Metadata = {
  title: "EV Odisha – Drive the Future | Government of Odisha",
  description: "EV Odisha – Drive the Future | Government of Odisha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased text-slate-900`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
