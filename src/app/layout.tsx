import type { Metadata } from "next";
import { Familjen_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const familjen = Familjen_Grotesk({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matteo Palermo — Manuale",
  description:
    "Manuale d'identità di Matteo Palermo, sviluppatore web freelance: chi sono, cosa faccio, come lavoro. Lavoro su commissione, in contatto diretto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${familjen.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
