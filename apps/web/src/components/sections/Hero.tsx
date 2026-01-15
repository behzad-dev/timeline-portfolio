import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const { person, links } = portfolio;

  const ctas = [
    links.github ? { label: "GitHub", href: links.github, variant: "outline" as const } : null,
    links.linkedin ? { label: "LinkedIn", href: links.linkedin, variant: "outline" as const } : null,
    links.email
      ? { label: "Contact", href: `mailto:${links.email}`, variant: "default" as const }
      : null,
    links.cvUrl ? { label: "Download CV", href: links.cvUrl, variant: "secondary" as const } : null,
  ].filter(Boolean);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight">{person.name}</h1>
          <Badge variant="secondary">v1</Badge>
        </div>

        <p className="mt-2 text-lg text-muted-foreground">{person.title}</p>

        <p className="mt-4 max-w-2xl text-base text-muted-foreground">{person.summary}</p>

        {person.location ? (
          <p className="mt-3 text-sm text-muted-foreground">📍 {person.location}</p>
        ) : null}

        <div className="mt-7 flex flex-wrap gap-3">
          {ctas.map((cta) => (
            <Button key={cta!.label} variant={cta!.variant} asChild>
              <Link href={cta!.href} target={cta!.href.startsWith("http") ? "_blank" : undefined}>
                {cta!.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
