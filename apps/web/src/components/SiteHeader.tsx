import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { portfolio } from '@/data/portfolio';
import { PageContainer } from '@/components/PageContainer';

const nav = [
  { label: 'Journey', href: '#journey' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <PageContainer>
        <div className="grid h-14 grid-cols-[1fr_auto_1fr] items-center">
          <div className="justify-self-start">
            <Link href="#top" className="font-semibold tracking-tight">
              {portfolio.person.name}
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex justify-self-center">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Button size="sm" variant="outline" asChild>
              <Link href={portfolio.links.github ?? '#'} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
