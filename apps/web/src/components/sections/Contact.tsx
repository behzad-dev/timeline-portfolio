import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';
import { CopyButton } from '@/components/CopyButton';

export function Contact() {
  const { links } = portfolio;
  const hasEmail = Boolean(links.email);

  return (
    <section id="contact" className="py-14 scroll-mt-20">
      <PageContainer>
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Want to work together or have a question? Here are the fastest ways to reach me.
        </p>

        <Separator className="my-8" />

        <div className="flex flex-wrap gap-3">
          {hasEmail ? (
            <>
              <CopyButton value={links.email!} />
              <Button size="lg" asChild>
                <Link href={`mailto:${links.email}`}>Email</Link>
              </Button>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              I’m currently keeping my email hidden to avoid spam. For now, the best way
              is GitHub.
            </p>
          )}

          {links.github ? (
            <Button size="lg" variant="outline" asChild>
              <Link
                href={links.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub (opens in a new tab)"
              >
                GitHub
              </Link>
            </Button>
          ) : null}

          {links.linkedin ? (
            <Button size="lg" variant="outline" asChild>
              <Link
                href={links.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn (opens in a new tab)"
              >
                LinkedIn
              </Link>
            </Button>
          ) : null}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Currently based in Hamburg. Open to full-stack roles (React/Node/AWS).
        </p>
      </PageContainer>
    </section>
  );
}
