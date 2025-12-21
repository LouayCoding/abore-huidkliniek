import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Acne Behandeling & Rosacea | Gratis Consult | Huidkliniek Rijswijk",
  description: "Acne en rosacea behandeling in Rijswijk. ✓ Diepte reiniging €85 ✓ Mesoestetic peeling €100 ✓ Microneedling littekens ✓ TCA Cross. Gratis consult bij Aboré.",
  keywords: "acne behandeling Rijswijk, rosacea behandeling, acne littekens, mesoestetic peeling, microneedling acne, TCA cross, diepte reiniging, huidkliniek Den Haag",
};

const acneServiceSchema = serviceSchema({
  name: "Acne en Rosacea Behandeling",
  description: "Professionele acne behandeling met diepte reiniging, peelings en microneedling",
  url: "https://huidkliniekabore.nl/acne-behandeling",
  priceRange: "85-100",
  duration: "PT45M-PT60M"
});

const acneFaqSchema = faqSchema([
  {
    question: "Hoeveel behandelingen heb ik nodig voor acne?",
    answer: "Gemiddeld 6-10 behandelingen met 2-4 weken tussentijd. Bij ernstige acne kan een langere kuur nodig zijn."
  },
  {
    question: "Werkt acne behandeling ook bij rosacea?",
    answer: "Ja, we gebruiken speciale protocollen voor rosacea zoals de Mesoestetic Redness Repair peeling die ontstekingen kalmeert."
  },
  {
    question: "Kan ik acne littekens laten behandelen?",
    answer: "Ja, microneedling en TCA Cross zijn zeer effectief voor acne littekens. Resultaat zichtbaar na 3-6 behandelingen."
  }
]);

