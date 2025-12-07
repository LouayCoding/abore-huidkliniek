import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Haargroeitherapie Rijswijk | Mesotherapie Hoofdhuid & Baard | Aboré",
  description: "Haargroeitherapie met mesotherapie in Rijswijk. ✓ Hoofdhuid €90 ✓ Baard €90 ✓ Pakket €450. Stimuleer haargroei natuurlijk. Boek gratis consult.",
  keywords: "haargroeitherapie, mesotherapie hoofdhuid, mesotherapie baard, haargroei stimuleren, haarverlies behandeling, Rijswijk",
};

const haargroeiServiceSchema = serviceSchema({
  name: "Haargroeitherapie met Mesotherapie",
  description: "Stimuleer haargroei op hoofdhuid en baard met mesotherapie",
  url: "https://huidkliniekabore.nl/behandelingen/haargroeitherapie",
  priceRange: "90-450",
  duration: "PT30M-PT45M"
});

const haargroeiFaqSchema = faqSchema([
  {
    question: "Hoe werkt mesotherapie voor haargroei?",
    answer: "Mesotherapie injecteert een cocktail van vitamines, mineralen en groeifactoren direct in de hoofdhuid. Dit stimuleert de haarzakjes, verbetert de doorbloeding en activeert slapende haarzakjes."
  },
  {
    question: "Hoeveel behandelingen heb ik nodig?",
    answer: "Voor optimaal resultaat adviseren we een kuur van 6 behandelingen met 2 weken tussentijd. Daarna onderhoud elke 2-3 maanden."
  },
  {
    question: "Is mesotherapie pijnlijk?",
    answer: "De behandeling wordt uitgevoerd met zeer fijne naalden. De meeste mensen ervaren dit als goed verdraagbaar met minimaal ongemak."
  }
]);

