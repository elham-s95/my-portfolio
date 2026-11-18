
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name | Frontend Developer",
  description:
      "Frontend Developer specializing in building modern, performant and scalable web applications.",
  openGraph: {
    title: "Your Name | Frontend Developer",
    description:
        "Building digital experiences that make an impact.",
    type: "website",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.variable}>
      {children}
      </body>
      </html>
  );
}
