import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';

export function Hero() {
  const { person, links } = portfolio;

  const ctas = [
    links.github
      ? { label: 'GitHub', href: links.github, variant: 'outline' as const }
      : null,
    links.linkedin
      ? { label: 'LinkedIn', href: links.linkedin, variant: 'outline' as const }
      : null,
    links.email
      ? { label: 'Contact', href: `mailto:${links.email}`, variant: 'default' as const }
      : null,
  ].filter(Boolean);

  return (
    <section id="top" className="py-16 scroll-mt-20">
      <PageContainer>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          {/* Left */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary">Available</Badge>
              <span className="text-sm text-muted-foreground">
                {person.location ?? ''}
              </span>
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
              {person.name}
            </h1>

            <p className="mt-4 text-xl text-muted-foreground">{person.title}</p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {person.summary}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {ctas.map((cta) => (
                <Button key={cta!.label} size="lg" variant={cta!.variant} asChild>
                  <Link
                    href={cta!.href}
                    target={cta!.href.startsWith('http') ? '_blank' : undefined}
                    rel={cta!.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {cta!.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Right: quick highlights */}
          <div className="rounded-xl border bg-background/60 p-5 shadow-sm backdrop-blur">
            <p className="text-sm font-medium">Highlights</p>
            <Separator className="my-4" />
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground">Stack:</span> React / Next.js / Node.js
                / AWS
              </li>
              <li>
                <span className="text-foreground">Focus:</span> production-ready apps,
                CI/CD, observability
              </li>
              <li>
                <span className="text-foreground">Based in:</span>{' '}
                {person.location ?? 'Germany'}
              </li>
              <li>
                <span className="text-foreground">German:</span> A2.2 → B1 (in progress)
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-14" />
      </PageContainer>
    </section>
  );
}
