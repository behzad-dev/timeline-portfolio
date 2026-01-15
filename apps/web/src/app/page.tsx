import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            Premium Timeline Portfolio
          </h1>
          <Badge variant="secondary">v1</Badge>
        </div>

        <p className="mt-3 max-w-2xl text-base text-muted-foreground">
          Next: layout skeleton + sections, then the journey timeline.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="lg">Primary</Button>
          <Button size="lg" variant="outline">
            Outline
          </Button>
        </div>

        <Separator className="my-10" />

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Base layout is ready</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            We’ll build sections next: Hero / Timeline / Skills / Projects / Contact.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
