import Link from 'next/link';
import { portfolio } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';

export function Contact() {
  const { links } = portfolio;

  const items = [
    links.email ? { label: 'Email', href: `mailto:${links.email}` } : null,
    links.github ? { label: 'GitHub', href: links.github } : null,
    links.linkedin ? { label: 'LinkedIn', href: links.linkedin } : null,
  ].filter(Boolean);

  return (
    <section id="contact" className="py-14 scroll-mt-20">
      <PageContainer>
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Want to work together or have a question? The fastest way is email.
        </p>

        <Separator className="my-8" />

        <div className="flex flex-wrap gap-3">
          {items.map((i) => (
            <Button key={i!.label} size="lg" asChild>
              <Link
                href={i!.href}
                target={i!.href.startsWith('http') ? '_blank' : undefined}
                rel={i!.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {i!.label}
              </Link>
            </Button>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Currently based in Hamburg. Open to full-stack roles (React/Node/AWS).
        </p>
      </PageContainer>
    </section>
  );
}