export default function HaargroeitherapiePage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, haargroeiServiceSchema, haargroeiFaqSchema]} />
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/14.jpg" alt="Haargroeitherapie Rijswijk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Haargroeitherapie in Rijswijk
          </h1>
          <p className={`${syne.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Stimuleer haargroei met mesotherapie voor hoofdhuid en baard
          </p>
          <a href="https://abor.boekingapp.nl/" className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
            Boek gratis consult
          </a>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <div className={`${syne.className} prose prose-lg max-w-none text-zinc-700 space-y-6 mb-12`}>
              <p className="text-xl leading-relaxed">
                Bij <strong>Aboré Huidkliniek in Rijswijk</strong> bieden we haargroeitherapie met mesotherapie aan. Deze behandeling stimuleert de haargroei op een natuurlijke manier door essentiële voedingsstoffen direct in de hoofdhuid of baard te injecteren.
              </p>
              <p className="text-xl leading-relaxed">
                Ook vanuit <strong>Den Haag, Delft en Voorburg</strong> zijn we makkelijk bereikbaar. Plan een <strong>gratis consult</strong> en ontdek of mesotherapie geschikt is voor jou.
              </p>
            </div>

            {/* Behandelingen */}
            <div className="mb-16">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Onze haargroeitherapie behandelingen
              </h2>

              <div className="space-y-6">
                <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    Mesotherapie Hoofdhuid
                  </h3>
                  <p className={`${syne.className} text-zinc-700 mb-4`}>
                    Mesotherapie voor de hoofdhuid stimuleert haargroei bij diffuus haarverlies, dunner wordend haar en beginnende kaalheid. De behandeling verbetert de doorbloeding, versterkt de haarzakjes en activeert slapende haarzakjes.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${syne.className} text-zinc-600`}>⏱️ 30-45 minuten</span>
                    <span className={`${syne.className} font-semibold text-primary`}>€90 per sessie</span>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    Mesotherapie Baard
                  </h3>
                  <p className={`${syne.className} text-zinc-700 mb-4`}>
                    Voor mannen die een vollere baard willen. Mesotherapie stimuleert de haargroei in kale plekken en zorgt voor een dichtere, gelijkmatigere baard. Ideaal voor patchy baardgroei of dunne plekken.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${syne.className} text-zinc-600`}>⏱️ 30 minuten</span>
                    <span className={`${syne.className} font-semibold text-primary`}>€90 per sessie</span>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-zinc-200 bg-gradient-to-br from-primary/5 to-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`${marcellus.className} text-2xl text-foreground`}>
                      Pakket 6 Behandelingen
                    </h3>
                    <span className={`${syne.className} inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white`}>
                      Bespaar €90
                    </span>
                  </div>
                  <p className={`${syne.className} text-zinc-700 mb-4`}>
                    Voor optimaal resultaat adviseren we een kuur van 6 behandelingen met 2 weken tussentijd. Met het pakket bespaar je €90 ten opzichte van losse behandelingen.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${syne.className} text-zinc-600`}>6 sessies over 3 maanden</span>
                    <span className={`${syne.className} font-semibold text-primary text-lg`}>€450 (ipv €540)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hoe werkt het */}
            <div className="mb-16 p-8 rounded-2xl bg-[#faf6ea]">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Hoe werkt mesotherapie voor haargroei?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Huidanalyse</h3>
                    <p className={`${syne.className} text-zinc-700`}>
                      We analyseren je hoofdhuid of baard en bepalen de beste behandelstrategie.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Injecties</h3>
                    <p className={`${syne.className} text-zinc-700`}>
                      Met zeer fijne naalden injecteren we een cocktail van vitamines, mineralen, aminozuren en groeifactoren in de hoofdhuid.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Stimulatie</h3>
                    <p className={`${syne.className} text-zinc-700`}>
                      De voedingsstoffen stimuleren de haarzakjes, verbeteren de doorbloeding en activeren slapende haarzakjes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Resultaat</h3>
                    <p className={`${syne.className} text-zinc-700`}>
                      Na 3-4 maanden zie je dikkere, sterkere haren en nieuwe haargroei in kale plekken.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Voor wie */}
            <div className="mb-16">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Voor wie is haargroeitherapie?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Diffuus haarverlies</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Dunner wordend haar</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Beginnende kaalheid</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Patchy baardgroei</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Zwakke haarzakjes</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${syne.className} text-zinc-700`}>Preventief bij haarverlies</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Veelgestelde vragen over haargroeitherapie
              </h2>

              <div className="space-y-3">
                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoe werkt mesotherapie voor haargroei?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    Mesotherapie injecteert een cocktail van vitamines, mineralen en groeifactoren direct in de hoofdhuid. Dit stimuleert de haarzakjes, verbetert de doorbloeding en activeert slapende haarzakjes.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoeveel behandelingen heb ik nodig?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    Voor optimaal resultaat adviseren we een kuur van 6 behandelingen met 2 weken tussentijd. Daarna onderhoud elke 2-3 maanden.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Is mesotherapie pijnlijk?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    De behandeling wordt uitgevoerd met zeer fijne naalden. De meeste mensen ervaren dit als goed verdraagbaar met minimaal ongemak.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wanneer zie ik resultaat?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    De eerste resultaten zijn zichtbaar na 2-3 maanden. Optimaal resultaat zie je na 4-6 maanden wanneer de volledige kuur is afgerond.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Werkt mesotherapie bij iedereen?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    Mesotherapie werkt het beste bij beginnend haarverlies en zwakke haarzakjes. Bij volledig kale plekken waar geen haarzakjes meer actief zijn, is het resultaat beperkt. Tijdens het consult bepalen we of de behandeling geschikt is voor jou.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Start met haargroeitherapie
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis consult bij Aboré Huidkliniek in Rijswijk
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://abor.boekingapp.nl/" className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
                Boek gratis consult
              </a>
              <a href="/contact" className={`${syne.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}>
                Stel een vraag
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