export default function AcneBehandelingPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, acneServiceSchema, acneFaqSchema]} />
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/2.jpg" alt="Acne Behandeling Rijswijk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Acne & Rosacea Behandeling in Rijswijk
          </h1>
          <p className={`${outfit.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Professionele huidkliniek voor acne, rosacea en acne littekens
          </p>
          <a href="https://abor.boekingapp.nl/" className={`${outfit.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
            Boek gratis consult
          </a>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Intro Paragraaf */}
            <div className={`${outfit.className} prose prose-lg max-w-none text-zinc-700 space-y-6 mb-12`}>
              <p className="text-xl leading-relaxed">
                Heb je last van <strong>acne, rosacea of acne littekens</strong>? Je bent niet alleen. Acne is een veelvoorkomend huidprobleem dat niet alleen fysiek, maar ook emotioneel belastend kan zijn. Misschien heb je al van alles geprobeerd zonder blijvend resultaat. 
              </p>
              <p className="text-xl leading-relaxed">
                <strong>Onze huidkliniek in Rijswijk is gespecialiseerd in acnebehandelingen</strong> en biedt effectieve, medisch verantwoorde oplossingen. Bij Aboré Huidkliniek begrijpen we je frustratie en werken onze ervaren huidtherapeuten met geavanceerde technieken zoals <strong>medische peelings, microneedling en TCA Cross</strong> om jouw huid weer in balans te brengen.
              </p>
              <p className="text-xl leading-relaxed">
                Ook vanuit <strong>Den Haag, Delft, Voorburg en omgeving</strong> zijn we makkelijk bereikbaar. Plan een <strong>gratis consult</strong> en ontdek welke behandeling het beste bij jou past.
              </p>
            </div>

            {/* Voor Wie */}
            <div className="mb-12 p-8 rounded-2xl bg-[#faf6ea]">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Voor wie is deze behandeling?
              </h2>
              <div className={`${outfit.className} space-y-4 text-zinc-700`}>
                <p className="font-semibold text-lg">Deze behandeling is geschikt voor:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Actieve acne:</strong> Puistjes, mee-eters en ontstekingen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Acne littekens:</strong> Diepe of oppervlakkige littekens door eerdere acne</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Rosacea:</strong> Roodheid, zichtbare bloedvaatjes en ontstekingen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Onzuivere huid:</strong> Verstopte poriën en een vette glans</span>
                  </li>
                </ul>
                <p className="text-sm text-zinc-600 mt-6 italic">
                  Let op: Bij zeer ernstige cystische acne adviseren we eerst een consult bij een dermatoloog.
                </p>
              </div>
            </div>

            {/* Kosten & Vergoedingen */}
            <div className="mb-12 p-8 rounded-2xl bg-white border border-zinc-200">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Kosten & vergoedingen
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-zinc-200">
                      <th className={`${outfit.className} text-left py-4 pr-4 font-semibold text-foreground`}>Behandeling</th>
                      <th className={`${outfit.className} text-center py-4 px-4 font-semibold text-foreground`}>Duur</th>
                      <th className={`${outfit.className} text-right py-4 pl-4 font-semibold text-foreground`}>Prijs</th>
                    </tr>
                  </thead>
                  <tbody className={outfit.className}>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">Gratis Consult Acne & Rosacea</td>
                      <td className="py-4 px-4 text-center text-zinc-600">20 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€0</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">Diepte Reiniging</td>
                      <td className="py-4 px-4 text-center text-zinc-600">45 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€85</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">Mesoestetic Peeling - Blemish Control</td>
                      <td className="py-4 px-4 text-center text-zinc-600">45 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€100</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">Mesoestetic Peeling - Redness Repair</td>
                      <td className="py-4 px-4 text-center text-zinc-600">45 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€100</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">TCA Cross - Diepe Acne Littekens</td>
                      <td className="py-4 px-4 text-center text-zinc-600">40 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€100</td>
                    </tr>
                    <tr className="hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">Microneedling - Acne Littekens</td>
                      <td className="py-4 px-4 text-center text-zinc-600">45 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#faf6ea]">
                <p className={`${outfit.className} text-sm text-zinc-700`}>
                  <strong>Let op:</strong> Acne behandelingen worden niet vergoed door de zorgverzekering. Sommige aanvullende verzekeringen vergoeden wel een deel van cosmetische behandelingen. Check je polis of neem contact op met je verzekeraar.
                </p>
              </div>
            </div>

            {/* Behandelingen */}
            <h2 className={`${marcellus.className} text-4xl text-foreground mb-6`}>
              Welke acne behandelingen bieden we in Rijswijk?
            </h2>

            <div className={`${outfit.className} space-y-6 mb-12`}>
              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>Gratis Consult Acne & Rosacea</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€0</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>20 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Tijdens dit vrijblijvende consult analyseren we je huid en bespreken we welke behandeling het beste bij jou past. We maken een persoonlijk behandelplan en beantwoorden al je vragen.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>Diepte Reiniging</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€85</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>45 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Een intensieve reiniging waarbij we talg, mee-eters en onzuiverheden verwijderen. De behandeling omvat stomen, extractie en een verzachtend masker. Geschikt bij actieve acne en een onzuivere huid.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>Mesoestetic Peeling - Blemish Control</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€100</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>45 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Medische peeling specifiek ontwikkeld voor acne. Vermindert ontstekingen, reguleert talgproductie en voorkomt nieuwe uitbraken. Bevat salicylzuur en mandelic acid voor optimale resultaten.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>Mesoestetic Peeling - Redness Repair</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€100</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>45 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Speciaal voor rosacea en gevoelige huid. Vermindert roodheid, kalmeert ontstekingen en versterkt de huidbarrière. Geschikt voor alle gradaties van rosacea.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>TCA Cross - Diepe Acne Littekens</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€100</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>40 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Gespecialiseerde behandeling voor diepe, pitted acne littekens (ice pick scars). TCA (trichloorazijnzuur) wordt precies in het litteken aangebracht om collageen productie te stimuleren en het litteken van binnenuit op te vullen.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`${marcellus.className} text-2xl text-foreground`}>Microneedling - Acne Littekens</h3>
                  <span className={`${marcellus.className} text-2xl text-primary`}>€100</span>
                </div>
                <p className={`${outfit.className} text-sm text-zinc-600 mb-2`}>45 minuten</p>
                <p className={`${outfit.className} text-zinc-700`}>
                  Effectieve behandeling voor oppervlakkige en diepe acne littekens. Microneedling stimuleert de natuurlijke collageen en elastine productie, waardoor littekens geleidelijk vervagen en de huidstructuur verbetert. Ook geschikt voor <a href="/behandelingen/lichaamsbehandelingen#striemen" className="text-primary hover:underline font-medium">striemen en littekens op het lichaam</a>.
                </p>
              </div>
            </div>

            {/* Hoe Verloopt Het Traject */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8 text-center`}>
                Hoe verloopt het traject?
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <span className={`${marcellus.className} text-2xl text-primary`}>1</span>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Gratis Huidanalyse</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    We analyseren je huid en bespreken je klachten en wensen
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <span className={`${marcellus.className} text-2xl text-primary`}>2</span>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Behandelplan op Maat</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    We stellen een persoonlijk plan samen met de juiste behandelingen
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <span className={`${marcellus.className} text-2xl text-primary`}>3</span>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Aantal Sessies</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Gemiddeld 6-10 behandelingen met 2-4 weken interval voor optimaal resultaat
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <span className={`${marcellus.className} text-2xl text-primary`}>4</span>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Nazorg & Advies</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Persoonlijk productadvies en nazorginstructies voor thuis
                  </p>
                </div>
              </div>
            </div>

            {/* Resultaten & Verwachtingen */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Resultaten & verwachtingen
              </h2>
              
              <div className="grid gap-6 sm:grid-cols-3 mb-8">
                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Wanneer zie je resultaat?</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Na 3-5 sessies zie je duidelijke verbetering. Actieve acne vermindert sneller, littekens verbeteren geleidelijk over 6-12 maanden.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Realistische verwachtingen</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Acne is behandelbaar, maar geduld is belangrijk. Volledige verbetering vraagt tijd en consistentie. Resultaten variëren per persoon.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Bijwerkingen & downtime</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Lichte roodheid en gevoeligheid na behandeling is normaal en trekt binnen 24-48 uur weg. Bij peelings kan lichte schilfering optreden.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#faf6ea] border border-primary/20">
                <h3 className={`${marcellus.className} text-lg text-foreground mb-3`}>
                  💡 Tip voor optimaal resultaat
                </h3>
                <p className={`${outfit.className} text-zinc-700`}>
                  Combineer behandelingen met de juiste thuiszorg. We adviseren medische producten die je huid ondersteunen tussen de sessies door. Vermijd zonblootstelling en gebruik dagelijks SPF 50+.
                </p>
              </div>
            </div>

            {/* Waarom Aboré */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Waarom kiezen voor Aboré Huidkliniek?
              </h2>

              <div className="grid gap-6 sm:grid-cols-2 mb-8">
                <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Geregistreerde Huidtherapeuten</h3>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>
                        Onze huidtherapeuten zijn geregistreerd bij de ANBOS en volgen continu bij- en nascholingen voor de nieuwste technieken.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Medische Kwaliteit Apparatuur</h3>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>
                        We werken met premium merken: Mesoestetic peelings, picolaser technologie, en professionele microneedling apparatuur.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>10+ Jaar Ervaring</h3>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>
                        Sinds 2014 behandelen we succesvol acne en rosacea. Duizenden tevreden cliënten gingen je voor met zichtbare resultaten.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white hover:border-primary transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Bewezen Resultaten</h3>
                      <p className={`${outfit.className} text-sm text-zinc-600`}>
                        Bekijk onze voor- en na-foto's in de kliniek. We documenteren resultaten (met toestemming) om realistische verwachtingen te scheppen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                <div className="flex items-start gap-4">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Centraal in Rijswijk</h3>
                    <p className={`${outfit.className} text-zinc-700`}>
                      Makkelijk bereikbaar vanaf Den Haag, Delft, Voorburg en omgeving. Gratis parkeren mogelijk in de buurt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Sectie */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Veelgestelde vragen over acne behandeling
              </h2>

              <div className="space-y-3">
                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoeveel behandelingen heb ik nodig voor acne?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Dit verschilt per persoon en type acne. Voor actieve acne zijn gemiddeld 6-10 behandelingen nodig. Bij acne littekens kan het traject langer duren (8-12 maanden). Tijdens het gratis consult maken we een persoonlijk behandelplan.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Is acne behandeling pijnlijk?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    De meeste behandelingen zijn goed verdraagbaar. Diepte reiniging en peelings voelen aan als een licht tintelend gevoel. Bij microneedling en TCA Cross gebruiken we verdovende crème voor extra comfort.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoelang duurt het voordat ik resultaat zie?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Na 3-5 sessies zie je duidelijke verbetering bij actieve acne. Acne littekens verbeteren geleidelijk over 6-12 maanden. Geduld en consistentie zijn belangrijk voor optimaal resultaat.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan ik direct na de behandeling weer naar buiten?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Bij de meeste behandelingen is er geen downtime. Je huid kan licht rood zijn, maar dit trekt binnen 24-48 uur weg. We adviseren wel om direct zonblootstelling te vermijden en SPF 50+ te gebruiken.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wat is het verschil tussen een peeling en microneedling?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Een peeling werkt oppervlakkig en verwijdert dode huidcellen, reguleert talgproductie en vermindert ontstekingen. Microneedling werkt dieper en stimuleert collageen productie, ideaal voor littekens. Vaak combineren we beide voor optimaal resultaat.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoelang moet er tussen de behandelingen zitten?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Voor peelings adviseren we 2-4 weken tussen sessies. Bij microneedling is dit 4-6 weken. Dit geeft je huid de tijd om te herstellen en nieuwe collageen aan te maken.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan acne terugkomen na de behandeling?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Acne is een chronische aandoening die kan terugkomen. Daarom adviseren we onderhoudsbehandelingen (1x per 2-3 maanden) en de juiste thuiszorg om je huid in balans te houden.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Welke thuiszorg producten adviseren jullie?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    We werken met medische huidverzorging zoals Mesoestetic. Tijdens het consult adviseren we producten specifiek voor jouw huidtype: reiniger, serum, crème en SPF 50+. Goede thuiszorg is essentieel voor langdurig resultaat.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Zijn de behandelingen geschikt voor alle huidtypes?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Ja, onze behandelingen zijn geschikt voor alle huidtypes en huidkleuren. We passen de behandeling aan op basis van jouw specifieke huidtype en gevoeligheid.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wat kost een volledig acne traject?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Dit hangt af van het aantal en type behandelingen. Een gemiddeld traject van 8 behandelingen kost tussen €680-€800. We bespreken altijd vooraf de totale investering en kunnen eventueel een behandelplan in fases opstellen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan ik acne behandeling combineren met andere behandelingen?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Ja, we combineren vaak verschillende behandelingen voor optimaal resultaat. Bijvoorbeeld: peeling voor actieve acne + microneedling voor littekens. We stemmen alles af op jouw huid en doelen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Moet ik iets voorbereiden voor de behandeling?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Kom met een schone huid zonder make-up. Stop 1 week voor de behandeling met scrubs en vitamine A producten. Bij microneedling adviseren we 2 weken geen zonnen. We geven altijd gedetailleerde voorbereiding instructies.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wat als ik ook rosacea heb naast acne?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-sm text-zinc-600 mt-4`}>
                    We behandelen acne en rosacea vaak tegelijkertijd. De Mesoestetic Redness Repair peeling is specifiek ontwikkeld voor deze combinatie. We passen de behandeling aan op jouw gevoelige huid. Heb je ook last van <a href="/pigmentvlekken-verwijderen" className="text-primary hover:underline font-medium">pigmentvlekken door ontstekingen</a>? Dan combineren we beide behandelingen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Zijn er bijwerkingen of risico's?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Bijwerkingen zijn minimaal en tijdelijk: lichte roodheid, gevoeligheid en bij peelings lichte schilfering. Ernstige bijwerkingen zijn zeldzaam bij correct uitgevoerde behandelingen. We bespreken alle risico's tijdens het consult.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan ik tijdens de behandeling blijven werken/studeren?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Ja, bij de meeste behandelingen kun je direct door met je dagelijkse activiteiten. Plan bij voorkeur behandelingen in het weekend als je onzeker bent over roodheid. Make-up mag meestal de volgende dag weer.
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
              Start vandaag met je acne behandeling
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
            <p className={`${outfit.className} text-sm text-zinc-500 mt-6`}>
              📍 Waldhoornplein 14, Rijswijk | ☎️ +31 6 34 53 33 58
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
