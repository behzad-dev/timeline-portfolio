import { portfolio } from "@/data/portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

function formatRange(start?: string, end?: string) {
  if (start && end) return `${start} — ${end}`;
  if (start && !end) return start;
  if (!start && end) return end;
  return null;
}

export function Timeline() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight">Journey</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The story behind my work — from Iran to Germany, and what I’m building now.
        </p>

        <Separator className="my-8" />

        {/* Timeline rail */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-border" />

          <div className="space-y-6">
            {portfolio.timeline.map((item) => {
              const range = formatRange(item.start, item.end);

              return (
                <div key={item.id} className="relative pl-10">
                  {/* dot */}
                  <div className="absolute left-3 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />

                  <Card className="shadow-sm">
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
                      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                        {item.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
