import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Huidverjonging Rijswijk | Anti-Aging Behandelingen | Aboré",
  description: "Anti-aging en huidverjonging behandelingen in Rijswijk. ✓ Laser facial ✓ Microneedling ✓ Skin boosters ✓ LPG. Vanaf €65. Boek gratis consult.",
  keywords: "huidverjonging, anti-aging, laser facial, microneedling, skin boosters, LPG endermologie, rimpels, fijne lijntjes, Rijswijk",
};

const huidverjonginServiceSchema = serviceSchema({
  name: "Huidverjonging en Anti-Aging Behandelingen",
  description: "Professionele huidverjonging behandelingen voor een jeugdige, stralende huid",
  url: "https://huidkliniekabore.nl/behandelingen/huidverjonging",
  priceRange: "65-150",
  duration: "PT45M-PT60M"
});

const huidverjonginFaqSchema = faqSchema([
  {
    question: "Vanaf welke leeftijd kan ik starten met huidverjonging?",
    answer: "Je kunt preventief al vanaf je late 20's beginnen met huidverjonging. De meeste mensen starten tussen 30-40 jaar wanneer de eerste tekenen van veroudering zichtbaar worden."
  },
  {
    question: "Hoeveel behandelingen heb ik nodig?",
    answer: "Voor optimaal resultaat adviseren we een kuur van 4-6 behandelingen met 2-4 weken tussentijd. Daarna onderhoud elke 2-3 maanden."
  },
  {
    question: "Is huidverjonging pijnlijk?",
    answer: "De meeste behandelingen zijn goed verdraagbaar. Bij microneedling gebruiken we verdovende crème voor extra comfort. Laser facial voelt aan als een warm gevoel op de huid."
  },
  {
    question: "Wanneer zie ik resultaat?",
    answer: "Direct na de behandeling ziet je huid er frisser uit. Het echte resultaat zie je na 2-4 weken wanneer de collageenproductie op gang komt. Optimaal resultaat na de volledige kuur."
  },
  {
    question: "Kan ik huidverjonging combineren met andere behandelingen?",
    answer: "Ja, huidverjonging combineert uitstekend met bijvoorbeeld pigmentbehandeling of acne behandeling. We stellen een persoonlijk behandelplan op."
  }
]);

