'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import Wrapper from "@/components/layout/wrapper";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="cemtatli.dev - Cem Tatlı'nın kişisel websitesi, projelerini, blog ve bookmarklarını içerir." />
        <meta name="keywords" content="cemtatli, portfolio, blog, bookmarks, web geliştirme, Next.js, TypeScript, frontend, typscript, tailwindcss" />
        <meta name="author" content="vaycem" />
        <meta property="og:title" content="cemtatli.dev" />
        <meta property="og:description" content="Cem Tatlı'nın kişisel websitesi, portfolio, blog ve bookmarklarını içerir." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cemtatli.dev" />
        <meta name="twitter:image" content="./thumbnail.png" />
        <meta property="og:image:alt" content="cemtatli.dev" />
        <meta property="og:site_name" content="cemtatli.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="cemtatli.dev" />
        <meta name="twitter:author" content="@vaycem" />
        <meta name="twitter:description" content="Cem Tatlı'nın kişisel websitesi, portfolio, blog ve bookmarklarını içerir." />
        <meta name="twitter:image" content="./thumbnail.png" />
        <title>cemtatli.dev</title>
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
