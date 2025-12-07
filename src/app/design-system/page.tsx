import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Container, Input } from "@/components/ui";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Container className="py-10">
        <h1 className="text-3xl font-bold">Design System</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">Basiselementen en varianten.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Buttons</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link" href="#">Link</Button>
            <Button size="sm">Klein</Button>
            <Button size="lg">Groot</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Inputs</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Naam</label>
              <Input placeholder="Voer je naam in" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input type="email" placeholder="naam@voorbeeld.nl" />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Badges</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="accent">Accent</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Cards</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Voorbeeldkaart</CardTitle>
                <CardDescription>Beschrijving van de kaart.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Inhoud van de kaart met tekst.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Actie</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Statistieken</CardTitle>
                <CardDescription>Huidige status en cijfers.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-muted p-4">Items: 24</div>
                  <div className="rounded-lg bg-muted p-4">Groei: 12%</div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Meer</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </Container>
    </div>
  );
}

