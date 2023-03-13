"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className={inter.className}>
        <body>
          <Sidebar />
          <main className="">{children}</main>
        </body>
      </html>
    </ThemeProvider>
  );
}
