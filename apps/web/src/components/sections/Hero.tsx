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
    links.github
      ? { label: 'GitHub', href: links.github, variant: 'outline', external: true }
      : null,
    links.linkedin
      ? { label: 'LinkedIn', href: links.linkedin, variant: 'outline', external: true }
      : null,
    links.email
      ? {
          label: 'Contact',
          href: `mailto:${links.email}`,
          variant: 'default',
          external: false,
        }
      : null,
  ];

  const ctas = rawCtas.filter((x): x is CTA => Boolean(x));

  return (
    <Section id="top" surface="none" className="relative pt-10 sm:pt-14">
      {/* Animated aurora background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Big soft blobs */}
        <div
          className="absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full
                     bg-[radial-gradient(circle_at_30%_30%,var(--primary),transparent_60%)]
                     opacity-20 blur-3xl
                     animate-[blob_18s_ease-in-out_infinite]
                     motion-reduce:[animation:none]"
        />

        <div
          className="absolute -left-28 top-24 h-[22rem] w-[22rem] rounded-full
                     bg-[radial-gradient(circle_at_30%_30%,var(--chart-2),transparent_60%)]
                     opacity-16 blur-3xl
                     animate-[blob_22s_ease-in-out_infinite]
                     [animation-delay:-6s]
                     motion-reduce:[animation:none]"
        />

        <div
          className="absolute -right-28 top-8 h-[22rem] w-[22rem] rounded-full
                     bg-[radial-gradient(circle_at_30%_30%,var(--chart-4),transparent_60%)]
                     opacity-14 blur-3xl
                     animate-[blob_26s_ease-in-out_infinite]
                     [animation-delay:-12s]
                     motion-reduce:[animation:none]"
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.10]
                     bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
                     bg-[size:64px_64px]
                     [mask-image:radial-gradient(ellipse_at_top,black_45%,transparent_75%)]"
        />

        {/* Soft moving sweep */}
        <div
          className="absolute inset-0 opacity-40
                     bg-[linear-gradient(110deg,transparent,rgb(255_255_255_/_0.12),transparent)]
                     animate-[shimmer_7.5s_ease-in-out_infinite]
                     motion-reduce:[animation:none]"
        />
      </div>

      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        {/* Left column */}
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary">Available</Badge>
            <span className="text-sm text-muted-foreground">{person.location ?? ''}</span>
          </div>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
            <span className="relative inline-block">
              {/* Animated name */}
              <span className="name-gradient name-glow">{person.name}</span>

              {/* Soft glow behind name */}
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
                  aria-label={
                    cta.external ? `${cta.label} (opens in a new tab)` : cta.label
                  }
                >
                  {cta.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Right column card */}
        <div className="rounded-2xl border bg-background/55 p-5 shadow-sm backdrop-blur">
          <p className="text-sm font-medium">Highlights</p>
          <Separator className="my-4" />
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <span className="text-foreground">Stack:</span> React / Next.js / Node.js /
              AWS
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
    </Section>
  );
}
