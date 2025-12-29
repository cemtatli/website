import "./globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cem Tatlı | Frontend Developer",
  description:
    "Cem Tatlı - Frontend Developer. React, Next.js ve modern web teknolojileri ile kullanıcı dostu arayüzler geliştiriyorum.",
  keywords: ["cem tatlı", "frontend developer", "react", "next.js", "typescript", "tailwindcss"],
  authors: [{ name: "Cem Tatlı", url: "https://cemtatli.dev" }]
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
