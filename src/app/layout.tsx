import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";

import { Architects_Daughter, Roboto_Mono } from "next/font/google";

const notebookSans = Architects_Daughter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400", // ⚠ obligatoire
});

const roboto = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400", // ⚠ obligatoire
});

export const metadata: Metadata = {
  title: "Fitness Tracker",
  description: "App perso suivi de fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={`${roboto.variable} ${roboto.variable} antialiased`}>

        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}