import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviders from "@/components/templates/Theme/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "INextgram",
  description: "Instagram clone next js 14 with Material-Tailwind ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProviders>
        <body className={inter.className}>{children}</body>
      </ThemeProviders>
    </html>
  );
}
