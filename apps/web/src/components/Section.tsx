import * as React from 'react';
import { cn } from '@/lib/utils';
import { PageContainer } from '@/components/PageContainer';

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  variant?: 'plain' | 'tint';
  surface?: 'none' | 'card';
  className?: string;
  surfaceClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  title,
  subtitle,
  variant = 'plain',
  surface = 'card',
  className,
  surfaceClassName,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-14 sm:py-16 scroll-mt-24',
        variant === 'tint' &&
          'bg-gradient-to-b from-muted/10 via-transparent to-transparent',
        className,
      )}
    >
      <PageContainer>
        {surface === 'card' ? (
          <div
            className={cn(
              'rounded-3xl border bg-background/55 shadow-sm backdrop-blur-md p-6 sm:p-8 md:p-10',
              surfaceClassName,
            )}
          >
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}

            {title || subtitle ? <div className="mt-8" /> : null}

            {children}
          </div>
        ) : (
          <>
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {subtitle}
              </p>
            ) : null}
            {title || subtitle ? <div className="mt-8" /> : null}
            {children}
          </>
        )}
      </PageContainer>
    </section>
  );
}
