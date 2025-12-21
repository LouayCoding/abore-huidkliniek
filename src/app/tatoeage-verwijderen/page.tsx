import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { organizationSchema, serviceSchema, faqSchema, priceTableSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Tatoeage Verwijderen Rijswijk | Picolaser | Prijzen per cm² | Aboré",
  description: "Tatoeage verwijderen met picolaser in Rijswijk. ✓ Vanaf €50 ✓ Alle kleuren ✓ Geen littekens. Bekijk prijzen per cm² en boek gratis consult.",
  keywords: "tatoeage verwijderen, tattoo verwijderen prijs, tatoeage verwijderen kosten per cm2, picolaser tattoo, tattoo removal Rijswijk, permanente make-up verwijderen",
};

const tattooServiceSchema = serviceSchema({
  name: "Tatoeage Verwijderen met Picolaser",
  description: "Veilig en effectief tatoeages verwijderen met picolaser technologie",
  url: "https://huidkliniekabore.nl/tatoeage-verwijderen",
  priceRange: "50-250",
  duration: "PT10M-PT50M"
});

const tattooPriceSchema = priceTableSchema([
  { name: "0-1 cm²", price: "€50", duration: "10 min" },
  { name: "1-2 cm²", price: "€65", duration: "15 min" },
  { name: "5-10 cm²", price: "€100", duration: "25 min" },
  { name: "10-20 cm²", price: "€125", duration: "30 min" },
  { name: "51-60 cm²", price: "€250", duration: "50 min" }
]);

const tattooFaqSchema = faqSchema([
  {
    question: "Hoeveel sessies heb ik nodig?",
    answer: "Gemiddeld 6-10 sessies. Zwarte inkt verdwijnt sneller (4-6 sessies), gekleurde inkt kan langer duren (8-12 sessies)."
  },
  {
    question: "Laat de tattoo littekens achter?",
    answer: "Bij correcte behandeling en nazorg ontstaan geen littekens. Picolaser werkt zonder de huid te beschadigen."
  },
  {
    question: "Kan elke kleur inkt behandeld worden?",
    answer: "Ja, picolaser kan alle kleuren behandelen. Zwart, blauw en rood reageren het beste. Groen, geel en lichtblauw kunnen meer sessies vereisen."
  }
]);

