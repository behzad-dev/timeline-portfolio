'use client';

import Link from 'next/link';
import Image from 'next/image';
import { portfolio } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

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

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
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

                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="secondary">More</Button>
                    </DrawerTrigger>

                    <DrawerContent>
                      <div className="mx-auto w-full max-w-2xl px-4">
                        <DrawerHeader className="px-0">
                          <DrawerTitle>{p.title}</DrawerTitle>
                          <DrawerDescription>
                            {p.role ? `${p.role} • ` : ''}
                            {p.tech.join(' • ')}
                          </DrawerDescription>
                        </DrawerHeader>

                        <div className="space-y-5 pb-2">
                          {p.details ? (
                            <div>
                              <p className="text-sm font-medium">Context</p>
                              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                {p.details}
                              </p>
                            </div>
                          ) : null}

                          {p.highlights?.length ? (
                            <div>
                              <p className="text-sm font-medium">Highlights</p>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                {p.highlights.map((h) => (
                                  <li key={h}>{h}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          {p.improvements?.length ? (
                            <div>
                              <p className="text-sm font-medium">What I’d improve next</p>
                              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                                {p.improvements.map((x) => (
                                  <li key={x}>{x}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </div>

                        <DrawerFooter className="px-0">
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
                            <DrawerClose asChild>
                              <Button>Close</Button>
                            </DrawerClose>
                          </div>
                        </DrawerFooter>
                      </div>
                    </DrawerContent>
                  </Drawer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
