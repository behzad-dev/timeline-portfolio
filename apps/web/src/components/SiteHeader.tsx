import Link from 'next/link';
import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
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
        <div className="grid h-14 grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="justify-self-start">
            <Link href="#top" className="font-semibold tracking-tight">
              {portfolio.person.name}
            </Link>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden items-center gap-6 md:flex md:justify-self-center">
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

          {/* Right (desktop buttons) */}
          <div className="hidden items-center gap-2 md:flex md:justify-self-end">
            <Button size="sm" variant="outline" asChild>
              <Link href={portfolio.links.github ?? '#'} target="_blank" rel="noreferrer">
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="justify-self-end md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle>{portfolio.person.name}</SheetTitle>
                  <SheetDescription>Navigate sections</SheetDescription>
                </SheetHeader>

                <Separator className="my-5" />

                <div className="flex flex-col gap-2">
                  {nav.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className="rounded-lg px-3 py-2 text-sm hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <Separator className="my-5" />

                <div className="flex flex-col gap-2">
                  {portfolio.links.github ? (
                    <Button variant="outline" asChild>
                      <Link href={portfolio.links.github} target="_blank" rel="noreferrer">
                        GitHub
                      </Link>
                    </Button>
                  ) : null}

                  {portfolio.links.linkedin ? (
                    <Button variant="outline" asChild>
                      <Link href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                      </Link>
                    </Button>
                  ) : null}

                  {portfolio.links.email ? (
                    <Button asChild>
                      <Link href={`mailto:${portfolio.links.email}`}>Email me</Link>
                    </Button>
                  ) : null}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
