import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

import { Layout } from '@/components/content';

import { cn } from '@/lib/utils';
import type { TChildren } from '@/types';

import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home',
};

export default function RootLayout({ children }: TChildren) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={cn('antialiased', geistSans.variable, geistMono.variable)}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
