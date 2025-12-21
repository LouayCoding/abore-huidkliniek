import { Button, Container } from '@/components/ui';
import { marcellus, outfit } from '@/lib/fonts';
import { HeaderTransparent } from '@/components/site/header';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderTransparent variant="light" />
      
      <Container className="flex min-h-screen items-center justify-center py-20">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <span className={`${marcellus.className} text-8xl text-primary`}>
              404
            </span>
          </div>
          <h1 className={`${marcellus.className} text-3xl text-foreground mb-4`}>
            Pagina niet gevonden
          </h1>
          <p className={`${outfit.className} text-zinc-600 mb-8`}>
            De pagina die je zoekt bestaat niet of is verplaatst. 
            Ga terug naar onze homepage of bekijk onze behandelingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/" 
              className="rounded-full bg-primary text-white hover:bg-primary-hover"
            >
              Naar homepage
            </Button>
            <Button 
              href="/behandelingen" 
              variant="outline"
              className="rounded-full"
            >
              Bekijk behandelingen
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
