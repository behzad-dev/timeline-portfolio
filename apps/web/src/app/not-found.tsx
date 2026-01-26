import Link from 'next/link';
import type { Metadata } from 'next';

import { PageContainer } from '@/components/PageContainer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: '404 — Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-[70vh] py-14">
      <PageContainer>
        <Card className="overflow-hidden shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Page not found</CardTitle>
            <p className="mt-2 text-sm text-muted-foreground">
              The link is wrong or the page was moved. No worries.
            </p>
          </CardHeader>

          <CardContent className="space-y-5">
            <div className="rounded-2xl border bg-background/55 p-6">
              <p className="text-6xl font-semibold tracking-tight">404</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Try going back home, or jump to a section.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/">Go home</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/#projects">Projects</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/#contact">Contact</Link>
              </Button>
            </div>

            <Separator />

            <p className="text-xs text-muted-foreground">
              Tip: if you typed the URL manually, double-check the spelling.
            </p>
          </CardContent>
        </Card>
      </PageContainer>
    </main>
  );
}
