import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';
import Image from 'next/image';

export function Projects() {
  return (
    <section id="projects" className="py-14 scroll-mt-20">
      <PageContainer>
        <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A few projects that show how I build and ship end-to-end.
        </p>

        <Separator className="my-8" />

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.projects.map((p) => (
  <Card key={p.id} className="overflow-hidden shadow-sm">
  {p.image ? (
    <div className="relative aspect-[16/9] w-full bg-muted">
      <Image
        src={p.image.src}
        alt={p.image.alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-contain object-center p-2"
        priority={p.id === 'timeline-portfolio'}
      />
    </div>
  ) : null}

  <CardHeader className="pb-3">
    <CardTitle className="text-lg">{p.title}</CardTitle>
    {p.role ? <p className="text-xs text-muted-foreground">{p.role}</p> : null}
    <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
  </CardHeader>

  <CardContent className="space-y-4">
    {p.highlights?.length ? (
      <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
        {p.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    ) : null}

    {/* Tech */}
    <div className="flex flex-wrap gap-2">
      {p.tech.map((t) => (
        <Badge key={t} variant="secondary">
          {t}
        </Badge>
      ))}
    </div>

    <div className="flex flex-wrap gap-3">
      {p.links.map((l) => (
        <Button key={l.href} variant="outline" asChild>
          <Link
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            {l.label}
          </Link>
        </Button>
      ))}
    </div>
  </CardContent>
</Card>

          ))}
        </div>
      </PageContainer>
    </section>
  );
}
