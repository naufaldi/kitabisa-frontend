import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitabisa.com - Bersama, Kita Bisa!',
  description:
    'Bergabunglah dalam gerakan crowdfunding untuk berbagai kampanye sosial di Indonesia. Bersama, kita dapat membuat perbedaan!',
  metadataBase: new URL('https://kitabisa.com/'),
  authors: [
    { name: 'Tim Kitabisa', url: 'https://www.kitabisa.com/tentang-kami' },
  ],
  keywords: ['kitabisa', 'crowdfunding', 'donasi', 'sosial', 'Indonesia'],
  openGraph: {
    title: 'Kitabisa.com - Bersama, Kita Bisa!',
    description:
      'Temukan dan dukung berbagai kampanye sosial di Indonesia melalui Kitabisa.com, platform crowdfunding #1 di Indonesia.',
    url: 'https://kitabisa.com/',
    type: 'website',
    images: 'https://kitabisa.com/og.png', // Assuming you have an Open Graph image
  },
  twitter: {
    site: '@kitabisa',
    description:
      'Dukung berbagai kampanye sosial di Indonesia melalui Kitabisa.com. Bersama, kita dapat membuat perbedaan!',
    title: 'Kitabisa.com - Bersama, Kita Bisa!',
    creator: '@kitabisa',
    images: 'https://kitabisa.com/og.png', // Assuming you have a Twitter card image
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
