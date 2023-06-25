'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";




const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="cemtatli.dev - Cem Tatlı'nın kişisel websitesi" />
        <meta name="keywords" content="cem tatlı, projeler, blog, bookmark, web geliştirme" />
        <meta name="author" content="Cem Tatlı" />
        <meta property="og:title" content="cemtatli.dev" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