export default function TatoeageVerwijderenPage() {
  return (
    <>
      <SchemaMarkup schema={[organizationSchema, tattooServiceSchema, tattooPriceSchema, tattooFaqSchema]} />
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[70vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/7.jpg" alt="Tatoeage Verwijderen Rijswijk" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10 text-center">
          <h1 className={`${marcellus.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}>
            Tatoeage Verwijderen in Rijswijk
          </h1>
          <p className={`${outfit.className} text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8`}>
            Veilig en effectief tatoeages verwijderen met picolaser technologie
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
            {/* Intro */}
            <div className={`${outfit.className} prose prose-lg max-w-none text-zinc-700 space-y-6 mb-12`}>
              <p className="text-xl leading-relaxed">
                Spijt van je tatoeage? Bij <strong>Aboré Huidkliniek in Rijswijk</strong> verwijderen we tatoeages veilig en effectief met de nieuwste picolaser technologie. Of je nu een kleine tattoo wilt laten verwijderen of een grote, wij helpen je verder.
              </p>
              <p className="text-xl leading-relaxed">
                Ook vanuit <strong>Den Haag, Delft en Voorburg</strong> zijn we makkelijk bereikbaar. Plan een <strong>gratis consult</strong> en ontdek wat mogelijk is.
              </p>
            </div>

            {/* Prijzen Tabel */}
            <div className="mb-12 p-8 rounded-2xl bg-white border border-zinc-200">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Tatoeageverwijdering met picolaser – Prijzen per oppervlak
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-zinc-200">
                      <th className={`${outfit.className} text-left py-4 pr-4 font-semibold text-foreground`}>Oppervlak</th>
                      <th className={`${outfit.className} text-center py-4 px-4 font-semibold text-foreground`}>Duur</th>
                      <th className={`${outfit.className} text-right py-4 pl-4 font-semibold text-foreground`}>Prijs per sessie</th>
                    </tr>
                  </thead>
                  <tbody className={outfit.className}>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">0 – 1 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">10 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€50</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">1 – 2 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">15 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€65</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">2 – 3 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">15 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€75</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">3 – 5 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">20 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€85</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">5 – 10 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">25 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€100</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">10 – 20 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">30 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€125</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">20 – 30 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">35 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€150</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">30 – 40 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">40 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€175</td>
                    </tr>
                    <tr className="border-b border-zinc-100 hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">40 – 50 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">45 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€200</td>
                    </tr>
                    <tr className="hover:bg-[#faf6ea] transition-colors">
                      <td className="py-4 pr-4 text-zinc-700">51 – 60 cm²</td>
                      <td className="py-4 px-4 text-center text-zinc-600">50 min</td>
                      <td className="py-4 pl-4 text-right font-semibold text-primary">€250</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-[#faf6ea]">
                <p className={`${outfit.className} text-sm text-zinc-700`}>
                  <strong>💡 Tip:</strong> Grotere tatoeages? Neem contact op voor een persoonlijke offerte. We berekenen altijd eerlijk en transparant.
                </p>
              </div>
            </div>

            {/* Wat te verwachten */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-6`}>
                Wat kun je verwachten?
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Aantal sessies</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Gemiddeld 6-10 sessies nodig, afhankelijk van kleur, diepte en leeftijd van de tattoo. Zwarte inkt verdwijnt het snelst.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Interval tussen sessies</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Minimaal 6-8 weken tussen behandelingen. Dit geeft je lichaam de tijd om de inkt af te breken en af te voeren.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Geen littekens</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Picolaser werkt zonder de huid te beschadigen. Bij correcte nazorg ontstaan geen littekens.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-zinc-200 bg-white">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>Alle kleuren</h3>
                  <p className={`${outfit.className} text-sm text-zinc-600`}>
                    Picolaser kan alle inktkleuren behandelen, inclusief moeilijke kleuren zoals groen en blauw.
                  </p>
                </div>
              </div>
            </div>

            {/* Permanente Make-up */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
              <h2 className={`${marcellus.className} text-2xl text-foreground mb-4`}>
                Permanente make-up verwijderen
              </h2>
              <p className={`${outfit.className} text-zinc-700 mb-4`}>
                Voor <strong>permanente make-up verwijderen</strong> hebben we speciale protocollen. PMU (wenkbrauwen, eyeliner, lipcontour) vereist een andere aanpak dan reguliere tatoeages vanwege de dunne huidlaag en specifieke pigmenten.
              </p>
              <p className={`${outfit.className} text-zinc-700 mb-4`}>
                Prijzen voor PMU verwijdering starten vanaf €75 per sessie. Plan een gratis consult voor een persoonlijk advies.
              </p>
              <a href="https://abor.boekingapp.nl/" className={`${outfit.className} inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors font-medium`}>
                Boek consult voor PMU verwijdering
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className={`${marcellus.className} text-3xl text-foreground mb-8`}>
                Veelgestelde vragen over tatoeage verwijderen
              </h2>

              <div className="space-y-3">
                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Doet tatoeage verwijderen pijn?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    De behandeling voelt aan als kleine elastiekjes tegen de huid. De meeste mensen ervaren dit als goed verdraagbaar. We kunnen verdovende crème gebruiken voor extra comfort.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoeveel sessies heb ik nodig?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Gemiddeld 6-10 sessies. Zwarte inkt verdwijnt sneller (4-6 sessies), gekleurde inkt kan langer duren (8-12 sessies). Tijdens het gratis consult geven we een realistische inschatting.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Laat de tattoo littekens achter?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Bij correcte behandeling en nazorg ontstaan geen littekens. Picolaser werkt zonder de huid te beschadigen. Eventuele littekens van het zetten van de tattoo blijven wel zichtbaar.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Kan elke kleur inkt behandeld worden?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Ja, picolaser kan alle kleuren behandelen. Zwart, blauw en rood reageren het beste. Groen, geel en lichtblauw kunnen meer sessies vereisen. Witte en huidkleurige inkt zijn het moeilijkst te verwijderen.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Hoelang moet er tussen de sessies zitten?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Minimaal 6-8 weken. Je lichaam heeft tijd nodig om de verpulverde inkt af te voeren via het lymfesysteem. Te korte intervallen leveren geen beter resultaat.
                  </p>
                </details>

                <details className="group p-6 rounded-xl border border-zinc-200 hover:border-primary transition-colors">
                  <summary className={`${marcellus.className} text-lg text-foreground cursor-pointer list-none flex items-center justify-between`}>
                    Wat zijn de totale kosten voor tatoeage verwijderen?
                    <svg className="h-5 w-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className={`${outfit.className} text-zinc-600 mt-4`}>
                    Dit hangt af van de grootte en het aantal sessies. Een kleine tattoo (1-2 cm²) kost totaal €390-€650 (6-10 sessies à €65). Een middelgrote tattoo (10-20 cm²) kost €750-€1250 (6-10 sessies à €125). We bespreken altijd vooraf de totale investering.
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
              Klaar om je tatoeage te laten verwijderen?
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
