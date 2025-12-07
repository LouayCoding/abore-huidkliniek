import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pigmentvlekken Verwijderen Rijswijk | Melasma & Ouderdomsvlekken | Aboré",
  description: "Pigmentvlekken verwijderen in Rijswijk. ✓ Melasma ✓ Ouderdomsvlekken ✓ Lentigo ✓ Picolaser. Vanaf €90. Boek gratis consult bij Aboré Huidkliniek.",
  keywords: "pigmentvlekken verwijderen, melasma behandeling, ouderdomsvlekken, lentigo solaris, picolaser, pigmentbehandeling Rijswijk, huidkliniek Den Haag",
};

const pigmentServiceSchema = serviceSchema({
  name: "Pigmentvlekken Verwijderen",
  description: "Professionele behandeling voor melasma, ouderdomsvlekken en pigmentatie",
  url: "https://huidkliniekabore.nl/pigmentvlekken-verwijderen",
  priceRange: "90-150",
  duration: "PT30M-PT45M"
});

const pigmentFaqSchema = faqSchema([
  {
    question: "Hoeveel behandelingen zijn nodig voor pigmentvlekken?",
    answer: "Gemiddeld 4-8 behandelingen afhankelijk van de diepte en type pigmentatie. Melasma vereist vaak meer sessies."
  },
  {
    question: "Komen pigmentvlekken terug na behandeling?",
    answer: "Bij goede zonbescherming (SPF50+) blijft het resultaat behouden. Zonder bescherming kunnen nieuwe vlekken ontstaan."
  },
  {
    question: "Wat is het verschil tussen melasma en ouderdomsvlekken?",
    answer: "Melasma is hormonaal en komt vaak voor tijdens zwangerschap. Ouderdomsvlekken ontstaan door UV-schade en zijn makkelijker te behandelen."
  }
]);

export default function PigmentvlekkenVerwijderenPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, pigmentServiceSchema, pigmentFaqSchema]} />
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/6.jpg" alt="Pigmentvlekken verwijderen Rijswijk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Pigmentvlekken Verwijderen Rijswijk
          </h1>
          <p className={`${syne.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Effectieve verwijdering van ouderdomsvlekken, melasma en pigment met picolaser technologie
          </p>
          <a href="https://abor.boekingapp.nl/" className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
            Boek vanaf €90
          </a>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${marcellus.className} text-4xl text-foreground mb-6`}>
              Pigmentvlekken verwijderen met picolaser in Rijswijk
            </h2>
            
            <div className={`${syne.className} prose prose-lg max-w-none text-zinc-700 space-y-6`}>
              <p>
                Pigmentvlekken, ook wel ouderdomsvlekken of lentigo solaris genoemd, zijn een veelvoorkomend huidprobleem. Bij Aboré Huidkliniek in Rijswijk verwijderen we pigmentvlekken effectief en veilig met geavanceerde picolaser technologie.
              </p>

              <p>
                De picolaser levert ultrakorte energiepulsen die de pigmentdeeltjes in de huid verpulveren, waarna je lichaam deze natuurlijk afvoert. Deze methode is geschikt voor alle huidtypes en levert zichtbare resultaten.
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Behandelingen voor pigmentvlekken
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 not-prose">
                <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <h4 className={`${marcellus.className} text-xl text-foreground mb-2`}>Ouderdomsvlekken 1-3 vlekken</h4>
                  <p className={`${syne.className} text-zinc-600 mb-3`}>20 minuten - €90</p>
                  <p className={`${syne.className} text-sm text-zinc-600`}>
                    Ideaal voor enkele kleine pigmentvlekken op gezicht of handen
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <h4 className={`${marcellus.className} text-xl text-foreground mb-2`}>Ouderdomsvlekken 4-6 vlekken</h4>
                  <p className={`${syne.className} text-zinc-600 mb-3`}>30 minuten - €120</p>
                  <p className={`${syne.className} text-sm text-zinc-600`}>
                    Voor meerdere pigmentvlekken in één gebied
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <h4 className={`${marcellus.className} text-xl text-foreground mb-2`}>Hele gezicht</h4>
                  <p className={`${syne.className} text-zinc-600 mb-3`}>50 minuten - €185</p>
                  <p className={`${syne.className} text-sm text-zinc-600`}>
                    Volledige gezichtsbehandeling voor verspreid pigment
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <h4 className={`${marcellus.className} text-xl text-foreground mb-2`}>Melasma behandeling</h4>
                  <p className={`${syne.className} text-zinc-600 mb-3`}>40 minuten - €175</p>
                  <p className={`${syne.className} text-sm text-zinc-600`}>
                    TCA behandeling specifiek voor melasma
                  </p>
                </div>
              </div>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Wat zijn pigmentvlekken?
              </h3>

              <p>
                Pigmentvlekken ontstaan door een overproductie van melanine in de huid. Dit kan verschillende oorzaken hebben:
              </p>

              <ul className="space-y-2">
                <li><strong>Zonschade:</strong> UV-straling stimuleert melanineproductie (lentigo solaris)</li>
                <li><strong>Veroudering:</strong> Ouderdomsvlekken door natuurlijk verouderingsproces</li>
                <li><strong>Hormonaal:</strong> Melasma door hormonale veranderingen (zwangerschap, pil)</li>
                <li><strong>Ontstekingen:</strong> Post-inflammatoire hyperpigmentatie na acne of verwondingen</li>
              </ul>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Waarom picolaser voor pigmentvlekken?
              </h3>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Effectief:</strong> Ultrakorte pulsen breken pigment effectiever af dan traditionele lasers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Veilig:</strong> Geschikt voor alle huidtypes, ook donkere huid</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Minimale downtime:</strong> Je kunt direct door met je dagelijkse activiteiten</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Zichtbare resultaten:</strong> Pigment wordt geleidelijk lichter na 2-4 weken</span>
                </li>
              </ul>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Cosmelan & Dermamelan voor melasma
              </h3>

              <p>
                Voor hardnekkig melasma bieden we ook de Cosmelan (€700, 3 maanden traject) en Dermamelan (€900, 4 maanden traject) behandelingen. Deze medische depigmentatie methodes zijn wereldwijd erkend als de meest effectieve behandeling voor melasma.
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Veelgestelde vragen over pigmentvlekken verwijderen
              </h3>

              <div className="space-y-4 not-prose">
                <details className="group p-6 rounded-xl border border-zinc-200">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoeveel behandelingen heb ik nodig?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    Voor ouderdomsvlekken (lentigo solaris) zijn gemiddeld 1-3 behandelingen nodig. Melasma vereist vaak een langer traject van 3-6 maanden. Tijdens het gratis consult bepalen we het aantal behandelingen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wat zijn de kosten voor pigmentvlekken verwijderen?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    De prijs hangt af van het aantal en de grootte van de vlekken. Prijzen variëren van €90 voor 1-3 kleine vlekken tot €185 voor het hele gezicht. Zie bovenstaand overzicht voor alle prijzen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Is de behandeling pijnlijk?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    De picolaser voelt aan als kleine elastiekjes tegen de huid. De meeste mensen ervaren dit als goed verdraagbaar. De behandeling duurt slechts enkele minuten.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Komen pigmentvlekken terug na behandeling?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${syne.className} text-zinc-600 mt-4`}>
                    Behandelde pigmentvlekken komen niet terug. Wel kunnen nieuwe vlekken ontstaan door zonblootstelling. Daarom adviseren we dagelijks SPF 50+ te gebruiken ter preventie.
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
              Laat je pigmentvlekken verwijderen in Rijswijk
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis consult bij Aboré Huidkliniek en ontdek welke behandeling het beste bij jou past
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://abor.boekingapp.nl/" className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg`}>
                Boek gratis consult
              </a>
              <a href="/contact" className={`${syne.className} inline-flex items-center gap-2 rounded-full border-2 border-primary px-10 py-4 text-primary hover:bg-primary hover:text-white transition-all`}>
                Stel een vraag
              </a>
            </div>
            <p className={`${syne.className} text-sm text-zinc-500 mt-6`}>
              📍 Waldhoornplein 14, Rijswijk | ☎️ +31 6 34 53 33 58 | Ook voor cliënten uit Den Haag, Delft en omgeving
            </p>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