export default function HuidverjonginPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, huidverjonginServiceSchema, huidverjonginFaqSchema]} />
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/11.jpg" alt="Huidverjonging Rijswijk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Huidverjonging in Rijswijk
          </h1>
          <p className={`${outfit.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Anti-aging behandelingen voor een jeugdige, stralende huid
          </p>
          <a href="https://abor.boekingapp.nl/" className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
            Boek gratis consult
          </a>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <div className={`${outfit.className} prose prose-lg max-w-none text-zinc-700 space-y-6 mb-12`}>
              <p className="text-xl leading-relaxed">
                Bij <strong>Aboré Huidkliniek in Rijswijk</strong> helpen we je om je huid te verjongen en een frisse, jeugdige uitstraling te behouden. Met geavanceerde anti-aging behandelingen pakken we fijne lijntjes, rimpels, pigmentvlekken en huidverslapping effectief aan.
              </p>
              <p className="text-xl leading-relaxed">
                Ook vanuit <strong>Den Haag, Delft en Voorburg</strong> zijn we makkelijk bereikbaar. Plan een <strong>gratis consult</strong> en ontdek welke behandeling het beste bij jouw huid past.
              </p>
            </div>

            {/* Behandelingen */}
            <div className="mb-16">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Onze huidverjonging behandelingen
              </h2>

              <div className="space-y-8">
                {/* Laser Facial */}
                <div className="p-8 rounded-2xl border border-zinc-200 bg-white">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    Laser Facial
                  </h3>
                  <p className={`${outfit.className} text-zinc-700 mb-4`}>
                    Laser facial stimuleert de collageenproductie diep in de huid. Perfect voor het verminderen van fijne lijntjes, rimpels en het verbeteren van de huidstructuur. De behandeling zorgt voor een strakkere, gladdere huid met een natuurlijke glow.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${outfit.className} text-zinc-600`}>⏱️ 45-60 minuten</span>
                    <span className={`${outfit.className} font-semibold text-primary`}>Vanaf €120</span>
                  </div>
                </div>

                {/* Microneedling */}
                <div className="p-8 rounded-2xl border border-zinc-200 bg-white">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    Microneedling
                  </h3>
                  <p className={`${outfit.className} text-zinc-700 mb-4`}>
                    Microneedling creëert micro-verwondingen in de huid die de natuurlijke herstelprocessen activeren. Dit stimuleert de aanmaak van collageen en elastine, waardoor de huid steviger wordt en rimpels verminderen. Ook effectief voor <a href="/acne-behandeling" className="text-primary hover:underline">acne littekens</a>.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${outfit.className} text-zinc-600`}>⏱️ 60 minuten</span>
                    <span className={`${outfit.className} font-semibold text-primary`}>Vanaf €100</span>
                  </div>
                </div>

                {/* Skin Boosters */}
                <div className="p-8 rounded-2xl border border-zinc-200 bg-white">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    Skin Boosters
                  </h3>
                  <p className={`${outfit.className} text-zinc-700 mb-4`}>
                    Skin boosters zijn injectables met hyaluronzuur die de huid intensief hydrateren van binnenuit. Perfect voor een dewy, gehydrateerde huid en het verminderen van fijne lijntjes. Resultaat houdt 6-9 maanden aan.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${outfit.className} text-zinc-600`}>⏱️ 30 minuten</span>
                    <span className={`${outfit.className} font-semibold text-primary`}>Vanaf €150</span>
                  </div>
                </div>

                {/* LPG Endermologie */}
                <div className="p-8 rounded-2xl border border-zinc-200 bg-white">
                  <h3 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                    LPG Endermologie Gezicht
                  </h3>
                  <p className={`${outfit.className} text-zinc-700 mb-4`}>
                    LPG voor het gezicht is een niet-invasieve behandeling die de huid liftet en verstevigt. Door mechanische stimulatie wordt de microcirculatie verbeterd en collageen productie gestimuleerd. Ideaal voor huidverslapping en contouring.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <span className={`${outfit.className} text-zinc-600`}>⏱️ 45 minuten</span>
                    <span className={`${outfit.className} font-semibold text-primary`}>Vanaf €65</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Voor wie */}
            <div className="mb-16 p-8 rounded-2xl bg-[#faf6ea]">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Voor wie is huidverjonging?
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Fijne lijntjes en rimpels</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Huidverslapping</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Doffe, vermoeide huid</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Verlies van volume</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Grote poriën</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className={`${outfit.className} text-zinc-700`}>Ongelijkmatige huidtextuur</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Veelgestelde vragen over huidverjonging
              </h2>

              <div className="space-y-3">
                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Vanaf welke leeftijd kan ik starten met huidverjonging?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Je kunt preventief al vanaf je late 20's beginnen met huidverjonging. De meeste mensen starten tussen 30-40 jaar wanneer de eerste tekenen van veroudering zichtbaar worden.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoeveel behandelingen heb ik nodig?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Voor optimaal resultaat adviseren we een kuur van 4-6 behandelingen met 2-4 weken tussentijd. Daarna onderhoud elke 2-3 maanden.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Is huidverjonging pijnlijk?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    De meeste behandelingen zijn goed verdraagbaar. Bij microneedling gebruiken we verdovende crème voor extra comfort. Laser facial voelt aan als een warm gevoel op de huid.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wanneer zie ik resultaat?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Direct na de behandeling ziet je huid er frisser uit. Het echte resultaat zie je na 2-4 weken wanneer de collageenproductie op gang komt. Optimaal resultaat na de volledige kuur.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan ik huidverjonging combineren met andere behandelingen?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Ja, huidverjonging combineert uitstekend met bijvoorbeeld <a href="/pigmentvlekken-verwijderen" className="text-primary hover:underline">pigmentbehandeling</a> of <a href="/acne-behandeling" className="text-primary hover:underline">acne behandeling</a>. We stellen een persoonlijk behandelplan op.
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
              Start met huidverjonging
            </h2>
            <p className={`${outfit.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis consult bij Aboré Huidkliniek in Rijswijk
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://abor.boekingapp.nl/" className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
                Boek gratis consult
              </a>
              <a href="/contact" className={`${outfit.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}>
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
