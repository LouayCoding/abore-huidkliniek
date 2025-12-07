import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui";
import { marcellus, syne } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Wat is het verschil tussen acne en rosacea? | Aboré Blog",
  description: "Acne en rosacea lijken op elkaar maar vereisen verschillende behandelingen. Ontdek de verschillen, symptomen en de juiste aanpak voor jouw huid.",
  keywords: "acne vs rosacea, verschil acne rosacea, rosacea symptomen, acne behandeling, rosacea behandeling Rijswijk",
};

export default function VerschilAcneRosaceaPage() {
  return (
    <>
      <HeaderTransparent />
      
      {/* Hero */}
      <section className="relative isolate min-h-[60vh] overflow-hidden flex items-center justify-center">
        <Image src="/hero/2.jpg" alt="Acne vs Rosacea" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <span className={`${syne.className} inline-block rounded-full bg-primary/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white mb-4`}>
              Acne & Rosacea
            </span>
            <h1 className={`${marcellus.className} text-4xl sm:text-5xl md:text-6xl text-white mb-4`}>
              Wat is het verschil tussen acne en rosacea?
            </h1>
            <div className={`${syne.className} flex items-center gap-4 text-sm text-white/80`}>
              <span>15 januari 2025</span>
              <span>•</span>
              <span>5 min leestijd</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-20 sm:py-32">
          <div className="mx-auto max-w-3xl">
            <div className={`${syne.className} prose prose-lg max-w-none`}>
              <p className="text-xl text-zinc-700 leading-relaxed mb-8">
                Veel mensen verwarren acne met rosacea, en dat is niet gek. Beide aandoeningen veroorzaken rode huid en puistjes, maar de oorzaken en behandelingen zijn totaal verschillend. Bij <strong>Aboré Huidkliniek in Rijswijk</strong> zien we dit dagelijks en helpen we je de juiste diagnose en behandeling te vinden.
              </p>

              <h2 className={`${marcellus.className} text-3xl text-foreground mt-12 mb-6`}>
                Wat is acne?
              </h2>
              
              <p className="text-zinc-700 leading-relaxed mb-6">
                <strong>Acne</strong> is een huidaandoening die ontstaat door verstopte poriën. Talg (huidvet) en dode huidcellen verstoppen de haarzakjes, waardoor bacteriën zich kunnen vermenigvuldigen. Dit leidt tot ontstekingen en puistjes.
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Kenmerken van acne:
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Mee-eters</strong> (zwarte en witte puntjes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Puistjes</strong> met pus (witte kop)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Ontstekingen</strong> diep in de huid (cysten)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Vette huid</strong> door overproductie van talg</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Littekens</strong> na genezing (vooral bij ernstige acne)</span>
                </li>
              </ul>

              <h2 className={`${marcellus.className} text-3xl text-foreground mt-12 mb-6`}>
                Wat is rosacea?
              </h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                <strong>Rosacea</strong> is een chronische ontstekingsziekte van de huid. De exacte oorzaak is onbekend, maar het heeft te maken met een overgevoelig immuunsysteem en verwijde bloedvaten. Rosacea komt vooral voor bij mensen met een lichte huid vanaf 30 jaar.
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Kenmerken van rosacea:
              </h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Rode wangen</strong> en neus (flushing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Zichtbare bloedvaatjes</strong> (couperose)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Puistjes zonder mee-eters</strong> (papels en pustels)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Gevoelige huid</strong> die snel reageert op triggers</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Branderig gevoel</strong> en jeuk</span>
                </li>
              </ul>

              <h2 className={`${marcellus.className} text-3xl text-foreground mt-12 mb-6`}>
                De belangrijkste verschillen
              </h2>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-zinc-200">
                      <th className="text-left py-4 pr-4 font-semibold text-foreground">Kenmerk</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Acne</th>
                      <th className="text-left py-4 pl-4 font-semibold text-foreground">Rosacea</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-zinc-100">
                      <td className="py-4 pr-4 font-medium">Leeftijd</td>
                      <td className="py-4 px-4">Vooral tieners & twintigers</td>
                      <td className="py-4 pl-4">Vanaf 30 jaar</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-4 pr-4 font-medium">Mee-eters</td>
                      <td className="py-4 px-4">✅ Ja</td>
                      <td className="py-4 pl-4">❌ Nee</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-4 pr-4 font-medium">Roodheid</td>
                      <td className="py-4 px-4">Rond puistjes</td>
                      <td className="py-4 pl-4">Hele wangen/neus</td>
                    </tr>
                    <tr className="border-b border-zinc-100">
                      <td className="py-4 pr-4 font-medium">Bloedvaatjes</td>
                      <td className="py-4 px-4">❌ Nee</td>
                      <td className="py-4 pl-4">✅ Ja (couperose)</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium">Huidtype</td>
                      <td className="py-4 px-4">Vette huid</td>
                      <td className="py-4 pl-4">Gevoelige huid</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className={`${marcellus.className} text-3xl text-foreground mt-12 mb-6`}>
                Verschillende behandelingen nodig
              </h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Omdat de oorzaken verschillend zijn, vereisen acne en rosacea ook andere behandelingen. Bij Aboré Huidkliniek in Rijswijk maken we eerst een grondige analyse om te bepalen wat je precies hebt.
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Behandelingen voor acne:
              </h3>

              <ul className="space-y-2 mb-6">
                <li>• <strong>Diepte reiniging</strong> - Verwijdert mee-eters en talg</li>
                <li>• <strong>Mesoestetic Blemish Control peeling</strong> - Reguleert talgproductie</li>
                <li>• <strong>Microneedling</strong> - Voor acne littekens</li>
                <li>• <strong>TCA Cross</strong> - Voor diepe littekens</li>
              </ul>

              <p className="text-zinc-700 leading-relaxed mb-6">
                👉 <a href="/acne-behandeling" className="text-primary hover:underline font-medium">Lees meer over onze acne behandelingen</a>
              </p>

              <h3 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
                Behandelingen voor rosacea:
              </h3>

              <ul className="space-y-2 mb-6">
                <li>• <strong>Mesoestetic Redness Repair peeling</strong> - Kalmeert ontstekingen</li>
                <li>• <strong>IPL/Laser</strong> - Vermindert roodheid en bloedvaatjes</li>
                <li>• <strong>Zachte verzorging</strong> - Speciaal voor gevoelige huid</li>
              </ul>

              <div className="p-6 rounded-xl bg-[#faf6ea] border border-primary/20 my-8">
                <h3 className={`${marcellus.className} text-xl text-foreground mb-3`}>
                  💡 Belangrijk om te weten
                </h3>
                <p className="text-zinc-700 mb-0">
                  Het is mogelijk om zowel acne als rosacea te hebben. In dat geval combineren we behandelingen en stemmen we alles af op jouw gevoelige huid. Gebruik nooit agressieve acne producten bij rosacea - dit kan de roodheid verergeren!
                </p>
              </div>

              <h2 className={`${marcellus.className} text-3xl text-foreground mt-12 mb-6`}>
                Hoe weet je wat je hebt?
              </h2>

              <p className="text-zinc-700 leading-relaxed mb-6">
                Twijfel je of je acne of rosacea hebt? Plan een <strong>gratis consult</strong> bij Aboré Huidkliniek in Rijswijk. Onze ervaren huidtherapeuten analyseren je huid en stellen een behandelplan op maat samen.
              </p>

              <p className="text-zinc-700 leading-relaxed mb-6">
                We werken met CE-gecertificeerde apparatuur en medische producten zoals Mesoestetic. Met meer dan 10 jaar ervaring weten we precies hoe we jouw huid weer in balans brengen.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Articles */}
      <section className="bg-[#faf6ea]">
        <Container className="py-16 sm:py-20">
          <h2 className={`${marcellus.className} text-3xl text-center text-foreground mb-12`}>
            Lees ook
          </h2>
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <a href="/blog/microneedling-acne-littekens" className="p-6 rounded-xl bg-white border border-zinc-200 hover:border-primary transition-colors">
              <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>
                Microneedling voor acne littekens
              </h3>
              <p className={`${syne.className} text-sm text-zinc-600`}>
                Alles over microneedling voor littekens
              </p>
            </a>
            <a href="/blog/pigmentvlekken-oorzaken-behandelingen" className="p-6 rounded-xl bg-white border border-zinc-200 hover:border-primary transition-colors">
              <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>
                Pigmentvlekken: oorzaken en behandelingen
              </h3>
              <p className={`${syne.className} text-sm text-zinc-600`}>
                Van ouderdomsvlekken tot melasma
              </p>
            </a>
            <a href="/acne-behandeling" className="p-6 rounded-xl bg-white border border-zinc-200 hover:border-primary transition-colors">
              <h3 className={`${marcellus.className} text-lg text-foreground mb-2`}>
                Acne behandeling Rijswijk
              </h3>
              <p className={`${syne.className} text-sm text-zinc-600`}>
                Bekijk alle acne behandelingen
              </p>
            </a>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className={`${marcellus.className} text-3xl sm:text-4xl text-foreground mb-4`}>
              Twijfel je tussen acne of rosacea?
            </h2>
            <p className={`${syne.className} text-lg text-zinc-600 mb-8`}>
              Plan een gratis huidanalyse bij Aboré Huidkliniek in Rijswijk
            </p>
            <a
              href="https://abor.boekingapp.nl/"
              className={`${syne.className} inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-white hover:bg-primary-hover transition-all shadow-lg shadow-primary/20`}
            >
              Boek gratis consult
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
