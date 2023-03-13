"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider>
        <body>
          <Sidebar />
          <main className="">{children}</main>
        </body>
      </ThemeProvider>
    </html>
  );
}
