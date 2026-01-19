'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll } from 'framer-motion';

import { portfolio, type TimelineItem as TimelineItemType } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/Section';

function formatRange(start?: string, end?: string) {
  if (start && end) return `${start} — ${end}`;
  if (start && !end) return start;
  if (!start && end) return end;
  return null;
}

function TimelineEntry({ item, index }: { item: TimelineItemType; index: number }) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);

  const inView = useInView(ref, { margin: '-35% 0px -55% 0px', amount: 0.2 });
  const isLeft = index % 2 === 0;

  const range = formatRange(item.start, item.end);
  const fromX = prefersReducedMotion ? 0 : isLeft ? -18 : 18;

  const cardClass =
    'bg-background/80 shadow-sm backdrop-blur transition-shadow hover:shadow-md';

  return (
    <div ref={ref} className="relative">
      {/* Dot */}
      <motion.div
        className="absolute left-4 top-8 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-muted-foreground/35 ring-4 ring-background md:left-1/2"
        animate={
          inView ? { backgroundColor: 'var(--primary)', scale: 1.25 } : { scale: 1 }
        }
        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
      />

      {/* Glow */}
      <motion.div
        className="absolute left-4 top-8 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-xl md:left-1/2"
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
      />

      {/* Mobile indent; desktop alternating */}
      <div className="pl-10 md:pl-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          {/* Left column */}
          {isLeft ? (
            <motion.div
              className="md:justify-self-end md:pr-8 md:w-full"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10, x: fromX }}
              animate={
                inView
                  ? { opacity: 1, y: 0, x: 0 }
                  : prefersReducedMotion
                    ? {}
                    : { opacity: 0.7, y: 4, x: 0 }
              }
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
            >
              <Card className={cardClass}>
                <CardHeader className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {range ? <Badge variant="secondary">{range}</Badge> : null}
                  </div>
                  {item.subtitle ? (
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  ) : null}
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="hidden md:block" />
          )}

          {/* Right column */}
          {!isLeft ? (
            <motion.div
              className="md:justify-self-start md:pl-8 md:w-full"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10, x: fromX }}
              animate={
                inView
                  ? { opacity: 1, y: 0, x: 0 }
                  : prefersReducedMotion
                    ? {}
                    : { opacity: 0.7, y: 4, x: 0 }
              }
              transition={{ duration: prefersReducedMotion ? 0 : 0.35, ease: 'easeOut' }}
            >
              <Card className={cardClass}>
                <CardHeader className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    {range ? <Badge variant="secondary">{range}</Badge> : null}
                  </div>
                  {item.subtitle ? (
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  ) : null}
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <div className="hidden md:block" />
          )}
        </div>
      </div>
    </div>
  );
}

export function Timeline() {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.25', 'end 0.8'],
  });

  return (
    <Section
      id="journey"
      variant="tint"
      title="Journey"
      subtitle="The story behind my work — from Iran to Germany, and what I’m building now."
    >
      <div ref={containerRef} className="relative">
        {/* Base rail */}
        <div className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 bg-border/70 md:left-1/2" />

        {/* Fill rail */}
        <motion.div
          className="absolute left-4 top-0 h-full w-[2px] -translate-x-1/2 origin-top md:left-1/2"
          style={{
            scaleY: prefersReducedMotion ? 1 : scrollYProgress,
            backgroundColor: 'var(--primary)',
          }}
        />

        <div className="space-y-6 md:space-y-7">
          {portfolio.timeline.map((item, idx) => (
            <TimelineEntry key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </Section>
  );
}
