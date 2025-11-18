import React from 'react'
import type { Metadata } from 'next'
import Home from './(pages)/home/page'

export const metadata: Metadata = {
  title: 'Denovan - Frontend Engineer & Product Designer | Neo-Brutalist Web Experiences',
  description: 'Ogundu Okechukwu (Denovan) builds distinctive web worlds for future-facing brands. 6+ years crafting expressive digital products, design systems, and immersive user experiences.',
  keywords: ['Denovan', 'frontend engineer', 'product designer', 'web developer', 'UI/UX designer', 'React', 'Next.js', 'design systems', 'neo-brutalist design', 'Abuja Nigeria'],
  authors: [{ name: 'Ogundu Okechukwu (Denovan)' }],
  creator: 'Ogundu Okechukwu (Denovan)',
  openGraph: {
    title: 'Denovan - Frontend Engineer & Product Designer',
    description: 'Building distinctive web worlds for future-facing brands. Expressive aesthetics meet meticulous, user-centered systems.',
    url: 'https://denovanport.vercel.app',
    siteName: 'Denovan Portfolio',
    images: [
      {
        url: '/assets/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Denovan - Frontend Engineer & Product Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Denovan - Frontend Engineer & Product Designer',
    description: 'Building distinctive web worlds for future-facing brands. Expressive aesthetics meet meticulous, user-centered systems.',
    images: ['/assets/og-home.png'],
    creator: '@denovan6k',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

const page = () => {
  return (
    <div className=''> 
         <Home/>
    </div>
  )
}

export default page