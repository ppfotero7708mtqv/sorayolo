import { Providers as UIProvider } from '@/app/providers/nextui';
import '@/app/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { SuperTokensInit } from '@/app/providers/supertokens';

import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import CustomerService from './components/CustomerService';
import FooterPart from './layout/components/Footer';
import NavBar from './layout/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Anime Character',
  description: 'Create Your Dream Girls',
  keywords: '',
};

export default async function RootLayout({
  params,
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning={true}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>
        <SuperTokensInit>
          <UIProvider>
            <div className="flex min-h-screen flex-col">
              <NavBar className="sticky inset-0 z-50" />
              <CustomerService />
              <GoogleAnalytics gaId="G-C9M4V930ZC" />
              <main className="flex-grow">{children}</main>
              <FooterPart />
            </div>
          </UIProvider>
        </SuperTokensInit>
        {/* toast */}
        <Toaster />
      </body>
    </html>
  );
}
