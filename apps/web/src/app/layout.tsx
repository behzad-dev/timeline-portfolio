import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';
import type { Metadata } from 'next';
import { site } from '@/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    'Full-stack developer',
    'Next.js',
    'React',
    'Node.js',
    'AWS',
    'TypeScript',
    'CI/CD',
    'CloudFront',
    'CDK',
  ],
  authors: [{ name: 'Behzad' }],
  creator: 'Behzad',
  openGraph: {
    type: 'website',
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.shortName,
    locale: site.locale,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/icon.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(60%_50%_at_50%_0%,var(--primary),transparent_60%)]" />
          <div className="absolute inset-0 opacity-[0.16] bg-[radial-gradient(45%_45%_at_0%_20%,var(--chart-2),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(45%_45%_at_100%_25%,var(--chart-4),transparent_60%)]" />
        </div>

        <SiteHeader />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
