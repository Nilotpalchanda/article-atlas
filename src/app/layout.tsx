import type React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { HOME_SCREEN_METADATA } from './metadata';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = { ...HOME_SCREEN_METADATA };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex flex-grow flex-col bg-gradient-to-b from-blue-100 via-gray-200 to-blue-100">
            <div className="flex flex-grow justify-center">
              {children}
              <SpeedInsights />
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
