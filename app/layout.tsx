import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qubit | Home",
  description: "Qubit Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(inter.className, "bg-black text-white antialiased")}
      >
        {children}
      </body>
    </html>
  );
}
