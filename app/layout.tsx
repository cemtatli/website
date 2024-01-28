import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Wrapper from "@/components/layout/wrapper";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cemtatli.dev",
  description:
    "cemtatli.dev - Cem Tatlı'nın kişisel websitesi, projelerini, blog ve bookmarklarını içerir.",
  keywords: [
    "cemtatli, portfolio, blog, bookmarks, web geliştirme, Next.js, TypeScript, frontend, typscript, tailwindcss"
  ],
  authors: [{ name: "iltatmec" }]
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
