import { portfolio } from '@/data/portfolio';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageContainer } from '@/components/PageContainer';

type SkillCategoryType = (typeof portfolio.skills)[number];

export function Skills() {
  return (
    <section id="skills" className="py-14 scroll-mt-20" aria-labelledby="skills-title">
      <PageContainer>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="skills-title" className="text-2xl font-semibold tracking-tight">
              Skills / Toolbox
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The stack I use most often (and what I’m currently leveling up).
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="grid gap-4 sm:grid-cols-2">
          {portfolio.skills.map((category: SkillCategoryType) => (
            <Card key={category.name} className="shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{category.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="flex flex-wrap gap-2" aria-label={`${category.name} skills`}>
                  {category.items.map((item: string) => (
                    <li key={item}>
                      <Badge variant="secondary">{item}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
