import Nav from "@/components/DineMarket/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import FooterSection from "@/components/DineMarket/FooterSection";
import ReduxProvider from "@/components/Utilities/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          {children}
          <FooterSection />
        </body>
      </html>
    </ReduxProvider>
  );
}
