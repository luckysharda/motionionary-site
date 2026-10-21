import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Motionionary — Motion design for products in motion',
  description:
    'Original motion concepts and product storytelling for SaaS launches, features, and explainers.',
  applicationName: 'Motionionary',
  icons: {
    icon: '/motionionary-mark.svg',
    shortcut: '/motionionary-mark.svg',
    apple: '/motionionary-mark.svg',
  },
  openGraph: {
    title: 'Motionionary — Motion design for products in motion',
    description: 'Product films and motion systems for SaaS teams.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
