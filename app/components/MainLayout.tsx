import React from 'react'
import Header from './header';
import Footer from '../section/home/footer';
export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <div className='flex flex-col min-h-screen'>
        <Header/>
        <main >
          {children}
        </main>
        <Footer/>
        </div>
        </>
    
    );
  }
