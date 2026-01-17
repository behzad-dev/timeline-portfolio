import './globals.css';
import { SiteHeader } from '@/components/SiteHeader';

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
