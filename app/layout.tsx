import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainLayout from "./components/MainLayout";
import { Toaster } from "sonner";
import { MotionConfig } from "./components/animations/MotionConfig";
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
  metadataBase: new URL('https://denovanport.vercel.app/work'),
  title: {
    default: 'Denovan - Frontend Engineer & Product Designer',
    template: '%s | Denovan'
  },
  description: "Translating Design problems into high impact applications. Frontend engineer and product designer crafting expressive, neo-brutalist web experiences.",
  keywords: ['Denovan', 'Ogundu Okechukwu', 'frontend engineer', 'product designer', 'web developer', 'UI/UX', 'React', 'Next.js', 'TypeScript', 'design systems', 'canada',  'Abuja Nigeria'],
  authors: [{ name: 'Ogundu Okechukwu (Denovan)', url: 'https://denovanport.vercel.app/work' }],
  creator: 'Ogundu Okechukwu (Denovan)',
  publisher: 'Denovan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/assets/logo.svg",
    shortcut: "/assets/logo.svg",
    apple: "/assets/logo.svg",
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://denovanport.vercel.app',
    siteName: 'Denovan Portfolio',
    title: 'Denovan - Frontend Engineer & Product Designer',
    description: 'Building distinctive web worlds for future-facing brands.',
    images: [
      {
        url: '/assets/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Denovan Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denovan - Frontend Engineer & Product Designer',
    description: 'Building distinctive web worlds for future-facing brands.',
    creator: '@denovan6k',
    images: ['/assets/og-home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
      >
        <MotionConfig>
          <MainLayout>
            {children}
          </MainLayout>
          <Toaster/>
        </MotionConfig>
      </body>
    </html>
  );
}
