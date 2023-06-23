import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Layout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "cemtatli.dev",
  description: "💠",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <Header />
          <Layout>{children}</Layout>
        </body>
      </ThemeProvider>
    </html>
  );
}
