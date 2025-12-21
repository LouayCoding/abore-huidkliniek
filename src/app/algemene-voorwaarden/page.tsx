import { Metadata } from "next";
import { Container } from "@/components/ui";
import { marcellus, outfit } from "@/lib/fonts";
import { HeaderTransparent } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Aboré Huidkliniek Rijswijk",
  description: "Lees onze algemene voorwaarden voor behandelingen bij Aboré Huidkliniek in Rijswijk.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <>
      <HeaderTransparent variant="light" />
      
      {/* Hero */}
      <section className="bg-[#faf6ea] pt-32 pb-16">
        <Container>
          <h1 className={`${marcellus.className} text-4xl sm:text-5xl text-foreground text-center`}>
            Algemene Voorwaarden
          </h1>
          <p className={`${syne.className} text-zinc-600 text-center mt-4`}>
            Laatst bijgewerkt: December 2024
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20">
          <div className={`${syne.className} prose prose-lg max-w-4xl mx-auto text-zinc-700`}>
            
            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 1 - Definities
            </h2>
            <ul>
              <li><strong>Aboré:</strong> Aboré Laser- & Huidkliniek, gevestigd te Waldhoornplein 14, 2287 EA Rijswijk</li>
              <li><strong>Cliënt:</strong> De natuurlijke persoon die een behandeling ondergaat of wenst te ondergaan</li>
              <li><strong>Behandeling:</strong> Alle door Aboré aangeboden huid- en laserbehandelingen</li>
              <li><strong>Overeenkomst:</strong> De afspraak tussen Aboré en de cliënt voor het uitvoeren van een behandeling</li>
            </ul>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 2 - Toepasselijkheid
            </h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes, behandelingen 
              en overeenkomsten tussen Aboré en de cliënt. Door het maken van een afspraak of het ondergaan 
              van een behandeling gaat de cliënt akkoord met deze voorwaarden.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 3 - Afspraken en annulering
            </h2>
            <p><strong>3.1 Afspraken maken</strong></p>
            <p>
              Afspraken kunnen worden gemaakt via onze website, telefonisch of via WhatsApp. 
              Een afspraak is definitief na bevestiging door Aboré.
            </p>
            
            <p><strong>3.2 Annulering door cliënt</strong></p>
            <ul>
              <li>Annulering tot 24 uur voor de afspraak: kosteloos</li>
              <li>Annulering binnen 24 uur voor de afspraak: 50% van de behandelprijs</li>
              <li>Niet verschijnen zonder afmelding: 100% van de behandelprijs</li>
            </ul>
            
            <p><strong>3.3 Annulering door Aboré</strong></p>
            <p>
              Aboré behoudt zich het recht voor om afspraken te annuleren of te verzetten bij 
              onvoorziene omstandigheden. In dat geval wordt de cliënt zo spoedig mogelijk geïnformeerd 
              en wordt een nieuwe afspraak aangeboden.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 4 - Intake en consult
            </h2>
            <p>
              Voor bepaalde behandelingen is een intake of consult vereist. Tijdens dit consult worden 
              de wensen en verwachtingen besproken en wordt beoordeeld of de behandeling geschikt is 
              voor de cliënt. Het consult is gratis en vrijblijvend.
            </p>
            <p>
              De cliënt is verplicht om alle relevante medische informatie te verstrekken, waaronder 
              medicijngebruik, allergieën, huidaandoeningen en eerdere behandelingen.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 5 - Behandelingen
            </h2>
            <p><strong>5.1 Uitvoering</strong></p>
            <p>
              Alle behandelingen worden uitgevoerd door gekwalificeerde specialisten met de nodige 
              kennis en ervaring. Aboré maakt gebruik van CE-gecertificeerde apparatuur.
            </p>
            
            <p><strong>5.2 Resultaat</strong></p>
            <p>
              Het resultaat van behandelingen kan per persoon verschillen en is afhankelijk van 
              diverse factoren zoals huidtype, leeftijd en levensstijl. Aboré kan geen garantie 
              geven op het eindresultaat.
            </p>
            
            <p><strong>5.3 Nazorg</strong></p>
            <p>
              De cliënt ontvangt na elke behandeling nazorginstructies. Het opvolgen van deze 
              instructies is essentieel voor een optimaal resultaat en het voorkomen van complicaties.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 6 - Prijzen en betaling
            </h2>
            <p><strong>6.1 Prijzen</strong></p>
            <p>
              Alle prijzen zijn inclusief BTW, tenzij anders vermeld. Prijzen kunnen zonder 
              voorafgaande kennisgeving worden gewijzigd. De prijs die geldt op het moment van 
              de afspraak is bindend.
            </p>
            
            <p><strong>6.2 Betaling</strong></p>
            <p>
              Betaling geschiedt direct na de behandeling, tenzij anders overeengekomen. 
              Wij accepteren pin, creditcard en contante betaling.
            </p>
            
            <p><strong>6.3 Pakketten en kuren</strong></p>
            <p>
              Bij aanschaf van een pakket of kuur dient het volledige bedrag vooraf te worden voldaan. 
              Pakketten zijn niet overdraagbaar en niet restitueerbaar.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 7 - Aansprakelijkheid
            </h2>
            <p><strong>7.1 Beperking aansprakelijkheid</strong></p>
            <p>
              Aboré is niet aansprakelijk voor schade die het gevolg is van:
            </p>
            <ul>
              <li>Het verstrekken van onjuiste of onvolledige informatie door de cliënt</li>
              <li>Het niet opvolgen van nazorginstructies</li>
              <li>Allergische reacties die niet vooraf bekend waren</li>
              <li>Normale bijwerkingen van behandelingen</li>
            </ul>
            
            <p><strong>7.2 Maximale aansprakelijkheid</strong></p>
            <p>
              De aansprakelijkheid van Aboré is beperkt tot het bedrag dat door de 
              aansprakelijkheidsverzekering wordt uitgekeerd, of bij gebreke daarvan, 
              tot maximaal het bedrag van de betreffende behandeling.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 8 - Klachten
            </h2>
            <p>
              Klachten over behandelingen dienen binnen 7 dagen na de behandeling schriftelijk 
              te worden gemeld aan info@huidkliniekabore.nl. Wij nemen elke klacht serieus en 
              streven ernaar binnen 14 dagen te reageren.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 9 - Intellectueel eigendom
            </h2>
            <p>
              Alle content op de website van Aboré, waaronder teksten, afbeeldingen, logo's en 
              ontwerpen, is eigendom van Aboré en mag niet zonder schriftelijke toestemming 
              worden gebruikt of gereproduceerd.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 10 - Toepasselijk recht
            </h2>
            <p>
              Op alle overeenkomsten tussen Aboré en de cliënt is Nederlands recht van toepassing. 
              Geschillen worden voorgelegd aan de bevoegde rechter in Den Haag.
            </p>

            <h2 className={`${marcellus.className} text-2xl text-foreground mt-8 mb-4`}>
              Artikel 11 - Wijzigingen
            </h2>
            <p>
              Aboré behoudt zich het recht voor deze algemene voorwaarden te wijzigen. 
              De meest actuele versie is altijd beschikbaar op onze website.
            </p>

            <div className="mt-12 p-6 bg-[#faf6ea] rounded-xl">
              <p className="text-sm text-zinc-600">
                <strong>Aboré Laser- & Huidkliniek</strong><br />
                Waldhoornplein 14, 2287 EA Rijswijk<br />
                Tel: +31 6 34 53 33 58<br />
                E-mail: info@huidkliniekabore.nl<br />
                KvK: [KvK nummer]
              </p>
            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
