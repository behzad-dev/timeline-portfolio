import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Section } from '@/components/Section';

type CTA = {
  label: string;
  href: string;
  variant: 'outline' | 'default';
  external?: boolean;
};

export function Hero() {
  const { person, links } = portfolio;

  const rawCtas: Array<CTA | null> = [
    links.github ? { label: 'GitHub', href: links.github, variant: 'outline', external: true } : null,
    links.linkedin ? { label: 'LinkedIn', href: links.linkedin, variant: 'outline', external: true } : null,
    links.email ? { label: 'Contact', href: `mailto:${links.email}`, variant: 'default', external: false } : null,
  ];

  const ctas = rawCtas.filter((x): x is CTA => Boolean(x));

  return (
    <Section id="top" surface="none" className="pt-10 sm:pt-14">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Available</Badge>
            <span className="text-sm text-muted-foreground">{person.location ?? ''}</span>
          </div>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            <span className="relative">
              {person.name}
              <span className="pointer-events-none absolute -inset-x-6 -inset-y-3 -z-10 rounded-3xl bg-primary/10 blur-2xl" />
            </span>
          </h1>

          <p className="mt-4 text-xl text-muted-foreground">{person.title}</p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {person.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <Button key={cta.label} size="lg" variant={cta.variant} asChild>
                <Link
                  href={cta.href}
                  target={cta.external ? '_blank' : undefined}
                  rel={cta.external ? 'noreferrer noopener' : undefined}
                  aria-label={cta.external ? `${cta.label} (opens in a new tab)` : cta.label}
                >
                  {cta.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-background/55 p-5 shadow-sm backdrop-blur">
          <p className="text-sm font-medium">Highlights</p>
          <Separator className="my-4" />
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="text-foreground">Stack:</span> React / Next.js / Node.js / AWS
            </li>
            <li>
              <span className="text-foreground">Focus:</span> production-ready apps, CI/CD, observability
            </li>
            <li>
              <span className="text-foreground">Based in:</span> {person.location ?? 'Germany'}
            </li>
            <li>
              <span className="text-foreground">German:</span> A2.2 → B1 (in progress)
            </li>
          </ul>
        </div>
      </div>

      <Separator className="mt-14" />
    </Section>
  );
}
