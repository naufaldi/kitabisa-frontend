import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kita Bisa ',
  description: 'Kita Bisa Campaign List ',
  metadataBase: new URL('https://reading-list-iota.vercel.app/'),
  authors: [
    { name: 'Naufaldi', url: 'https://www.linkedin.com/in/naufaldirafif/' },
  ],
  keywords: ['kitabisa', 'campaign'],
  openGraph: {
    title: 'Kita Bisa',
    description: 'Kita Bisa Campaign List',
    url: 'https://reading-list-iota.vercel.app/',
    type: 'website',
  },
  twitter: {
    site: '@kitabisa',
    description: 'Kita Bisa Campaign List',
    title: 'Kita Bisa Campaig',
    creator: '@f2aldi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
