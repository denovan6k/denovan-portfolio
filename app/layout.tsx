import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "./components/MainLayout";
import { Toaster } from "sonner";
const firaCode = localFont({
  src: "./fonts/FiraCode.ttf",
  variable: "--font-fira-code",
  weight: "100 900",
})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Denovan",
  description: "Translating Design problems, into high impact applications, Made by Denovan",
  icons: {
    icon: "/assets/logo.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${firaCode.variable} antialiased bg-[#282C33]`}
      > <MainLayout>
        {children}
        
        </MainLayout>
        <Toaster/>
      </body>
    </html>
  );
}
